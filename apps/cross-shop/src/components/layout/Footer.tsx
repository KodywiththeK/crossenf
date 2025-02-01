import { Container } from "@common/design";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200">
        <Container className="flex flex-col items-center justify-center gap-1 py-4">
          <p className="font-semibold">CROSS SHOP</p>
          <p>Frontend Developer. 김동성</p>
        </Container>
      </footer>
      <nav className="sticky bottom-0 z-40 block bg-gray-100 py-5 text-center sm:hidden">
        모바일 네비게이션바
      </nav>
    </>
  );
}
