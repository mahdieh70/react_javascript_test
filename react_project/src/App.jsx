import { Route, Routes } from "react-router-dom";

import HomePage from "./components/homePage";
import SideBar from "./components/sideBar";
import Table from "./components/table";
import SearchBar from "./components/searchBar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-white w-full h-screen">
      <div className="h-full w-full flex flex-col justify-between gap-10 small:w-full small:px-5 small:py-5 small:gap-5 small:flex-row-reverse">
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="table" element={<Table />} />
            <Route path="searchBar" element={<SearchBar />} />
          </Routes>
          <SideBar />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
