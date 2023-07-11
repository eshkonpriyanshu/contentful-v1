"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "contentful";
type Option = {
  value: string;
  label: string;
  link: string;
};

const NavBar = async () => {
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState("");

  const client = createClient({
    space: "je5wh4b84iuf",
    accessToken: "KgAXSp9ZpOxO06Njx1642aUN3eKd6y4kHeg3L9uvcxU",
  });
  const res = await client.getEntries({ content_type: "navbar" });

  let data: any = res.items[0]?.fields;

  const { navlinks, blog, blog1, blog2 } = data;

  const options: Option[] = [
    {
      value: "option1",
      label: navlinks,
      link: blog,
    },
    {
      value: "option2",
      label: navlinks,
      link: blog1,
    },
    {
      value: "option3",
      label: navlinks,
      link: blog2,
    },
  ];

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log(value);
    const selectedLink = options?.find(
      (option: any) => option?.value === value
    )?.link;
    if (selectedLink) {
      router.push(selectedLink);
    }
  };
  return (
    <div key={data}>
      <div
        style={{
          display: "flex",
          color: "white",
          backgroundColor: "black",
          justifyContent: "space-around",
          height: "4rem",
          alignItems: "center",
        }}
      >
        <div> NavBar</div>
        <div style={{ alignItems: "center" }}>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Select an option</option>
            {options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
