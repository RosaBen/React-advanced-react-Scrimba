import clsx from "clsx";

export default function Button({ children, size, className, ...rest }) {
  let classBtn = size ? `button-${size}` : "";

  // size === "sm" ? (classBtn = `button-small`) : (classBtn = `button-large`);
  const allCasses = clsx(classBtn, className);
  return (
    <button className={allCasses} {...rest}>
      {children}
    </button>
  );
}
