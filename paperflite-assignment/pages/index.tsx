import Image from "next/image";
import {
  Search,
  Sound,
  Layer,
  Message,
  CircleImage,
  SendIcon,
  Ellipse,
  ProfileImage,
  Filter,
  SearchIcon,
  logo,
  Icons,
} from "../src/assets/index";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-4 border-r border-gray-400">
        <div className="grid grid-cols-12">
          <div className="col-span-2 border-r border-gray-400 px-2 py-10 h-screen flex flex-col justify-between">
            <div className="flex flex-col items-center gap-y-10 px-2">
              <Image src={Search} alt="Vercel Logo" width={20} height={20} />
              <Image src={Sound} alt="Vercel Logo" width={20} height={20} />
              <Image src={Layer} alt="Vercel Logo" width={20} height={20} />
              <Image src={Message} alt="Vercel Logo" width={20} height={20} />
              <Image
                src={CircleImage}
                alt="Vercel Logo"
                width={20}
                height={20}
              />
              <Image src={SendIcon} alt="Vercel Logo" width={20} height={20} />
            </div>
            <div className="space-y-8 flex flex-col items-center">
              <Image src={Ellipse} alt="Vercel Logo" width={20} height={20} />
              <Image
                src={ProfileImage}
                alt="Vercel Logo"
                width={60}
                height={60}
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
                <Image src={Filter} alt="Filter" width={34} height={34} />
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
        <Image
          src={logo}
          alt="PaperFliteLogo"
          className="shadow-xl"
        />

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
}
