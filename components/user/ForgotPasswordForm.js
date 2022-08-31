import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../redux/feature/userSlice";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      dispatch(forgotPassword({ email }));
    }
  };

  const state = useSelector((state) => state.usersPv);
  console.log(state);
  return (
    <>
      <div>
        <h3>Forgot Password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type={"text"}
            value={email}
            placeholder={"Enter new password"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
