import React from "react";

const useIsClient = () => {
  const [isClient, setClient] = React.useState(false);
  const key = isClient ? "client" : "server";

  React.useEffect(() => {
    setClient(true);
  }, []);

  return { isClient, key };
};

export default useIsClient;
