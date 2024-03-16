"use client";

import { useState, useEffect } from "react";
import Loading from '@/components/Loading';
import Score from "@/components/Score";
import Stamps from "@/components/Stamp";
import { useAuth } from "@/lib/contexts/AuthContext";
import { Levels } from "@/config/levels";
import { getNextUserLevel } from "@/lib/helpers";
import withAuth from "@/lib/hoc/withAuth";

function Component({ user }) {
  const [currentLevel, setCurrentLevel] = useState({});
  const [nextLevel, setNextLevel] = useState({});

  useEffect(() => {
    setCurrentLevel(Levels.find((level) => level.id === user.type));
    setNextLevel(getNextUserLevel(user.type));
  }, [user]);

  return (
    <div className="profile px-6">
      <Score user={user} currentLevel={currentLevel} nextLevel={nextLevel} userScore={18000} />
      <Stamps currentUserLevel={user?.type} />
    </div>
  )
}

function Profile(){
  const { user } = useAuth();

  return (
    <>
      <Component user={user} />
    </>
  );
}

export default withAuth(Profile);