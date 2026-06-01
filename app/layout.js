import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

export const metadata = {
  metadataBase: new URL("https://meetsam.me"),
  title: "Meet Sam — Fractional AI PM & Product Builder",
  description:
    "I turn AI product ideas into shipped software. Fast. Fractional AI PM and product builder — from zero to working product, in weeks not months.",
  openGraph: {
    title: "Meet Sam — Fractional AI PM & Product Builder",
    description:
      "I turn AI product ideas into shipped software. Fast. From zero to working product, in weeks not months.",
    url: "https://meetsam.me",
    siteName: "Meet Sam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Sam — Fractional AI PM & Product Builder",
    description: "I turn AI product ideas into shipped software. Fast.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07080d" },
  ],
};

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
