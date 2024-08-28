"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormContext } from "@/context/formContext";

const schema = z
  .object({
    email: z.string().email("E-mail inválido").min(1, "E-mail é obrigatório"),
    password: z
      .string()
      .min(6, "Senha deve ter pelo menos 6 caracteres")
      .min(1, "Senha é obrigatória"),
    username: z.string().min(1, "Username é obrigatório"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm: React.FC = () => {
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
        Crie sua conta
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Bem-vindo! Crie sua conta para continuar.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="username"
            {...register("username")}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              errors.username ? "!border-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="error-label">{errors.username.message}</p>
          )}
        </div>
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
              errors.password ? "!border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="error-label">{errors.password.message}</p>
          )}
        </div>
        <div className="input-field">
          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="********"
            {...register("confirmPassword")}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm ${
              errors.confirmPassword ? "!border-red-500" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="error-label">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className="main-button mt-4">
          Registrar
        </button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{" "}
            <a
              href="#signup"
              onClick={toggleForm}
              className="text-blue-500 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
