import { Component, createSignal } from "solid-js";

export const Greeting: Component = (props) => {
  const [getName, setName] = createSignal(window.localStorage.getItem("name") || props["name"] || "John Doe");
  return (
    <h2 className="text-slate-700 text-xl">Good morning, {getName()}</h2>
  );
};
