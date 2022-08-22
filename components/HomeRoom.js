import { useRouter } from "next/router";
import React from "react";
import Pagination from "react-js-pagination";

const HomeRoom = (props) => {
  const router = useRouter();
  const { resPerPage, roomCount, filteredRoomCount } = props;

  let { page } = router.query;
  page = Number(page);
  const handlePagination = (pageNumber) => {
    router.push(`/?page=${pageNumber}`);
  };
  return (
    <div>
      HomeRoom
      <div></div>
      {/* {lec-48 search add} */}
      {/* {resPerPage < roomCount && ( */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination
          activePage={page}
          itemsCountPerPage={resPerPage}
          totalItemsCount={roomCount}
          onChange={handlePagination}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass={"page-item"}
          linkClass="page-link"
        />
      </div>
      {/* {lec-47 need to work} */}
    </div>
  );
};

export default HomeRoom;
