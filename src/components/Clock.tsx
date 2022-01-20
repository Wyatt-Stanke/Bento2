import { Component, createSignal, onMount } from "solid-js";
import { mergeProps } from "solid-js";

export const Clock: Component = (props) => {
  props = mergeProps({ time: new Date().toLocaleTimeString() }, props);
  const [getTime, setTime] = createSignal(props["time"]);

  onMount(async () => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 500);
  });

  return <h1 className="text-slate-700 text-4xl font-black">{getTime()}</h1>;
};
