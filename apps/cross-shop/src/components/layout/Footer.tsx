import { Container } from "@common/design";
import React from "react";
import MobileNavBar from "./MobileNavBar";

export default function Footer() {
  return (
    <>
      <footer className="mb-[72px] w-full bg-gray-200 sm:mb-0">
        <Container className="flex flex-col items-center justify-center gap-1 py-4">
          <p className="font-semibold">CROSS SHOP</p>
          <p>Frontend Developer. 김동성</p>
        </Container>
      </footer>
      <MobileNavBar />
    </>
  );
}
