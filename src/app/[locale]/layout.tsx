import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";

import "../../styles/globals.css";

import { FormProvider } from "@/context/formContext";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

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
