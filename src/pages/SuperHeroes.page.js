import axios from "axios";
import { useEffect, useState } from "react";

export const SuperHeroes = () => {
  const [isLoading, seIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/superheroes`)
      .then((res) => {
        setData(res.data);
        seIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        seIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
