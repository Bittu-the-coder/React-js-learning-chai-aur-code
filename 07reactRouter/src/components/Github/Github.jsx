// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState(null); // Initialize as null

  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((res) => res.json()) // Correctly call json()
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error)); // Handle errors
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-50">
      {data ? ( // Conditional rendering
        <>
          <p>Github followers: {data.followers}</p>
          <img src={data.avatar_url} alt="Git Picture" width={300} />
        </>
      ) : (
        <p>Loading...</p> // Loading state
      )}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
