import { useState, useEffect } from "react";
import axios from "axios";

import Tour from "./Tour";

function TourList() {

  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeTourList = (idInfo) => {
    const filterTours = tourList.filter(item => item.id !== idInfo);
    setTourList(filterTours);
  };

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://course-api.com/react-tours-project");
      const result = await response.data;
      setTourList(result);
      setIsLoading(false);
    } catch (e) {
      console.log(error);
      setIsLoading(false)
    }

  };

  useEffect(() => {
    getData();
  }, []);


  if (isLoading) {
    return (
      <div className="tour-list">
        <h1 style={{ color: "rgb(8, 8, 117)" }}>Loading...</h1>
      </div>
    )
  }

  if (tourList.length === 0) {
    return (
      <div className="tour-list">
        <h1>No Tours Left</h1>
        <button type="button" onClick={getData} className="refresh-btn">Refresh</button>
      </div>
    )
  }

  return (
    <article className="tour-list">
      <h1>Our Tours</h1>
      {
        tourList.map(tour => (
          <Tour key={tour.id} {...tour} onChangeTourList={onChangeTourList} />
        ))
      }
    </article>
  )
};

export default TourList;