import React from "react";
import ContentsLayout from "./layout";

const teams_info = () => {
  return (
    <div>
      <h1 className="text-5xl pt-10 font-bold text-center">Making</h1>
      <p className="text-body-color dark:text-dark-6 flex text-base ">
        <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[36px] items-center justify-center rounded text-base text-white">
          1
        </span>
        <span className="flex-1">AI Workshop</span>
        <span className="flex-1 mr-10"></span>
        <span className="text-sm text-white dark:text-dark-3">2021-10-20</span>
        <span className="text-sm ml-10 text-white dark:text-dark-3">
          It is a long established fact reader
        </span>
      </p>
      <p className="text-body-color dark:text-dark-6 flex text-base ">
        <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[36px] items-center justify-center rounded text-base text-white">
          2
        </span>
        <span className="flex-1">AI Workshop</span>
        <span className="flex-1 mr-10"></span>
        <span className="text-sm text-white dark:text-dark-3">2021-10-20</span>
        <span className="text-sm ml-10 text-white dark:text-dark-3">
          It is a long established fact reader
        </span>
      </p>
      <p className="text-body-color dark:text-dark-6 flex text-base ">
        <span className="bg-primary mr-2.5 flex h-[26px] w-full max-w-[36px] items-center justify-center rounded text-base text-white">
          3
        </span>
        <span className="flex-1">AI Workshop</span>
        <span className="flex-1 mr-10"></span>
        <span className="text-sm text-white dark:text-dark-3">2021-10-20</span>
        <span className="text-sm ml-10 text-white dark:text-dark-3">
          It is a long established fact reader
        </span>
      </p>
    </div>
  );
};

export default function Teams() {
  return <ContentsLayout children={teams_info()} />;
}
