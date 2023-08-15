import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../redux/messages/messagesSlice";

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.messages);
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch])

  console.log(message);

    return (
      <div>
        <h1> React on Rails </h1>
        <h2>{message.greeting}</h2>
      </div>
    )
}

export default Greeting;
