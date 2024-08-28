"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { useFormContext } from "@/context/formContext";

const schema = z.object({
  email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
  password: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .min(1, "Senha é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const { toggleForm } = useFormContext();

  return (
    <div className="bg-background p-7 mt-5 rounded-lg mx-auto w-full max-w-[500px] sm:w-full">
      <h2 className="text-3xl font-poppinsRegular mb-2 text-center">
        Faça seu login
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Bem-vindo de volta! Entre na sua conta para continuar.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="seuemail@email.com"
            {...register("email")}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              errors.email ? "!border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="error-label">{errors.email.message}</p>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="error-label">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between mb-4">
          <a
            href="#forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Esqueci minha senha
          </a>
        </div>

        <button type="submit" className="main-button">
          Entrar
        </button>

        <div className="border-b bg-gray-300 w-full h-[1px] my-7 center">
          <span className="px-4 text-gray-600 bg-background">ou</span>
        </div>

        <div className="my-4 text-center center !justify-between gap-x-2">
          <button className="bg-red-600 h-[55px] hover:bg-red-700 transition-all w-full text-white font-bold py-2 px-4 rounded center space-x-2">
            <IoLogoGoogle size={24} />
            <span>Google</span>
          </button>
          <button className="bg-blue-600 h-[55px] hover:bg-blue-700 transition-all w-full text-white font-bold py-2 px-4 rounded center space-x-2">
            <IoLogoFacebook size={24} />
            <span>Facebook</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{" "}
            <a
              href="#signup"
              onClick={toggleForm}
              className="text-blue-500 hover:underline"
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
