import React from "react";

// @ts-ignore
export default function ContentsLayout({ children }) {
  return (
    <div className="w-full p-24">
      {/*@ts-ignore*/}
      <ol className="space-y-3">{children}</ol>
    </div>
  );
}
