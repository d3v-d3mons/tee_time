import React, {Component, useEffect, useState} from "react";
import auth from "../../utils/auth";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";

export default function OurStory() {
  const [user] = useLazyQuery(QUERY_USER);
  const [nickname, setNickname] = useState("")

  const findNickname = async (email) => {
    const nickname = await user({
      variables: {
        email: email
      }
    })
    return setNickname(nickname);
  };

  return (
    <div className="ourStory">
      {auth.loggedIn() ? (
        <h1 className="welcomeHead">Welcome {nickname}</h1>
      ) : (
        <h1 className="welcomeHead">Welcome to the Tee Time Scorecard!</h1>
      )}
      We here at d3v d3mons designed Tee Time application to best suit the needs
      of the common golfer. While other apps are tailored to the most elite
      range of golfers, Tee Time is more suited for the weekend warrior who just
      wants to keep track of their games without the hassle of keeping track of
      a scorecard.
    </div>
  );
}
