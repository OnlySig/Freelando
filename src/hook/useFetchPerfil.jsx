import { useEffect, useState } from "react";
import http from "../http";
import { useQuery } from "@tanstack/react-query";

const useFetchPerfil = () => {
  const fetchPerfil = async () => {
    const { data } = await http.get("profile");
    return data;
  };
  const [objForm, setObjForm] = useState({});
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchPerfil(),
  });
  useEffect(() => {
    setObjForm(data);
    const nameSplit = data?.nomeCompleto?.split(" ");
    if (nameSplit) {
      setFristName(nameSplit[0]);
      setLastName(nameSplit[1]);
    }
  }, [data]);

  return {
    setObjForm,
    setFristName,
    setLastName,
    objForm,
    firstName,
    lastName,
    isLoading
  };
};

export default useFetchPerfil;