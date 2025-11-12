import React from 'react';
import { RefreshCw } from 'lucide-react';

const ScheduleLoading = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
                <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4" />
                <p className="text-xl">Carregando grade...</p>
            </div>
        </div>
    );
};

export default ScheduleLoading;