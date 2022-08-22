import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchItem = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    // if (location.trim()) {
    //   router.push(`/?location=${location}`);
    // } else {
    //   router.push("/");
    // }
  };
  console.log(location);
  return (
    <div>
      Search
      <div>
        <div className="container container-fluid">
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form onSubmit={submitHandler}>
                <h2>Search Room</h2>
                <div className="form-group">
                  <label></label>
                  <input
                    type={"text"}
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
