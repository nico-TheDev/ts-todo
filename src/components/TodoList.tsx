// @ts-nocheck
import React, { useRef } from "react";
import move from "array-move";

import { Todo as TodoI } from "../App";
import { Position, findIndex } from "../util/findIndex";
import Todo from "./Todo";

interface IProps {
    todos: any;
    setTodos: any;
}

const items = [50, 50, 50];
const TodoList: React.FC<IProps> = ({ setTodos, todos }) => {
    const positions = useRef<Position[]>([]).current;
    const setPosition = (i: number, offset: Position) =>
        (positions[i] = offset);

    const moveItem = (i: number, dragOffset: number) => {
        const targetIndex = findIndex(i, dragOffset, positions);
        if (targetIndex !== i) setTodos(move(todos, i, targetIndex));
    };

    return (
        <ul className="grid justify-items-center transform -translate-y-6 ">
            {todos.map((_, i) => (
                <Todo
                    i={i}
                    key={todos[i].id}
                    todo={todos[i]}
                    setPosition={setPosition}
                    moveItem={moveItem}
                />
            ))}
            <li className="text-gray-400 flex justify-between items-center bg-white text-sm p-4 last:rounded-bl-md last:rounded-br-md shadow-md w-90 dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
                <span className="">5 items left</span>
                <button className="">Clear Completed</button>
            </li>
        </ul>
    );
};

export default TodoList;
