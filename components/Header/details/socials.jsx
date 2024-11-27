import { facebook, instagram, telegram, youtube } from "@/variable/need";
import { useRouter } from "next/router";
import React from "react";

export default function Socials({ isMobile, lang }) {
  const router = useRouter();
  const data = [
    {
      id: 1,
      name: "Instagram",
      icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 1H5.5C3.01472 1 1 3.01472 1 5.5V14.5C1 16.9853 3.01472 19 5.5 19H14.5C16.9853 19 19 16.9853 19 14.5V5.5C19 3.01472 16.9853 1 14.5 1Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.6 9.43303C13.7111 10.182 13.5832 10.947 13.2344 11.6191C12.8857 12.2913 12.3339 12.8363 11.6575 13.1767C10.9811 13.5172 10.2146 13.6357 9.46704 13.5154C8.71944 13.3951 8.02881 13.0421 7.49338 12.5067C6.95795 11.9712 6.60499 11.2806 6.48469 10.533C6.36439 9.78542 6.48289 9.01893 6.82332 8.34256C7.16376 7.6662 7.7088 7.11439 8.38092 6.76564C9.05303 6.4169 9.81801 6.28896 10.567 6.40003C11.3311 6.51332 12.0384 6.86934 12.5846 7.4155C13.1307 7.96166 13.4867 8.669 13.6 9.43303Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.95 5.05005H14.959" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      link: instagram,
    },
    {
      id: 2,
      name: "Facebook",
      icon: `<svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.3033 1.72217H8.60332C7.40985 1.72217 6.26525 2.19627 5.42134 3.04019C4.57743 3.8841 4.10332 5.02869 4.10332 6.22217V8.92217H1.40332V12.5222H4.10332V19.7222H7.70332V12.5222H10.4033L11.3033 8.92217H7.70332V6.22217C7.70332 5.98347 7.79814 5.75455 7.96692 5.58577C8.13571 5.41699 8.36463 5.32217 8.60332 5.32217H11.3033V1.72217Z" stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> `,
      link: facebook,
    },
    {
      id: 3,
      name: "Telegram",
      icon: `<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0169 0.117465C18.264 0.013456 18.5345 -0.022416 18.8002 0.0135823C19.0659 0.0495806 19.317 0.156133 19.5276 0.32215C19.7381 0.488167 19.9003 0.707579 19.9973 0.957548C20.0942 1.20752 20.1224 1.47891 20.0789 1.74347L17.8109 15.5005C17.5909 16.8275 16.1349 17.5885 14.9179 16.9275C13.8999 16.3745 12.3879 15.5225 11.0279 14.6335C10.3479 14.1885 8.26489 12.7635 8.52089 11.7495C8.74089 10.8825 12.2409 7.62447 14.2409 5.68747C15.0259 4.92647 14.6679 4.48747 13.7409 5.18747C11.4389 6.92547 7.74289 9.56847 6.52089 10.3125C5.44289 10.9685 4.88089 11.0805 4.20889 10.9685C2.98289 10.7645 1.84589 10.4485 0.917888 10.0635C-0.336112 9.54347 -0.275112 7.81947 0.916888 7.31747L18.0169 0.117465Z" fill="black"/>
      </svg>
      `,
      link: telegram,
    },
    {
      id: 4,
      name: "Youtube",
      icon: `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16C11.5971 16 13.128 15.8421 14.5468 15.5526C16.3203 15.1909 17.2062 15.0109 18.0144 13.9715C18.8235 12.9312 18.8235 11.7374 18.8235 9.34972V7.65031C18.8235 5.26267 18.8235 4.06797 18.0144 3.02856C17.2062 1.98915 16.3203 1.80827 14.5468 1.44738C13.0499 1.14735 11.5267 0.997488 10 1.00003C8.40297 1.00003 6.87209 1.15797 5.45327 1.44738C3.67974 1.80915 2.79386 1.98915 1.98563 3.02856C1.17651 4.06885 1.17651 5.26267 1.17651 7.65031V9.34972C1.17651 11.7374 1.17651 12.9321 1.98563 13.9715C2.79386 15.0109 3.67974 15.1918 5.45327 15.5526C6.87209 15.8421 8.40297 16 10 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.496 8.77609C13.3654 9.3108 12.6683 9.69374 11.2751 10.4623C9.7592 11.2978 9.00126 11.7152 8.38803 11.5537C8.18366 11.501 7.99274 11.4056 7.82773 11.274C7.35303 10.8902 7.35303 10.0934 7.35303 8.49991C7.35303 6.90639 7.35303 6.10963 7.82773 5.7258C7.98832 5.5961 8.18067 5.49992 8.38803 5.4461C9.00126 5.28463 9.7592 5.70198 11.2751 6.53757C12.6692 7.30521 13.3654 7.68903 13.496 8.22374C13.5401 8.4055 13.5401 8.59433 13.496 8.77609Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
      link: youtube,
    },
  ];

  if (!data || data.length == 0) {
    return null;
  }

  return (
    <div
      className={` items-center gap-3 ${isMobile ? "hidden sm:flex" : "flex"}`}
    >
      {lang ? (
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
      ) : (
        <></>
      )}
      {data.map((item, index) => (
        <a
          href={item.link}
          key={item.name}
          className="w-7 h-7 rounded-md bg-main flex items-center justify-center hover:bg-second transition-colors duration-200 svg__hover"
        >
          <span dangerouslySetInnerHTML={{ __html: item.icon }} />
        </a>
      ))}
    </div>
  );
}
