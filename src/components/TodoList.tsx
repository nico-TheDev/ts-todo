// @ts-nocheck
import React, { useRef } from "react";
import move from "array-move";

import { Todo as TodoI } from "../App";
import Sorter from "./Sorter";
import { Position, findIndex } from "../util/findIndex";
import Todo from "./Todo";

interface IProps {
    todos: Array<TodoI>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    realList: Todoi[];
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    current: string;
    filteredTodos: Todo[];
}

const TodoList: React.FC<IProps> = ({
    setTodos,
    todos,
    realList,
    filteredTodos,
    current,
    setCurrent,
}) => {
    const handleClear = () => {
        setTodos(realList.filter((item) => item.isCompleted === false));
    };

    return (
        <ul className="grid justify-items-center transform -translate-y-12 relative  lg:w-30 lg:-translate-x-1/2 lg:relative lg:left-1/2 ">
            {todos.map((todo, i) => (
                <Todo
                    i={i}
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                />
            ))}
            <li className="text-gray-400 flex justify-between items-center bg-white text-sm p-4 last:rounded-bl-md last:rounded-br-md shadow-md w-90 dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT lg:w-full">
                <span className="lg:text-xs lg:block lg:whitespace-nowrap">
                    {todos.length} items left
                </span>

                <Sorter
                    current={current}
                    setCurrent={setCurrent}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                    extraStyle="p-2 hidden lg:flex lg:w-full lg:text-xs shadow-none space-between"
                />

                <button
                    className="lg:text-xs lg:flex lg:whitespace-nowrap"
                    onClick={handleClear}
                >
                    Clear Completed
                </button>
            </li>
        </ul>
    );
};

export default TodoList;
