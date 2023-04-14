"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  //if the application has !NOT mounted we will return null;
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
