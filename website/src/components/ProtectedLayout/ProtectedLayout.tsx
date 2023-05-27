import { useAuth0 } from "@auth0/auth0-react";
import React, { FC } from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated && children}</>;
};

export default ProtectedLayout;
