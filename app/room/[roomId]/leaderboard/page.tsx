"use client"

import { useSocket } from "@/contexts/socketContext";
import { useState } from "react"
export default function leaderboard() {
    const [isEnded, setIsEnded] = useState<boolean>(false)
    const socket = useSocket();
    socket.on("contest-ended", (data) =>{
        console.log(data)
    })
    
    return (
        <div>
            <h1>This is the leaderboard page!!!</h1>
        </div>
    )
}