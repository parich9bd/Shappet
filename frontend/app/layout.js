import "./globals.css";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";

import { Toaster } from "react-hot-toast";
import { SearchProvider } from "@/context/SearchContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: {
    default: "Shopet | فروشگاه آنلاین حیوانات خانگی",
    template: "%s | Shopet",
  },

  description:
    "فروشگاه اینترنتی شاپت، خرید غذای سگ، غذای گربه، مکمل، لوازم نگهداری و...",

  authors: [
    {
      name: "Parichehr",
      url: "https://github.com/Parich9abd",
    },
  ],

  creator: "Parichehr",

  publisher: "Shopet",

  applicationName: "Shopet",

  generator: "Next.js",

  category: "Pet Shop",

  metadataBase: new URL("https://shopet.ir"),

  keywords: ["شاپت", "غذای سگ", "غذای گربه", "Pet Shop"],

  icons: {
    icon: "/icon/Group.svg",
    shortcut: "/icon/Group.svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Shopet",
    description: "فروشگاه آنلاین حیوانات خانگی",
    url: "https://shopet.ir",
    siteName: "Shopet",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/icon/Group.svg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopet",
    description: "فروشگاه آنلاین حیوانات خانگی",
    images: ["/icon/Group.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReactQueryProvider>
          <SearchProvider>
            <FavoritesProvider>
              <CartProvider>
                <Header />

                <main className="container">{children}</main>

                <Toaster position="top-center" />

                <Footer />
              </CartProvider>
            </FavoritesProvider>
          </SearchProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
