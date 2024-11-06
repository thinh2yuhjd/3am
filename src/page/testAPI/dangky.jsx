import React, { useState } from "react";
import axios from "axios";
export function DangkyPage() {
  const [isUsername, setisUsername] = useState("");
  const [isPassword, setisPassword] = useState("");

  const hangdleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios
      .get("https://672bb1531600dda5a9f60aa5.mockapi.io/users")
      .then((reponse) => {
        reponse.data.forEach((item) => {
          console.log(item.username);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <button onClick={hangdleSubmit}>a</button>
    </div>
  );
}
