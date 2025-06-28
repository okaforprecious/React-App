import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [viewResult, setViewResult] = useState<any>({});
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `https://fullstack-student-backend.onrender.com/api/auth/${id}`
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
      <h1>UserDetails</h1>
      <div>
        {/* no map because the data is an object not an array */}
        <h1>{viewResult?.firstName}</h1>
        <h1>{viewResult?.lastName}</h1>
        <h3>{viewResult?.phoneNumber}</h3>
      </div>
    </div>
  );
};

export default UserDetails;

// data details page
