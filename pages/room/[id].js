import React from "react";
import RoomDetail from "../../components/room/RoomDetail";

const SingleRoom = ({ id }) => {
  return (
    <>
      <RoomDetail id={id} />
    </>
  );
};

export default SingleRoom;
export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  return {
    props: {
      id: id,
    },
  };
};
