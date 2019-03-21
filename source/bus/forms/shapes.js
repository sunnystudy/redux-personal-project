// Core
import { object, string } from "yup";

export const todoShape = {
    shape: {
        todoText: "",
    },
    schema: object().shape({
        todoText: string()
            .required()
            .max(50)
            .min(1),
    }),
};
