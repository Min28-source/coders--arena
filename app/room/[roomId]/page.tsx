"use client"

import { Sidebar } from "@/components/sidebar";
import { useSocket } from "@/contexts/socketContext";
import { useEffect, useState } from "react";
import Editor from '@monaco-editor/react';
import { Group, Panel, Separator } from "react-resizable-panels";
import { Header } from "@/components/vercel-navbar";

export default function Page() {
    const socket = useSocket();
    const [started, setStarted] = useState<Boolean>(false)

    useEffect(() => {
        socket.on("contest-started", () => {
            setStarted(true);
        });

        return () => {
            socket.off("contest-started")
        }
    })

    return (
        <>
            <div style={{ display: started ? "none" : "block" }}>
                <Sidebar />
            </div>
            <div style={{ display: started ? "block" : "none" }}>
                <Header/>
                <Group className="p-6">
                    <Panel defaultSize="50%" className="rounded-lg bg-gray-200 p-4">I am the left panel</Panel>
                    <Separator className="p-1"/>
                    <Panel className="rounded-lg bg-gray-200 p-4"><Editor height="90vh" defaultLanguage="java" defaultValue="// some comment" /></Panel>
                </Group>
            </div>
        </>
    )
}