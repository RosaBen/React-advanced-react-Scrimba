import Button from "./Button";

export default function MenuBtn({ buttonText, onClick }) {
  return <Button onClick={onClick}>{buttonText}</Button>;
}
