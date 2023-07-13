"use client";
import React from "react";
import { useSelector } from "react-redux";

const detailspage = () => {
  const Data = useSelector((state: any) => state.homeData.detailsData);
  console.log(Data, "detailspage");
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        textAlign: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <img
          style={{ width: "5rem" }}
          src={Data?.thumbnail?.url}
          alt="thumbail"
        />
      </div>
      <div>Title: - {Data?.title}</div>
    </div>
  );
};

export default detailspage;
