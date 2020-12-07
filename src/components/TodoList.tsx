import React from "react";
import Todo from "./Todo";

interface IProps {}

const TodoList: React.FC<IProps> = () => {
    return (
        <ul className="grid justify-items-center transform -translate-y-6 ">
            <Todo />
            <Todo />
            <Todo />
            <li className="text-gray-400 flex justify-between items-center bg-white text-sm p-4 last:rounded-bl-md last:rounded-br-md shadow-md w-90 dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
                <span className="">5 items left</span>
                <button className="">Clear Completed</button>
            </li>
        </ul>
    );
};

export default TodoList;
