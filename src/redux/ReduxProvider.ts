import { Provider } from "react-redux";
import store from "./store";
import type React from "react";

type Props = {
  children: React.ReactNode;
};
const ReduxProvider: React.FC<Props> = ({ children }) => {
  return Provider({ store: store, children: children });
};

export default ReduxProvider;
