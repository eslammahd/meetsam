import "./globals.css";

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
    description:
      "I turn AI product ideas into shipped software. Fast.",
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
