"use client";
import React, { createContext, useContext, useReducer } from "react";
const context = createContext({});
const initialState = {
  step: 1,
  resumeItems: {
    name: "",
    job: "",
    address: "",
    phone: "",
    email: "",
    themeColor: "",
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "next": {
      return {
        ...state,
        step: state.step + 1,
        resumeItems: { ...state.resumeItems, ...action.payload },
      };
    }
    case "prev": {
      return { ...state, step: state.step - 1 };
    }
    default: {
      throw new Error("ghty");
    }
  }
  // ...state,
  // step: state.step + 1,
  // resumeItems: { ...state.resumeItems, ...action.payload },
}

function ResumeProvider({ children }) {
  const [{ step, resumeItems }, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ step, resumeItems, dispatch }}>
      {children}
    </context.Provider>
  );
}
function useResume() {
  const { step, resumeItems, dispatch } = useContext(context);
  return { step, resumeItems, dispatch };
}
export { useResume, ResumeProvider };
