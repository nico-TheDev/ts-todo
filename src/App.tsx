import { useState, useEffect } from "react";
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
    const [todos, setTodos] = useState<Todo[]>(() => {
        const target = localStorage.getItem("todos");
        if (target !== null) {
            return JSON.parse(target);
        } else {
            return [];
        }
    });
    const [current, setCurrent] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    useEffect(() => {
        let filtered: Todo[] = [];
        console.log("RUNNING");
        if (current === "all") {
            filtered = [...todos];
        }
        if (current === "active") {
            filtered = todos.filter((item) => item.isCompleted === false);
        }
        if (current === "completed") {
            filtered = todos.filter((item) => item.isCompleted === true);
        }

        setFilteredTodos(filtered);
    }, [current, todos]);

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
            <TodoList
                setTodos={setTodos}
                todos={filteredTodos}
                realList={todos}
                current={current}
                setCurrent={setCurrent}
                filteredTodos={filteredTodos}
            />
            <Sorter
                current={current}
                setCurrent={setCurrent}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
                extraStyle="lg:hidden"
            />
            <p className="mt-16 text-gray-500 text-sm text-center">
                Drag and drop to reoder list
            </p>
        </div>
    );
};

export default App;
