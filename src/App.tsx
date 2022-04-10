import React from "react";
import {
  PhoneOutlined,
  GlobalOutlined,
  MessageOutlined,
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import "./App.css";
import useFetch from "./hooks/fetch";
import { Layout, Card, Col, Row, Skeleton } from "antd";
import { User } from "./types";
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

const userAPI = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { status, data } = useFetch(userAPI);

  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>
          <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
              {status === "fetched" &&
                data.map((user: User) => (
                  <Col xs={24} sm={12} md={8} tabIndex={0} key={user.id}>
                    <Card
                      loading={status === "fetching"}
                      cover={
                        <img
                          alt={user.name}
                          src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=happy`}
                        />
                      }
                      actions={[
                        <HeartOutlined key="love" tabIndex={0} />,
                        <EditOutlined key="edit" tabIndex={0} />,
                        <DeleteOutlined key="delete" tabIndex={0} />,
                      ]}
                    >
                      <Skeleton loading={status === "fetcing"} title active>
                        <Meta
                          title={user.name}
                          description={
                            <>
                              <p>
                                <MessageOutlined />
                                <span tabIndex={0}>{user.email}</span>
                              </p>
                              <p>
                                <PhoneOutlined />
                                <span tabIndex={0}>{user.phone}</span>
                              </p>
                              <p>
                                <GlobalOutlined />
                                <span tabIndex={0}>{user.website}</span>
                              </p>
                            </>
                          }
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
