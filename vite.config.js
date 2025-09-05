import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
	base: '/React-Travel-Journal-WebPage/', // Use your repo name here
	plugins: [
		react()
	]
})