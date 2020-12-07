import React from "react";

interface IProps {}

const Sorter: React.FC<IProps> = () => {
    return (
        <div className="flex justify-center items-center w-90 bg-white shadow-md rounded-md mx-auto p-4  text-gray-500 text-center text-sm dark:bg-veryDarkDesaBlueDT dark:text-lightGrayBlueDT">
            <button className="text-blue-500">All</button>
            <button className="ml-4">Active</button>
            <button className="ml-4">Completed</button>
        </div>
    );
};

export default Sorter;
