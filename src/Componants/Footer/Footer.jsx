import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full p-10 bg-[#2c3e50] text-white text-center">
        <div className="row justify-center ">
          <div className="info1 md:w-1/3 p-5">
            <h3 className="font-page mb-1">LOCATION</h3>
            <p className="mb-4">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="info2 md:w-1/3 p-5">
            <h3 className="font-page mb-1">AROUND THE WEB</h3>
            <div className="icons flex justify-center items-center gap-5">
              <div className="facebook w-10 h-10 border border-1 flex justify-center items-center rounded-full">
                <i className="fa-brands fa-facebook fa-lg"></i>
              </div>
              <div className="twitter w-10 h-10 border border-1 flex justify-center items-center rounded-full">
                <i className="fa-brands fa-twitter fa-lg"></i>
              </div>
              <div className="linked-in w-10 h-10 border border-1 flex justify-center items-center rounded-full">
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </div>
              <div className="earth w-10 h-10 border border-1 flex justify-center items-center rounded-full">
                <i className="fa-solid fa-globe fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="info3 md:w-1/3 p-5">
            <h3 className="font-page mb-1">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-5 text-white bg-[#1a252f] flex justify-center items-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
