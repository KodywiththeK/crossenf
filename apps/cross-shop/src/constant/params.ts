import { defaultSortingOption } from "./product";

export const pageParams = {
  sort: {
    key: "sort",
    text: "정렬",
    defaultValue: defaultSortingOption.value,
  },
};

export const queryParams = {
  page: {
    key: "page",
    text: "페이지",
    defaultValue: 1,
  },
  limit: {
    key: "limit",
    text: "한 페이지 당 상품 수",
    defaultValue: 5,
  },
  sort: {
    key: "sort",
    text: "정렬",
    defaultValue: defaultSortingOption.value,
  },
};
