import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

import "../../styles/globals.css";

import { FormProvider } from "@/context/formContext";

export const metadata: Metadata = {
  title: "Islava - Loja de Mega Hair",
  description: "Islava - Loja de Mega Hair",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-montserrat">
        <NextIntlClientProvider messages={messages}>
          <FormProvider>{children}</FormProvider>
          <Toaster position="bottom-left" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
