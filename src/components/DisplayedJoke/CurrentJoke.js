export default function CurrentJoke({ currentJoke }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="my-12 py-4 px-2 border-y-2 border-indigo-500 w-3/4">
        <p className="text-xl" style={{ fontFamily: "Permanent Marker" }}>
          {currentJoke}
        </p>
      </div>
    </div>
  );
}
