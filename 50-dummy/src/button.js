export default function Button({ children, handleClick }) {
  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
}
