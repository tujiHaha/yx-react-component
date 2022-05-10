import { useEffect } from "react";
function usePreventTouch(rootId: string, boxId?: string) {
  useEffect(() => {
    const rootElement =
      rootId && (document.getElementById(rootId) as HTMLDivElement);
    const scrollBox =
      boxId && (document.getElementById(boxId) as HTMLDivElement);
    function handle(e: Event) {
      e.preventDefault();
    }
    function handle1(e: Event) {
      e.stopPropagation();
    }
    rootElement && rootElement.addEventListener("touchmove", handle, false);
    scrollBox && scrollBox.addEventListener("touchmove", handle1, false);
    return () => {
      rootElement && rootElement.removeEventListener("touchmove", handle);
      scrollBox && scrollBox.removeEventListener("touchmove", handle1);
    };
  }, []);
}

export default usePreventTouch;
