import React from "react";
import cegaLogo from "../assets/cegaLogo.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="">
        <img src={cegaLogo} />
      </div>
      <ul className="flex gap-10 font-damion text-3xl">
        <li className="select-none z-10">
          <a href="https://www.cega.fi/medium-feed">Blog</a>
        </li>
        <li className="select-none z-10">
          <a href="https://docs.cega.fi/cega/">Docs</a>
        </li>
        <li className="select-none z-10">
          <a href="https://cega.notion.site/Careers-at-Cega-e1b7f97e0f7546aa9ee6f7acc5872ebf">Jobs</a>
        </li>
      </ul>
    </nav>
  );
}
