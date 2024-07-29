import React from "react";

export default function About() {
  return (
    <>
      <section className="pt-24 text-white px-20 h-screen flex justify-center items-center bg-[#1abc9c]">
        <div>
          <h2 className="font-bold text-[40px]">ABOUT COMPONENT</h2>
          <div className="logo flex justify-center items-center my-2 gap-4">
            <h1 className="font-bold text-[40px] bg-white py-px px-10"></h1>
            <i className="fa-solid fa-star"></i>
            <h1 className="font-bold text-[40px] bg-white py-px px-10"></h1>
          </div>
          <div className="info flex flex-wrap md:flex-nowrap justify-center items-center gap-6 text-start">
            <p className="ps-10">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="ps-10">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
