import classNames from "classnames";

export default function Button({ onClick, children, className = '', type = 'button'}) {
return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('w-full py-2 px-4 rounded-3xl', className)}
    >
      {children}
    </button>
  );
}