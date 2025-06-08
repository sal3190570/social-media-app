import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function Widgets() {
  return (
    <div
      className="p-3 hidden lg:flex flex-col space-y-4 w-[400px]
    ps-10"
    >
      <div className="flex bg-[#eff3f4] text-[#89959D] h-[44px] items-center rounded-full pl-5">
        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search busy Bee"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="bg-[#eff3f4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">What's Happening?</h1>

        <div className="flex flex-col text-sm py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#ReactJS</span>

          <span className="text-[#536471] text-xs">240K Bumbles</span>
        </div>

        <div className="flex flex-col text-sm py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#Angular</span>

          <span className="text-[#536471] text-xs">14K Bumbles</span>
        </div>
        <div className="flex flex-col text-sm py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#Harry Potter</span>

          <span className="text-[#536471] text-xs">200K Bumbles</span>
        </div>
        <div className="flex flex-col text-sm py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#JavaScript</span>

          <span className="text-[#536471] text-xs">190K Bumbles</span>
        </div>
      </div>

      <div className="bg-[#eff3f4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">Who to Follow</h1>

        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/assets/sal.jpg"
              alt="Profile Picture of Sal"
              height={200}
              width={250}
              className="rounded-full h-14 w-14"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Sal Awal</span>
              <span>@SalCodes</span>
            </div>
          </div>

          <button className="bg-[#0f1419] text-white text-sm w-[72px] h-[42px] rounded-full ">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/assets/harry.jpg"
              alt="Profile Picture of Sal"
              height={56}
              width={20}
              className="rounded-full h-14 w-14"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold"> Harry Potter</span>
              <span>@TheChosenOne</span>
            </div>
          </div>

          <button className="bg-[#0f1419] text-white text-sm w-[72px] h-[42px] rounded-full ">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              src="/assets/john.jpg"
              alt="Profile Picture of John"
              height={56}
              width={56}
              className="rounded-full h-14 w-14"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">John Flint</span>
              <span>@JohnFlintStone</span>
            </div>
          </div>

          <button className="bg-[#0f1419] text-white text-sm w-[72px] h-[42px] rounded-full ">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}
