import Button from "@/components/Button";
import baseNetwork from "@/utils/network";
import React from "react";

const Home = () => {
  const testNetwork = async () => {
    const res = await baseNetwork.request({
      method: "get",
      // headers: { "'Access-Control-Allow-Origin": "*" },
    });
    console.log(res);
  };

  return (
    <div>
      <Button onClick={testNetwork}>test</Button>
    </div>
  );
};

export default Home;
