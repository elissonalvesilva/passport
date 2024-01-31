"use client";
import { useContext } from "react"
import { TabsContext } from "@/components/Tabs/TabsContext"


export default function Contents ({ items }) {
  const { currentIndex } = useContext(TabsContext)
  const { id, content } = items[currentIndex]
  return (
    <div
      key={id}
      id={`tab-content-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-control-${id}`}
      className="tab-content"
    >
      {content}
    </div>
  )
}