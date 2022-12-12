interface RecProps {
  recs: RecObject[];
  name: string;
}

type RecObject = {
  entity_id: string;
};

const RecList = ({ recs, name }: RecProps) => {
  return (
    <>
      <div className="border-2 border-solid border-red-500 h-64 flex flex-col justify-evenly px-4">
        <h1 className="font-bold">{name}</h1>
        {recs.map((item) => (
          <div key={item.entity_id}>{item.entity_id}</div>
        ))}
      </div>
    </>
  );
};

export default RecList;
