import React from "react";
import { useIntl } from "react-intl";
import { SmallTitle } from "../custom";
import { useRouter } from "next/router";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import { BlogCard } from "../cards";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Blogs({ isBlogs }) {
  const intl = useIntl();
  const router = useRouter();

  const { data: news } = useSWR(["news/", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!news || news?.length === 0) {
    return null;
  }

  if (isBlogs) {
    return (
      <section id="advantages" className="bg-gray-50 py-10 sm:py-20">
        <div className="container">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {news?.map((item, index) => {
              return <BlogCard data={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="advantages" className="bg-gray-50 py-10 sm:py-20">
      <div className="max-w-[1240px] mx-auto 8xl:px-0 pl-5 md:pr-5 flex flex-col gap-10 sm:gap-20">
        <div
          className="flex flex-col items-center justify-center gap-2 text-center md:pr-0 pr-5"
          data-aos="fade-up"
        >
          <SmallTitle>{intl.formatMessage({ id: "blogTitle" })}</SmallTitle>
          <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
            {intl.formatMessage({ id: "blogsTitle" })}
          </h2>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="mySwiper"
          >
            {news?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <BlogCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
