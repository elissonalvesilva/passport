import Events from "@/components/EventsList";
import { Tabs } from "@/components/Tabs";

export default function Home() {

  const events = [
    { 
      title: 'Escola Sabatina',
      location: 'Igreja Ingleses',
      date: '15/10/2021',
      startTime: '08:45',
      endTime: '10:45',
    }
  ]

  const tabs = [
    {id: 'tab_district', title: 'Distrito', content: <Events eventsData={events} />},
    {id: 'tab_local', title: 'Igreja Local', content: <div>Igreja Local</div>},
  ]

  return (
    <>
      <Tabs.Tab>
        <Tabs.Titles items={tabs.map(({ id, title }) => ({ id, title }))} />
        <h2 className="mt-5 mb-4 font-bold text-lg">Próximos Eventos</h2>
        <Tabs.Contents
          items={tabs.map(({ id, content }) => ({
            id,
            content: <>{content}</>,
          }))}
        />
      </Tabs.Tab>
    </>
  )
}