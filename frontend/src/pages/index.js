import styles from "@/styles/Home.module.css";
import MainNav from "@/components/reuse/MainNav";
import MainFooter from "@/components/reuse/MainFooter";

import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { Inter } from "@next/font/google";

import { Card, Col, Row } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
import { Avatar } from "antd";
const { Meta } = Card;
import { Button } from "antd";
import { Spin } from "antd";

var access_token =
  "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";

export default function Home() {
  const [publicGists, setPublicGists] = useState();
  // const [getForks, setForks] = useState();

  const onSearch = async (value) => {
    // console.log(value);
    // Get Gists
    await axios
      .get(`https://api.github.com/users/${value}/gists`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((result) => setPublicGists(result.data))
      // .then((result) => console.log(result))
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

    // fetch(`https://api.github.com/users/${value}/gists`)
    // .then((response) => response.json())
    // // .then((result) => console.log(result.json()));
    // .catch(function (error) {
    //   if (error.response) {
    //     // Request made and server responded
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }

    // })
    // .then((ids) => {
    //   const respones = ids.map(
    //     (forkId) =>
    //       fetch(
    //         `https://api.github.com/gists/${forkId.id}/forks`
    //       )
    //       // .then((res) => res.json())
    //     .then((res) => console.log(res.json())),
    //   );
    //   Promise.all(respones).then((fetchedids) => {
    //     setForks(fetchedids);
    //     // setIsLoading(false)
    //   });
    // })
    // .catch(function (error) {
    //   if (error.response) {
    //     // Request made and server responded
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.log(error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }

    // });
  };

  // const getData = async () => {
  //   // Get Posts
  //   await axios
  //     // .get(`https://api.github.com/gists`)
  //     .get(`https://api.github.com/users/bgoonz/gists`)
  //     // .then((result) => setPublicGists(result.data))
  //       .then((result) => console.log(result.data))
  //     .catch(function (error) {
  //       if (error.response) {
  //         // Request made and server responded
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log(error.request);
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log("Error", error.message);
  //       }
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <Head>
        <title>Public Gists</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="hero-container">
        <div class="hero-body">
          <h1 style={{ marginBottom: "20px" }}>Search Gists By User</h1>

          <Search
            placeholder="input username"
            allowClear
            onSearch={onSearch}
            style={{
              width: 500,
            }}
          />
        </div>
      </div>
      <div className="container">
        <div className="site-card-wrapper">
          <Row
            gutter={16}
            offset={16}
            style={{ marginBottom: "5%", marginTop: "5%" }}
          >
            {publicGists ? (
              publicGists.map((item) => {
                return (
                  <Col span={8} style={{ marginBottom: "2%", marginTop: "2%" }}>
                    <Card
                      style={{
                        width: 300,
                      }}
                      cover={
                        <img
                          alt="example"
                          src={
                            item.owner["avatar_url"]
                              ? item.owner["avatar_url"]
                              : "https://github.githubassets.com/images/modules/site/features/codespaces.jpg"
                          }
                        />
                      }
                    >
                      {Object.keys(item.files).map((item2, i) => {
                        return (
                          <Button type="dashed">
                            {item2.replace(/^[^.]+\./, "")}
                          </Button>
                        );
                      })}
                    <Link href={`forksingle/${item.id}`}>
                        <Meta
                          avatar={
                            <Avatar src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" />
                          }
                          title="Johnson"
                          style={{ marginTop: "5%", marginBottom: "5%" }}
                        />
                      </Link>
                      <Link href={`forksingle/${item.id}`}>
                        <Meta
                          avatar={
                            <Avatar src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" />
                          }
                          title="Johnson"
                          style={{ marginTop: "5%", marginBottom: "5%" }}
                        />
                      </Link>
                      <Link href={`forksingle/${item.id}`}>
                        <Meta
                          avatar={
                            <Avatar src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" />
                          }
                          title="Johnson"
                          style={{ marginTop: "5%", marginBottom: "5%" }}
                        />
                      </Link>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Spin size="large" />
            )}
          </Row>
        </div>
      </div>

      <MainFooter />
    </>
  );
}
