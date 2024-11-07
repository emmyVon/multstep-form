import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Steps from "../components/Steps";
import Form from "../components/Form";

const PersonalInfo = () => {
  return (
    <>
      <div className="Top">
        <div className="Header">
          <Header
            Bigheader={"Personal Info"}
            subheader={
              "please provide your name, email adderss and phone number "
            }
          />
        </div>
      </div>
      <div className="mid">
        <Input />
      </div>
    </>
  );
};

export default PersonalInfo;
