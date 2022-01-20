import { Component } from "solid-js";

const MONTHNAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const DateView: Component = () => {
  const today = `${MONTHNAMES[new Date().getMonth()]} ${new Date().getDate()}`;
  return <h1 className="text-3xl text-slate-700">{today}</h1>;
};
