import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { State } from "@/public/redux/reducers";
import {
  getCardList,
  getConversationList,
  getRecipentList,
} from "@/public/redux/actions/home";
import Image from "next/image";
import {
  SendIcon,
  Ellipse,
  ProfileImage,
  Filter,
  SearchIcon,
  logo,
  Icons,
  MessagePink,
  User,
  SharePink,
  Location,
} from "../src/assets/index";
import { IconsData } from "./api/mockData/iconsData";

interface HomeProps {
  dispatch: Function;
  conversation: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
  cardData: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
  recipentDetails: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
}

const Home: React.FC<HomeProps> = ({
  dispatch,
  conversation,
  cardData,
  recipentDetails,
}) => {
  const { data } = conversation || {};
  const { data: cardDatas } = cardData || {};
  const { data: recipentData } = recipentDetails || {};

  useEffect(() => {
    dispatch(getConversationList());
    dispatch(getCardList());
    dispatch(getRecipentList());
  }, []);

  return (
    <div
      className="grid grid-cols-12 h-screen"
      style={{ fontFamily: "Samsung Sharp Sans" }}
    >
      <div className="col-span-4">
        <div className="grid grid-cols-12">
          <div className="col-span-2 border-r border-gray-300 px-2 py-10 h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center gap-y-10 px-2">
              {IconsData.map((item) => (
                <Image
                  src={item.src}
                  alt={`${item.src}`}
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              ))}
              <Image src={SendIcon} alt="SendIcon" width={20} height={20} />
            </div>
            <div className="space-y-8 flex flex-col items-center">
              <Image
                src={Ellipse}
                alt="Ellipse"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src={ProfileImage}
                alt="ProfileImage"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>
          
          <div className="col-span-10 border-r border-gray-300 px-2 py-10 h-screen">
            <div className="px-4 space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="font-bold text-2xl text-gray-700">
                    Conversations
                  </p>
                  <p className="text-sm font-light text-gray-500">
                    Track user engagement
                  </p>
                </div>
                <Image
                  src={Filter}
                  alt="Filter"
                  width={34}
                  height={34}
                  className="cursor-pointer"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="px-2 pr-4 py-1 border rounded-lg w-full text-xs text-gray-400 italic"
                  placeholder="search by conversations and contacts"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3  
                    flex items-center  
                    pointer-events-none"
                >
                  <Image
                    src={SearchIcon}
                    width={12}
                    height={12}
                    alt="searchIcon"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex gap-x-4 text-xs">
                <p className="text-gray-500">Sort by:</p>
                <p className="text-[#E51058]">Created Date</p>
                <p className="text-gray-500">Last Activity</p>
                <p className="text-gray-500">Time Spend</p>
              </div>
              {data.map(({ title, time, name, src }: any, index) => {
                return (
                  <div className="flex gap-x-2">
                    <Image alt={`${src}`} src={src} width={80} height={80} />
                    <div>
                      <p
                        className={`text-sm font-medium leading-3 mt-1 ${
                          index === 1 ? "text-[#E51058]" : "text-gray-700"
                        }`}
                      >
                        {title}
                      </p>
                      <p
                        className={`text-xs font-medium leading-3 mt-2 text-[#717274]`}
                      >
                        {time}
                      </p>
                      <p className="text-xs text-[#A9A9A9] mt-8 leading-3">
                        {name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <Image src={logo} alt="PaperFliteLogo" className="shadow-xl" />
        <div className="px-6 space-y-4 mt-2">
          <div className="flex justify-between ">
            <p className="text-2xl font-bold text-gray-700">
              Collection "seeeek"
            </p>
            <Image src={Icons} alt="Icons" />
          </div>

          <div>
            <p className="text-sm">You shared 2 assessts with 4 recipients</p>
            <p className="text-xs text-gray-500">1 month ago via QuickSend</p>
          </div>

          <div className="grid grid-cols-10 gap-x-4">
            {cardDatas.map(({ percentage, text, src }: any) => {
              return (
                <div className="lg:col-span-2 md:col-span-1 px-3 space-y-4 py-4 border border-gray-100 rounded-md shadow-sm">
                  <div className="flex justify-between">
                    <p className="text-sm leading-4">{percentage}</p>
                    <Image src={src} width={15} height={15} alt={`${src}`} />
                  </div>
                  <p className="text-xs text-gray-500 leading-3">{text}</p>
                </div>
              );
            })}
          </div>

          <div className="flex gap-x-8">
            <div>
              <p className="text-[#E51058] text-base">Recipients - 08</p>
              <p className="text-[#E51058] text-center"> __ </p>
            </div>
            <p className="text-base">Sections - 05</p>
          </div>

          <div>
            {recipentData.map(({ src, name, lastView, min }: any) => {
              return (
                <div>
                  <div className="flex gap-x-3 mb-4 justify-between">
                    <div className="flex">
                      <Image src={src} alt={`${src}`} width={35} height={35} />
                      <div className="flex items-center gap-x-4 px-4">
                        <p className="text-sm font-medium text-gray-600">
                          {name}
                        </p>
                        <div className="border-r border-gray-300 h-5"></div>
                        <p className="text-sm text-gray-500">{lastView}</p>
                      </div>
                    </div>
                    <div className="flex  items-center gap-x-4">
                      <p className="text-sm text-gray-500">{min}</p>
                      <Image
                        src={MessagePink}
                        alt={`MessagePink`}
                        width={15}
                        height={15}
                      />
                      <Image src={User} alt={`User`} width={15} height={15} />
                      <Image
                        src={SharePink}
                        alt={`SharePink`}
                        width={15}
                        height={15}
                      />
                      <div className="border-r border-gray-300 h-5"></div>
                      <Image
                        src={Location}
                        alt={`Location`}
                        width={35}
                        height={35}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state: State) => ({
  conversation: state.home.conversationList,
  cardData: state.home.cardList,
  recipentDetails: state.home.recipentDetails,
});

export default compose(connect(mapStateToProps))(Home);
