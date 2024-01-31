"use client";

import {
  createContext,
  useContext,
  useState,
} from 'react'

const initialContext = {
  currentIndex: 0,
  setCurrentIndex: () => {},
}

export const TabsContext = createContext(initialContext)

export default function TabsProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <TabsContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </TabsContext.Provider>
  )
}

export function useTabsContext() {
  const context = useContext(TabsContext)
  if (context === undefined) {
    throw new Error('useTabs must be used within a TabsProvider')
  }
  return context
}