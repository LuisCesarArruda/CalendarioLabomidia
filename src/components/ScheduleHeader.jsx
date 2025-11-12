
import React from 'react';
import { Calendar, Clock, RefreshCw } from 'lucide-react';

const ScheduleHeader = ({ onRefresh, loading, lastUpdate }) => {
  return (
    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 mb-6 border border-purple-500/30">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1
            className="text-4xl font-bold text-white mb-2"
            style={{ fontFamily: 'serif' }}
          >
            LABOMIDIA UNIFOR
          </h1>
          <p className="text-purple-300 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Grade de Horários - 2025.1
          </p>
        </div>

        <div className="text-right">
          <button
            onClick={onRefresh}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Atualizar grade"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </button>

          {lastUpdate && (
            <p className="text-purple-300 text-sm mt-2 flex items-center gap-1 justify-end">
              <Clock className="w-4 h-4" />
              {lastUpdate.toLocaleTimeString('pt-BR')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleHeader;