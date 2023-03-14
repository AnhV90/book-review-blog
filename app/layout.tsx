import "./globals.css";

import Nav from "./nav";
import ThemeProvider from "./theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white transition duration-300 dark:bg-gray-900">
        <ThemeProvider>
          <main className="dark:text-gray-100 text-gray-900 leading-tight">
            <Nav />
            <section className="container mx-auto py-8">{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
