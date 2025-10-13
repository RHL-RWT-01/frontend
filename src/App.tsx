
import { Checkbox } from '@radix-ui/react-checkbox'
import { useState, useEffect } from 'react'

function App() {
  const [allPagesChecked, setAllPagesChecked] = useState(false)
  const [individualPages, setIndividualPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false
  })
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

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
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[370px] h-[326] rounded-md border border-[#EEEEEE] bg-white opacity-100 shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A] flex flex-col">

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
              checked={hoveredRow === 'all' ? true : allPagesChecked}
              onChange={(e) => handleAllPagesChange(e.target.checked)}
            />
          </div>

          {/* Separator line */}
          <div className="border-t border-gray-200 mx-4"></div>

          {/* Individual Pages */}
          <div
            className="flex justify-between items-center mt-3 px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setHoveredRow('page1')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => handleIndividualPageChange('page1', !individualPages.page1)}
          >
            <label className="text-gray-700 cursor-pointer">Page 1</label>
            <input
              type="checkbox"
              className="w-5 h-5 rounded-2xl cursor-pointer"
              checked={hoveredRow === 'page1' ? true : individualPages.page1}
              onChange={(e) => handleIndividualPageChange('page1', e.target.checked)}
            />
          </div>

          <div
            className="flex justify-between items-center px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setHoveredRow('page2')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => handleIndividualPageChange('page2', !individualPages.page2)}
          >
            <label className="text-gray-700 cursor-pointer">Page 2</label>
            <input
              type="checkbox"
              className="w-5 h-5 rounded-2xl cursor-pointer"
              checked={hoveredRow === 'page2' ? true : individualPages.page2}
              onChange={(e) => handleIndividualPageChange('page2', e.target.checked)}
            />
          </div>

          <div
            className="flex justify-between items-center px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setHoveredRow('page3')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => handleIndividualPageChange('page3', !individualPages.page3)}
          >
            <label className="text-gray-700 cursor-pointer">Page 3</label>
            <input
              type="checkbox"
              className="w-5 h-5 rounded-2xl cursor-pointer"
              checked={hoveredRow === 'page3' ? true : individualPages.page3}
              onChange={(e) => handleIndividualPageChange('page3', e.target.checked)}
            />
          </div>

          <div
            className="flex justify-between items-center px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setHoveredRow('page4')}
            onMouseLeave={() => setHoveredRow(null)}
            onClick={() => handleIndividualPageChange('page4', !individualPages.page4)}
          >
            <label className="text-gray-700 cursor-pointer">Page 4</label>
            <input
              type="checkbox"
              className="w-5 h-5 rounded-2xl cursor-pointer"
              checked={hoveredRow === 'page4' ? true : individualPages.page4}
              onChange={(e) => handleIndividualPageChange('page4', e.target.checked)}
            />
          </div>

          {/* Separator line */}
          <div className="border-t mt-3 border-gray-200 mx-4"></div>
          {/* Done Button */}
          <div className="p-3">
            <button className="w-85 h-10 bg-[#FFCE22] cursor-pointer hover:bg-yellow-500 text-gray-800 rounded-md flex items-center justify-center">
              Done
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
