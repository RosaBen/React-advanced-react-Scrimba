export default function MenuDropdown({ items }) {
  const itemsList = items.map((item) => (
    <div className="menu-item" key={item}>
      {item}
    </div>
  ));
  return <div className="menu-dropdown">{itemsList}</div>;
}
