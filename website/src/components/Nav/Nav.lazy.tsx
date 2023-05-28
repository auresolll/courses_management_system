import React, { Dispatch, lazy, SetStateAction, Suspense } from "react";

const LazyNav = lazy(() => import("./Nav"));

const Nav = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    layout: 0;
    isOpen: Boolean;
    setIsOpen: Dispatch<SetStateAction<Boolean>>;
  }
) => (
  <Suspense fallback={null}>
    <LazyNav {...props} />
  </Suspense>
);

export default Nav;
