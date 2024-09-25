import useMediaQuery from "./useMediaQuery";

export default function useIsMobile() {
  return useMediaQuery("(max-width:400px)");
}
