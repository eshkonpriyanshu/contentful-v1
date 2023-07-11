"use client";
import { createClient } from "contentful";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { footerDataSlice } from "./FooterSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const footerDataContentful = useSelector(
    (state: any) => state.footerData.text
  );

  useEffect(() => {
    const getData = async () => {
      const client = createClient({
        space: "je5wh4b84iuf",
        accessToken: "KgAXSp9ZpOxO06Njx1642aUN3eKd6y4kHeg3L9uvcxU",
      });
      const res = await client.getEntries({ content_type: "footer" });

      const data: any = res.items[0]?.fields;
      dispatch(footerDataSlice({ text: data }));
    };

    getData();
  }, []);

  const { instagram, facebook, youtube } = footerDataContentful;

  return (
    <div style={{ background: "black", height: "10rem", alignItems: "center" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Link
          href={
            instagram === undefined || instagram === null
              ? "404"
              : `https://${instagram}`
          }
          style={{
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
            marginTop: "3rem",
          }}
          target="_blank"
        >
          instagram
        </Link>
        <Link
          style={{
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
            marginTop: "3rem",
          }}
          href={
            facebook === undefined || facebook === null
              ? "404"
              : `https://${facebook}`
          }
          target="_blank"
        >
          facebook
        </Link>
        <Link
          style={{
            color: "white",
            cursor: "pointer",
            textDecoration: "none",
            marginTop: "3rem",
          }}
          href={
            youtube === undefined || youtube === null
              ? "404"
              : `https://${youtube}`
          }
          target="_blank"
        >
          youtube
        </Link>
      </div>
    </div>
  );
};

export default Footer;
