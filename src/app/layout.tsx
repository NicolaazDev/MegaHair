import type { Metadata } from "next";

import "../styles/globals.css";

import { FormProvider } from "@/context/formContext";

export const metadata: Metadata = {
  title: "Politica & Gestão",
  description: "Software de gestão politica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-poppinsLight">
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
