"use client";
import "./header.scss";
import Link from "next/link";
import { useState } from "react";
import DarkModeButton from "../components/darkModeButton/DarkModeButton";
const Header = () => {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <hedaer className="header">
      <div className="logo">
        <Link href="/" className="logo-name">
          <span>Breaking News</span> is Here
        </Link>
      </div>

      <div className="right">
        <nav className="navLinks">
          {categories.map((links) => (
            <Link className="links" href={`/${links}`} key={links}>
              {links}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          ))}
          <button className="search-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setSearch(!search)}
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </nav>
        {search && (
          <div className="from-container">
            <form className="form" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Search Keywords..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Link href={`/${value}`} className="search-btn">
                Search
              </Link>
            </form>
          </div>
        )}
      </div>
      <DarkModeButton />
    </hedaer>
  );
};

export default Header;
