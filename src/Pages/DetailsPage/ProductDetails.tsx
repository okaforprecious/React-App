import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [viewResult, setViewResult] = useState<any>({});
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/products/${id}`
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
      <h1>ProductDetails</h1>
      <div>
        <div>
          {viewResult?.products?.images.map((img: any) => (
            <>
              <img src={img.url} />
            </>
          ))}
        </div>
        <h1>{viewResult?.products?.name}</h1>
        <h1>{viewResult?.products?.brand}</h1>
        <h3>{viewResult?.products?.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
