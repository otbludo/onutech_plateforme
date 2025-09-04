import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './page/home';
import BTP from './page/BTP';
import Informatique from "./page/informatique";


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Informatique" element={<Informatique />} />
          <Route path="/BTP" element={<BTP />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
