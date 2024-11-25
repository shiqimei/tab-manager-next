import { useEffect } from "react"

const Popup = () => {
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, { type: "SHOW_TAB_MANAGER" })
      window.close() // Close popup after sending message
    })
  }, [])

  return null
}

export default Popup
