import "@testing-library/jest-dom/extend-expect";

import { render as rtlRender } from "@testing-library/react";
import { RenderOptions as RTLRenderOptions } from "@testing-library/react";
import CONSTANTS from "config/constants";
import Providers from "containers/Providers/Providers";
import History, { MemoryHistory } from "history";
import { ReactElement, FC, ReactNode } from "react";
import * as themes from "styles/theme";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

export interface RenderOptions extends Omit<RTLRenderOptions, "queries"> {
  // Initial route for the default browser history
  route?: string;
  // // Default browser history
  history?: MemoryHistory;
  // Styles theme
  theme?: typeof themes.default.light;
}

export interface WrapperProps {
  children?: ReactNode;
}

export interface Cases {
  [key: string]: string | number | boolean | undefined | null;
}

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const {
    route = ENTRY_PATH,
    history = History.createMemoryHistory({
      initialEntries: [route]
    }),
    ...returnOptions
  } = options;
  // Wrapper component of the render function
  const Wrapper: FC<WrapperProps> = props => {
    const { children } = props;
    return <Providers>{children}</Providers>;
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions }),
    history
  };
};

export const casify = (cases: Cases) => {
  return Object.entries(cases).map(([caseTitle, testValue], index: number) => {
    return {
      name: `${index + 1}. ${caseTitle} - ${testValue}`,
      testValue
    };
  });
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});

vi.mock("artisn/init", () => {
  return {
    createApp: vi.fn()
  };
});

vi.mock("artisn/auth", () => ({
  initAuth: vi.fn(() => {
    return {
      signInAnonymously: vi.fn()
    };
  }),
  getServices: vi.fn
}));

vi.mock("config/artisn.config.ts", () => ({
  auth: () => {
    return {
      onAuthStateChanged: vi.fn(),
      signInAnonymously: vi.fn()
    };
  },
  Services: vi.fn,
  artisn: vi.fn
}));
