import React, { useEffect, useState } from "react";
import axios from "axios";

// javascript side
const FetchAllData = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://api-adsng.c9ja.com/cretive-products/pag/all?page=1"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);

  // html side
  return (
    <div>
      <h1>Display Data Screen</h1>
      {viewResult.map((items: any) => (
        <>
          <h1> {items.title}</h1>
          <h1> {items.category}</h1>
          <h1> {items.price}</h1>
          {/* <img src={items.fileUrl} /> */}
          {items.fileUrl.map((list: any) => (
            <>
              <img src={list} />
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default FetchAllData;

//general data page
