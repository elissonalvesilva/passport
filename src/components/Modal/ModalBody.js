import classNames from "classnames";

export default function ModalBody({ children, className }) {
  return (
    <div className={classNames("modal-body flex justify-center", className)}>
      { children }
    </div>
  );
}