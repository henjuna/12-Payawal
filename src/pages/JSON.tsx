import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Buttons } from "../component/Buttons";
import { JSONTable } from "../component/JSONTable";

export default function JSON() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network request failed");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container fluid className="json-whole">
      <div className="json-mainPage">
        <div className="json-header">
          <h1 className="JSONText">JSON Page</h1>
          <p>All Users</p>
        </div>
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th className="widerColumn">ID</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Street</th>
                <th>Suite</th>
                <th>City</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <JSONTable user={user} />
              ))}
            </tbody>
          </Table>
        </div>
        <div className="home-Btn">
          <Buttons label="Back to Home" to="/" cssscript={"hobbyBtn"} />
        </div>
      </div>
    </Container>
  );
}
