import { promises as fs } from "fs";
import path from "path";
import { FetchAdapter } from "../server/FetchAdapter";

export class FileAdapter implements FetchAdapter {
  async fetch<T>(filename: string): Promise<T> {
    const filePath = path.join(process.cwd(), "data", filename);

    try {
      await delay(500); // 0.5초 딜레이 추가
      const fileContent = await fs.readFile(filePath, "utf-8");
      return JSON.parse(fileContent) as T;
    } catch (error) {
      console.error(`${filename} 파일을 읽는 중 오류 발생:`, error);
      throw new Error(`${filename} 파일을 불러오지 못했습니다.`);
    }
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
