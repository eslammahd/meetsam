import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

export const metadata = {
  metadataBase: new URL("https://meetsam.me"),
  title: "Sam — I build AI-native products end to end",
  description:
    "Senior product manager. Six years fixing growth, activation and retention problems at B2B SaaS and marketplace companies across MENA — now architecting multi-agent workflows that ship production software.",
  openGraph: {
    title: "Sam — I build AI-native products end to end",
    description:
      "Senior product manager, now architecting multi-agent workflows that ship production software, spec to deployed product.",
    url: "https://meetsam.me",
    siteName: "Meet Sam",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam — I build AI-native products end to end",
    description: "Senior product manager building multi-agent workflows that ship production software.",
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
