import { io, Socket } from 'socket.io-client';
let socket: Socket | null;

export const getSocket = () => {
    if (!socket) {
        socket = io(process.env.SERVER_URL || 'http://localhost:4000', { autoConnect: true })
    }

    return socket;
}