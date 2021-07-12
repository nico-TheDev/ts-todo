import React, { useState } from "react";
import dayBg from "../assets/images/bg-mobile-light.jpg";
import darkBg from "../assets/images/bg-mobile-dark.jpg";
import { Todo } from "../App";

interface IProps {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    setTodos: any;
    todos: Todo[];
}

const Header: React.FC<IProps> = ({
    isDarkMode,
    setIsDarkMode,
    setTodos,
    todos,
}) => {
    const [input, setInput] = useState<string>("");

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodos = [...todos];
        const newTodo: Todo = {
            id: newTodos.length,
            task: input,
            isCompleted: false,
        };
        newTodos.push(newTodo);
        setTodos([...newTodos]);
        console.log(newTodos);

        // Clear Input
        setInput("");
    };

    return (
        <div className="h-three bg-checkBg  text-white py-12 pb-12 relative">
            <img
                src={isDarkMode ? darkBg : dayBg}
                alt="desktop bg background"
                className="absolute w-full h-full object-cover object-center top-0 left-0"
            />
            <div className="w-90 mx-auto relative">
                <div className=" mb-6 flex justify-between items-center w-full">
                    <h1 className="text-2xl tracking-one font-bold">TODO</h1>
                    <button
                        className="text-white w-6 h-6 inline-block"
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-full w-full"
                        >
                            {isDarkMode ? (
                                <path d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" />
                            ) : (
                                <path d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
                            )}
                        </svg>
                    </button>
                </div>
                <form
                    className="flex items-center bg-white p-4 rounded-md dark:bg-veryDarkDesaBlueDT"
                    onSubmit={handleSubmit}
                >
                    <span className="w-6 h-6 border border-darkGrayishBlueLT rounded-full mr-4" />
                    <input
                        type="text"
                        className="font-light bg-transparent text-sm text-gray-900 flex-1 h-full dark:text-lightGrayBlueDT"
                        placeholder="Create a new todo..."
                        value={input}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default Header;
