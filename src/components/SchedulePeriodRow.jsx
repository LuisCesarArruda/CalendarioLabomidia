import React from 'react';

const SchedulePeriodRow = ({ periodo, numColunas }) => {
    return (
        <tr className="bg-black/80">
            <td
                colSpan={numColunas}
                className="p-3 text-center text-white font-bold text-2xl border-t border-b border-purple-500/30"
                style={{ fontFamily: 'serif' }}
            >
                {periodo}
            </td>
        </tr>
    );
};

export default SchedulePeriodRow;