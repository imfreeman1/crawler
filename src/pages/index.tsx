import Button from "@/components/Button";
import baseNetwork from "@/utils/network";
import axios from "axios";
import React from "react";
import puppeteer from "puppeteer";

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

export const getServerSideProps = async ({ req, res }) => {
  if (req.method === "GET") {
    console.log("start");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.naver.com");
    const test = await page.evaluate(() => {});
    console.log(test);
    await page.close();
    req.method = null;
    console.log("req", req.method);
  }
  return {
    props: {},
  };
};

export default Home;
