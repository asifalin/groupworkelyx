import React, { useState, useEffect } from "react";
import {
  Autionbg,
  Aution1,
  Aution2,
  Aution3,
  Aution4,
  Aution5,
  user,
  hammer,

} from "../../images/index.js";
import { BsClock, BsArrowUp, BsHash, BsQuestionCircle } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegCommentDots,FaRegComments } from "react-icons/fa";

function Aution() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      return () => {
        clearInterval(t);
      };
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const openCard = (imageIndex) => {
    switch (imageIndex) {
      case 1:
        setSelectedImage(Aution1);
        break;
      case 2:
        setSelectedImage(Aution2);
        break;
      case 3:
        setSelectedImage(Aution3);
        break;
      case 4:
        setSelectedImage(Aution4);
        break;
      case 5:
        setSelectedImage(Aution5);
        break;
      default:
        setSelectedImage(null);
        break;
    }
  };

  return (
    <div className="mt-10 gap-3">
      <div>
        <div className="flex justify-between ">
          <h1 className="text-2xl font-bold">2007 Toyota FJ Cruiser</h1>
          <div className="flex  text-3xl gap-10 ">
            <h1 className="flex gap-5">
              {" "}
              <RiShareForwardLine /> Share
            </h1>

            <h1 className="flex gap-5 ">
              <GrFavorite /> Favorite
            </h1>
          </div>
        </div>

        <div className="flex  ">
          <button className="bg-orange-600 p-3 text-white font-bold rounded-[10px]">
            NO RESERVE
          </button>
          <div className="ml-2">
            <p className="mt-3">
              <span className="font-bold">2 owners</span>, 6-Speed Manual,
              Numerous Modifications, 4WDs
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className=" w-[50%] pb-10">
          <div>
            <div className="w-full bg-cover">
              <img src={selectedImage || Autionbg} alt="" className="w-full" />
            </div>
            <div className="flex mt-2 gap-2 bg-cover  ">
              <img
                src={Aution1}
                alt=""
                className="w-[20%]"
                onClick={() => openCard(1)}
              />
              <img
                src={Aution2}
                alt=""
                className="w-[20%]"
                onClick={() => openCard(2)}
              />
              <img
                src={Aution3}
                alt=""
                className="w-[20%]"
                onClick={() => openCard(3)}
              />
              <img
                src={Aution4}
                alt=""
                className="w-[20%]"
                onClick={() => openCard(4)}
              />
              <img
                src={Aution5}
                alt=""
                className="w-[20%]"
                onClick={() => openCard(5)}
              />
            </div>
          </div>

          <div className="flex gap-16 leading-10">
            <div className="bg-[#F8F8FF] ">
              <h1>Make</h1>
              <h1>Model</h1>
              <h1>Seller</h1>
              <h1>Location</h1>
              <h1>VIN</h1>
              <h1>Mileage</h1>
              <h1>Body Style</h1>
            </div>
            <div className="">
              <h1>Toyota</h1>
              <h1>FJ Cruiser</h1>
              <h1>ejserna</h1>
              <h1>Chicago, IL 60639</h1>
              <h1>JTEBU11FX70099874</h1>
              <h1>88,800</h1>
              <h1>SUV/Crossover</h1>
            </div>
            <div className="bg-[#F8F8FF]  ">
              <h1>Engine</h1>
              <h1>Drivetrain</h1>
              <h1>Transmission</h1>
              <h1>Exterior Color</h1>
              <h1>Interior Color</h1>
              <h1>Title Status</h1>
              <h1>Seller Type</h1>
            </div>
            <div>
              <h1>4.0L V6</h1>
              <h1>4WD/AWD</h1>
              <h1>Manual (6-Speed)</h1>
              <h1>Black</h1>
              <h1>Black</h1>
              <h1>Clean (IL)</h1>
              <h1>Private Party</h1>
            </div>
          </div>
          <p>
            This 1968 Maserati Ghibli is #25 of approximately 425 SS coupes
            produced between 1969 and 1973 and was delivered new to Rolma
            Automobili S.r.l. of Milano, Italy. It was acquired out of Japan in
            early 2020 and subsequently imported to the US by the selling
            dealer, who commissioned a cosmetic refurbishment that included a
            bare-metal repaint in the factory shade of Verde Gemma and a
            reupholstered interior in Senape tan leather.
          </p>
          <h1 className="text-[#0C50CA] text-[24px] font-bold ">Highlights</h1>
          <p>
            THIS... is a 2007 Toyota FJ Cruiser, finished in black with a black
            interior.
          </p>
          <ul className="list-disc text-[blue] p-10">
            <li className="list-outside ">
              <p className="text-black">
                This FJ Cruiser comes in a desirable configuration with
                four-wheel drive and a 6-speed manual transmission.
              </p>
            </li>
            <li className="list-outside">
              <p className="text-black">
                {" "}
                The attached Carfax vehicle history report shows no accidents or
                damage in this FJ Cruiser's past.
              </p>
            </li>
            <li className="list-outside ">
              <p className="text-black">
                {" "}
                Numerous modifications have been made to this FJ and highlights
                include Raptor exterior coating, a TRD snorkel, a custom audio
                system, and more as detailed below.
              </p>
            </li>
          </ul>

          <hr className=" h-1" />
        </div>
        <div className=" w-[50%]">
          <div className="">
            <div className=" flex bg-black  flex-wrap  text-white justify-between items-center rounded pl-2 text-sm ">
              <div className="flex gap-1">
                <BsClock className="mt-1 text-[#0C50CA]" />
                {currentTime}
              </div>

              <div className="flex gap-1 ">
                <BsArrowUp className="text-[#0C50CA] mt-1" />
                <h1 className="text-[#0C50CA]">High Bid</h1>
                <h1>$7,400</h1>
              </div>
              <div className="flex gap-1">
                <BsHash className="text-[#0C50CA] mt-1" />
                <h1 className="text-[#0C50CA]">Bid</h1>
                <h1>16</h1>
              </div>
              <div className="flex gap-1">
                <FaRegCommentDots className="text-[#0C50CA] mt-1" />
                <h1 className="text-[#0C50CA] ">Comments</h1>
                <h1>06</h1>
              </div>
              <div className="bg-[#0C50CA] p-4 rounded-r-md">
                <button>PLACE BID</button>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex   gap-[30%] border[#CCD9E0] border-l border-t border-r rounded-r-md p-5 ">
                <div className="mt-4  w-[30%]">
                  <p>CURRENT BID</p>
                  <h1 className="font-bold text-2xl">$9,056</h1>
                </div>
                <div className=" leading-7">
                  <div className="flex gap-1 items-center">
                    <img src={user} alt="" />
                    <pre>Bidder : Alex Jonhson</pre>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <img src={user} alt="" />
                    <pre>
                      Seller : Sandy Joseph{" "}
                      <span className="text-[blue] underline">contact</span>
                    </pre>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={hammer} alt="" />
                    <pre>Bidder : Alex Jonhson</pre>
                  </div>
                </div>
              </div>
              <div className="bg-[#F8F8FF]">
                <div className="flex p-4 gap-[29%] text-2xl ">
                  <div className="flex ml-1 gap-1 ">
                    <BsQuestionCircle className="mt-1" />
                    <p>How to place a bid?</p>
                  </div>
                  <div className="flex gap-1">
                    <BsQuestionCircle className="mt-1" />
                    <p>How to place a Comments?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-6">
            <div>
              <h1>comments</h1>
            </div>
            <div>
              <ul className="flex gap-8">
                <li>Newest</li>
                <li>uploaded</li>
                <li>salller Comments</li>
                <li>Bids history</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex border p-2 rounded-md mt-3  ">
            <input
              type="text "
              className="w-[100%]  border-none rounded-md outline-none"
              name="gsearch "
              placeholder="Add to comments and Bids "
            /> 
<div className=" w-10 h-15 items-center  rounded  ">
<AiOutlineComment className="text-4xl   bg-blue-700 rounded-md text-white"/>
</div>
            
          </div>

          <div>
            <div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aution;
