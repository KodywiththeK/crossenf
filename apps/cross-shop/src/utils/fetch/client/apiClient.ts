export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
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
