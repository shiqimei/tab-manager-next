import type { PlasmoCSConfig } from "plasmo"
import { createRoot } from "react-dom/client"

import TabManager from "~/components/TabManager"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}
console.group("Tab Manager Next v0.1.0")
console.info("Content script loaded")
console.groupEnd()

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "SHOW_TAB_MANAGER") {
    const mount = document.createElement("div")
    const shadow = mount.attachShadow({ mode: "open" })
    const root = document.createElement("div")
    shadow.appendChild(root)
    document.body.appendChild(mount)
    createRoot(root).render(<TabManager />)
  }
})

export default function Popup() {
  return null
}
