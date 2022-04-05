import React, { useState } from "react";

interface PageContextProviderProps {
    children?: React.ReactNode;
}

export const PageContext = React.createContext({
    title: "",
    titleHandler: (query:string) => {},
});

const PageContextProvider: React.FC<PageContextProviderProps> = (props) => {
    const [title, setTitle] = useState<string>("");

    const titleHandler = (title:string) => {
      setTitle(title);
    };

  return (
    <PageContext.Provider
      value={{ title: title, titleHandler: titleHandler }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
