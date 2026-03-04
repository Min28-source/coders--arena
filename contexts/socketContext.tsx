"use client"
import { getSocket } from '@/lib/socket';
import { createContext, useEffect, useContext } from 'react';
import type { Socket } from 'socket.io-client';

const SocketContext = createContext<Socket | null>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = getSocket();
    if(socket === undefined){
        throw new Error("Socket instance does not exist.")
    }
    useEffect(() => {
        socket.connect();
        return () => {
            socket.disconnect();
        }
    }, [socket])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>

    )
}

export const useSocket = () =>{
    const context = useContext(SocketContext);
    if(!context){
        throw new Error("Context can be created only inside the provider")
    }
    return context;
}