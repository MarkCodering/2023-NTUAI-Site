import React from "react";

export default function AboutUs() {
  return (
    <div
      className="flex flex-col items-center bg-cover bg-center justify-center gap-4 py-8 md:py-10 h-screen bg-no-repeat"
      style={{
        backgroundImage: "url('background-1.jpg')",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "darken",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center justify-center" id="home">
        <h1 className="text-5xl pt-10 font-bold text-center">Making&nbsp;</h1>
        <h1 className="text-5xl pt-10 font-bold text-center text-violet-500">
          AI&nbsp;
        </h1>
        <h1 className="text-5xl pt-10 font-bold text-center">
          technology accessible for all NTU students
        </h1>
        <h4 className="text-2xl pt-10 font-bold text-center">
          NTUAI Club is a student organization that aims to make AI technology
          accessible for all NTU students.
        </h4>
      </div>
    </div>
  );
}
