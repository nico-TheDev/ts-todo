// @ts-nocheck
import React, { useRef } from "react";
import move from "array-move";

import { Todo as TodoI } from "../App";
import { Position, findIndex } from "../util/findIndex";
import Todo from "./Todo";

interface IProps {
    todos: Array<TodoI>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    realList: Todoi[];
}

const TodoList: React.FC<IProps> = ({ setTodos, todos, realList }) => {
    const handleClear = () => {
        setTodos(realList.filter((item) => item.isCompleted === false));
    };

    return (
        <ul className="grid justify-items-center transform -translate-y-12 relative">
            {todos.map((todo, i) => (
                <Todo
                    i={i}
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                />
            ))}
            <li className="text-gray-400 flex justify-between items-center bg-white text-sm p-4 last:rounded-bl-md last:rounded-br-md shadow-md w-90 dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
                <span className="">{todos.length} items left</span>
                <button className="" onClick={handleClear}>
                    Clear Completed
                </button>
            </li>
        </ul>
    );
};

export default TodoList;
