import Projects from "@/components/Sections/projects";
import Seo from "@/components/Seo/Seo";
import { Breadcrumbs } from "@/components/custom";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

function page({ info }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <>
      <Seo
        title={info?.seo_products_title}
        description={info?.seo_products_description}
        keywords={info?.seo_products_keywords}
      />
      <main>
        <Breadcrumbs
          bg={"/images/header-banner.jpg"}
          title={intl.formatMessage({ id: "projects" })}
          link={"projects"}
        />
        <Projects isProducts={true} />
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
