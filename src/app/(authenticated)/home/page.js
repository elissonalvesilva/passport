"use client";

import { useState } from "react";
import Events from "@/components/EventsList";
import { Modal } from "@/components/Modal";
import { Tabs } from "@/components/Tabs";
import { useModal } from "@/components/Modal/ModalContext";
import Button from "@/components/Button";
import QrCode from "@/components/QrCode";

export default function Home() {
  const { openModal, isModalOpen } = useModal();
  const [payload, setPayload] = useState({});

  const user = {
    _id: "123asd",
    name: "Elisson",
    lastName: "Silva",
  }

  const events = [
    { 
      _id: "123asd",
      title: 'Escola Sabatina',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      _id: "345asd",
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      _id: "567asd",
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      _id: "910asd",
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      _id: "912asd",
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    },
    { 
      _id: "520asd",
      title: 'Dia Mundial do Jovem Adventista',
      category: 'Distrito',
      type: 'Escola Sabatina',
      location: 'Igreja dos Ingleses',
      date: new Date(),
    }
  ]

  const handleGenerateQRCode = (event) => {
    openModal(true);
    const objPayload = {
      event_id: event,
      user_id: user._id,
    }
    setPayload(objPayload);
  }

  const tabs = [
    {id: 'tab_district', title: 'Distrito', content: <Events eventsData={events} handleGenerateQRCode={handleGenerateQRCode} />},
    {id: 'tab_local', title: 'Igreja Local', content: <Events eventsData={events} handleGenerateQRCode={handleGenerateQRCode} />},
  ]

  return (
    <>
      {
        isModalOpen && (
          <Modal.Content>
            <Modal.Header>
              <h1>Ticket do Evento</h1>
            </Modal.Header>
            <Modal.Body>
              <QrCode payload={payload} user={user} event={events.find((ev) => ev._id == payload.event_id)} />
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-primary text-white">Fechar</Button>
            </Modal.Footer>
          </Modal.Content>
        )
      }
      
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