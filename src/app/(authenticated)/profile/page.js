"use client";

import { Suspense } from 'react';
import { useState, useEffect } from "react";
import Loading from '@/components/Loading';
import Score from "@/components/Score";
import Stamps from "@/components/Stamp";
import { useAuth } from "@/lib/contexts/AuthContext";
import { Levels } from "@/config/levels";
import { getNextUserLevel } from "@/lib/helpers";

function Component({ user }) {
  const [currentLevel, setCurrentLevel] = useState({});
  const [nextLevel, setNextLevel] = useState({});

  useEffect(() => {
    setCurrentLevel(Levels.find((level) => level.id === user.type));
    setNextLevel(getNextUserLevel(user.type));
  }, [user]);

  if (!Object.keys(user).length) {
    return <Loading />;
  }

  return (
    <div className="profile px-6">
      <Score user={user} currentLevel={currentLevel} nextLevel={nextLevel} userScore={18000} />
      <Stamps currentUserLevel={user?.type} />
    </div>
  )
}

export default function Profile(){
  const { user } = useAuth();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Component user={user} />
      </Suspense>
    </>
  );
}