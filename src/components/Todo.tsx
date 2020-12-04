import React from "react";

interface IProps {
    // id: string;
    // task: string;
    // isCompleted: boolean;
}

const Todo: React.FC<IProps> = () => {
    return (
        <li className="flex items-center text-lg w-90 bg-white shadow-md  py-2 px-4 border-b border-gray-300 ">
            <span className="w-6 h-6 text-white rounded-full border border-primaryBrightBlue mr-3 bg-checkBg flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="12"
                    height="9"
                >
                    <path stroke="#FFF" d="M1 4.304L3.696 7l6-6" />
                </svg>
            </span>
            Hello World!
        </li>
    );
};

export default Todo;
