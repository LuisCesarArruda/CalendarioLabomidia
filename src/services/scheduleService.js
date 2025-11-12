// src/services/scheduleService.js
// Serviço para comunicação com Google Apps Script

const APPS_SCRIPT_URL = import.meta.env.VITE_SCHEDULE_SCRIPT_URL;

/**
 * Chama o Google Apps Script usando JSONP (bypass CORS)
 */
function chamarGoogleScriptJSONP(acao, dados = {}) {
    return new Promise((resolve, reject) => {
        try {
            if (!APPS_SCRIPT_URL) {
                reject(new Error('URL do Apps Script não configurada'));
                return;
            }

            console.log(`📡 Chamando: ${acao}`);

            const callbackName = `jsonp_callback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

            window[callbackName] = function (data) {
                console.log('✅ Resposta recebida:', data);
                delete window[callbackName];
                document.body.removeChild(script);
                resolve(data);
            };

            const params = new URLSearchParams({
                acao,
                callback: callbackName,
                ...dados
            });

            const url = `${APPS_SCRIPT_URL}?${params.toString()}`;

            const script = document.createElement('script');
            script.src = url;

            script.onerror = function () {
                console.error('❌ Erro ao carregar script');
                delete window[callbackName];
                reject(new Error('Falha ao conectar com o servidor'));
            };

            const timeout = setTimeout(() => {
                delete window[callbackName];
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
                reject(new Error('Tempo esgotado. Tente novamente.'));
            }, 30000);

            script.onload = function () {
                clearTimeout(timeout);
            };

            document.body.appendChild(script);

        } catch (error) {
            console.error('❌ Erro:', error);
            reject(error);
        }
    });
}

/**
 * Busca a grade de horários
 */
export async function buscarGradeHorarios() {
    try {
        const resultado = await chamarGoogleScriptJSONP('buscarGrade');

        if (!resultado.sucesso) {
            throw new Error(resultado.mensagem || 'Erro ao buscar grade');
        }

        return resultado.grade;
    } catch (error) {
        console.error('❌ Erro ao buscar grade:', error);
        throw error;
    }
}

/**
 * Testa a conexão com o Apps Script
 */
export async function testarConexao() {
    try {
        const resultado = await chamarGoogleScriptJSONP('testar');
        return resultado.sucesso;
    } catch (error) {
        console.error('❌ Erro ao testar conexão:', error);
        return false;
    }
}

/**
 * Verifica se a URL está configurada
 */
export function verificarConfiguracao() {
    return {
        configurado: !!APPS_SCRIPT_URL,
        url: APPS_SCRIPT_URL
    };
}