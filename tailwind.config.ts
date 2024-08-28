import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        poppinsExtraLight: "Poppins-ExtraLight",
        poppinsLight: "Poppins-Light",
        poppinsThin: "Poppins-thin",
        poppinsMedium: "Poppins-Medium",
        poppinsRegular: "Poppins-Regular",
        poppinsSemiBold: "Poppins-SemiBold",
        poppinsBold: "Poppins-Bold",
        poppinsExtraBold: "Poppins-ExtraBold",
        bowens: "Bowens",
        montserrat: "Montserrat",
      },
      screens: {
        sm: { min: "310px", max: "467px" },
        md: { min: "468px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1439px" },
        xl2: { min: "1440px", max: "1599px" },
        laptop: { min: "1600px", max: "1920px" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
