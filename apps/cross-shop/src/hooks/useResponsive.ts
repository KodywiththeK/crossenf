import { useMediaQuery } from "react-responsive";
export const useResponsive = () => {
  const isLG = () => useMediaQuery({ query: "(min-width: 768px) and (max-width: 1023px)" });
  const isMD = () => useMediaQuery({ query: "(min-width: 641px) and (max-width: 767px)" });
  const isSM = () => useMediaQuery({ query: "(min-width: 481px) and (max-width: 640px)" });
  const isXS = () => useMediaQuery({ query: "(min-width: 0px) and (max-width: 480px)" });
  const isMax1024 = () => useMediaQuery({ query: "(max-width: 1023px)" });
  const isMax640 = () => useMediaQuery({ query: "(max-width: 640px)" });
  const isMin641 = () => useMediaQuery({ query: "(min-width: 641px)" });
  const isMax480 = () => useMediaQuery({ query: "(max-width: 480px)" });
  const isMin768 = () => useMediaQuery({ query: "(min-width: 768px)" });
  const isMax767 = () => useMediaQuery({ query: "(max-width: 767px)" });
  const isMin1024 = () => useMediaQuery({ query: "(min-width: 1024px)" });

  return {
    isLG,
    isMD,
    isSM,
    isXS,
    isMax1024,
    isMax640,
    isMin641,
    isMax480,
    isMin768,
    isMax767,
    isMin1024,
  };
};
