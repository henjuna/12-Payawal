import React, { FC } from "react";

interface User {
    id: number;
    name: string;
    username: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
}

interface JSONTableProps {
    user: User;
}

export const JSONTable: FC<JSONTableProps> = ({user}) => {
  return (
    <tr>
      <td className="widerColumn">{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.address.street}</td>
      <td>{user.address.suite}</td>
      <td>{user.address.city}</td>
      <td>{user.address.zipcode}</td>
    </tr>
  );
};
