"use client"

import "./globals.css";
import SideBar from "./components/layout/SideBar";
import { store } from "@/redux/ReduxStore";
import { Provider } from "react-redux";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider store={store}>
      <html lang="en">
        <body   >
          <div className="h-screen h-screen flex bg-[var(--base_bg_color)]">
            <aside className="fixed left-0 z-20 block h-full w-[300px] lg:w-[300px] 2xl:w-[400px] bg-[var(--base_bg_color)]]">
              <SideBar />
            </aside>
            <main className="h-full flex-1 flex flex justify-end">
              {children}
            </main>
          </div>
        </body>
      </html>
    </Provider>
  );
}
