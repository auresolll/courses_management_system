import React, { Dispatch, lazy, SetStateAction, Suspense } from "react";

const LazyNav = lazy(() => import("./Nav"));

const Nav = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    layout: number;
    isOpenMenu: boolean;
    setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  }
) => (
  <Suspense fallback={null}>
    <LazyNav {...props} />
  </Suspense>
);

export default Nav;
