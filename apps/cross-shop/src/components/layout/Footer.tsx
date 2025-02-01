import { Container } from "@common/design";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200">
        <Container className="flex items-center flex-col justify-center gap-1 py-4">
          <p className="font-semibold">CROSS SHOP</p>
          <p>Frontend Developer. 김동성</p>
        </Container>
      </footer>
      <nav className="block sm:hidden bg-gray-100 py-5 text-center sticky bottom-0 z-40">
        모바일 네비게이션바
      </nav>
    </>
  );
}
