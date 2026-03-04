"use client"
import { useSocket } from "@/contexts/socketContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";

export default function Page() {
    const socket = useSocket();
    const params = useParams()
    const roomId = params.roomId

    return (
        <>
            <Navbar />
        </>
    )
}