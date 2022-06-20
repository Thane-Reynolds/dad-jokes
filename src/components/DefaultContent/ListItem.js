export default function ListItem({ handleClick, children }) {
  return (
    <div>
      <button
        onClick={() => handleClick(children)}
        className="bg-indigo-500 px-6 py-2 text-white font-bold w-full text-lg"
      >
        {children}
      </button>
    </div>
  );
}
