// // locallead/Dental Clinic Website Template/src/app/main.tsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//
// import App from "./app/App";
// import PreviewPage from "./app/preview/PreviewPage";
//
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/preview/:slug" element={<PreviewPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
//



// locallead/Dental Clinic Website Template/src/app/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./app/App";
import PreviewPage from "./app/preview/PreviewPage";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preview/:slug" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

