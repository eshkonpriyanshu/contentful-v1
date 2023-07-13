"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeData } from "./HomeSlice";
import { useRouter } from "next/navigation";
import ContentfulApi from "./ContentfulApi";

interface BlogPost {
  featuredImage: {
    url: string;
  };
  slug: string;
  sys: {
    id: string;
  };
  thumbnail: {
    url: string;
  };
  title: string;
  __typename: string;
}

interface DetailsData {
  items: BlogPost;
  index: number;
}

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const dispatch = useDispatch();
  const homeDataContentful = useSelector((state: any) => state.homeData.data);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const query = `
      query recipeEntryQuery {
        recipe(id: "5bYCzQX3DpbSrWcbDrnZyZ") {
          sys {
            id
          }
          title
          slug
          thumbnail {
            url
          }
          
          featuredImage {
            url
          }
          __typename
          
        }
      }
      `;
      try {
        setLoading(true);
        const response = await ContentfulApi.callContentful(query);
        console.log(response);
        const { data }: any = response;
        const HomeContenfulDataApi = data?.recipe ? [data.recipe] : [];
        setBlogPosts(data);
        console.log(data?.recipe);
        if (response) {
          dispatch(homeData({ data: HomeContenfulDataApi }));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching blog posts from Contentful:", error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [dispatch]);

  const handleDetailsData = ({ items, index }: DetailsData) => {
    router.push("/detailspage");
    console.log(items, "handleDetailsData");
    dispatch(homeData({ detailsData: items }));
  };

  console.log(homeDataContentful, "homeDataContentful");

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
        {loading
          ? "loading..."
          : homeDataContentful?.map((items: BlogPost, index: number) => {
              return (
                <div key={index}>
                  <img
                    style={{ width: "5rem" }}
                    src={items?.thumbnail.url}
                    alt="thumbnail"
                  />
                  <h2>{items?.title}</h2>
                  <button onClick={() => handleDetailsData({ items, index })}>
                    details
                  </button>
                </div>
              );
            })}
      </div>
      <div>{/* Add your Carousel component here */}</div>
    </div>
  );
}
