import sharedConfig from "../../packages/design/tailwind.config";

const config = {
  ...sharedConfig, // 🟢 @common/design의 Tailwind 설정을 그대로 가져옴
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [...(sharedConfig.plugins || [])], // 🟢 공통 플러그인 유지
};

export default config;
