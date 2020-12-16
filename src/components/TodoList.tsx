import React, { useState, useRef, useEffect } from "react";
import move from "array-move";
import { findIndex, Position } from "../util/findIndex";
import { Todo as TodoI } from "../App";
import Todo from "./Todo";

interface IProps {
    todos: TodoI[] | null | undefined;
    setTodos: React.Dispatch<React.SetStateAction<TodoI[] | null | undefined>>;
}

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
            <Todo
                i={0}
                moveItem={moveItem}
                setPosition={setPosition}
                todo={{ id: 0, task: "Hello World", isCompleted: false }}
            />
            <Todo
                i={0}
                moveItem={moveItem}
                setPosition={setPosition}
                todo={{ id: 0, task: "Hello World", isCompleted: false }}
            />
            <Todo
                i={0}
                moveItem={moveItem}
                setPosition={setPosition}
                todo={{ id: 0, task: "Hello World", isCompleted: false }}
            />
            <li className="text-gray-400 flex justify-between items-center bg-white text-sm p-4 last:rounded-bl-md last:rounded-br-md shadow-md w-90 dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
                <span className="">5 items left</span>
                <button className="">Clear Completed</button>
            </li>
        </ul>
    );
};

export default TodoList;
