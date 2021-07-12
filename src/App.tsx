import { useState } from "react";
import Header from "./components/Header";
import Sorter from "./components/Sorter";
import TodoList from "./components/TodoList";

interface IProps {}

export interface Todo {
    id: string | number;
    task: string;
    isCompleted: boolean;
}

const App: React.FC<IProps> = () => {
    const [todos, setTodos] = useState([
        { id: 0, task: "Hello World 1", isCompleted: false },
        { id: 1, task: "Hello World 2", isCompleted: true },
        { id: 2, task: "Hello World 3", isCompleted: true },
        { id: 3, task: "Hello World 4", isCompleted: false },
        { id: 4, task: "Hello World 5", isCompleted: false },
        { id: 5, task: "Hello World 6", isCompleted: false },
    ]);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    return (
        <div
            className={`font-main text-mainSize bg-gray-200 overflow-x-hidden min-h-screen ${
                isDarkMode ? "dark bg-veryDarkBlueDT" : ""
            }`}
        >
            <Header
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList setTodos={setTodos} todos={todos} />
            <Sorter todos={todos} setTodos={setTodos} />
            <p className="mt-16 text-gray-500 text-sm text-center">
                Drag and drop to reoder list
            </p>
        </div>
    );
};

export default App;
