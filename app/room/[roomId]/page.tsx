"use client";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sidebar } from "@/components/sidebar";
import { useSocket } from "@/contexts/socketContext";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Group, Panel, Separator } from "react-resizable-panels";

export default function Page() {
    type Problems = {
        title: string,
        id: number
        description: string,
        constraints: string[],
        examples: string,
        starterCode: {
            java: string,
            python: string,
            javascript: string,
            cpp: string
        }
    }

    type Language = "java" | "cpp" | "javascript" | "python"

    const socket = useSocket();
    const [started, setStarted] = useState(false);
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [problem, setProblem] = useState<Problems | null>(null);
    const [language, setLanguage] = useState<Language>("java")
    const [problemId, setId] = useState<number>()

    useEffect(() => {
        if (!problem) return;
        setCode(problem.starterCode[language]);
        setId(problem.id)
    }, [language, problem]);

    useEffect(() => {
        socket.on("contest-started", (problem) => {
            setProblem(problem);
            setStarted(true);
        });
        return () => {
            socket.off("contest-started");
        };
    }, [socket]);

    const handleRun = async () => {
        const response = await fetch("/api/run", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code,
                language,
                problemId
            })
        })

        const body = await response.json();
        if (!response.ok) {
            throw new Error(body.error)
        }
        console.log(body)
    }

    const handleSubmit = () => {
        setOutput("Submitted! Verdict: Processing...");
    };

    return (
        <>
            {!started && <Sidebar />}
            {started && (
                <div className="h-screen flex flex-col">
                    <div className="h-12 flex items-center justify-between px-4 bg-gray-800 text-white border-b border-gray-700">
                        <div className="text-2xl font-semibold">Code Arena</div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleRun}
                                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm"
                            >
                                Run
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    <Group orientation="horizontal" className="flex-1">
                        {/* LEFT: PROBLEM */}
                        <Panel defaultSize={30} minSize={25}>
                            {problem ? (
                                <div className="h-full overflow-y-auto p-4 bg-gray-50">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {problem.title}
                                    </h2>
                                    <p className="text-sm text-gray-700 mb-4">
                                        {problem.description}
                                    </p>

                                    <div className="mb-4">
                                        <h3 className="font-medium">Constraints</h3>
                                        <ul className="text-sm list-disc ml-5">
                                            {problem.constraints.map((prob) => (
                                                <li>{prob}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium">Example:</h3>
                                        <div className="bg-gray-200 p-2 rounded text-sm break-words">
                                            {problem.examples}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </Panel>
                        <Separator className="w-2 bg-gray-500 hover:bg-gray-700 transition-colors cursor-col-resize" />

                        {/* RIGHT SIDE */}
                        <Panel defaultSize={70}>
                            <div className="h-full flex flex-col">
                                <div className="bg-[#252526] border border-[#3C3C3C]">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="bg-[#252526] border-[#3C3C3C] text-white"
                                            >
                                                Language
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="min-w-56">
                                            <DropdownMenuGroup>
                                                <DropdownMenuLabel>Select language</DropdownMenuLabel>
                                                <DropdownMenuRadioGroup
                                                    value={language}
                                                    onValueChange={(value) => setLanguage(value as Language)}
                                                >
                                                    <DropdownMenuRadioItem value="java">
                                                        Java
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="python">
                                                        Python
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="javascript">
                                                        JavaScript
                                                    </DropdownMenuRadioItem>
                                                    <DropdownMenuRadioItem value="cpp">
                                                        C++
                                                    </DropdownMenuRadioItem>
                                                </DropdownMenuRadioGroup>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <Editor
                                    height="100%"
                                    language={language}
                                    value={code}
                                    onChange={(val) => setCode(val || "")}
                                    theme="vs-dark"
                                />
                            </div>
                        </Panel>
                    </Group>
                </div>
            )}
        </>
    );
}