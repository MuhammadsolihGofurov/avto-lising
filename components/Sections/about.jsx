import React from "react";
import { useIntl } from "react-intl";
import { Button, SmallTitle } from "../custom";
import { useRouter } from "next/router";

export default function AboutSection({ isButton = true }) {
  const intl = useIntl();
  const router = useRouter();

  const advantages = [
    intl.formatMessage({ id: "aboutadv1" }),
    intl.formatMessage({ id: "aboutadv2" }),
    intl.formatMessage({ id: "aboutadv3" }),
    intl.formatMessage({ id: "aboutadv4" }),
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div
            className="relative z-0 flex-1 sm:w-auto w-full"
            data-aos="fade-left"
          >
            {/* image 1 */}
            <div className="w-full sm:w-[450px] h-[300px] sm:h-[450px] rounded-3xl overflow-hidden image__hover group">
              <img
                src="/images/about-1.jpg"
                alt="about-1"
                title="about-title"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in"
                data-fancybox="about"
                href="/images/about-1.jpg"
              />
            </div>
            <div className="w-[180px] sm:w-[295px] h-[150px] sm:h-[250px] rounded-3xl overflow-hidden image__hover group absolute bottom-[-100px] right-0 border-4 border-white ">
              <img
                src="/images/about-2.jpg"
                alt="about-2"
                title="about-title"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in"
                data-fancybox="about"
                href="/images/about-2.jpg"
              />
            </div>

            {/* absolute */}
            <img
              src="/images/about-right-shape.svg"
              alt=""
              className="absolute sm:right-14 z-[-1] top-0"
            />
          </div>
          <div
            className="flex flex-col flex-1 gap-8 sm:gap-10 lg:pt-0 pt-20"
            data-aos="fade-right"
          >
            <div className="flex flex-col gap-5">
              <SmallTitle>{intl.formatMessage({ id: "about" })}</SmallTitle>
              <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-semibold">
                {intl.formatMessage({ id: "aboutTitle" })}
              </h2>
            </div>
            <p
              className="text-text-secondary"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "aboutDescription" }),
              }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {advantages?.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_56_86)">
                      <path
                        d="M16.5 8.3099V8.9999C16.4991 10.6172 15.9754 12.1909 15.007 13.4863C14.0386 14.7816 12.6775 15.7293 11.1265 16.1878C9.57557 16.6464 7.91794 16.5913 6.40085 16.0308C4.88376 15.4703 3.58849 14.4345 2.70822 13.0777C1.82795 11.7209 1.40984 10.1159 1.51626 8.50213C1.62267 6.88832 2.24791 5.35214 3.29871 4.1227C4.34951 2.89326 5.76959 2.03644 7.34714 1.68001C8.92469 1.32358 10.5752 1.48665 12.0525 2.1449"
                        stroke="#F9B253"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.5 3L9 10.5075L6.75 8.2575"
                        stroke="#F9B253"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_56_86">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="flex-1">{item}</span>
                </div>
              ))}
            </div>
            {/* {isButton ? (
              <a
                href={`${router.locale}/about`}
                title={intl.formatMessage({ id: "about" })}
              >
                <Button>{intl.formatMessage({ id: "readMore" })}</Button>
              </a>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}
