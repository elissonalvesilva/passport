"use client";

import { useState } from "react";
import { useModal } from "@/components/Modal/ModalContext";
import { useAuth } from "@/lib/contexts/AuthContext";
import Events from "@/components/EventsList";
import { Modal } from "@/components/Modal";
import { Tabs } from "@/components/Tabs";
import Button from "@/components/Button";
import QrCode from "@/components/QrCodeEvent";

import useEventData from "@/lib/hooks/useEvents";
import withAuth from "@/lib/hoc/withAuth";

function Home() {
  const { openModal, isModalOpen } = useModal();
  const { user, token } = useAuth();
  const [payload, setPayload] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState({});

  const { events } = useEventData(selectedTab, token);

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

export default withAuth(Home);