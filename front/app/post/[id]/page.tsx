import React from "react";
import ClientPage from "./ClientPage";

const PostPage = ({ params }: { params: { id: string } }) => {
  return <ClientPage params={params} />;
};

export default PostPage;
