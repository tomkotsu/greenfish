import { useState, useEffect } from "react";

const fish = () => {
  const [snapper, setSnapper] = useState("");

  useEffect(() => {
    (async () => {
      const req = await fetch(`https://www.fishwatch.gov/api/species`);
      const data = await req.json();
      setSnapper(data[0]["Path"])
    })();
  });

  return <div>{snapper}</div>;
};


export default fish;
