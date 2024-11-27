import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button, SmallTitle } from "../custom";
import { useIntl } from "react-intl";

export default function HomeBanners() {
  const router = useRouter();
  const intl = useIntl();

  // const { data: carousel } = useSWR(["carousel/", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );

  // if (!carousel || carousel.length == 0 ) {
  //   return null;
  // }

  return (
    <section id="banners" className="">
      <Swiper className="mySwiper">
        <SwiperSlide className="w-full min-h-[500px] sm:min-h-screen z-0 after:bg-black after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:opacity-60 flex items-center">
          <div className="container">
            <div className="flex flex-col gap-14 sm:gap-20 w-full lg:w-4/5 2xl:w-3/5 pb-10 pt-[200px] xs:pt-[160px]">
              <div className="flex flex-col gap-5">
                {/* <h1>
                  {intl.formatMessage({ id: "bannerTitle" })}
                </h1> */}
                <SmallTitle>
                  {intl.formatMessage({ id: "bannerSub" })}
                </SmallTitle>
                <h1
                  className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-8 sm:leading-[54px] banner__title"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: "bannerTitle" }),
                  }}
                />
                <p className="text-white">
                  {intl.formatMessage({ id: "bannerDesc" })}
                </p>
              </div>
              {/* <div className="flex gap-3 sm:flex-row flex-col">
                <a href={`/${router.locale}/products`}>
                  <Button type="button">
                    {intl.formatMessage({ id: "products" })}
                  </Button>
                </a>
                <a href={`/${router.locale}/contact`}>
                  <Button type="button" state="outline">
                    {intl.formatMessage({ id: "contactus" })}
                  </Button>
                </a>
              </div> */}
            </div>
          </div>

          {/* bg */}
          <div className="absolute top-0 left-0 w-full h-full z-[-2] ">
            <img
              src="/images/banner.jpg"
              alt="banner"
              title="banner"
              className="w-full h-full object-cover"
            />
            {/* <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="/video/video.mp4" type="video/mp4" />
              <source src={item.video_link} type="video/mp4" />
            </video> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
