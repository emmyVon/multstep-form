import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Form from "../components/Form";
import Step from "./Step";

const SharedLayout = () => {
  return (
    <div className="app">
      <Form>
        <div className="left-side">
          <Step />
        </div>
        <div className="right-side">
          <Outlet />
        </div>
      </Form>
    </div>
  );
};

export default SharedLayout;
