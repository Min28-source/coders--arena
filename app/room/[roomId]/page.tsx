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
import { useParams, useRouter } from "next/navigation";

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

    interface TestCaseResult {
        input: string;
        expectedOutput: string;
        output: string;
        verdict: 'Accepted' | 'Wrong Answer' | 'Runtime Error' | string;
    }

    type Players = {
        id: string,
        name: string
    }

    const socket = useSocket()
    const [started, setStarted] = useState<boolean>(false)
    const [code, setCode] = useState<string>("")
    const [output, setOutput] = useState<TestCaseResult[]>([])
    const [problem, setProblem] = useState<Problems | null>(null)
    const [language, setLanguage] = useState<Language>("java")
    const [problemId, setId] = useState<number>()
    const [endTime, setEndTime] = useState<number>(0)
    const [timeLeft, setTimeLeft] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [players, setPlayers] = useState<Players[]>([])
    const [isHost, setIsHost] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const params = useParams()
    const router = useRouter()

    type ReconnectData = {
        success: boolean,
        players: [],
        host: string,
        started: boolean,
        problem: Problems,
        serverTime: number,
        endTime: number
    }

    useEffect(() => {
        const roomId = params.roomId;
        const userId = localStorage.getItem("userId");
        const name = localStorage.getItem("name");

        const handlePlayersUpdate = (data: any) => {
            console.log(data)
            setPlayers(data.players);
            setIsHost(data.host === userId);
            if (data.endTime) setEndTime(data.endTime);
            if (data.serverTime) setOffset(Date.now() - data.serverTime);
        };

        socket.on("players-update", handlePlayersUpdate);
        socket.on("contest-started", (data) => {
            setProblem(data.problem);
            setStarted(true);
            setEndTime(data.endTime);
            setOffset(Date.now() - data.serverTime)
        });

        socket.emit("reconnect", userId, roomId, (response: ReconnectData) => {
            if (!response.success) {
               router.replace('/not-found')
               return
            }
            setPlayers(response.players as []);
            setIsHost(response.host === userId);
            if (response.started) {
                setStarted(true);
                setProblem(response.problem);
                setEndTime(response.endTime);
                setOffset(Date.now() - response.serverTime)
            }
        });

        setIsLoading(false)
        return () => {
            socket.off("players-update", handlePlayersUpdate);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const remaining = endTime - Date.now() + offset;
            if (remaining <= 0) {
                setTimeLeft(0);
                clearInterval(interval);
            } else {
                setTimeLeft(remaining);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    useEffect(() => {
        if (!problem) return;
        setCode(problem.starterCode[language]);
        setId(problem.id)
    }, [language, problem]);

    const handleRun = async () => {
        try {
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
                throw new Error(body.error || "Something went wrong")
            }

            setOutput(body.results);
            console.log(output)

        } catch (error: any) {
            throw new Error(error);
        }
    }

    const handleSubmit = () => {
        //setOutput("Submitted! Verdict: Processing...");
    };

    return (
        <>
            {!started && <Sidebar players={players} isHost={isHost} isLoading={isLoading} />}
            {started && (
                <div className="h-screen flex flex-col select-none">

                    <div className="h-12 grid grid-cols-3 items-center px-4 bg-gray-800 text-white border-b border-gray-700 shrink-0 select-none">

                        <div className="text-xl md:text-2xl font-semibold justify-self-start truncate">
                            Code Arena
                        </div>
                        <div className="justify-self-center font-mono text-base md:text-lg bg-gray-900/50 px-3 py-0.5 rounded border border-gray-700/50 text-emerald-400 font-medium tracking-wider">
                            Time left: {Math.floor(timeLeft / 60000)}:{Math.floor((timeLeft % 60000) / 1000).toString().padStart(2, "0")}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 justify-self-end">
                            <button
                                onClick={handleRun}
                                className="px-2.5 py-1 md:px-3 bg-blue-600 hover:bg-blue-700 rounded text-xs md:text-sm font-medium transition-colors"
                            >
                                Run
                            </button>

                            <button
                                onClick={handleSubmit}
                                className="px-2.5 py-1 md:px-3 bg-green-600 hover:bg-green-700 rounded text-xs md:text-sm font-medium transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Main Layout Workspace */}
                    <Group orientation="horizontal" className="flex-1 overflow-hidden">
                        {/* Left Side - Problem Panel */}
                        <Panel defaultSize={30} minSize={20}>
                            {problem ? (
                                <div className="h-full overflow-y-auto p-4 bg-gray-50">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {problem.title}
                                    </h2>
                                    <p className="text-sm text-gray-700 mb-4 whitespace-pre-wrap">
                                        {problem.description}
                                    </p>

                                    <div className="mb-4">
                                        <h3 className="font-medium">Constraints</h3>
                                        <ul className="text-sm list-disc ml-5 mt-1 space-y-1">
                                            {problem.constraints.map((prob, idx) => (
                                                <li key={idx}>{prob}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-1">Example:</h3>
                                        <pre className="bg-gray-200 p-2 rounded text-sm font-mono break-words whitespace-pre-wrap">
                                            {problem.examples}
                                        </pre>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center bg-gray-50 text-gray-500">
                                    Loading problem details...
                                </div>
                            )}
                        </Panel>

                        {/* Vertical Resizer Splitter */}
                        <Separator className="w-1.5 bg-gray-700 hover:bg-blue-500 transition-colors cursor-col-resize shrink-0" />

                        {/* Right Side - Stacked Workspace (Editor + Output) */}
                        <Panel defaultSize={70}>
                            <Group orientation="vertical" className="h-full">
                                {/* Top Half: Code Editor Container */}
                                <Panel defaultSize={70} minSize={30}>
                                    <div className="h-full flex flex-col">
                                        <div className="bg-[#252526] p-2 border-b border-[#3C3C3C] flex items-center shrink-0">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className="bg-[#252526] border-[#3C3C3C] text-white hover:bg-[#3c3c3c] hover:text-white h-8"
                                                    >
                                                        Language: <span className="ml-1 uppercase text-xs font-bold text-blue-400">{language}</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="min-w-56">
                                                    <DropdownMenuGroup>
                                                        <DropdownMenuLabel>Select language</DropdownMenuLabel>
                                                        <DropdownMenuRadioGroup
                                                            value={language}
                                                            onValueChange={(value) => setLanguage(value as Language)}
                                                        >
                                                            <DropdownMenuRadioItem value="java">Java</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="python">Python</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="javascript">JavaScript</DropdownMenuRadioItem>
                                                            <DropdownMenuRadioItem value="cpp">C++</DropdownMenuRadioItem>
                                                        </DropdownMenuRadioGroup>
                                                    </DropdownMenuGroup>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <div className="flex-1 min-h-0">
                                            <Editor
                                                height="100%"
                                                language={language}
                                                value={code}
                                                onChange={(val) => setCode(val || "")}
                                                theme="vs-dark"
                                                options={{
                                                    automaticLayout: true,
                                                    fontSize: 14,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </Panel>

                                <Separator className="h-1.5 bg-gray-700 hover:bg-blue-500 transition-colors cursor-row-resize shrink-0" />

                                {/* Bottom Half: Code Running Console Output */}
                                <Panel defaultSize={30} minSize={15}>
                                    <div className="h-full flex flex-col bg-[#1e1e1e] text-gray-200 font-mono">
                                        {/* Header with Title and Green 'Test result' on the right */}
                                        <div className="h-8 px-4 bg-[#252526] border-b border-[#3C3C3C] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 select-none shrink-0">
                                            <span className="text-green-500 normal-case tracking-normal font-sans">Test result</span>
                                        </div>

                                        {/* Main Content Area */}
                                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                            {!output || output.length === 0 ? (
                                                <div className="h-full flex items-center justify-center text-gray-500 font-sans text-sm text-center">
                                                    You must run your code first
                                                </div>
                                            ) : (
                                                output.map((res, index) => {
                                                    // Determine layout rules based on passing/failing status
                                                    const isPassed = res.verdict === "Accepted";
                                                    const isRuntimeError = res.verdict === "Runtime Error";

                                                    return (
                                                        <div key={index} className="border border-[#3C3C3C] rounded bg-[#252526]/40 overflow-hidden text-xs">
                                                            {/* Case Header */}
                                                            <div className="flex items-center justify-between px-3 py-1.5 bg-[#252526] border-b border-[#3C3C3C]">
                                                                <span className="font-semibold text-gray-400">Case {index + 1}</span>
                                                                <span className={`px-2 py-0.5 font-sans font-semibold rounded text-[10px] uppercase tracking-wide ${isPassed
                                                                    ? "bg-green-950/50 text-green-400 border border-green-800/60"
                                                                    : isRuntimeError
                                                                        ? "bg-red-950/50 text-red-400 border border-red-800/60"
                                                                        : "bg-amber-950/50 text-amber-400 border border-amber-800/60"
                                                                    }`}>
                                                                    {res.verdict}
                                                                </span>
                                                            </div>

                                                            {/* Case Details */}
                                                            <div className="p-3 space-y-3">
                                                                {/* Input Row */}
                                                                <div>
                                                                    <div className="text-gray-500 font-sans mb-1 text-[11px]">Input</div>
                                                                    <div className="bg-[#1e1e1e] p-2 rounded border border-[#2d2d2d] text-gray-300 whitespace-pre-wrap">
                                                                        {res.input}
                                                                    </div>
                                                                </div>

                                                                {/* Outputs Row */}
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                    {/* Expected Output */}
                                                                    <div>
                                                                        <div className="text-gray-500 font-sans mb-1 text-[11px]">Expected</div>
                                                                        <div className="bg-[#1e1e1e] p-2 rounded border border-[#2d2d2d] text-emerald-400 whitespace-pre-wrap">
                                                                            {res.expectedOutput}
                                                                        </div>
                                                                    </div>

                                                                    {/* Your Output */}
                                                                    <div>
                                                                        <div className="text-gray-500 font-sans mb-1 text-[11px]">Your Output</div>
                                                                        <div className={`bg-[#1e1e1e] p-2 rounded border border-[#2d2d2d] whitespace-pre-wrap ${isPassed ? "text-gray-300" : isRuntimeError ? "text-red-400" : "text-amber-400"
                                                                            }`}>
                                                                            {res.output}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </div>
                                </Panel>
                            </Group>
                        </Panel>
                    </Group>
                </div>
            )}
        </>
    );
}