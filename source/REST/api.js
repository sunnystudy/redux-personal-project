//Instruments
import { MAIN_URL, TOKEN } from "./config";

export const api = {
    todos: {
        fetch () {
            return fetch(`${MAIN_URL}/`, {
                method:  'GET',
                headers: {
                    Authorization: TOKEN,
                },
            });
        },
        create (message) {
            return fetch(`${MAIN_URL}/`, {
                method:  'POST',
                headers: {
                    Authorization:  TOKEN,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
        },
        remove (todoId) {
            return fetch(`${MAIN_URL}/${todoId}`, {
                method:  'DELETE',
                headers: {
                    Authorization: TOKEN,
                },
            });
        },
        update (todo) {
            return fetch(`${MAIN_URL}/`, {
                method:  'PUT',
                headers: {
                    Authorization:  TOKEN,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo),
            });
        },
    },
};
