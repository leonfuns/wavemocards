// import React from 'react';
import Connect from "./connect";
// import CardList from "../components/common/CardList";

export const Card = () => {
  const API_URL = `${process.env.REACT_APP_GET_EMOTION_CARDS}?lang=zh-TW`;
  const card = Connect(API_URL);
  console.log(card);
  return (
    card
  );
};

// export Card;
//  {/* <Connect URL={API_URL}>
//    {(data) => <CardList card={data} />}
 // </Connect> */}