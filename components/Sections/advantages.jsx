import React from "react";
import { useIntl } from "react-intl";
import { SmallTitle } from "../custom";

export default function Advantages() {
  const intl = useIntl();

  const data = [
    {
      id: 1,
      name: intl.formatMessage({ id: "adv1Title" }),
      icon: "/images/adv-1.svg",
      body: intl.formatMessage({ id: "adv1Body" }),
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "adv2Title" }),
      icon: "/images/adv-2.svg",
      body: intl.formatMessage({ id: "adv2Body" }),
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "adv3Title" }),
      icon: "/images/adv-3.svg",
      body: intl.formatMessage({ id: "adv3Body" }),
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "adv4Title" }),
      icon: "/images/adv-4.svg",
      body: intl.formatMessage({ id: "adv4Body" }),
    },
  ];

  return (
    <section id="advantages" className="bg-gray-50 py-10 sm:py-20">
      <div className="container flex flex-col gap-10 sm:gap-20">
        <div
          className="flex flex-col items-center justify-center gap-2 text-center"
          daa-aos="fade-up"
        >
          <SmallTitle>{intl.formatMessage({ id: "whychooseus" })}</SmallTitle>
          <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
            {intl.formatMessage({ id: "whychooseusTitle" })}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 bg-white p-5 rounded-3xl border-2 border-transparent hover:border-second cursor-pointer hover:scale-105 transition-color duration-200"
              data-aos="fade-up"
            >
              <img
                src={item.icon}
                alt={item.title}
                title={item.title}
                className="w-16 h-16"
              />
              <h6 className="text-lg font-semibold text-dark">{item.name}</h6>
              <p className="text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
