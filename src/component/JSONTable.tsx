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
      <td className="widerColumn" id='row-design'>{user.id}</td>
      <td id='row-design'>{user.name}</td>
      <td id='row-design'>{user.username}</td>
      <td id='row-design'>{user.address.street}</td>
      <td id='row-design'>{user.address.suite}</td>
      <td id='row-design'>{user.address.city}</td>
      <td id='row-design'>{user.address.zipcode}</td>
    </tr>
  );
};
