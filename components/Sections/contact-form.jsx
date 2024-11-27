import React, { useState } from "react";
import { Button, Input, SmallTitle, Textarea } from "../custom";
import { useIntl } from "react-intl";
import { useForm } from "react-hook-form";
import axios from "@/utils/axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { sendMessageToTelegramGroup } from "@/utils/send-message";

export default function ContactForm() {
  const intl = useIntl();
  const [reqLoading, setReqLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone_number: "",
      content: "",
      page: "Contact sahifasi",
    },
  });

  const submitFn = async (data) => {
    try {
      setReqLoading(true);

      const message = `
  <b>Yangi so'rov:</b>
  <b>Ism:</b> ${data.fullname}
  <b>Telefon:</b> ${data.phone_number}
  <b>Email:</b> ${data.email}
  <b>Xabar:</b> ${data.content}
  <b>Sahifa:</b> ${data.page}
      `;

      await sendMessageToTelegramGroup(message);
      // const question = await axios.post("connect/", data);
      Swal.fire({
        title: intl.formatMessage({ id: "successTitle" }),
        text: intl.formatMessage({ id: "successBody" }),
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.reload();
      }, 2000);
      reset();
    } catch (e) {
      setTimeout(() => {
        console.error(e);
        Swal.fire({
          title: "Error",
          text: e?.response?.data?.reason || e.message,
          icon: "error",
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }, 1500);
    } finally {
      setReqLoading(false);
    }
  };

  return (
    <section id="contact-form" className="relative z-0 py-10 ">
      <div className="container flex md:flex-row flex-col-reverse items-center gap-5">
        <div
          className="flex-1 rounded-3xl overflow-hidden md:w-auto w-full"
          data-aos="fade-left"
        >
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A7d0f568b89f38bbd3a3d9c99b8c5ebb29e89838f63eaee21d31ad5ea4ccfc68b&amp;source=constructor"
            width="100%"
            frameborder="0"
            className="h-[320px] sm:h-[600px]"
          ></iframe>
        </div>
        <div
          className="flex-1 flex flex-col gap-10 md:w-auto w-full"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-start justify-start gap-2 ">
            <SmallTitle>
              {intl.formatMessage({ id: "contactsFormTitle" })}
            </SmallTitle>
            <h2 className="text-2xl sm:tex-3xl lg:text-4xl font-bold">
              {intl.formatMessage({ id: "contactsFormBody" })}
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(submitFn)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <Input
              type={"name"}
              register={register}
              name={"fullname"}
              placeholder={intl.formatMessage({ id: "nameInput" })}
              id="fullname"
              required
            />
            <Input
              type={"tel"}
              register={register}
              name={"phone_number"}
              placeholder={intl.formatMessage({ id: "phoneInput" })}
              id="phone"
              required
            />
            <div className="sm:col-span-2 col-span-1">
              <Input
                type={"email"}
                register={register}
                name={"email"}
                placeholder={intl.formatMessage({ id: "emailInput" })}
                id="email"
                required
              />
            </div>
            <div className="sm:col-span-2 col-span-1">
              <Textarea
                type={"text"}
                register={register}
                name={"content"}
                placeholder={intl.formatMessage({ id: "message" })}
                id="content"
                required
              />
            </div>
            <Button type="submit" disable={reqLoading}>
              {reqLoading
                ? intl.formatMessage({ id: "sending" })
                : intl.formatMessage({ id: "send" })}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
