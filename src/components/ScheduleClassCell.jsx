import React from 'react';

const ScheduleClassCell = ({ aula }) => {
    return (
        <td className="p-6 border-r border-purple-500/20 last:border-r-0 hover:bg-purple-500/10 transition">
            {aula ? (
                <div className="text-center">
                    <p className="text-white font-semibold text-lg whitespace-pre-line">
                        {aula}
                    </p>
                </div>
            ) : (
                <div className="text-center text-gray-500 italic">
                    -
                </div>
            )}
        </td>
    );
};

export default ScheduleClassCell;