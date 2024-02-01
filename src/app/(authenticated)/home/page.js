import Events from "@/components/EventsList";
import { Tabs } from "@/components/Tabs";

export default function Home() {

  const events = [
    { 
      title: 'Escola Sabatina',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    }
  ]

  const tabs = [
    {id: 'tab_district', title: 'Distrito', content: <Events eventsData={events} />},
    {id: 'tab_local', title: 'Igreja Local', content: <div>Igreja Local</div>},
  ]

  return (
    <>
      <Tabs.Tab>
        <h2 className="mt-5 mb-3 font-bold text-md">Categorias</h2>
        <Tabs.Titles items={tabs.map(({ id, title }) => ({ id, title }))} />
        <h2 className="mt-8 mb-4 font-bold text-sm">Próximos Eventos</h2>
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