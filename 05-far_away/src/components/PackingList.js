import { useState } from "react";
import Items from "./Items";
export default function PackingList({
  item,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = item;
  }

  if (sortBy === "description") {
    // we used slice because sort method mutate orginal array
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  // const list = initialItems;
  return (
    <div className="list">
      <ul className="">
        {sortedItems.map(function (item) {
          return (
            <Items
              listItem={item}
              onDeleteItem={onDeleteItem}
              onToggleItems={onToggleItems}
              key={item.id}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed </option>
        </select>
        <button className="action" onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}
