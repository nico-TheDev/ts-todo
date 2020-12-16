import React, { useState, useRef, useEffect, RefObject } from "react";
import { motion, useMotionValue } from "framer-motion";
import { findIndex, Position } from "../util/findIndex";
import { Todo as TodoI } from "../App";
import { HTMLMotionComponents } from "framer-motion/types/render/dom/types";
interface IProps {
    todo: TodoI;
    i: number;
    setPosition: (i: number, offset: Position) => Position;
    moveItem: (i: number, dragOffset: number) => void;
}

const Todo: React.FC<IProps> = ({ i, setPosition, todo }) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const ref = useRef(null) as any; // for now
    const dragOriginY = useMotionValue(0);

    useEffect(() => {
        setPosition(i, {
            height: ref.current.offsetHeight,
            top: ref.current.offsetTop,
        });
    });

    return (
        <motion.li
            className="flex items-center text-lg w-90 bg-white shadow-md p-4 border-b border-gray-300 first:rounded-tl-md first:rounded-tr-md text-gray-900 dark:bg-veryDarkDesaBlueDT dark:border-darkGrayishBlueDT cursor-move"
            ref={ref}
        >
            <button className="group border border-darkGrayishBlueLT mr-3 text-white rounded-full overflow-hidden">
                <span className="w-6 h-6  flex justify-center items-center cursor-pointer bg-checkBg opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        className="fill-current"
                    >
                        <path
                            fill="none"
                            stroke="#FFF"
                            stroke-width="2"
                            d="M1 4.304L3.696 7l6-6"
                        />
                    </svg>
                </span>
            </button>
            <p className="line-through text-gray-500 text-sm dark:text-lightGrayBlueDT">
                Hello Typescript!
            </p>
            <button className="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path
                        fill="#494C6B"
                        fill-rule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </motion.li>
    );
};

export default Todo;
