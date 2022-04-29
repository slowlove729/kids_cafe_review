import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import NavigationBar from "./components/NavigationBar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/kidscafe" element={<Main />} />
          <Route path="/mypage" element={<Main />} />
          <Route path="/likes" element={<Main />} />
          <Route path="/help" element={<Main />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
