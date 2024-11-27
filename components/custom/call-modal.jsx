import axios from "@/utils/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { toggleCallModal } from "@/redux/slice/settings";
import { Button, Input, Textarea } from ".";
import { sendMessageToTelegramGroup } from "@/utils/send-message";

export default function CallModal() {
  const router = useRouter();
  const intl = useIntl();
  const { callModal } = useSelector((state) => state.settings);
  const [reqLoading, setReqLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      description: "",
      page: "Modal Oyna",
    },
  });

  const submitFn = async (data) => {
    try {
      setReqLoading(true);

      const message = `
  <b>Yangi so'rov:</b>
  <b>Ism:</b> ${data.name}
  <b>Telefon:</b> ${data.phone}
  <b>Xabar:</b> ${data.description}
  <b>Sahifa:</b> ${data.page}
      `;

      await sendMessageToTelegramGroup(message);

      Swal.fire({
        title: intl.formatMessage({ id: "successTitle" }),
        text: intl.formatMessage({ id: "successBody" }),
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
      });

      dispatch(toggleCallModal());
      reset();
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: "Error",
        text: e?.response?.data?.reason || e.message,
        icon: "error",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
      });
    } finally {
      setReqLoading(false);
    }
  };

  return (
    <div
      className={`modal fixed w-full h-screen top-0 left-0 z-[1000] bg-black bg-opacity-25 items-center justify-center p-5 overflow-y-scroll flex scroll__hidden ${
        callModal ? "opacity-100 visible z-[100]" : "opacity-0 invisible z-[-1]"
      } transition-opacity duration-150`}
      onClick={() => dispatch(toggleCallModal())}
    >
      <div
        className={`modal__box bg-white px-7 xs:px-10 pt-20 pb-10 w-full sm:w-[500px] rounded-3xl relative ${
          callModal
            ? "scale-100 visible transition-transform duration-200"
            : "scale-0 invisible"
        } `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-7 right-7 xs:right-10"
          onClick={() => dispatch(toggleCallModal())}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4242 1.08484L1.42419 13.0848"
              stroke="#242424"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary"
            />
            <path
              d="M1.42419 1.08484L13.4242 13.0848"
              stroke="#242424"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary"
            />
          </svg>
        </button>

        <form
          onSubmit={handleSubmit(submitFn)}
          id="modal__register"
          className="grid grid-cols-1 gap-2 sm:gap-4"
        >
          <Input
            type={"name"}
            register={register}
            name={"name"}
            placeholder={intl.formatMessage({ id: "nameInput" })}
            label={intl.formatMessage({ id: "nameInput" })}
            id="modalname"
            required
            color="dark"
          />
          <Input
            type={"tel"}
            register={register}
            name={"phone"}
            placeholder={intl.formatMessage({ id: "phoneInput" })}
            label={intl.formatMessage({ id: "phoneInput" })}
            id="modalphone"
            required
            color="dark"
          />
          <Textarea
            register={register}
            name={"description"}
            placeholder={intl.formatMessage({
              id: "message",
            })}
            label={intl.formatMessage({ id: "message" })}
            id="modaldescription"
            required
            color="dark"
          />
          <Button
            type="submit"
            // className="p-3 rounded-md bg-second_light min-w-[172px] font-bold uppercase hover:bg-second_dark hover:text-white transition-colors duration-200"
          >
            {reqLoading
              ? intl.formatMessage({ id: "sending" })
              : intl.formatMessage({ id: "send" })}
          </Button>
        </form>
      </div>

      {/* <ConfirmRegister username={}/> */}
    </div>
  );
}
