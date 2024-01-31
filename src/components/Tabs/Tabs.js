import React from 'react'

import TabsProvider from '@/components/Tabs/TabsContext'


export default function Tabs({ children }) {
  return <TabsProvider>{children}</TabsProvider>
}
