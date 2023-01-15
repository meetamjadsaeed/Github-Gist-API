import styles from "@/styles/Home.module.css";
import MainNav from "@/components/reuse/MainNav";
import MainFooter from "@/components/reuse/MainFooter";
import Commits from "@/components/Commits";

import Head from "next/head";
import { useState } from "react";
import axios from "axios";

import { Card, Col, Row } from "antd";
import { Input } from "antd";
const { Search } = Input;
import { Button } from "antd";
import { Spin } from "antd";

var access_token = "";

export default function Home() {
  const [publicGists, setPublicGists] = useState();

  const onSearch = async (value) => {
    // Get Gists by username e.g bgoonz
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}users/${value}/gists`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
      .then((result) => setPublicGists(result.data))
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

  return (
    <>
      <Head>
        <title>Public Gists</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.heroContainer}>
        <div className={styles.heroBody}>
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
                  <Col
                    xl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    style={{ marginBottom: "2%", marginTop: "2%" }}
                  >
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

                      <Commits propsData={{ gistId: item.id && item.id }} />
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
