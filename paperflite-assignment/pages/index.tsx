import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { State } from "@/public/redux/reducers";
import { getConversationList } from "@/public/redux/actions/conversations";
import Image from "next/image";
import {
  SendIcon,
  Ellipse,
  ProfileImage,
  Filter,
  SearchIcon,
  logo,
  Icons,
} from "../src/assets/index";
import { IconsData } from "./api/mockData/iconsData";

interface HomeProps {
  dispatch: Function;
  conversation: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
}

const Home: React.FC<HomeProps> = ({ dispatch, conversation }) => {
  const { data, getting } = conversation || {};

  console.log("data..", data);

  useEffect(() => {
    dispatch(getConversationList());
  }, []);

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 border-r border-gray-400">
        <div className="grid grid-cols-12">
          <div className="col-span-2 border-r border-gray-400 px-2 py-10 h-screen flex flex-col justify-between">
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
          <div className="col-span-10 border-r border-gray-400 px-2 py-10 h-screen">
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
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-8">
        <Image src={logo} alt="PaperFliteLogo" className="shadow-xl" />

        <div className="flex justify-between px-6 mt-2">
          <p className="text-2xl font-bold text-gray-700">
            Collection "seeeek"
          </p>
          <Image src={Icons} alt="Icons" />
        </div>
        <div className="mt-4">
          <div className="px-6">
            <p className="text-sm">You shared 2 assessts with 4 recipients</p>
            <p className="text-xs text-gray-500">1 month ago via QuickSend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  conversation: state.conversation.conversationList,
});

export default compose(connect(mapStateToProps))(Home);
