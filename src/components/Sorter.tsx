import React, { useState, useEffect } from "react";
import { Todo } from "../App";
interface IProps {
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    current: string;
    setTodos: any;
    filteredTodos: Todo[];
}

const Sorter: React.FC<IProps> = ({ setCurrent, current }) => {
    return (
        <div className="flex justify-around items-center w-90 bg-white shadow-md rounded-md mx-auto p-4  text-gray-500 text-center text-sm dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
            <button
                onClick={() => setCurrent("all")}
                className={`${current === "all" && "text-blue-500"}`}
            >
                All
            </button>
            <button
                onClick={() => setCurrent("active")}
                className={`${current === "active" && "text-blue-500"}`}
            >
                Active
            </button>
            <button
                onClick={() => setCurrent("completed")}
                className={`${current === "completed" && "text-blue-500"}`}
            >
                Completed
            </button>
        </div>
    );
};

export default Sorter;
