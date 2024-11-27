import {
  AboutSection,
  Advantages,
  Blogs,
  HomeBanners,
  Price,
  Results,
  WorkProcess,
} from "@/components";
import Products from "@/components/Sections/products";
import Seo from "@/components/Seo/Seo";
import CallModal from "@/components/custom/call-modal";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

function page({ info }) {
  const router = useRouter();
  const dispatch = useDispatch();

  // const { data: services } = useSWR(["services", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );

  // useEffect(() => {
  //   dispatch(setServices(services?.data));
  // }, [services?.data]);

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <>
      <Seo
        title={"Halol Avto Lizing"}
        // title={info?.seo_home_title}
        // description={info?.seo_home_description}
        description={"Halol Avto Lizing"}
        // keywords={info?.seo_home_keywords}
        keywords={"avto lizing, robot, index, tashkent lizing, mashina olish"}
      />
      <main>
        <HomeBanners />
        <AboutSection />
        <Price />
        {/* <Products /> */}
        <WorkProcess />
        {/* <Results /> */}
        <Advantages />
        {/* <Blogs /> */}
        <CallModal />
      </main>
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  // fetch product
  const info = "salom";
  // const info = await axios
  //   .get(`seo/`, {
  //     headers: {
  //       "Accept-Language": locale,
  //     },
  //   })
  //   .then((res) => res?.data)
  //   .catch((err) => console.error(err));

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
