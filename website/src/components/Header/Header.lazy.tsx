import React, { Dispatch, lazy, SetStateAction, Suspense } from "react";

const LazyHeader = lazy(() => import("./Header"));

const Header = (
  props: JSX.IntrinsicAttributes & {
    children?: React.ReactNode;
    layout: number;
    isOpen: Boolean;
    setIsOpen: Dispatch<SetStateAction<Boolean>>;
  }
) => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
