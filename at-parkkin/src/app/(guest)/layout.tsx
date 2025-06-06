import Banners from "@/components/banner";
import React from "react";

function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banners />
      {children}
    </>
  );
}

export default GuestLayout;
