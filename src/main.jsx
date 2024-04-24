import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource-variable/open-sans";
import { BrowserRouter } from "react-router-dom";
import Kbar from "./components/Kbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Kbar>
      <App />
    </Kbar>
  </BrowserRouter>
);
