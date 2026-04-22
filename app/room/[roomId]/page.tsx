"use client";

import { Sidebar } from "@/components/sidebar";
import { useSocket } from "@/contexts/socketContext";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Group, Panel, Separator } from "react-resizable-panels";

export default function Page() {
    const socket = useSocket();
    const [started, setStarted] = useState(false);
    const [code, setCode] = useState("// your code here");
    const [output, setOutput] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        socket.on("contest-started", () => setStarted(true));

        return () => {
            socket.off("contest-started");
        };
    }, [socket]);

    const handleRun = () => {
        // simulate run
        setOutput("Running...\nSample Output");
    };

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
                        <Panel defaultSize={7000} minSize={300}>
                            <div className="h-full overflow-y-auto p-4 bg-gray-50">
                                <h2 className="text-xl font-semibold mb-2">
                                    Two Sum
                                </h2>
                                <p className="text-sm text-gray-700 mb-4">
                                    Given an array of integers nums and an integer target,
                                    return indices of the two numbers such that they add up to target.
                                </p>

                                <div className="mb-4">
                                    <h3 className="font-medium">Constraints</h3>
                                    <ul className="text-sm list-disc ml-5">
                                        <li>2 ≤ nums.length ≤ 10⁴</li>
                                        <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-medium">Example</h3>
                                    <pre className="bg-gray-200 p-2 rounded text-sm">
                                        {`Input: nums = [2,7,11,15], target = 9 Output: [0,1]`}
                                    </pre>
                                </div>
                            </div>
                        </Panel>

                        <Separator className="w-2 bg-gray-500 hover:bg-gray-700 transition-colors cursor-col-resize" />

                        {/* RIGHT SIDE */}
                        <Panel>
                            <Group orientation="vertical">

                                {/* EDITOR */}
                                <Panel defaultSize={70}>
                                    <Editor
                                        height="100%"
                                        defaultLanguage="java"
                                        value={code}
                                        onChange={(val) => setCode(val || "")}
                                        theme="vs-dark"
                                    />
                                </Panel>

                                <Separator className="h-2 bg-gray-500 hover:bg-gray-700" />

                                {/* CONSOLE */}
                                <Panel defaultSize={30}>
                                    <div className="p-3 bg-black text-white h-full flex flex-col">

                                        {/* OUTPUT */}
                                        <pre className="bg-gray-900 p-2 flex-1 overflow-auto text-sm">
                                            {output}
                                        </pre>
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