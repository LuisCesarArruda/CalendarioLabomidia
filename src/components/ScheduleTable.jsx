import React from 'react';
import ScheduleTableHeader from './ScheduleTableHeader';
import SchedulePeriodSection from './SchedulePeriodSection';

const ScheduleTable = ({ schedule, diasSemana, periodos }) => {
    return (
        <div className="bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/30">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <ScheduleTableHeader diasSemana={diasSemana} />

                    <tbody>
                        {periodos.map((periodo) => (
                            <SchedulePeriodSection
                                key={periodo}
                                periodo={periodo}
                                diasSemana={diasSemana}
                                schedule={schedule}
                                numLinhas={2}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleTable;