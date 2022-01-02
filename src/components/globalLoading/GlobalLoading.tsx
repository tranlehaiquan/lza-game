import React, { createContext, useState } from "react";
import Loading from "../Loading";

interface Props {
  className?: string;
}

export const globalLoadingContext = createContext({
  showLoading: () => {},
  hideLoading: () => {},
  loading: false,
});

const GlobalLoading: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  return (
    <globalLoadingContext.Provider
      value={{
        showLoading,
        hideLoading,
        loading,
      }}
    >
      {props.children}
      {loading && <Loading />}
    </globalLoadingContext.Provider>
  );
};

export default GlobalLoading;
