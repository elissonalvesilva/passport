import { BsTicketPerforated } from "react-icons/bs";
import {QRCodeSVG} from 'qrcode.react';

export default function QrCode({ payload, event, user }) {
  const options = { month: 'short', day: 'numeric' };
  const dateFormatter = new Intl.DateTimeFormat('pt-BR', options);

  const newDate = new Date(event.date);
  const eventDate = dateFormatter.format(newDate);

  return (
    <div className="event-qrcode rounded-lg flex flex-col p-6">
      <main className="ticket-system">
        <div className="top">
          <h1 className="text-primary mb-2">Estamos gerando o seu ticket...</h1>
          <div className="printer" />
        </div>
        <div className="receipts-wrapper">
            <div className="receipts">
              <div className="receipt">
                <div className="details">
                  <div className="item">
                    <span>Nome</span>
                    <h3>{user.first_name}</h3>
                  </div>
                  <div className="item">
                    <span>Sobrenome</span>
                    <h3>{user.last_name}</h3>
                  </div>
                  <div className="item">
                    <span>Evento</span>
                    <h3 className="overflow-hidden line-clamp-1">{event.title}</h3>
                  </div>
                  <div className="item">
                    <span>Data do Evento</span>
                    <h3>{eventDate}</h3>
                  </div>
                </div>
              </div>
              <div className="receipt qr-code  flex justify-between">
                  <QRCodeSVG className="qr" value={JSON.stringify(payload)} />
                  <div className="description">
                    <BsTicketPerforated className="text-primary text-4xl skew-y-12" />
                  </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}