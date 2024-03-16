"use client";

import Image from "next/image";
import { toCapitalize } from "@/lib/helpers";

export default function Score ({ user, currentLevel, nextLevel, userScore = 0 }) {

  return (
    <div className="profile-score">
      <div className="profile-score__content">
        <div className="profile-score__content__image">
          <div className="image">
            {
              currentLevel?.image && <Image src={currentLevel?.image} alt="profile-score" width={60} height={60} />
            }
          </div>
        </div>
        <div className="profile-score__content__progress flex flex-col">
          <div className="profile-data mt-2">
            <p className="text-sm flex justify-between">
              <span className="font-semibold text-primary">{toCapitalize(user?.type || "")}</span>
            </p>
            <p className="text-sm mt-3 mb-2">
              <span className="font-light  text-typography-black">{user?.first_name} {user?.last_name}</span>
            </p>
          </div>
          <div className="flex items-center">
            <div className="score-current-progress grow mr-5">
              <div className="score-data flex justify-between mb-2">
                  <div className="current-score">
                    <span className="text-xs">{userScore}</span>
                  </div>
                  <div className="missing-score">
                    <span className="text-xs">{(nextLevel?.score || 0) - userScore}</span>
                  </div>
              </div>
              <div className="w-full bg-zinc-300 rounded-lg overflow-hidden">
                <div
                    className={`h-4 bg-primary rounded-lg`}
                    style={{ width: `${(userScore / (nextLevel?.score || 0)) * 100}%` }}
                  />
              </div>
            </div>
            <div className="mix-blend-multiply overflow-hidden">
              {
                nextLevel?.image && <Image className="" src={nextLevel?.image} alt="profile-score" width={100} height={100}  />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}