import { useEffect, useState } from "react";
import RecList from "./RecList";

interface RecommendationsProps {
  currentEntityId: string;
}

type RecObject = {
  entity_id: string;
};

const Recommendations = ({ currentEntityId }: RecommendationsProps) => {
  const [popularRecs, setPopularRecs] = useState<RecObject[]>([]);
  const [trendingRecs, setTrendingRecs] = useState<RecObject[]>([]);

  // fennel stuff
  // const URL =
  //   "http://k8s-t115-aest115e-f11fbeee86-e1c6771d84a189dd.elb.us-west-2.amazonaws.com/data";
  // const popularData = {
  //   name: "most_popular_query_hh",
  // };

  useEffect(() => {
    /* call recommendation api to get most popular & basic trending recs */

    fetch(`https://recommendations.optimizelocation.com/most-popular`)
      .then((response) => response.json())
      .then((data) => setPopularRecs(data.recommendations));

    fetch(`https://recommendations.optimizelocation.com/basic-trending`)
      .then((response) => response.json())
      .then((data) => setTrendingRecs(data.recommendations));
  }, []);

  useEffect(() => {
    /* call recommendation api to get recs */
    console.log(`current entity id is: ${currentEntityId}`);
    //TODO: ask fennel fennel fetch call, needs to access CORS!!!
    // fetch(`${URL}/v1/query`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(popularData),
    // })
  }, [currentEntityId]);

  return (
    <div className="flex justify-evenly mt-4">
      <RecList recs={popularRecs} name="Most Popular Items" />
      <RecList recs={trendingRecs} name="Trending Items" />
    </div>
  );
};

export default Recommendations;
