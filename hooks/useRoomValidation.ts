"use client"

import { useSocket } from "@/contexts/socketContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useRoomValidation() {
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(false);

    const socket = useSocket();
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        if (!socket) return;
        const userId = localStorage.getItem('userId');
        const roomId = params.roomId as string

        if (!userId) {
            router.replace("/not-found")
            return
        } else if (!roomId) {
            return
        }

        let userValid = false;
        let roomValid = false;
        let responses = 0;

        const checkDone = () => {
            responses++;
            if (responses < 2) return;
            if (!userValid || !roomValid) {
                router.replace("/not-found");
                return
            } else {
                setIsValid(true);
            }
            setIsLoading(false);
        }

        socket.emit("check-user", userId, (userData: { exists: boolean }) => {
            userValid = userData.exists;
            checkDone()
        });


        socket.emit("validate-roomId", roomId, (roomData: { exists: boolean }) => {
            roomValid = roomData.exists;
            checkDone()
        });
    }, [socket, router, params])
    return { isLoading, isValid }
}