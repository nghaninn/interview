import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { CreateTodoRequest } from '../types';

interface AddTodoProps {
    onAdd: (todo: CreateTodoRequest) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd({ title, description: description.trim() || undefined });
            setTitle('');
            setDescription('');
            setIsExpanded(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4">
                {isExpanded ? (
                    <div className="space-y-3">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What needs to be done?"
                            className="w-full text-lg font-medium placeholder-gray-400 border-none focus:ring-0 p-0"
                            autoFocus
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Add a description (optional)"
                            className="w-full text-sm text-gray-600 placeholder-gray-400 border-none focus:ring-0 p-0 resize-none"
                            rows={3}
                        />
                        <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                            <button
                                type="button"
                                onClick={() => setIsExpanded(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!title.trim()}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsExpanded(true)}
                        className="flex items-center gap-3 w-full text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <Plus className="w-6 h-6 text-blue-500" />
                        <span className="text-lg font-medium">Add a task...</span>
                    </button>
                )}
            </div>
        </form>
    );
};
