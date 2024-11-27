import { Button } from "@/components/custom";
import { toggleOffcanvas } from "@/redux/slice/settings";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";

export default function Menu() {
  const intl = useIntl();
  const router = useRouter();
  const dispatch = useDispatch();

  const data = [
    { id: 1, name: intl.formatMessage({ id: "home" }), url: "/" },
    { id: 2, name: intl.formatMessage({ id: "about" }), url: "#about" },
    // { id: 3, name: intl.formatMessage({ id: "products" }), url: "/products" },
    // { id: 4, name: intl.formatMessage({ id: "blogs" }), url: "/blogs" },
    // { id: 5, name: intl.formatMessage({ id: "projects" }), url: "/projects" },
  ];

  return (
    <div className="gap-10 items-center flex">
      <div className="hidden 2xl:flex items-center gap-10">
        {data.map((item) => {
          return (
            <Link href={`/${router.locale}${item.url}`} key={item.id}>
              <span className="capitalize font-medium hover:text-main text-white cursor-pointer">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-1">
        {router.locales.map((item, index) => {
          return (
            <a
              href={`/${item}/${router.asPath}`}
              key={item}
              className={`uppercase font-medium ${
                router.locale == item ? "text-main" : "text-white"
              }`}
            >
              {item} {index == 0 ? "/" : ""}
            </a>
          );
        })}
      </div>
      <a href={`/${router.locale}/contact`} className="xs:block hidden">
        <Button type="button">{intl.formatMessage({ id: "contactus" })}</Button>
      </a>
      <button
        type="button"
        onClick={() => dispatch(toggleOffcanvas())}
        className="2xl:hidden block"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
