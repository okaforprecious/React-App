import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
const Data = () => {
  const [viewResult, setViewResult] = useState([]);
  console.log(viewResult);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://fullstack-student-backend.onrender.com/api/auth"
        );
        console.log(data);

        setViewResult(data);
      } catch (error) {
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);

  // for Example 3
  const navigate = useNavigate();
  const handlenavigation = (id: any) => {
    navigate(`/userDetails/${id}`);
  };

  const handleDelete = (id: any) => {
    // setLoading(true)
    try {
      axios.delete(
        `https://fullstack-student-backend.onrender.com/api/auth/delete/${id}`
      );
      window.location.reload();
      // navigate("/")
      // setSuccessMessage("")
      // setLoading(false)
    } catch (error) {
      // setErrorMessage("")
      // setLoading(false)
    }
  };

  return (
    <div>
      {viewResult.map((items: any) => (
        <>
          <h1> {items.firstName}</h1>
          <h1> {items.lastName}</h1>
          <h1>{items.phoneNumber}</h1>
          <h1>{items.email}</h1>
          <h1> {items.role}</h1>

          {/* to link to product details page */}
          {/* example 1 */}
          <button>
            <a href={`/userDetails/${items._id}`}>Click for more details</a>
          </button>

          {/* Example2 */}
          <div>
            <button>
              <Link to={`/userDetails/${items._id}`}>
                Click to view user details
              </Link>
            </button>
          </div>

          {/* example3   */}
          <div onClick={() => handlenavigation(items._id)}>
            <button>Click to view user details</button>
          </div>
          {/* create a folder under pages, DetailsPage and a file under
           that folder UserDetails.tsx
          go to App.tsx and register the component userDetails 
          on your browser to see a single user, copy the Api and paste on 
          a different tab then /"an id"(if needed)
          */}
          <div>
            <MdDeleteForever
              style={{ color: "red" }}
              onClick={() => handleDelete(items._id)}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Data;

// general data page
