import { useEffect, useState } from "react";

export const usePracticeFetch = (url = "") => {
  const [contain, setContain] = useState({ data: {}, isLoading: true });

  const fetchContain = async () => {
    setContain({ data:{} , isLoading: true});
    const response = await fetch(url);
    const practices = await response.json();

    setContain({ data: practices, isLoading: false });
  };

  useEffect(() => {fetchContain()}, []);

  return { contain };
};
