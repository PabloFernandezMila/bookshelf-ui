import { useState } from "react";
import { api } from "../../api/api";
import { useEffect } from "react";

export function Greeting(props) {
  const [userNamDB, setUserName] = useState("");

  //This variable emulates having an logged in user ID
  const loggedUserID = 1;

  useEffect(() => {
    //Get user info using the id to query the DB
    const userIDURL = "http://localhost:4000/users/" + loggedUserID + "/name";
    api.get(userIDURL).then(function (response) {
      //Set the name
      setUserName(response.data);
    });
  }, []);
  return (
    <div
      id="greeting-user"
      className="roboto-white"
      style={
        props.isBurgerMenuExpanded
          ? { display: "initial" }
          : { display: "none" }
      }
    >
      <p>Welcome {userNamDB}</p>
    </div>
  );
}
