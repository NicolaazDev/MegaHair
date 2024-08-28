import React from "react";

import { Funcionalidades } from "@/components/funcionalidades";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Free from "@/components/free";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative bg-foreground">
      <Hero />
      {/* <Stats /> */}
      {/* <Funcionalidades />
      <Free />
      <Contact /> */}
    </main>
  );
}
