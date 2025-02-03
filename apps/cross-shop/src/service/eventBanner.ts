import { EventBanner } from "@/types/eventBanner";
import { customFetch } from "@/utils/fetch/server/customFetch";

export const getEventBanners = async (): Promise<EventBanner[]> =>
  customFetch<EventBanner[]>("eventBanner.json");
