import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle (initialValue = false, onToggle = () => { }) {
  const [on, setOn] = useState(initialValue);
  function toggle () {
    setOn(prev => !prev);
  }
  useEffectOnUpdate(onToggle, [on]);
  return [on, toggle];
}