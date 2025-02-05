export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetchWithDelay(`/api/${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Client 요청 실패: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(`API Client 요청 중 에러 (${endpoint}):`, error);
    throw new Error(`API Client 요청 실패 (${endpoint})`);
  }
}

async function fetchWithDelay(url: string, options: RequestInit) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5초 딜레이 추가
  return fetch(url, options);
}
