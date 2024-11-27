import React from "react";

export default function OpinionCard({ data }) {
  return (
    <div className="w-full min-h-[300px] bg-white border-2 border-slate-100 rounded-3xl flex flex-col items-start justify-start text-start gap-8 p-5 hover:border-slate-400 transition-colors duration-200 cursor-pointer">
      <p className="text-dark text-sm">{data.description}</p>
      <div className="flex flex-row items-center gap-3 relative z-0 w-full">
        <img
          src={data.image}
          alt={data.fullname}
          title={data.fullname}
          className="w-16 h-16 rounded-full object-cover"
        />
        <h3 className="font-semibold text-base">{data.fullname}</h3>
        <p className="absolute right-5 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
              className="fill-slate-200"
            />
          </svg>
        </p>
      </div>
    </div>
  );
}
