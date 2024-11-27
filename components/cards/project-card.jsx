import React from "react";

export default function ProjectCard({ data }) {
  return (
    <a href={`/projects/${data.id}`} data-aos="fade-up">
      {console.log(data)}
      <div
        className="w-full min-h-[360px] sm:min-h-[480px] rounded-3xl relative z-0 after:w-full after:h-0 after:bottom-0 after:left-0 after:bg-main after:opacity-60 after:absolute after:z-[-1] hover:after:h-full after:transition-all after:duration-200 overflow-hidden flex justify-end flex-col p-5"
        style={{
          backgroundImage: `url(${data?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-5 rounded-3xl flex flex-col gap-1">
          <h3 className="font-semibold text-lg">{data?.title}</h3>
        </div>
      </div>
    </a>
  );
}
