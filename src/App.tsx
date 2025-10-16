import { useState, useEffect } from 'react'

function App() {
  const [allPagesChecked, setAllPagesChecked] = useState(false)
  const [individualPages, setIndividualPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false
  })
  const [_, setHoveredRow] = useState<string | null>(null)

  // Check if all individual pages are selected
  const allIndividualPagesSelected = Object.values(individualPages).every(page => page)

  // Update "All pages" checkbox when all individual pages are checked/unchecked
  useEffect(() => {
    setAllPagesChecked(allIndividualPagesSelected)
  }, [allIndividualPagesSelected])

  // Handle "All pages" checkbox
  const handleAllPagesChange = (checked: boolean) => {
    setAllPagesChecked(checked)
    setIndividualPages({
      page1: checked,
      page2: checked,
      page3: checked,
      page4: checked
    })
  }

  // Handle individual page checkbox
  const handleIndividualPageChange = (page: keyof typeof individualPages, checked: boolean) => {
    setIndividualPages(prev => ({
      ...prev,
      [page]: checked
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[370px] h-[326] rounded-md border border-[#EEEEEE] bg-white opacity-100 shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] flex flex-col ">

        {/* All Pages */}
        <div
          className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onMouseEnter={() => setHoveredRow('all')}
          onMouseLeave={() => setHoveredRow(null)}
          onClick={() => handleAllPagesChange(!allPagesChecked)}
        >
          <label className="text-gray-700 font-medium cursor-pointer">All pages</label>
          <input
            type="checkbox"
            className="w-5 h-5 rounded-2xl cursor-pointer"
            checked={allPagesChecked}
            onChange={(e) => {
              e.stopPropagation()
              handleAllPagesChange(e.target.checked)
            }}

          />
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-200 mx-4"></div>

        {/* Individual Pages */}
        {Object.keys(individualPages).map((key) => {
          const pageKey = key as keyof typeof individualPages
          const isChecked = individualPages[pageKey]

          return (
            <div
              key={pageKey}
              className="flex justify-between items-center px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
              onMouseEnter={() => setHoveredRow(pageKey)}
              onMouseLeave={() => setHoveredRow(null)}
              // Row click handler to toggle the state
              onClick={() => handleIndividualPageChange(pageKey, !isChecked)}
            >
              <label className="text-gray-700 cursor-pointer">{pageKey.charAt(0).toUpperCase() + pageKey.slice(1).replace(/(\d)/, ' $1')}</label>
              <input
                type="checkbox"
                className="w-5 h-5 rounded-2xl cursor-pointer"
                checked={isChecked}
                onChange={(e) => {
                  e.stopPropagation()
                  handleIndividualPageChange(pageKey, e.target.checked)
                }}
              />
            </div>
          )
        })}


        {/* Separator line */}
        <div className="border-t mt-3 border-gray-200 mx-4"></div>
        {/* Done Button */}
        <div className="p-3 my-3">
          <button
            className="w-[340px] h-[40px] bg-[#FFCE22] hover:bg-[#ffe066] text-gray-800 rounded-[4px] flex items-center justify-center gap-[10px] opacity-100 px-5 py-2.5"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
