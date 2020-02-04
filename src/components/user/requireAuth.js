import React, { useEffect } from "react";

export default function(ComposedComponent) {
  function Authentication(props) {
    useEffect(() => {
      if (!localStorage.getItem("token")) props.history.push("/userlogin");
    }, []);

    return <ComposedComponent {...props} />;
  }
  return Authentication;
}
