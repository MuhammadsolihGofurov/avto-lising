import { useIntl } from "react-intl";
import { Socials } from "../Header/details";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { email, phone_number, phone_number2 } from "@/variable/need";

export default function Footer() {
  const intl = useIntl();
  const router = useRouter();

  return (
    <div
      className=" py-[80px] relative z-0 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1] after:bg-dark after:opacity-80"
      style={{ background: `url(/images/header-banner.jpg)` }}
    >
      <div className="container">
        <div className="flex flex-col gap-20 items-start">
          <div className="flex flex-col sm:flex-row w-full justify-between items-start gap-10 sm:gap-8 2xl:flex-nowrap flex-wrap">
            <div className="flex flex-col gap-6 sm:gap-10 w-full 2xl:w-[18%]">
              <a href="/" className="w-[120px]" title="Davr All Solar">
                <img
                  src={"/images/logo.png"}
                  layout="responsive"
                  width={"120px"}
                  height={"80px"}
                />
              </a>
              {/* <h3 className="text-white leading-5 font-semibold text-xl">
                {intl.formatMessage({ id: "contactNow" })}
              </h3> */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-start gap-3">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M13.8913 11.1616L10.5968 11.8C8.37138 10.683 6.99675 9.4 6.19675 7.4L6.81272 4.09592L5.64837 1L3.05954 1C1.93199 1 1.04467 1.9317 1.23545 3.04299C1.62791 5.32905 2.66631 9.06956 5.39675 11.8C8.26554 14.6688 12.3246 16.0072 14.8023 16.5913C15.9625 16.8649 16.9968 15.9575 16.9967 14.7655L16.9967 12.345L13.8913 11.1616Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <a
                        href={`tel:${phone_number}`}
                        title={`tel:${phone_number}`}
                        className="text-white leading-[14px] font-normal text-base hover:text-main transition-colors duration-200"
                      >
                        {phone_number}
                      </a>
                      <a
                        href={`tel:${phone_number2}`}
                        title={`tel:${phone_number2}`}
                        className="text-white leading-[14px] font-normal text-base hover:text-main transition-colors duration-200"
                      >
                        {phone_number2}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 15"
                        fill="none"
                      >
                        <path
                          d="M2.6 0.5H15.4C16.28 0.5 17 1.23125 17 2.125V11.875C17 12.7688 16.28 13.5 15.4 13.5H2.6C1.72 13.5 1 12.7688 1 11.875V2.125C1 1.23125 1.72 0.5 2.6 0.5Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17 2.5L9 7.5L1 2.5"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <a
                      href={`mailto:${email}`}
                      title="Phone Number"
                      className="text-white leading-[14px] font-normal text-base hover:text-main transition-colors duration-200"
                    >
                      {email}
                    </a>
                  </div>

                  <div
                    title="Address"
                    className="flex flex-row items-center gap-3 cursor-default"
                  >
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                      >
                        <path
                          d="M17 9C17 13.4183 9 21 9 21C9 21 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                          stroke="white"
                        />
                        <path
                          d="M9.00001 11C10.4728 11 11.6667 9.88071 11.6667 8.5C11.6667 7.11929 10.4728 6 9.00001 6C7.52725 6 6.33334 7.11929 6.33334 8.5C6.33334 9.88071 7.52725 11 9.00001 11Z"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-white leading-6 font-normal text-base">
                      {intl.formatMessage({ id: "ourAddressBody" })}
                    </p>
                  </div>
                </div>
                <Socials />
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10 items-start">
              <h3 className="text-white leading-5 font-semibold text-5">
                {intl.formatMessage({ id: "contactCompany" })}
              </h3>
              <div className="flex flex-col gap-4 items-start">
                {/* <a
                  href={"/products"}
                  key={""}
                  title={""}
                  className="text-grey-5 text-white leading-5 font-normal text-base hover:text-main"
                >
                  {intl.formatMessage({ id: "products" })}
                </a> */}
                <a
                  href={"/contact"}
                  key={""}
                  title={""}
                  className="text-grey-5 text-white leading-5 font-normal text-base hover:text-main"
                >
                  {intl.formatMessage({ id: "contact" })}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10 items-start">
              <h3 className="text-white leading-5 font-semibold text-xl">
                {intl.formatMessage({ id: "contactLinks" })}
              </h3>
              <div className="flex flex-col gap-4 items-start">
                <a
                  href={""}
                  key={""}
                  title={""}
                  className="text-white leading-5 font-normal text-base hover:text-main"
                >
                  {intl.formatMessage({ id: "about" })}
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10 items-start">
              <h3 className="text-white leading-5 font-semibold text-xl">
                {intl.formatMessage({ id: "contactInfo" })}
              </h3>
              <div className="flex flex-col gap-4 items-start">
                <a
                  href={""}
                  key={""}
                  title={""}
                  className="text-white leading-5 font-normal text-base hover:text-main"
                >
                  {intl.formatMessage({ id: "contact" })}
                </a>
              </div>
            </div>
          </div>
          {/* line */}
          <div
            className="w-full h-[2px] opacity-10"
            style={{
              background:
                "linear-gradient(270deg, #f1f1f1 0%, #fff 48.02%, #fff 100%)",
            }}
          ></div>
          {/* line */}
          <div className="flex items-center flex-col sm:flex-row justify-center w-full text-center gap-4">
            <div className="text-white leading-5 font-normal text-base">
              {intl.formatMessage({ id: "footerCopy" })}
            </div>
            {/* <div className="text-white leading-5 font-normal text-base">
              {intl.formatMessage({ id: "footerDeveloment" })}{" "}
              <a
                href="https://teamwork.uz/"
                target="_blank"
                title="Teamwork UZ"
                className="text-main"
              >
                Teamwork.uz
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
