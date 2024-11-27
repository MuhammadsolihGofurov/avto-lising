import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

export default function Breadcrumbs({
  bg = "",
  link = "/",
  title = "Default Title",
}) {
  const intl = useIntl();
  const router = useRouter();
  return (
    <div
      className="w-full min-h-[400px] sm:min-h-[500px] relative z-0 after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-40 after:absolute after:z-[-1] text-white flex items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col gap-3">
        <h1 className="pt-20 text-2xl sm:text-4xl font-bold uppercase">{title}</h1>
        <div className="flex gap-3 flex-wrap">
          <a href={`/${router.locale}`} className="font-medium opacity-90">
            {intl.formatMessage({ id: "home" })}
          </a>
          <span>/</span>
          <a href={`/${router.locale}/${link}`} className="font-semibold">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}
