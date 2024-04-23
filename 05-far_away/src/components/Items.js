export default function Items({ listItem, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={listItem.packed}
        onChange={() => {
          onToggleItems(listItem.id);
        }}
      />
      <span style={listItem.packed ? { textDecoration: "line-through" } : {}}>
        {listItem.quantity} {listItem.description}
      </span>
      <button onClick={() => onDeleteItem(listItem.id)} className="btn">
        ❌
      </button>
    </li>
  );
}
