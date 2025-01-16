import { io } from "socket.io-client";
const URL = "http://localhost:3000/"

export const socket = io(URL);

socket.on("connect", () => { console.log("Socket.config: connected") })

socket.on("connect_error", (error) => {
    console.log(`Socket.config: ${error}`);
});