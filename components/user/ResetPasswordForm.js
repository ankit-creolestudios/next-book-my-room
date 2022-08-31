import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/feature/userSlice";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwords = {
      password,
      confirmPassword,
    };
    if (password === confirmPassword) {
      dispatch(resetPassword({ token: router.query?.token, passwords }));
    }
  };
  const state = useSelector((state) => state.usersPv);
  console.log(state);
  return (
    <div>
      ResetPassword
      <div>
        <div>
          <div>
            <h3>Reset Password</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Password</label>
              <input
                type={"text"}
                value={password}
                placeholder={"Enter new password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type={"text"}
                value={confirmPassword}
                placeholder={"Re-enter password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
