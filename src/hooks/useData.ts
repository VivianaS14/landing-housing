import { useEffect, useState } from "react";
import { data } from "../json/data.json";
import { Data } from "../interface/ProjectData";

export const useData = () => {
  const [project, setProject] = useState<Data>(data);

  useEffect(() => {
    setProject(data);
  }, []);

  return { project };
};
