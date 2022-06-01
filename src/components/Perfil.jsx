import React from "react";
import { useRouteMatch } from "react-router-dom";
import Navigation from "./Navigation";

function Perfil() {
  const { url } = useRouteMatch();
  const loggedIn = localStorage.getItem("loggedIn")
  return (
    <div>

      <h2>
        Perfil
      </h2>

      <>
        <Navigation authorized={loggedIn} baseUrl={url} />
      </>
      );

    </div>
  );
}

export default Perfil;