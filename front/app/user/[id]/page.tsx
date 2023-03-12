import React from "react";
import ClientPage from "./ClientPage";

const UserTweetPage = ({ params }: { params: { id: string } }) => {
  return <ClientPage params={params} />;
};

export default UserTweetPage;
