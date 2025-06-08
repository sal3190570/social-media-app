"use client";

import { auth } from "@/firebase";
import { closeLogInModal, closeSignUpModal } from "@/redux/slices/modalSlice";
import { signOutUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { signOut } from "firebase/auth";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SidebarUserInfo() {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  async function handleSignOut() {
    await signOut(auth);

    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLogInModal());
  }
  return (
    <div>
      <div
        className="fixed bottom-3 flex items-center justify-start space-x-2
                hover:bg-gray-500 hover:bg-opacity-10 xl:p-3 xl:pe-6 rounded-full transition
                cursor-pointer w-fit xl:w-[240px]"
        onClick={() => handleSignOut()}
      >
        <Image
          src={"/assets/profile-pic.png"}
          alt="User Profile Picture"
          height={36}
          width={36}
          className="w-9 h-9"
        />
        <div className="hidden xl:flex flex-col text-sm max-w-40">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden font-bold">
            {user.name}
          </span>
          <span className="whitespace-nowrap text-ellipsis overflow-hidden text-gray-500">
            @{user.username}
          </span>
        </div>
      </div>
    </div>
  );
}
