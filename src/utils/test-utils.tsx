import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import store from "redux/store";

export const AllProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
