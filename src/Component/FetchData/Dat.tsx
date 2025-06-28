import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dat = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/products"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {viewResult.map((items: any) => (
        <>
          <div>
            {items.images.map((img: any) => (
              <>
                <img src={img.url} />
              </>
            ))}
          </div>
          <h1> {items.name}</h1>
          <h1> {items.price}</h1>
          <h1> {items.brand}</h1>
          <h1>{items.category}</h1>
          <div>
            <button>
              <Link to={`/ProductDetails/${items._id}`}>
                Click for more details
              </Link>
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Dat;

//general data page
