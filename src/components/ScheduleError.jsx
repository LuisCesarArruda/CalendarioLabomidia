import React from 'react';
import { AlertCircle } from 'lucide-react';

const ScheduleError = ({ error, onRetry }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
            <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-6 max-w-md">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white text-center mb-2">
                    Erro ao Carregar Grade
                </h2>
                <p className="text-red-200 text-center mb-4">
                    {error}
                </p>
                <button
                    onClick={onRetry}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
                >
                    Tentar Novamente
                </button>
            </div>
        </div>
    );
};

export default ScheduleError;