import { IoPerson } from "react-icons/io5";
import { avatarColor } from "../assets/scripts/data";
import { generateRandomColor } from "../assets/scripts/utils";

export default function Avatar({ variant, src, alt, children, ...rest }) {
  const color = avatarColor[generateRandomColor(avatarColor)];
  const style = { backgroundColor: color };
  if (variant === "img") {
    return (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    );
  } else if (variant === "initials") {
    return (
      <div className="avatar avatar-letters" style={style}>
        {children}
      </div>
    );
  } else {
    return (
      <div className="avatar avatar-icon" style={style}>
        <IoPerson />
      </div>
    );
  }
}
