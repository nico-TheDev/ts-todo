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
    const [todos, setTodos] = useState<Todo[] | null | undefined>();
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <div
            className={`font-main text-mainSize bg-gray-200 overflow-x-hidden min-h-screen ${
                isDarkMode ? "dark bg-veryDarkBlueDT" : ""
            }`}
        >
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <TodoList setTodos={setTodos} todos={todos} />
            <Sorter />
            <p className="mt-16 text-gray-500 text-sm text-center">
                Drag and drop to reoder list
            </p>
        </div>
    );
};

export default App;
