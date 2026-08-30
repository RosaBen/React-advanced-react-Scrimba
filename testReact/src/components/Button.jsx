import clsx from "clsx";

export default function Button({ children, size, className, ...rest }) {
  const classBtn =
    size === "sm" ? `button-small ${className}` : `button-large ${className}`;
  return (
    <button className={classBtn} {...rest}>
      {children}
    </button>
  );
}
