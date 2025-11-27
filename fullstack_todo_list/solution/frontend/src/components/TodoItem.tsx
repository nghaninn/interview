import React, { useState } from 'react';
import { Trash2, Edit2, Check, X, CheckCircle, Circle } from 'lucide-react';
import type { Todo, UpdateTodoRequest } from '../types';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updates: UpdateTodoRequest) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [editDescription, setEditDescription] = useState(todo.description || '');

    const handleUpdate = () => {
        if (editTitle.trim()) {
            onUpdate(todo.id, { title: editTitle, description: editDescription });
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setEditTitle(todo.title);
        setEditDescription(todo.description || '');
        setIsEditing(false);
    };

    return (
        <div className={twMerge(
            "flex flex-col p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md",
            todo.completed && "bg-gray-50 opacity-75"
        )}>
            <div className="flex items-start justify-between gap-3">
                <button
                    onClick={() => onToggle(todo.id)}
                    className="mt-1 text-gray-400 hover:text-green-500 transition-colors focus:outline-none"
                >
                    {todo.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                        <Circle className="w-6 h-6" />
                    )}
                </button>

                <div className="flex-1 min-w-0">
                    {isEditing ? (
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="w-full px-2 py-1 text-lg font-medium border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                autoFocus
                            />
                            <textarea
                                value={editDescription}
                                onChange={(e) => setEditDescription(e.target.value)}
                                className="w-full px-2 py-1 text-sm text-gray-600 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                rows={2}
                                placeholder="Description (optional)"
                            />
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={handleUpdate}
                                    className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 flex items-center gap-1"
                                >
                                    <Check className="w-4 h-4" /> Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 flex items-center gap-1"
                                >
                                    <X className="w-4 h-4" /> Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="group">
                            <h3 className={clsx(
                                "text-lg font-medium text-gray-900 break-words",
                                todo.completed && "line-through text-gray-500"
                            )}>
                                {todo.title}
                            </h3>
                            {todo.description && (
                                <p className={clsx(
                                    "mt-1 text-sm text-gray-600 break-words whitespace-pre-wrap",
                                    todo.completed && "line-through text-gray-400"
                                )}>
                                    {todo.description}
                                </p>
                            )}
                            <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity md:opacity-0 opacity-100">
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
                                >
                                    <Edit2 className="w-3 h-3" /> Edit
                                </button>
                                <button
                                    onClick={() => onDelete(todo.id)}
                                    className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1"
                                >
                                    <Trash2 className="w-3 h-3" /> Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-2 text-xs text-gray-400 text-right">
                {new Date(todo.createdAt).toLocaleDateString()}
            </div>
        </div>
    );
};
