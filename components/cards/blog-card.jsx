import { useRouter } from "next/router";
import React from "react";

export default function BlogCard({ data }) {
  const router = useRouter();

  return (
    <a href={`/${router.locale}/blogs/${data.id}/`} data-aos="fade-up">
      <div className="flex flex-col gap-3">
        <img
          src={data.image}
          alt=""
          className="w-full h-[240px] sm:h-[400px] rounded-3xl object-cover"
        />
        <h3 className="text-lg font-semibold">{data.title}</h3>
        <p className=" line-clamp-3 text-text-secondary">{data.content}</p>
      </div>
    </a>
  );
}
