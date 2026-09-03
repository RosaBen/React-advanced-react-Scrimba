import { useEffect, useRef } from "react";

export default function useEffectOnUpdate (effectFunction, deps) {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current ? firstRender.current = false : effectFunction();
  }, deps);
}