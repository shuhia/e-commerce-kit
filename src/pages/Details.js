import React from "react";
import BigButton from "../components/buttons/BigButton";
import { useRouteMatch } from "react-router";

function Details() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <BigButton name="Go to shipping" href={url + "/shipping"}></BigButton>
    </div>
  );
}

export default Details;
