import React from 'react';

const About: React.FC = () => {
    return (
        <div className="py-24 flex justify-center items-center w-full font-light">
            <div className="flex items-start justify-start flex-grow ">
                {/* <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> */}
                <div className="text-4xl xl:text-6xl">
                    We are developing adaptable Artificial Intelligence (AI) models for medical image analysis to enhance performance and fairness, measure impartiality, and integrate human decision-making. Our goal is to improve safety and set new standards for responsible AI in healthcare.
                </div>
            </div>
        </div>
    );
};

export default About;