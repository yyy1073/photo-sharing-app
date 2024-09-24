import React from "react";

import UsersList from "../components/UsersList";

// Dummy data in place of fetching from database
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Rachael",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
