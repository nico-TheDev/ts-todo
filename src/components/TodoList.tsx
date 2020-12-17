// @ts-nocheck
import React from "react";
import { Todo as TodoI } from "../App";
import { usePositionReorder } from "../hooks/usePositionReorder";
import Todo from "./Todo";

interface IProps {
    todos: any;
    setTodos: any;
}

const items = [50, 50, 50];
const TodoList: React.FC<IProps> = ({ setTodos, todos }) => {
    const [order, updatePosition, updateOrder] = usePositionReorder(items);
    return (
        <ul className="grid justify-items-center transform -translate-y-6 ">
            {order.map((height, i) => (
                <Todo
                    i={i}
                    key={todos[i].id}
                    height={height}
                    updatePosition={updatePosition}
                    updateOrder={updateOrder}
                    todo={todos[i]}
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
