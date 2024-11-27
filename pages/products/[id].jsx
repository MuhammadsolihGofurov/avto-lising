import {
  AboutSection,
  Advantages,
  Blogs,
  HomeBanners,
  WorkProcess,
} from "@/components";
import Products from "@/components/Sections/products";
import Seo from "@/components/Seo/Seo";
import { Breadcrumbs } from "@/components/custom";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { formatTimestamp, thousandSeperate } from "@/utils/funcs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";

function page({ info, params }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <>
      <Seo
        title={info?.seo_title}
        description={info?.seo_description}
        keywords={info?.seo_keywords}
      />
      <main>
        <Breadcrumbs
          bg={"/images/header-banner.jpg"}
          title={info.title}
          link={"products"}
        />
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-5 py-10 sm:py-20">
            <div className="w-full lg:w-[500px] bg-gray-100 flex items-center justify-center p-5 rounded-3xl">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {info?.additional_images?.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <a
                        className="w-full h-full flex items-center justify-center"
                        data-fancybox="product"
                        href={item.image}
                      >
                        <img
                          src={item.image}
                          alt={info.title}
                          className="w-2/3"
                        />
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="flex-1 w-full flex flex-col lg:w-auto gap-3">
              <h1 className="text-xl sm:text-3xl font-bold">{info.title}</h1>
              <p className="text-text-secondary">{info.description}</p>
              <ul className="text-base text-text-secondary list-disc list-inside">
                {info.additional_info.map((item, index) => {
                  return <li key={index}>{item.info}</li>;
                })}
              </ul>
              <p className="font-semibold text-xl sm:text-2xl">
                <span className="text-text-secondary text-lg sm:text-xl">
                  {intl.formatMessage({ id: "price" })}:
                </span>{" "}
                {thousandSeperate(info.price)}{" "}
                <span className="text-text-secondary">
                  {intl.formatMessage({ id: "sum" })}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  // fetch product
  // const info = "salom";

  const info = await axios
    .get(`products/${params?.id}/`, {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => res?.data)
    .catch((err) => console.error(err));

  if (!info) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      info: info,
      params,
    },
  };
}

export default page;
