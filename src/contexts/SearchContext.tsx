import React, { useState } from "react";

interface SearchContextProviderProps {
    children?: React.ReactNode;
}

export const SearchContext = React.createContext({
    query: "",
    searchHandler: (query:string) => {},
});

const SearchContextProvider: React.FC<SearchContextProviderProps> = (props) => {
    const [query, setQuery] = useState<string>("");

    const searchHandler = (query:string) => {
      setQuery(query);
    };

  return (
    <SearchContext.Provider
      value={{ query: query, searchHandler: searchHandler }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
