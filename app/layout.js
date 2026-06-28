import { Toaster } from "react-hot-toast";

import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Header from "@/Components/Layout/Header";
import Footer from "@/Components/Layout/Footer";
import { SearchProvider } from "@/context/SearchContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: {
    default: "Shopet | فروشگاه آنلاین حیوانات خانگی",
    template: "%s | Shopet",
  },

  description:
    "فروشگاه اینترنتی شاپت، خرید غذای سگ، غذای گربه، مکمل، لوازم نگهداری، اسباب‌بازی و محصولات بهداشتی حیوانات خانگی.",
  keywords: [
    "شاپت",
    "فروشگاه حیوانات",
    "غذای سگ",
    "غذای گربه",
    "لوازم حیوانات",
    "Pet Shop",
  ],

  icons: {
    icon: "/icon/Group.svg",
    shortcut: "/icon/Group.svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Shopet | فروشگاه آنلاین حیوانات خانگی",
    description:
      "خرید انواع محصولات سگ، گربه، پرندگان و آبزیان با بهترین قیمت.",
    url: "https://shopet.ir",
    siteName: "Shopet",
    images: [
      {
        url: "/icon/Group.svg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "fa_IR",
    type: "website",
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
