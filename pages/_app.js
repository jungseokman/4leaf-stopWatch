import React from "react";
import "antd/dist/antd.css";
import wrapper from "../store/storeConfigure";

const AppShell = ({ Component }) => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default wrapper.withRedux(AppShell);
