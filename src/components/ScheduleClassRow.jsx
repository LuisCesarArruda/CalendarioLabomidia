import React from 'react';
import ScheduleClassCell from './ScheduleClassCell';

const ScheduleClassRow = ({ diasSemana, periodo, linha, schedule }) => {
    return (
        <tr className="border-b border-purple-500/20">
            {diasSemana.map((dia, diaIdx) => {
                const aulaKey = `${dia}-${periodo}-${linha}`;
                const aula = schedule?.[aulaKey] || '';

                return (
                    <ScheduleClassCell
                        key={diaIdx}
                        aula={aula}
                    />
                );
            })}
        </tr>
    );
};

export default ScheduleClassRow;