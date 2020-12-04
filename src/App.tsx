import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

interface IProps {}

interface Todo {
    id: string;
    task: string;
    isCompleted: boolean;
}

const App: React.FC<IProps> = () => {
    const [todos, setTodos] = useState<Todo[] | null | undefined>();
    return (
        <div className="font-main text-mainSize">
            <Header />
            <TodoList />
        </div>
    );
};

export default App;
