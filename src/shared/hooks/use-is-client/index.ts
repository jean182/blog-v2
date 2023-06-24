import React from "react";

/**
 * Returns a boolean indicating if the code is running on the client or the server.
 * @returns {boolean} isClient - A boolean indicating if the code is running on the client or the server.
 * @remarks This hook is used to prevent code from running on the server that should only run on the client.
 * */
export default function useIsClient() {
  const [isClient, setClient] = React.useState(false);
  const key = isClient ? "client" : "server";

  React.useEffect(() => {
    setClient(true);
  }, []);

  return { isClient, key };
}
