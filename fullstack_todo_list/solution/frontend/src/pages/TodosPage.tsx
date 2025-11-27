import React, { useEffect, useState } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo, toggleTodo } from '../services/api';
import type { Todo, CreateTodoRequest, UpdateTodoRequest } from '../types';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            setLoading(true);
            const data = await getTodos();
            // Sort by createdAt desc
            const sorted = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setTodos(sorted);
            setError(null);
        } catch (err) {
            setError('Failed to load todos. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddTodo = async (todo: CreateTodoRequest) => {
        try {
            const newTodo = await createTodo(todo);
            setTodos([newTodo, ...todos]);
        } catch (err) {
            setError('Failed to create todo.');
        }
    };

    const handleToggleTodo = async (id: string) => {
        try {
            // Optimistic update
            setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
            await toggleTodo(id);
        } catch (err) {
            // Revert on error
            fetchTodos();
            setError('Failed to update todo status.');
        }
    };

    const handleDeleteTodo = async (id: string) => {
        if (!confirm('Are you sure you want to delete this task?')) return;
        try {
            setTodos(todos.filter(t => t.id !== id));
            await deleteTodo(id);
        } catch (err) {
            fetchTodos();
            setError('Failed to delete todo.');
        }
    };

    const handleUpdateTodo = async (id: string, updates: UpdateTodoRequest) => {
        try {
            setTodos(todos.map(t => t.id === id ? { ...t, ...updates } : t));
            await updateTodo(id, updates);
        } catch (err) {
            fetchTodos();
            setError('Failed to update todo.');
        }
    };

    const activeCount = todos.filter(t => !t.completed).length;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Tasks</h1>
                <p className="text-gray-500">
                    {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
                </p>
            </header>

            <AddTodo onAdd={handleAddTodo} />

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {(['all', 'active', 'completed'] as const).map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                            "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                            filter === f
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>

            {error && (
                <div className="p-4 mb-6 text-red-700 bg-red-50 rounded-lg border border-red-200">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                </div>
            ) : (
                <TodoList
                    todos={todos}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                    onUpdate={handleUpdateTodo}
                    filter={filter}
                />
            )}
        </div>
    );
};
