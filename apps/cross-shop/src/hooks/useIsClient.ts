import { useEffect, useState } from "react";

/**
 * 클라이언트 사이드 여부를 반환하는 커스텀 훅
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
