import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/customers";
import { QueryClient, QueryClientProvider } from "react-query";
import PageContextProvider from "./contexts/PageContext";
const queryClient = new QueryClient();

function App() {
  return (
    <PageContextProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Customers />} />
        </Routes>
      </QueryClientProvider>
    </PageContextProvider>
  );
}

export default App;
