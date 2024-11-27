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
import { formatTimestamp } from "@/utils/funcs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
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
          link={"blogs"}
        />
        <div className="container">
          <div className="flex flex-col gap-5 py-10 sm:py-20">
            <h1 className="text-2xl sm:text-3xl font-bold">{info.title}</h1>
            <p className="text-text-secondary">{info.content}</p>
            <img
              src={info.image}
              alt={info.title}
              title={info.title}
              className="w-full rounded-3xl object-cover my-5"
              data-fancybox="news"
              href={info.image}
            />
            <p className="text-text-secondary">
              {formatTimestamp(info.date_posted)}
            </p>
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
    .get(`news/${params?.id}/`, {
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
