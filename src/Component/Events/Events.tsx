import React, { useState } from "react";
import img1 from "../../assets/service-1.jpg";

const Events = () => {
  //  Example1
  const [displaycontent, setDisplayContent] = useState("hello");
  //  Example2
  const [count, setcount] = useState(0);
  //  Example3
  const [displaydata, setdisplaydata] = useState<any>([]);

  console.log(displaycontent);
  const sampleFunction = () => {};
  //  Example1
  const handleChange = () => {
    setDisplayContent("Welcome to Whoba ogo foundation");
  };
  //  Example2
  const handleIncrement = () => {
    setcount(count + 1);
  };
  const handleDecrement = () => {
    setcount(count - 1);
  };

  //  Example3
  const fetchData = () => {
    setdisplaydata([
      {
        id: 1,
        image: img1,
        Name: "King",
      },
      {
        id: 2,
        Name: "king",
      },
    ]);
  };

  return (
    //  Example1
    <div>
      <button onClick={handleChange}>Click Me</button>
      <h1>{displaycontent}</h1>

      {/* // Example2  */}
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      {/* //  Example3 */}
      <div>
        <h2 onClick={fetchData}>Click to Fetch data</h2>
        {displaydata.map((items: any) => (
          <>
            <h1>{items.id}</h1>
            <h1>{items.Name}</h1>
            <img src={items.image} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Events;
