import { QRCodeSVG } from 'qrcode.react';
import Button from "../Button";

export default function TaskScoreDialog({ payload, closeDialog = () => {}}) {
  return (
    <>
      <div className="task-score-dialog w-full h-96 flex flex-col justify-center fixed bottom-0 z-50 bg-white left-0 px-4">
        <h3 className="score-dialog-title text-center text-typography-gray font-light">Validar Potuação</h3>
        <div className="data flex justify-center mt-10">
          <QRCodeSVG className="qr" value={JSON.stringify(payload)} />
        </div>

        <Button type="button" className='bg-primary text-white mt-10 mb-6 font-light' onClick={closeDialog}>Fechar</Button>
      </div>
    </>
  );
}