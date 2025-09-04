import {createRoot} from "react-dom/client"
import App from "./App"

const root= createRoot(DocumentFragment.getelementById("root"))

root.render(<App />)