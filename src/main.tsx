import { Root, createRoot } from "react-dom/client";
import App from "./containers/App";
import './assets/scss/main.scss'

const container = document.getElementById("root") as HTMLDivElement;
const root: Root = createRoot(container);
root.render(<App />);
