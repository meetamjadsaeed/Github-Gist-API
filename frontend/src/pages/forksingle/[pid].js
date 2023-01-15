import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import MainFooter from "@/components/reuse/MainFooter";
import { Card } from "antd";
const { Meta } = Card;
import axios from "axios";
// import "antd/dist/antd.css";

const forkSingle = () => {
  const [getForkSingle, setForkSingle] = useState();

  const router = useRouter();
  const { pid } = router.query;

  const getData = async () => {
    await axios
      .get(`https://api.github.com/users/sdsd/gists`)
      .then((result) => setForkSingle(result.data))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <>
      <div className="container">
        <Card
          hoverable
          style={{
            width: 500,
            marginBottom: "5%",
            marginTop: "5%",
          }}
          cover={
            <img
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBqId3X1dyv5EJKVwzAjZqJyVHObxurSnfg&usqp=CAU"
            />
          }
        >
          <Meta title="Amjad Saeed" description="example.com" />
        </Card>
      </div>
      <MainFooter />
    </>
  );
};

export default forkSingle;
