import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import runtimes from "../runtimes";

type Language = "java" | "cpp" | "python" | "javascript"

type RunCodeReq = {
    language: Language,
    code: string,
    problemId: number
}

type RunnerCode = {
    java: string,
    cpp: string,
    python: string,
    javascript: string
}

type PistonResponse = {
    run: {
        signal: string | null;
        stdout: string;
        stderr: string;
        code: number;
        output: string;
        memory: number;
        message: string | null;
        status: string | null;
        cpu_time: number;
        wall_time: number;
    };
    language: Language;
    version: string;
};

type OutputType = "int" | "boolean" | "int[]" | "string[]";

export async function POST(req: NextRequest) {
    try {
        const body: RunCodeReq = await req.json();
        const { language, code, problemId } = body;
        const problem = await prisma.problem.findFirst({
            where: {
                id: problemId
            },
            include: {
                testCases: true
            }
        });

        if (!problem) {
            return NextResponse.json({
                error: "Problem not found."
            })
        }

        const runnerCodeMap = problem.runnerCode as RunnerCode
        const runnerCode = runnerCodeMap[language];
        const executableCode: string = runnerCode.replace("{{USER_CODE}}", code);

        const results = []
        for (const tc of problem.testCases) {
            if (tc.isHidden === false) {
                const response = await handleSubmit(executableCode, language, tc.input);
                const verdict = await getVerdict(response, tc.output, problem.outputType as OutputType);
                const result = {
                    input: tc.input,
                    expectedOutput: tc.output,
                    output: response.run?.output,
                    verdict
                }
                results.push(result)
            }
        }
        return NextResponse.json({
            results
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

async function handleSubmit(code: string, language: Language, input: string) {
    const submitable = {
        language: language,
        version: runtimes[language].version,
        files: [
            {
                name: language === "java" ? "Main.java" : "main",
                content: code
            }
        ],
        stdin: input
    }

    const res = await fetch(`${process.env.PISTON_API}/api/v2/execute`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitable)
    })

    return res.json();
}

async function getVerdict(response: PistonResponse, expectedOutput: string, outputType: OutputType) {
    const code = response.run.code;
    if (code === 0) {
        if (isIdentical(response.run.output, expectedOutput, outputType)) {
            return "Accepted"
        }
        return "Wrong Answer"
    }

    switch (response.run.signal) {
        case "SIGKILL":
            return "Time Limit Exceeded";

        default:
            return "Runtime Error";
    }
}

function isIdentical(output: string, expectedOutput: string, outputType: OutputType): boolean {
    switch (outputType) {
        case "int":
            return Number(output) === Number(expectedOutput);

        case "boolean":
            return output.trim().toLowerCase() === expectedOutput.trim().toLowerCase();

        case "int[]":
            return JSON.stringify(parseIntArray(output))
                === JSON.stringify(parseIntArray(expectedOutput));

        case "string[]":
            return JSON.stringify(parseStringArray(output))
                === JSON.stringify(parseStringArray(expectedOutput));
    }

}

function parseIntArray(str: string): number[] {
    return JSON.parse(str);
}

function parseStringArray(str: string): string[] {
    return JSON.parse(str);
}