import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "7c5m8gs15npn",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

// custom hook
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        const { id } = item.sys;
        return { title, id, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
