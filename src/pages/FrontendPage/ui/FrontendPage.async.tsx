import { lazy } from "react";

export const FrontendPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./FrontendPage')), 800)
}));