import React from 'react';
import SchedulePeriodRow from './SchedulePeriodRow';
import ScheduleClassRow from './ScheduleClassRow';

const SchedulePeriodSection = ({ periodo, diasSemana, schedule, numLinhas = 2 }) => {
    return (
        <>
            <SchedulePeriodRow
                periodo={periodo}
                numColunas={diasSemana.length}
            />

            {Array.from({ length: numLinhas }).map((_, linha) => (
                <ScheduleClassRow
                    key={`${periodo}-${linha}`}
                    diasSemana={diasSemana}
                    periodo={periodo}
                    linha={linha}
                    schedule={schedule}
                />
            ))}
        </>
    );
};

export default SchedulePeriodSection;