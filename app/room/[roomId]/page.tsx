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
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Sidebar } from "@/components/sidebar";
import { useSocket } from "@/contexts/socketContext";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useParams, useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

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

    type ReconnectData = {
        success: boolean,
        players: [],
        host: string,
        started: boolean,
        problem: Problems,
        serverTime: number,
        endTime: number
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
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        const roomId = params.roomId;
        const userId = localStorage.getItem("userId");

        const handlePlayersUpdate = (data: any) => {
            setPlayers(data.players);
            setIsHost(data.host === userId);
            if (data.endTime) setEndTime(data.endTime);
            if (data.serverTime) setOffset(Date.now() - data.serverTime);
        };

        socket.on("players-update", handlePlayersUpdate);
        socket.on("contest-started", (data) => {
            setStarted(true);
            setProblem(data.problem);
            setEndTime(data.endTime);
            setOffset(Date.now() - data.serverTime)
        });
        socket.on("contest-ended", () => {
            router.replace(`/room/${roomId}/leaderboard`)
        })

        socket.emit("get-players-data", userId, roomId, (response: ReconnectData) => {
            if (!response.success) {
                window.location.replace('/')
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
            setIsLoading(false)
        });

    }, [socket]);

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
        setIsRunning(true);
        setOutput([]);
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

        } catch (error: any) {
            throw new Error(error);
        } finally {
            setIsRunning(false);
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/submit", {
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
            const data = { passedTestCases: body.passed }
            const roomId = params.roomId
            socket.emit("submit-code", roomId, data);
            router.replace(`/room/${roomId}/leaderboard`)
        } catch (error: any) {
            setIsSubmitting(false);
            throw new Error(error);
        }
    };

    return (
        <>
            {!started && <Sidebar players={players} isHost={isHost} isLoading={isLoading} />}
            {started && (
                <div className="min-h-screen flex flex-col bg-white text-gray-900">

                    {/* Header: Dynamic layout matching width requirements */}
                    <header className="bg-gray-800 border-b border-gray-700 text-white p-3 flex flex-col gap-3 md:grid md:grid-cols-3 md:h-12 md:items-center md:px-4 md:gap-0 sticky top-0 z-50 select-none md:mb-6">
                        <div className="text-xl md:text-2xl font-semibold justify-self-start truncate">
                            Code Arena
                        </div>
                        <div className="self-center md:justify-self-center font-mono bg-gray-900/50 px-3 py-1 rounded text-lg md:text-base border border-gray-700/50 text-emerald-400 font-medium tracking-wider">
                            Time left: {Math.floor(timeLeft / 60000)}:{Math.floor((timeLeft % 60000) / 1000).toString().padStart(2, "0")}
                        </div>
                        <div className="flex gap-2 w-full md:w-auto justify-self-end">
                            <Button
                                onClick={handleRun}
                                className="flex-1 md:flex-none h-11 md:h-9 text-base md:text-sm bg-green-600 hover:bg-green-700 text-white transition-colors"
                            >
                                Run
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="flex-1 md:flex-none h-11 md:h-9 text-base md:text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                                        Submit
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-sm">
                                    <DialogHeader>
                                        <DialogTitle>Submit Code?</DialogTitle>
                                        <DialogDescription>
                                            Code submission is final and you would not be able to review anything again. Are you sure you want to submit?
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant="outline" disabled={isSubmitting}>Cancel</Button>
                                        </DialogClose>
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className="flex items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Spinner />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit"
                                            )}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </header>

                    {/* Problem Layout View: High readability spacing configuration */}
                    <main className="max-w-4xl w-full mx-auto px-4 py-5 space-y-6">
                        {problem ? (
                            <section className="space-y-6">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                                        {problem.title}
                                    </h1>
                                    <div className="prose max-w-none text-base text-gray-700 whitespace-pre-wrap leading-relaxed">
                                        {problem.description}
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Constraints</h3>
                                    <ul className="text-sm md:text-base list-disc ml-6 space-y-1.5 text-gray-700">
                                        {problem.constraints.map((prob, idx) => (
                                            <li key={idx} className="pl-1">{prob}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Example</h3>
                                    <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800 break-words border border-gray-200 whitespace-pre-wrap shadow-inner">
                                        {problem.examples}
                                    </pre>
                                </div>
                            </section>
                        ) : (
                            <div className="flex flex-col items-center justify-center text-gray-500 gap-3 py-16">
                                <Spinner className="size-8 text-gray-400" />
                                <span className="text-base">Loading problem details...</span>
                            </div>
                        )}

                        {/* Editor Layout Block Area */}
                        <section className="border-t border-gray-200 pt-6 space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <h2 className="text-xl font-bold text-gray-900">Code</h2>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full sm:w-48 bg-white border-gray-300 text-gray-700 hover:bg-gray-50 h-10 font-medium justify-between"
                                        >
                                            <span>Language: <span className="ml-1 uppercase font-bold text-blue-600">{language}</span></span>
                                            <span className="text-xs text-gray-400">▼</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-[calc(100vw-2rem)] sm:w-48">
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

                            {/* Monaco Editor Container Frame */}
                            <div className="h-[500px] md:h-[650px] rounded-lg overflow-hidden border border-gray-300 shadow-sm relative">
                                <Editor
                                    height="100%"
                                    language={language}
                                    value={code}
                                    onChange={(val) => setCode(val || "")}
                                    theme="vs-dark"
                                    loading={
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1e1e1e] text-gray-400 gap-3">
                                            <Spinner className="size-6 text-gray-500" />
                                            <span className="text-sm">Loading editor...</span>
                                        </div>
                                    }
                                    options={{
                                        automaticLayout: true,
                                        fontSize: 14,
                                        minimap: { enabled: false },
                                        scrollBeyondLastLine: false,
                                    }}
                                />
                            </div>
                        </section>

                        {/* Output Console Display Layout */}
                        <section className="border-t border-gray-200 pt-6 pb-12 space-y-4">
                            <h2 className="text-xl font-bold text-gray-900">Test Results</h2>

                            <div className="relative min-h-[120px]">
                                {isRunning && (
                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm py-8">
                                        <Spinner className="size-8 text-blue-600 mb-2" />
                                        <span className="text-gray-600 text-sm font-medium">Running code against testcases...</span>
                                    </div>
                                )}

                                {!output || output.length === 0 ? (
                                    <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 text-sm">
                                        No execution data found. Write your implementation above and press Run.
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {output.map((res, index) => {
                                            const isPassed = res.verdict === "Accepted";
                                            const isRuntimeError = res.verdict === "Runtime Error";

                                            return (
                                                <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
                                                    {/* Custom Case Status Strip */}
                                                    <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                                                        <span className="font-semibold text-sm text-gray-700">Case {index + 1}</span>
                                                        <span className={`px-2.5 py-0.5 text-xs font-bold rounded-md tracking-wide border ${isPassed
                                                            ? "bg-green-50 text-green-700 border-green-200"
                                                            : isRuntimeError
                                                                ? "bg-red-50 text-red-700 border-red-200"
                                                                : "bg-amber-50 text-amber-700 border-amber-200"
                                                            }`}>
                                                            {res.verdict}
                                                        </span>
                                                    </div>

                                                    {/* Details Frame */}
                                                    <div className="p-4 space-y-3 font-mono text-xs md:text-sm">
                                                        <div>
                                                            <div className="text-gray-500 font-sans font-medium mb-1 text-xs">Input</div>
                                                            <div className="bg-gray-50 p-2.5 rounded border border-gray-200 text-gray-800 whitespace-pre-wrap break-all">
                                                                {res.input}
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                <div className="text-gray-500 font-sans font-medium mb-1 text-xs">Expected Output</div>
                                                                <div className="bg-emerald-50/50 p-2.5 rounded border border-emerald-100 text-emerald-800 whitespace-pre-wrap break-all">
                                                                    {res.expectedOutput}
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="text-gray-500 font-sans font-medium mb-1 text-xs">Your Output</div>
                                                                <div className={`p-2.5 rounded border whitespace-pre-wrap break-all ${isPassed
                                                                    ? "bg-gray-50 border-gray-200 text-gray-800"
                                                                    : isRuntimeError
                                                                        ? "bg-red-50/40 border-red-100 text-red-700"
                                                                        : "bg-amber-50/40 border-amber-100 text-amber-700"
                                                                    }`}>
                                                                    {res.output || <span className="italic text-gray-400">Empty return</span>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>

                </div>
            )}
        </>
    );
}