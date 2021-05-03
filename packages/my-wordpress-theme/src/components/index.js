import React from "react";
import { connect } from "frontity";

const Root = ({ state }) => {
    return (
      <>
          <h1>Frontitty in my punini</h1>
          <h2>Frontitty in my punini</h2>
          <p>Current URL: {state.router.link}</p>
      </>
    );
  };

export default connect(Root);