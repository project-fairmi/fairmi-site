import React from 'react';

interface TitleProps {
    title: string;
    date: string;
    author: string;
}

const TitleBlog: React.FC<TitleProps> = ({ title, date, author }) => {
    return (
        <div className="w-full pl-60 py-36 pb-14 flex-col justify-center items-start inline-flex">
            <div className="self-stretch text-5xl font-semibold ">{title}</div>
            <div className="self-stretch text-xs font-semibold ">{date}</div>
            <div className="self-stretch text-xs font-semibold ">{author}</div>
        </div>
    );
};

export default TitleBlog;





