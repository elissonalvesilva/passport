import classNames from "classnames";

export default function Button({ onClick, children, className = '' }) {
return (
    <button
      type='button'
      onClick={onClick}
      className={classNames('w-full py-2 px-4 rounded-3xl', className)}
    >
      {children}
    </button>
  );
}