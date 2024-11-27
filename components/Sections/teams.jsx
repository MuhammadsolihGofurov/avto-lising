import React from "react";
import { SmallTitle } from "../custom";
import { useIntl } from "react-intl";
import { ProductCard, TeamCard } from "../cards";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Teams() {
  const intl = useIntl();
  const router = useRouter();

  const { data: person } = useSWR(["person/", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!person || person?.length === 0) {
    return null;
  }

  return (
    <section id="teams" className="py-10 sm:py-20">
      <div className="max-w-[1240px] mx-auto 8xl:px-0 pl-5 md:pr-5 flex flex-col gap-10 sm:gap-20">
        <div
          className="flex flex-col items-center justify-center gap-2 text-center md:pr-0 pr-5"
          data-aos="fade-up"
        >
          <SmallTitle>{intl.formatMessage({ id: "teamsTitle" })}</SmallTitle>
          <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
            {intl.formatMessage({ id: "teamsBody" })}
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {person?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TeamCard data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
