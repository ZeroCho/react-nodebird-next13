import React, { FC, useState } from "react";
import ReportModal from "@/components/Tweets/ReportModal";
import dayjs from "dayjs";
import Tweet from "@/typings/tweet";
import { CardHeader } from "@mui/material";
import UserAvatar from "../UserAvatar";
import HeaderAction from "../HeaderAction";
import FollowButton from "../../FollowButton";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

interface Props {
  data: Tweet;
}

const ReTweetCardHeader: FC<Props> = ({ data }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const { data: me } = useMyInfoQuery();
  const toggleReportModal = () => {
    setShowReportModal((pre) => !pre);
  };
  return (
    <>
      <ReportModal open={showReportModal} handleClose={toggleReportModal} />
      <CardHeader
        title={
          <>
            {`"${data.User.nickname}" 님이 리트윗 하셨습니다.`}
            {me?.id !== data.User.id && <FollowButton user={data.User} />}
          </>
        }
        avatar={<UserAvatar user={data.User} />}
        action={
          <HeaderAction
            user={data.User}
            postId={data.id}
            toggleReportModal={toggleReportModal}
          />
        }
        subheader={dayjs(data.createdAt).format("YYYY.MM.DD")}
      />
    </>
  );
};

export default ReTweetCardHeader;
