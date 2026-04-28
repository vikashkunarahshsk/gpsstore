import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";
import { Toaster } from "./ui/sonner";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingCall />
      <Toaster position="top-center" richColors />
    </div>
  );
};
