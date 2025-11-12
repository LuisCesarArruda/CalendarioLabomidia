
import { useState, useEffect, useCallback } from 'react';
import { buscarGradeHorarios } from '../services/scheduleService';

export function useSchedule(autoRefreshMinutes = 5) {
    const [schedule, setSchedule] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);

    // Função para buscar a grade
    const fetchSchedule = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('🔄 Buscando grade de horários...');
            const data = await buscarGradeHorarios();

            setSchedule(data);
            setLastUpdate(new Date());
            console.log('✅ Grade carregada com sucesso');
        } catch (err) {
            const errorMessage = err.message || 'Erro desconhecido ao carregar grade';
            setError(errorMessage);
            console.error('❌ Erro ao buscar grade:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Carrega na inicialização
    useEffect(() => {
        fetchSchedule();
    }, [fetchSchedule]);

    // Auto-refresh
    useEffect(() => {
        if (autoRefreshMinutes <= 0) return;

        const interval = setInterval(() => {
            console.log('⏰ Auto-refresh ativado');
            fetchSchedule();
        }, autoRefreshMinutes * 60 * 1000);

        return () => clearInterval(interval);
    }, [autoRefreshMinutes, fetchSchedule]);

    return {
        schedule,
        loading,
        error,
        lastUpdate,
        refresh: fetchSchedule
    };
}