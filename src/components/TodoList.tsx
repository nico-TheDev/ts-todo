import React from "react";
import Todo from "./Todo";

interface IProps {}

const TodoList: React.FC<IProps> = () => {
    return (
        <ul className="grid justify-items-center transform -translate-y-6 first:rounded-tl-md first:rounded-tr-md last:rounded-tl-md last:rounded-tr-md">
            <Todo />
            <Todo />
            <Todo />
        </ul>
    );
};

export default TodoList;
