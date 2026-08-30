import Button from "./Button";

export default function MenuBtn({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
