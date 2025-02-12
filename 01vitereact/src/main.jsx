import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// const anotherElement = (
//   <a href="google.com"> Visit Google</a>
// )

// const reactElement = React.createContext(
//   "a",
//   { href: "google.com", target: "_blank" },
//   "Click here to visit google"
// );
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
