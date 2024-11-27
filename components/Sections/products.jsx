import React from "react";
import { SmallTitle } from "../custom";
import { useIntl } from "react-intl";
import { ProductCard } from "../cards";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products({ isProducts }) {
  const intl = useIntl();
  const router = useRouter();

  const { data: products } = useSWR(["products/", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!products || products?.length === 0) {
    return null;
  }

  if (isProducts) {
    return (
      <section id="products" className="py-10 sm:py-20">
        <div className="container">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
            {products?.map((item, index) => {
              return <ProductCard data={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-10 sm:py-20">
      <div className="max-w-[1240px] mx-auto 8xl:px-0 pl-5 md:pr-5 flex flex-col gap-10 sm:gap-20">
        <div
          className="flex flex-col items-center justify-center gap-2 text-center md:pr-0 pr-5"
          data-aos="fade-up"
        >
          <SmallTitle>{intl.formatMessage({ id: "productsTitle" })}</SmallTitle>
          <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
            {intl.formatMessage({ id: "productsBody" })}
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
            {products?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProductCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
