import React from "react";
import InputMask from "react-input-mask";

export default function Input({
  type,
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  autoComplete = false,
  ref = () => {},
}) {
  if (type === "tel") {
    return (
      <div className="relative">
        <InputMask
          mask="+999 (99) 999 99 99"
          {...register(name, validation)}
          className="relative"
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type="tel"
              placeholder={"+998 (__) ___ __ __"}
              placeholder-shown={placeholder}
              name={name}
              id={name}
              required={required}
              autoComplete="off"
              className="px-5 py-4 bg-input border-2 border-gray-100 w-full placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-base focus:outline-main rounded-2xl text-primary"
            />
          )}
        </InputMask>
        {/* <span className="text-primary absolute top-4 left-4">+998</span> */}
      </div>
    );
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      placeholder-shown={placeholder}
      name={name}
      id={name}
      required={required}
      autoComplete="off"
      className="px-5 py-4 bg-input border-2 border-gray-100 w-full placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-base focus:outline-main rounded-2xl text-primary"
      {...register(name, validation)}
    />
  );
}
