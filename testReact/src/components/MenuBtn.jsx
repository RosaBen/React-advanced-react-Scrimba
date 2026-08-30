import Button from "./Button";

export default function MenuBtn({ children, toggle, open }) {
  return <Button onClick={toggle}>{children}</Button>;
}
