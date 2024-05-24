import React, { useState, useEffect } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const response = await res.json();
      setDogImage(response.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}
