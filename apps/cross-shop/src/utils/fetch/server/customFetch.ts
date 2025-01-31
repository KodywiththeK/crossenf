import { cache } from "react";
import { FetchAdapter } from "./FetchAdapter";
import { FileAdapter } from "../adapters/FileAdapter";

/**
 * Adapter 패턴을 적용한 범용 데이터 로드 함수
 * @param source - 가져올 데이터의 소스 (파일명 or API 엔드포인트)
 * @param adapter - 사용할 데이터 소스 Adapter (기본값: FileAdapter)
 * @returns `T` 타입으로 변환된 데이터
 */
export const customFetch = cache(
  async <T>(source: string, adapter: FetchAdapter = new FileAdapter()): Promise<T> => {
    return adapter.fetch<T>(source);
  },
);
