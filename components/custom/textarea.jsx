import React from "react";

export default function Textarea({
  type,
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  autoComplete = false,
}) {
  return (
    <>
      <textarea
        type={type}
        placeholder={placeholder}
        placeholder-shown={placeholder}
        name={name}
        id={name}
        required={required}
        autoComplete="off"
        className="px-5 py-4 bg-input w-full border-2 border-gray-100 placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-base
        focus:outline-main rounded-md text-primary resize-none min-h-[160px]"
        {...register(name, validation)}
      ></textarea>
    </>
  );
}
