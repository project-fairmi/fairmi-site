import React from 'react';

interface DivisionProps {
    title: string;
}

const Division: React.FC<DivisionProps> = ({ title }) => {
    return (
        <div className="w-full h-14 border-t border-blue-700 justify-start items-start inline-flex">
            <div className="pt-2.5 justify-start items-start flex">
                <div className="w-full text-xs font-normal ">{title}</div>
            </div>
        </div>
    );
};

export default Division;
