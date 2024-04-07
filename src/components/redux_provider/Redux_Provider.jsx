"use client"


import { store } from "@/utils/redux/store";
import React from "react";
import { Provider } from "react-redux";

function Redux_Provider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Redux_Provider;
