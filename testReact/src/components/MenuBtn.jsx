import Button from "./Button";

export default function MenuBtn({ children, toggle }) {
  return <Button onClick={toggle}>{children}</Button>;
}
