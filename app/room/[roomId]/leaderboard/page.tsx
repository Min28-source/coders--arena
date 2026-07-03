"use client"

import { useSocket } from "@/contexts/socketContext";
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LeaderboardCard } from "@/components/ui/leaderboardCard";
import { LeaderboardRankingItem } from "@/components/ui/leaderboard-rankings";
import { LeaderboardRanking } from "@/components/ui/leaderboard-podium";

export default function LeaderboardPage() {
    const [hasEnded, setHasEnded] = useState<boolean>(false)
    const [results, setResults] = useState<any[]>([])
    const [isMounted, setIsMounted] = useState(false)
    
    const socket = useSocket();
    const params = useParams();
    const router = useRouter();
    const roomId = params.roomId;

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        if (!socket || !roomId) return;

        const checkStatus = () => {
            socket.emit("has-ended", roomId, (response: any) => {
                if (response?.success) {
                    setHasEnded(true);
                    setResults(response.results);
                }
            });
        };

        checkStatus();

        const handleContestEnded = () => {
            setHasEnded(true);
            checkStatus();
        };

        socket.on("contest-ended", handleContestEnded);

        return () => {
            socket.off("contest-ended", handleContestEnded);
        };
    }, [socket, roomId]);

    const formatTime = (num: number) => {
        const seconds = Math.floor(num / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}m ${remainingSeconds.toString().padStart(2, '0')}s`;
    };

    const formattedRankings: LeaderboardRankingItem[] = results.map((result, index) => ({
        userId: result.userId,
        userName: result.name,
        rank: index + 1,
        value: result.passedTestCases,
        byline: `Time spent: ${formatTime(result.timeTaken)}`
    }));

    const podiumRankings: LeaderboardRanking[] = formattedRankings.slice(0, 3).map(r => ({
        ...r,
        userName: r.userName
    }));

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Top Bar matching room/[roomId]/page.tsx */}
            <div className="h-12 grid grid-cols-3 items-center px-4 bg-gray-800 text-white border-b border-gray-700 shrink-0 select-none">
                <div className="text-xl md:text-2xl font-semibold justify-self-start truncate">
                    Code Arena
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center p-8 mt-10">
                {!hasEnded ? (
                    <div className="flex flex-col items-center justify-center space-y-4 h-full">
                        <p className="text-xl font-medium text-muted-foreground animate-pulse">
                            You need to wait while others are still competing
                        </p>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl flex flex-col items-center gap-8">
                        {isMounted && (
                            <LeaderboardCard
                                title="Contest Results"
                                podiumRankings={podiumRankings}
                                rankings={formattedRankings}
                                className="w-full"
                            />
                        )}
                        
                        <Button 
                            onClick={() => router.push("/")}
                            size="lg"
                            className="w-full max-w-sm"
                        >
                            Return Home
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
