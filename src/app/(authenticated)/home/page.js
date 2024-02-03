"use client";

import { useEffect, useState } from "react";
import Events from "@/components/EventsList";
import { Modal } from "@/components/Modal";
import { Tabs } from "@/components/Tabs";
import { useModal } from "@/components/Modal/ModalContext";
import Button from "@/components/Button";
import QrCode from "@/components/QrCode";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { openModal, isModalOpen } = useModal();
  const { user, token } = useAuth();
  const [payload, setPayload] = useState({});
  const [events, setEvents] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  })

  useEffect(() => {
    const category = selectedTab === 0 ? 'district' : 'local';
    fetch(`http://localhost:8085/events/category/${category}`)
      .then((res) => res.json())
      .then((data) => setEvents(data?.data))
      .catch((err) => console.log(err))
  }, [selectedTab])

  const handleGenerateQRCode = (event) => {
    openModal(true);
    const objPayload = {
      event_id: event.id,
      user_id: user.id,
    }
    setSelectedEvent(event);
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
              <QrCode payload={payload} user={user} event={selectedEvent} />
            </Modal.Body>
            <Modal.Footer>
              <Button className="bg-primary text-white">Fechar</Button>
            </Modal.Footer>
          </Modal.Content>
        )
      }
      
      <Tabs.Tab>
        <h2 className="mt-5 mb-3 font-bold text-md">Categorias</h2>
        <Tabs.Titles items={tabs.map(({ id, title }) => ({ id, title }))} setSelectedTab={setSelectedTab} />
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