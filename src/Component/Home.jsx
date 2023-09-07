// import React from 'react'
import Hero from "./Hero";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";
import Fifthsection from "./Fifthsection";
// import Fifth2section from "./Fifth2section";
import Sixthsection from "./Sixthsection";
import Seventhsection from "./Seventhsection";
import Testimonies from "./changingCommentPics/Testimonies";

const Home = () => {
  return (
    <>
      <Hero />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <Fifthsection />
      {/* <Fifth2section /> */}
      {/* <Sixthsection/> */}
      <Testimonies />
      <Seventhsection />
    </>
  );
};

export default Home;
