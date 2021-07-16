// @ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Todo as TodoI } from "../App";
interface IProps {
    todo: TodoI;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: TodoI[];
}

const Todo: React.FC<IProps> = ({ todo, setTodos, todos }) => {
    const [isComplete, setIsComplete] = useState(todo.isCompleted);

    const handleCheck = () => {
        setIsComplete(!isComplete);
        const checked = todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...todo,
                    isCompleted: !isComplete,
                };
            }
            return item;
        });
        localStorage.setItem("todos", JSON.stringify(checked));
        setTodos(checked);
    };

    const handleDelete = () => {
        let targetIndex: number;
        const todosCopy = [...todos];

        todos.forEach((item, i) => {
            if (item.id === todo.id) {
                targetIndex = i;
            }
        });

        todosCopy.splice(targetIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todosCopy));

        setTodos(todosCopy);
    };

    return (
        <li
            className="flex items-center text-lg w-90 p-4 bg-white shadow-md border-b border-gray-300 first:rounded-tl-md first:rounded-tr-md text-gray-900 dark:bg-veryDarkDesaBlueDT dark:border-darkGrayishBlueDT relative lg:w-full
        "
        >
            <button
                onClick={handleCheck}
                className="inline-block group border border-darkGrayishBlueLT mr-5 text-white rounded-full overflow-hidden w-6 h-6"
            >
                <span
                    className={`w-6 h-6 flex justify-center items-center cursor-pointer bg-checkBg opacity-0  transition-all duration-300 ${
                        isComplete
                            ? "opacity-100 group-hover:opacity-0"
                            : "group-hover:opacity-100"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        className="fill-current"
                    >
                        <path
                            fill="none"
                            stroke="#FFF"
                            stroke-width="2"
                            d="M1 4.304L3.696 7l6-6"
                        />
                    </svg>
                </span>
            </button>
            <p
                className={`text-gray-500 text-sm dark:text-lightGrayBlueDT w-60 mr-4 overflow-hidden ${
                    isComplete && "line-through"
                }`}
            >
                {todo.task}
            </p>
            <button
                className="ml-auto dark:hover:bg-white"
                onClick={handleDelete}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    className="fill-current"
                >
                    <path
                        fill="#494C6B"
                        fill-rule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </li>
    );
};

export default Todo;
