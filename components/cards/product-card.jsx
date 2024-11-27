import { useRouter } from "next/router";
import React from "react";

export default function ProductCard({ data }) {
  const router = useRouter();
  return (
    <a href={`/${router.locale}/products/${data.id}/`} data-aos="fade-up">
      <div className="w-full rounded-3xloverflow-hidden flex justify-end flex-col  group">
        <div className="h-[280px] small:h-[360px] sm:h-[400px] flex items-center justify-center bg-gray-100 rounded-3xl">
          <img
            src={data.image}
            alt={data.title}
            className="w-3/5 group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="bg-white p-5 rounded-3xl flex flex-col gap-1">
          <h3 className="font-semibold text-lg">{data.title}</h3>
          {/* <p>{data.description}</p> */}
          {/* <p
            className="line-clamp-5 text-text-secondary"
            dangerouslySetInnerHTML={{ __html: data.description }}
          /> */}
        </div>
      </div>
    </a>
  );
}
