"use client";

import classNames from "classnames"
import { useContext } from "react"
import { TabsContext } from "@/components/Tabs/TabsContext"


export default function Titles({ items, setSelectedTab }) {
  const { currentIndex, setCurrentIndex } = useContext(TabsContext)

  return (
    <div role="tablist" className="tab-titles">
      {items.map(({ id, title }, index) => (
        <button
          key={id}
          id={`tab-control-${id}`}
          role="tab"
          aria-controls={`tab-content-${id}`}
          aria-selected={currentIndex === index}
          onClick={() => {
            setCurrentIndex(index)
            setSelectedTab && setSelectedTab(index)
          }}
          className={
            classNames('tab-title rounded-3xl px-4 py-1.5 mr-5', currentIndex === index ? 'bg-tab-active' : 'bg-tab-inactive' )
          }
        >
          {title}
        </button>
      ))}
    </div>
  )
}