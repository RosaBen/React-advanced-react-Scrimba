export default function Button({ children, size = "lg", ...rest }) {
  const classBtn = size === "sm" ? "button-small" : "button-large";
  return (
    <button {...rest} className={classBtn}>
      {children}
    </button>
  );
}
