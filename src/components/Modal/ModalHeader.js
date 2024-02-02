export default function ModalHeader({ children }) {
  return (
    <div className="modal-header text-center pt-3 font-medium text-typography-black">
      { children }
      <hr className="divider w-full" />
    </div>
  );
}