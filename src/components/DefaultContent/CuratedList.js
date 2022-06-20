import ListItem from "./ListItem";
import list from "../../../assets/curatedlist";

export default function CuratedList({ setCuratedTerm }) {
  function handleClick(term) {
    setCuratedTerm(term);
  }

  return (
    <>
      <div className="w-2/3 grid grid-cols-4 gap-8 mt-8">
        {list.map((item, index) => (
          <ListItem key={index} handleClick={handleClick}>
            {item}
          </ListItem>
        ))}
      </div>
    </>
  );
}
