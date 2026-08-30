import clsx from "clsx";

export default function Button({
  children,
  size,
  variant,
  className,
  ...rest
}) {
  let classBtn = size ? `button-${size}` : "";
  let classVariant = variant && `button-${variant}`;

  // size === "sm" ? (classBtn = `button-small`) : (classBtn = `button-large`);
  const allCasses = clsx(classBtn, className, classVariant);
  return (
    <button className={allCasses} {...rest}>
      {children}
    </button>
  );
}
