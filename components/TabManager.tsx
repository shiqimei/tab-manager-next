import { X } from "lucide-react"
import { useEffect, useState } from "react"

const TabManager = () => {
  const [tabs, setTabs] = useState([])

  useEffect(() => {
    // In a real extension, this would use chrome.tabs.query
    const getTabs = async () => {
      const fakeTabs = [
        { id: 1, title: "Example Tab", url: "https://example.com" }
        // Add more mock tabs as needed
      ]
      setTabs(fakeTabs)
    }
    getTabs()
  }, [])

  const navigateToTab = (tabId) => {
    // In real extension: chrome.tabs.update(tabId, { active: true })
    console.log("Navigate to tab:", tabId)
  }

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center p-8">
      <div className="relative w-full max-w-6xl bg-white/10 rounded-lg p-6">
        <button
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/20"
          onClick={() => window.close()}>
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors"
              onClick={() => navigateToTab(tab.id)}>
              <div className="aspect-video bg-gray-800 rounded mb-3">
                {/* In real extension: <img src={tab.thumbnailUrl} /> */}
              </div>
              <p className="text-white text-sm truncate text-left">
                {tab.title}
              </p>
              <p className="text-white/60 text-xs truncate text-left">
                {tab.url}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TabManager
