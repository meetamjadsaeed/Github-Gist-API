import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Card } from "antd";
import { Avatar } from "antd";
const { Meta } = Card;
import { Spin } from "antd";

var access_token = "";

const Commits = ({ propsData }) => {
  const [getForks, setForks] = useState();

  const getCommits = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}gists/${propsData.gistId}/commits`,
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
          params: {
            per_page: 3,
          },
        }
      )
      .then((result) => setForks(result.data))
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

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <div>
      {getForks ? (
        getForks.map((item) => {
          return (
            <Link href={`forksingle/${item && item.user && item.user.id}`}>
              <Meta
                avatar={
                  <Avatar src={item && item.user && item.user.avatar_url} />
                }
                title={item && item.user && item.user.id}
                style={{ marginTop: "5%", marginBottom: "5%" }}
              />
            </Link>
          );
        })
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default Commits;
