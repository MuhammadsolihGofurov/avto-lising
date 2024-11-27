import React from "react";
import { SmallTitle } from "../custom";
import { useIntl } from "react-intl";
import { phone_number } from "@/variable/need";

export default function WorkProcces() {
  const intl = useIntl();

  return (
    <section id="workprocess" className="py-14 sm:py-20">
      <div className="container flex flex-col gap-10 sm:gap-20">
        <div
          className="flex flex-col items-center justify-center gap-2 text-center"
          data-aos="fade-up"
        >
          <SmallTitle>{intl.formatMessage({ id: "workprocess" })}</SmallTitle>
          <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
            {intl.formatMessage({ id: "workprocessTitle" })}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center 2xl:justify-between gap-y-10">
          <div
            className="flex flex-col justify-center items-center text-center gap-2 w-[320px] relative z-0 group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative z-0 w-[120px] h-[120px] rounded-3xl bg-main flex items-center justify-center group-hover:bg-dark transition-colors duration-200">
              <img
                src="/images/icon-step-1.svg"
                alt="icon-step-1"
                title="icon-step-1"
              />
              <p className="font-bold absolute -top-3 -right-3 w-10 h-10 bg-main border-4 border-white rounded-full text-center flex items-center justify-center text-dark">
                01
              </p>
            </div>
            <h4 className="pt-5 font-semibold text-xl">
              {intl.formatMessage({ id: "process1Title" })}
            </h4>
            <p className="text-text-secondary">
              {intl.formatMessage({ id: "process1Body" })}
            </p>
            <img
              src="/images/step-shape-1.svg"
              alt=""
              className="absolute -right-[160px] -top-3 2xl:block hidden"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center text-center gap-2 w-[320px] relative z-0 group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative z-0 w-[120px] h-[120px] rounded-3xl bg-main flex items-center justify-center group-hover:bg-dark transition-colors duration-200">
              <img
                src="/images/icon-step-2.svg"
                alt="icon-step-2"
                title="icon-step-2"
              />
              <p className="font-bold absolute -top-3 -right-3 w-10 h-10 bg-main border-4 border-white rounded-full text-center flex items-center justify-center text-dark">
                02
              </p>
            </div>
            <h4 className="pt-5 font-semibold text-xl">
              {intl.formatMessage({ id: "process2Title" })}
            </h4>
            <p className="text-text-secondary">
              {intl.formatMessage({ id: "process2Body" })}
            </p>
            <img
              src="/images/step-shape-2.svg"
              alt=""
              className="absolute -right-[180px] top-5 2xl:block hidden"
            />
          </div>
          <div
            className="flex flex-col justify-center items-center text-center gap-2 w-[320px] group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative z-0 w-[120px] h-[120px] rounded-3xl bg-main flex items-center justify-center group-hover:bg-dark transition-colors duration-200">
              <img
                src="/images/icon-step-3.svg"
                alt="icon-step-3"
                title="icon-step-3"
              />
              <p className="font-bold absolute -top-3 -right-3 w-10 h-10 bg-main border-4 border-white rounded-full text-center flex items-center justify-center text-dark">
                03
              </p>
            </div>
            <h4 className="pt-5 font-semibold text-xl">
              {intl.formatMessage({ id: "process3Title" })}
            </h4>
            <p className="text-text-secondary">
              {intl.formatMessage({ id: "process3Body" })}
            </p>
          </div>
        </div>

        <div
          className="flex gap-10 rounded-3xl overflow-hidden bg-gray-100 relative z-0 items-center md:p-0 p-5"
          data-aos="fade-up"
        >
          <div className="w-[320px] h-[280px] md:block hidden">
            <img
              src="/images/cta-image.jpg"
              alt="cta-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 md:pl-10 flex-1 md:pr-5">
            <a
              href={`tel:${phone_number}`}
              className="text-xl sm:text-2xl font-semibold"
            >
              {intl.formatMessage({ id: "callTitle" })}
              <span className="text-main"> {phone_number}</span>
            </a>
            <p className="text-text-secondary">
              {intl.formatMessage({ id: "callBody" })}
            </p>
          </div>

          {/* absolute */}
          <div className="w-20 h-20 rounded-full bg-main border-4 border-white items-center    justify-center text-center absolute top-2/4 -translate-y-2/4 left-[280px] md:flex hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="38"
              viewBox="0 0 37 38"
              fill="none"
            >
              <path
                d="M36.1979 28.5421C35.043 27.5735 28.2693 23.2842 27.1435 23.481C26.6149 23.5749 26.2105 24.0255 25.1283 25.3165C24.6278 25.952 24.0781 26.5471 23.4844 27.0965C22.3966 26.8337 21.3436 26.4434 20.3474 25.9336C16.4403 24.0314 13.2838 20.8741 11.3828 16.9664C10.873 15.9701 10.4827 14.9172 10.2199 13.8293C10.7693 13.2356 11.3644 12.686 11.9999 12.1855C13.2896 11.1032 13.7415 10.7015 13.8354 10.1703C14.0323 9.0418 9.73893 2.2708 8.77429 1.11587C8.36993 0.637513 8.00257 0.316406 7.53214 0.316406C6.16843 0.316406 0 7.94369 0 8.93212C0 9.01273 0.132143 16.9532 10.1605 27.1559C20.3632 37.1843 28.3037 37.3164 28.3843 37.3164C29.3727 37.3164 37 31.148 37 29.7843C37 29.3138 36.6789 28.9465 36.1979 28.5421Z"
                fill="white"
              ></path>
              <path
                d="M27.7499 17.4953H30.3927C30.3896 14.6925 29.2748 12.0054 27.2929 10.0236C25.3111 8.04176 22.624 6.92698 19.8213 6.92383V9.56669C21.9234 9.56878 23.9389 10.4048 25.4253 11.8912C26.9118 13.3777 27.7478 15.3931 27.7499 17.4953Z"
                fill="white"
              ></path>
              <path
                d="M34.357 17.495H36.9999C36.9946 12.9405 35.183 8.57416 31.9626 5.35369C28.7421 2.13322 24.3757 0.321652 19.8213 0.316406V2.95926C23.675 2.96381 27.3696 4.49671 30.0946 7.2217C32.8196 9.94669 34.3525 13.6413 34.357 17.495Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
