"use client";

import Image from "next/image";

import lock from "@/assets/images/lock.png"
import { Levels } from "@/config/levels";
import { buildUserAcquiredLevels } from "@/lib/helpers";



export default function Stamps ({ currentUserLevel = "" }) {

  const userLevels = buildUserAcquiredLevels(currentUserLevel);

  return (
    <div className="next-stamps">
      <h2>Níveis</h2>
      <div className="stamps flex justify-center">
        <ul className="stamp-list">
          {
            Levels.map((level) => (
              <li key={level.id} className="stamp-item">
                <Image src={level.image} alt="profile-score" width="auto" height="auto" />
                {
                  !userLevels.includes(level.id) && <div className="stamp-item__lock">
                    <Image src={lock} alt="profile-score" width="auto" height="auto" />
                  </div>
                }
                
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}