import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetch(url) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return data
}

export default Fetch;
