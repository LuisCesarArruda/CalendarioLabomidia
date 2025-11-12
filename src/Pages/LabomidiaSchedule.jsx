
import React from 'react';
import { useSchedule } from '../Hooks/useSchedule';
import { DIAS_SEMANA, PERIODOS, CONFIG } from '../constants/ScheduleConstants';

import ScheduleHeader from '../components/ScheduleHeader';
import ScheduleTable from '../components/ScheduleTable';
import ScheduleLoading from '../components/ScheduleLoading';
import ScheduleError from '../components/ScheduleError';

const LabomidiaSchedule = () => {
    const {
        schedule,
        loading,
        error,
        lastUpdate,
        refresh
    } = useSchedule(CONFIG.AUTO_REFRESH_MINUTES);

    // Estado de carregamento inicial
    if (loading && !schedule) {
        return <ScheduleLoading />;
    }

    // Estado de erro
    if (error) {
        return <ScheduleError error={error} onRetry={refresh} />;
    }

    // Renderiza a grade
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <ScheduleHeader
                    onRefresh={refresh}
                    loading={loading}
                    lastUpdate={lastUpdate}
                />

                <ScheduleTable
                    schedule={schedule}
                    diasSemana={DIAS_SEMANA}
                    periodos={PERIODOS}
                />

            </div>
        </div>
    );
};

export default LabomidiaSchedule;