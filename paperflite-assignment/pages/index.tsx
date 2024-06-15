import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { State } from "@/src/redux/reducers";
import {
  getCardList,
  getConversationList,
  getRecipentList,
} from "@/src/redux/actions/home";
import Image from "next/image";
import {
  Ellipse,
  Filter,
  ProfileImage,
  SearchIcon,
  SendIcon,
  Icons,
  Location,
  logo,
  MessagePink,
  SharePink,
  User,
} from "../src/assets";
import { IconsData } from "./api/mockData/iconsData";
import useScreenSize from "@/src/customHook/screenSize";

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
  }, [dispatch]);

  const screen = useScreenSize();

  const desktop = screen.width > 767;

  return (
    <div
      className="grid grid-cols-12 h-screen"
      style={{ fontFamily: "Samsung Sharp Sans", overflow: "auto" }}
    >
      <div className="col-span-4 hidden xl:block">
        <div className="grid grid-cols-12 w-full">
          <div className="xl:col-span-2 border-r border-gray-300 px-2 py-10 h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center gap-y-10 px-2">
              {IconsData.map(({ src }: any) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${src}`}
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

          <div className="xl:col-span-10 border-r border-gray-300 px-2 py-10 h-screen">
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
                  className="px-2 pr-4 py-3 border rounded-lg w-full text-xs text-gray-400 italic"
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
              <div className="flex gap-x-4 text-xs mb-4">
                <p className="text-gray-500">Sort by:</p>
                <p className="pinktext">Created Date</p>
                <p className="text-gray-500">Last Activity</p>
                <p className="text-gray-500">Time Spend</p>
              </div>

              {data.map(({ title, time, name, src }: any, index) => {
                return (
                  <div
                    className={`flex gap-x-2 ${
                      index === 0 ? "mt-9" : ""
                    }`}
                    key={name}
                  >
                    <Image alt={`${src}`} src={src} width={80} height={80} />
                    <div>
                      <p
                        className={`text-sm font-medium leading-3 mt-1 ${
                          index === 1 ? "pinktext" : "text-gray-700"
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

      <div className="xl:col-span-8 col-span-12 w-full">
        <Image
          src={logo}
          alt="PaperFliteLogo"
          className="shadow-xl w-full"
        />
        <div className="px-6 space-y-4 mt-2">
          <div className="flex justify-between">
            <p className="text-2xl font-bold text-gray-700">
              {`Collection "seeeek"`}
            </p>
            {desktop && <Image src={Icons} alt="Icons" />}
          </div>

          <div>
            <p className="text-sm">You shared 2 assessts with 4 recipients</p>
            <p className="text-xs text-gray-500">1 month ago via QuickSend</p>
          </div>

          <div className="flex gap-x-4 w-full flex-wrap">
            {cardDatas.map(({ percentage, text, src }: any) => {
              return (
                <div
                  className="px-3 space-y-4 py-4 border border-gray-100 rounded-md shadow-sm w-32"
                  key={text}
                >
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
              <p className="pinktext text-base">Recipients - 08</p>
              <p className="pinktext text-center"> __ </p>
            </div>
            <p className="text-base">Sections - 05</p>
          </div>

          <div>
            {recipentData.map(({ src, name, lastView, min }: any) => {
              return (
                <div key={name}>
                  <div className="flex gap-x-3 mb-4 justify-between">
                    <div className="flex">
                      <Image src={src} alt={`${src}`} width={35} height={35} />
                      <div className="flex items-center gap-x-4 px-2">
                        <p
                          className={`font-medium text-gray-600 ${
                            desktop ? "text-xs" : "text-sm "
                          }`}
                        >
                          {name}
                        </p>
                        {desktop && (
                          <div className="border-r border-gray-300 h-5" />
                        )}
                        {desktop && (
                          <p className="text-sm text-gray-500">{lastView}</p>
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex items-center ${
                        desktop ? "gap-x-4" : "gap-x-2"
                      }`}
                    >
                      <p
                        className={`${
                          desktop ? "text-sm" : "text-xs"
                        } text-gray-500`}
                      >
                        {min}
                      </p>
                      <Image
                        src={MessagePink}
                        alt={`MessagePink`}
                        width={desktop ? 15 : 13}
                        height={desktop ? 15 : 13}
                      />
                      <Image
                        src={User}
                        alt={`User`}
                        width={desktop ? 15 : 13}
                        height={desktop ? 15 : 13}
                      />
                      <Image
                        src={SharePink}
                        alt={`SharePink`}
                        width={desktop ? 15 : 13}
                        height={desktop ? 15 : 13}
                      />
                      <div className="border-r border-gray-300 h-5"></div>
                      <Image
                        src={Location}
                        alt={`Location`}
                        width={desktop ? 35 : 23}
                        height={desktop ? 35 : 23}
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
