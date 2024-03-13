"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const useGeolocation = (address: string) => {
  const [map, setMap] = useState<any>();

  const url = `https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`;

  useEffect(() => {
    const getData = async () => {
      const response = await axios(url);
      setMap(response);
    };
    getData();
  }, [url]);

  return map;
};

export default useGeolocation;
