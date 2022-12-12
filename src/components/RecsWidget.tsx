import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Recommendations from "./Recommendations";

const RecsWidget = () => {
  const [entities, setEntities] = useState<string[]>([]);
  const [visitors, setVisitors] = useState<string[]>([]);
  const [currentEntityId, setCurrentEntityId] = useState("");

  useEffect(() => {
    setEntities(["1", "2", "3"]);
    setVisitors(["a", "b", "c"]);
  }, []);

  return (
    <>
      <Dropdown items={entities} setId={setCurrentEntityId} />
      {/* <Dropdown items={visitors} /> */}
      <Recommendations currentEntityId={currentEntityId} />
    </>
  );
};
export default RecsWidget;
