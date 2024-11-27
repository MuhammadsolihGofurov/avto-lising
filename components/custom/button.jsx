import React from "react";

export default function Button({
  type = "button",
  state = "bg",
  children,
  disable = false,
  pageProps,
  onClick = () => {},
}) {
  const classes =
    state === "outline" ? "rounded-full text-main" : "bg-main rounded-full";

  return (
    <button
      type={type}
      disable={disable}
      className={`${classes} border-2 border-main  py-3 px-5 font-semibold relative z-0 after:w-0 after:h-full after:absolute after:top-0 after:left-0 after:bg-second hover:after:w-full after:z-[-1] overflow-hidden after:transition-all after:duration-200 hover:text-white hover:after:right-0 hover:after:left-auto ease-in`}
      onClick={onClick}
      {...pageProps}
    >
      {children}
    </button>
  );
}
