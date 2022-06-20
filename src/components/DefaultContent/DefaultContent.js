import Description from "./Description";
import CuratedList from "./CuratedList";

export default function DefaultContent({ setCuratedTerm }) {
  return (
    <div className="flex flex-col items-center">
      <Description />
      <CuratedList setCuratedTerm={setCuratedTerm} />
    </div>
  );
}
