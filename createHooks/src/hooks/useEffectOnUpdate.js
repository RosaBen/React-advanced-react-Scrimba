import { useEffect, useRef } from "react";

function useEffectOnUpdate (effectFunction, deps) {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current ? firstRender.current = false : effectFunction();
  }, deps);
}