"use client";
import { createClient } from "contentful";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeData } from "./HomeSlice";
import { useRouter } from "next/navigation";

interface HomeData {
  fields: {
    thumbnail: string;
    title: string;
  };
}

interface DetailsData {
  items: HomeData;
  index: number;
}

export default function Home() {
  const [data, setData] = useState<HomeData[]>([]);
  const dispatch = useDispatch();
  const homeDataContentful = useSelector((state: any) => state.homeData.data);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const client = createClient({
        space: "je5wh4b84iuf",
        accessToken: "KgAXSp9ZpOxO06Njx1642aUN3eKd6y4kHeg3L9uvcxU",
      });
      const res = await client.getEntries({ content_type: "recipe" });
      setData(res?.items);
      dispatch(homeData({ data: res?.items }));
    };
    getData();
  }, []);

  const handleDetailsData = ({ items }: DetailsData) => {
    router.push("/detailspage");
    dispatch(homeData({ detailsData: items }));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {homeDataContentful?.map((items: any, index: number) => {
          return (
            <div key={index}>
              <img
                style={{ width: "5rem" }}
                src={items?.fields?.thumbnail?.fields?.file?.url}
                alt="thumbnail"
              />
              <h2>{items?.fields?.title}</h2>
              <button onClick={() => handleDetailsData({ items, index })}>
                details
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
