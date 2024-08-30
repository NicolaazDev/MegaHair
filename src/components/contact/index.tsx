"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import EmailJs from "@emailjs/browser";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { toast } from "sonner";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "leaflet/dist/leaflet.css";
import { useTranslations } from "next-intl";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";

const position = [51.505, -0.09];

// Define the Zod schema
const schema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  fone: z.string().min(1, "Telefone é obrigatório"),
  msg: z.string().min(1, "Mensagem é obrigatória"),
});

type FormData = z.infer<typeof schema>;

function ContactSection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);

    const templateParams = {
      from_name: data.nome,
      email: data.email,
      tel: data.fone,
      message: data.msg,
    };

    EmailJs.send(
      "service_tjwyl4l",
      "template_rjk51in",
      templateParams,
      "_tFrro4jVruZI7Th-"
    )
      .then((response: any) => {
        toast("Email enviado com sucesso!", {
          description: `Enviado ás ${new Date().toLocaleTimeString()}`,
        });
      })
      .catch((error: any) => {
        toast("Falha ao enviar o email", {
          description: `Erro: ${error.text}`,
        });
      });
  };

  const t = useTranslations("contact");

  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotate: 100,
      ease: "none",
      scrollTrigger: {
        trigger: logoRef.current,
        start: "-40%",
        end: "bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="contact" className="center h-screen relative overflow-hidden">
      <img
        ref={logoRef}
        src="https://res.cloudinary.com/dmceve2cp/image/upload/v1724886824/ISLAVA-13_akotrc.png"
        className="absolute w-[200px] h-[200px] object-cover bottom-0 left-0 scale-[7] z-0 -rotate-45 invert-[.7] opacity-100"
      />
      <div className="max-w-[1440px] mx-auto center w-full h-full">
        <div className="w-[50%] p-8 rounded-lg z-[14]">
          <h2 className="text-[80px] leading-[1.1] font-bold mb-6 uppercase">
            {t("title")}
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="mb-4 input-field">
              <label className="block text-gray-700">{t("input1")}</label>
              <input
                type="text"
                {...register("nome")}
                placeholder="Johnny Doe"
              />
              {errors.nome && <p>{errors.nome.message}</p>}
            </div>
            <div className="mb-4 input-field">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="myemail@email.com"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="mb-4 input-field">
              <label className="block text-gray-700">{t("input2")}</label>
              <PhoneInput
                country={t("location")}
                value={""}
                onChange={(phone) => setValue("fone", phone)}
                containerClass="w-full !border-transparent"
                buttonClass="!border-gray-300 !px-4 !rounded-[8px]"
                inputClass="w-full input px-4 py-2 !pl-[80px] rounded-lg !border-gray-300 focus:outline-none focus:border-blue-500"
              />
              {errors.fone && <p>{errors.fone.message}</p>}
            </div>
            <div className="mb-4 input-field textarea-field">
              <label className="block text-gray-700">{t("input3")}</label>
              <textarea
                {...register("msg")}
                placeholder={t("textPlaceholder")}
              ></textarea>
              {errors.msg && <p>{errors.msg.message}</p>}
            </div>
            <button type="submit" className="main-button contact-button">
              {t("cta")}
            </button>
          </form>
        </div>
        <div className="bg-primary h-[80%] rounded-2xl w-[50%]">
          {/* <MapContainer
            className="z-20 h-full w-full"
            center={[41.2049, -8.2826]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.2049, -8.2826]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer> */}
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dmceve2cp/image/upload/v1725045433/imagem_2024-08-30_161710974_edwiru.png"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
