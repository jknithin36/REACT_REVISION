export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em> Hello... Start adding some items to your packing list...</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const packedPercentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "Hurray.. You can Enjoy Your Trip..."
          : ` YOU have ${numItems} on your list, You already packed %${numPacked} (
        ${packedPercentage}) % items on your list`}
      </em>
    </footer>
  );
}
