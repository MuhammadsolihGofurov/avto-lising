import {
  AboutSection,
  Advantages,
  Blogs,
  HomeBanners,
  Results,
  Teams,
  WorkProcess,
} from "@/components";
import Feadback from "@/components/Sections/feadback";
import Products from "@/components/Sections/products";
import Seo from "@/components/Seo/Seo";
import { Breadcrumbs } from "@/components/custom";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import useSWR from "swr";

function page({ info }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <>
      <Seo
        title={info?.seo_about_title}
        description={info?.seo_about_description}
        keywords={info?.seo_about_keywords}
      />
      <main>
        <Breadcrumbs
          bg={"/images/header-banner.jpg"}
          title={intl.formatMessage({ id: "about" })}
          link={"about"}
        />
        <AboutSection isButton={false} />
        <Advantages />
        <WorkProcess />
        <Feadback />
        <Results />
        <Teams />
      </main>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  // fetch product
  // const info = "salom";
  const info = await axios
    .get(`seo/`, {
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
    },
  };
}

export default page;
