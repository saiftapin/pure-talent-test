import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import PageContextProvider from "./contexts/PageContext";
const queryClient = new QueryClient();

const Customers = React.lazy(() => import("./pages/customers"));

function App() {
  return (
    <PageContextProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="Loading....">
          <Routes>
            <Route path="/" element={<Customers />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </PageContextProvider>
  );
}

export default App;
