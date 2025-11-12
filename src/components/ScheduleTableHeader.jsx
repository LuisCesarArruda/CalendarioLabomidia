import React from 'react';

const ScheduleTableHeader = ({ diasSemana }) => {
    return (
        <thead>
            <tr className="bg-black/60">
                {diasSemana.map(dia => (
                    <th
                        key={dia}
                        className="p-4 text-white font-bold text-xl border-r border-purple-500/30 last:border-r-0"
                        style={{ fontFamily: 'serif' }}
                    >
                        {dia}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default ScheduleTableHeader;