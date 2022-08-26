import React from "react";
import RoomDetail from "../../components/room/RoomDetail";

const SingleRoom = ({ id }) => {
  return (
    <div>
      SingleRoom
      <div>
        <RoomDetail id={id} />
      </div>
    </div>
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
