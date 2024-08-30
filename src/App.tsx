import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

function App() {
  if (!import.meta.env.VITE_API_URL) {
    return <p>No API</p>;
  }

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
    </Routes>
  );
}

export default App;
