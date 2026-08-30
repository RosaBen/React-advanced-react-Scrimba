import { IoPerson } from "react-icons/io5";
import { avatarColor } from "../../assets/scripts/data";
import { generateRandomColor } from "../../assets/scripts/utils";

export default function Avatar({ src, alt, children }) {
  const color = avatarColor[generateRandomColor(avatarColor)];
  const style = { backgroundColor: color };
  if (src) {
    return (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    );
  } else if (children) {
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
