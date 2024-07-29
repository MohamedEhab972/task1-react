import React, { useEffect, useRef, useState } from "react";
import image1 from "../../assets/poert1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";

export default function Portofolio() {
  let [image4, setImage4] = useState("");
  let [replaceImage, setReplaceImage] = useState("");
  let ref = useRef();

  function getSrc(params) {
    image4.classList.replace("hidden", "flex");
    replaceImage.setAttribute(
      "src",
      `${params.target.parentElement.nextElementSibling.getAttribute("src")}`
    );
    console.log(params.target.parentElement.nextElementSibling);
    // console.log(params.target.nextElementSibling);
  }
  function Close(params) {
    if (params.target.id == "layout") {
      params.target.classList.add("hidden");
    }
  }
  useEffect(() => {
    setImage4(document.getElementById("layout"));
    setReplaceImage(document.getElementById("image-layout"));
  }, []);
  return (
    <>
      <div
        ref={ref}
        id="layout"
        className="layout hidden justify-center items-center fixed z-20 pt-10 top-0 bottom-0 right-0 left-0 bg-layOutColor "
        onClick={(e) => {
          Close(e);
        }}
      >
        <img ref={ref} id="image-layout" className="md:w-1/2 w-full" alt="" />
      </div>
      <section className="pt-28 text-[#1a252f] px-10 pb-10">
        <div className="">
          <h2 className="font-bold text-[40px]">PORTFOLIO COMPONENT</h2>
          <div className="logo flex justify-center items-center my-2 gap-4 mb-20">
            <h1 className="font-bold text-[40px] bg-[#1a252f] py-px px-10"></h1>
            <i className="fa-solid fa-star"></i>
            <h1 className="font-bold text-[40px] bg-[#1a252f] py-px px-10"></h1>
          </div>
        </div>
        <div className="my-portofolio">
          <div className="row justify-center items-center gap-3">
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div
                  //   onClick={(e) => {
                  //     getSrc(e);
                  //     e.stopPropagation();
                  //   }}
                  className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center"
                >
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image1} className="w-full rounded-md" alt="" />
              </div>
            </div>
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center">
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image2} className="w-full rounded-md" alt="" />
              </div>
            </div>
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center">
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image3} className="w-full rounded-md" alt="" />
              </div>
            </div>
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center">
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image1} className="w-full rounded-md" alt="" />
              </div>
            </div>
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center">
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image2} className="w-full rounded-md" alt="" />
              </div>
            </div>
            <div className="box md:w-[32%] cursor-pointer">
              <div className="image relative group overflow-hidden">
                <div className="info w-full transition-all duration-[0.2s] absolute p-2 h-full top-full group-hover:top-0 left-0 text-black text-2xl font-bold rounded-md bg-[#1aba9f] bg-opacity-75 flex justify-center items-center">
                  <i
                    id="my-icon"
                    onClick={(e) => {
                      getSrc(e);
                      e.stopPropagation();
                    }}
                    className="fa-solid fa-plus fa-5x text-white w-full h-full "
                  ></i>
                </div>
                <img src={image3} className="w-full rounded-md" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
