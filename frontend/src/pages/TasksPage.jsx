import { useEffect, useState } from "react";
import { logout } from "../api/auth";
import { createTask, fetchTasks } from "../api/tasks";

export default function TasksPage({ onLogoutSuccess }) {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    async function loadTasks() {
        setError("");

        try {
            const data = await fetchTasks();
            setTasks(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    async function handleCreateTask(e) {
        e.preventDefault();

        try {
            await createTask(title);
            setTitle("");
            await loadTasks();
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleLogout() {
        try {
            await logout();
            onLogoutSuccess();
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h1>Tasks</h1>

            <button onClick={handleLogout}>Logout</button>

            <form onSubmit={handleCreateTask} style={{ marginTop: "16px" }}>
                <input
                    type="text"
                    value={title}
                    placeholder="New task title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit" style={{ marginLeft: "8px" }}>
                    Add Task
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul style={{ marginTop: "16px" }}>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title} / {task.is_done ? "done" : "not yet"}
                    </li>
                ))}
            </ul>
        </div>
    );
}