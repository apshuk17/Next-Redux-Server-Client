import React from "react";
import { wrapper } from "../store/store";
import { fetchUsers } from "../store/user";

const users = () => {
  return <div>users</div>;
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchUsers())
  // console.log("State on server Users", store.getState());
  return {
    props: {},
  };
});

export default users;
