import React from "react";

const FormFild = (props) => {
  return (
    <>
      <p className="formFiled">
        <input
          type="text"
          placeholder="Enter your Name"
          name="fullname"
          value={props.fullname}
          onChange={props.onChange}
          required
        />
      </p>
      <p className="formFiled">
        <input
          type="email"
          placeholder="Enter your Email"
          name="userEmail"
          value={props.userEmail}
          onChange={props.onChange}
          required
        />
      </p>
      <p className="formFiled">
        <div className="radioButtonFiled">
          <span>Gender</span>
          <div className="radioBtnItem">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={props.onChange}
            />
              <label htmlFor="male">Male</label>
          </div>
          <div className="radioBtnItem">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={props.onChange}
            />
              <label htmlFor="female">Female</label>
          </div>
        </div>
      </p>
      {/* <p className="formFiled">
        <label htmlFor="myfile">Select Your Profile:</label> &nbsp; &nbsp;
        <input
          type="file"
          id="myfile"
          name="takeFile"
          value={props.takeFile}
          onChange={props.onChange}
          className="Myfile"
          required
        />
      </p> */}
      <p className="formFiled">
        <label className="selectMenu">
          Level of Education(Select options):
          <select name="selectEdu" onChange={props.onChange}>
            <option value="Highschool">High school </option>
            <option value="Technical">
              Technical or occupational certificate
            </option>
            <option value="AssociateDegree">Associate degree.</option>
            <option value="BachelorDegree">Bachelor's degree</option>
            <option value="MasterDegree">Master's degree</option>
            <option value="Doctorate">Doctorate</option>
          </select>
        </label>
      </p>
      <p className="formFiled">
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={props.password}
          onChange={props.onChange}
          required
        />
      </p>
      <p className="formFiled">
        <input
          type="password"
          placeholder="Confirm password"
          name="Repassword"
          value={props.Repassword}
          onChange={props.onChange}
          required
        />
      </p>
      <p>
        {props.btnConten ? (
          <input
            type="submit"
            value="Submit"
            className="btn"
            onClick={props.SubmitBtn}
          />
        ) : (
          <input
            type="button"
            value="Edit"
            className="btn"
            onClick={props.SubmitBtn}
          />
        )}
      </p>
    </>
  );
};
export default FormFild;
