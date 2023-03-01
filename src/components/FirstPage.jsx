import React from "react";

export default function FirstPage() {
  return (
    <div>
      <div className="flex flex-col mt-60 gap-5 justify-center items-center font-podkova text-8xl">
        <p className=" ">Safer yields in</p>
        <p className=" ">volatile market</p>
        <p className=" ">environments</p>
        <div className=" z-10 mt-10 border-4 border-black rounded-full">
          <button className=" select-none z-10 text-7xl border-4 border-black rounded-full p-5 bg-black text-white text-center transform -translate-y-2 hover:transform hover:translate-y-0 hover:px-6 duration-200">
            LAUNCH
          </button>
        </div>
      </div>
      <div className=" select-none group relative z-10 w-48">
        <img
          src="https://uploads-ssl.webflow.com/624526d25addf021c5efcde0/624526d25addf02f52efcdfa_hand.svg"
          className="w-48"
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 delay-300">
          <a
            className="absolute left-10 top-10 group-hover:-translate-y-48 delay-300 duration-300"
            href="https://cega.notion.site/cega/Careers-at-Cega-e1b7f97e0f7546aa9ee6f7acc5872ebf"
          >
            <img src="https://uploads-ssl.webflow.com/624526d25addf021c5efcde0/624546185250364e0870b826_angellist.svg" />
          </a>
          <a
            className="absolute left-10 top-10 group-hover:-translate-y-36 group-hover:translate-x-24 delay-300 duration-300"
            href="https://discord.gg/cega"
          >
            <img
              className="w-16"
              src="https://uploads-ssl.webflow.com/624526d25addf021c5efcde0/624526d25addf0515aefce04_ic_discord.svg"
            />
          </a>
          <a
            className="absolute left-10 top-10 group-hover:-translate-y-20 group-hover:translate-x-44 delay-300 duration-300 w-48"
            href="https://twitter.com/cega_fi"
          >
            <img
              className="w-16"
              src="https://uploads-ssl.webflow.com/624526d25addf021c5efcde0/624526d25addf04233efce05_ic_twitter.svg"
            />
          </a>
        </div>
        
      </div>
    </div>
  );
}
