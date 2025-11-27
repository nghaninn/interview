import React from 'react';
import type { Todo, UpdateTodoRequest } from '../types';
import { TodoItem } from './TodoItem';
import { ClipboardList } from 'lucide-react';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: UpdateTodoRequest) => void;
    filter: 'all' | 'active' | 'completed';
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onUpdate, filter }) => {
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    if (filteredTodos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <ClipboardList className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">No tasks found</p>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {filteredTodos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    );
};
