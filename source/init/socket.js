//Core
import io from 'socket.io-client';

//Config
import { ROOT_URL, TOKEN } from "../REST/config";

export const socket = io(ROOT_URL, {
    path: '/redux/ws',
});

export const joinSocketChannel = () => {

    socket.emit('join', { TOKEN });
};
