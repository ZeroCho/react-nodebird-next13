import { CardHeader } from "@mui/material";
import React, { FC, useState } from "react";
import User from "@/typings/user";
import dayjs from "dayjs";
import ReportModal from "../../ReportModal";
import UserAvatar from "../UserAvatar";
import HeaderAction from "../HeaderAction";
import FollowButton from "../../FollowButton";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

interface Props {
  user: Partial<User> & { id: number };
  postId: number;
  createdAt: string;
  disableAction?: boolean;
}

const TweetCardHeader: FC<Props> = ({
  user,
  postId,
  createdAt,
  disableAction = false,
}) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const { data: me } = useMyInfoQuery();
  const toggleReportModal = () => {
    setShowReportModal((pre) => !pre);
  };

  return (
    <>
      <ReportModal open={showReportModal} handleClose={toggleReportModal} />
      <CardHeader
        avatar={<UserAvatar user={user} />}
        action={
          !disableAction && (
            <HeaderAction
              user={user}
              postId={postId}
              toggleReportModal={toggleReportModal}
            />
          )
        }
        title={
          <>
            {user.nickname}
            {me && me.id !== user.id && <FollowButton user={user} />}
          </>
        }
        subheader={dayjs(createdAt).format("YYYY.MM.DD")}
      />
    </>
  );
};

export default TweetCardHeader;
