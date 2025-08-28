"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import CareerQuestionnaire, {
  type UserPreferences,
} from "@/components/screens/portal/career-questionare";
import Home from "@/components/screens/portal/home";

export default function HomePage() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(true);
  const [userPreferences, setUserPreferences] =
    useLocalStorage<UserPreferences | null>("user-career-preferences", null);

  useEffect(() => {
    // If user already completed the questionnaire, don't show it again
    if (userPreferences) {
      setShowQuestionnaire(false);
    }
  }, [userPreferences]);

  const handleQuestionnaireComplete = (preferences: UserPreferences) => {
    setUserPreferences(preferences);
    setShowQuestionnaire(false);
  };

  const resetPreferences = () => {
    setUserPreferences(null);
    setShowQuestionnaire(true);
  };

  return (
    <>
      {showQuestionnaire && (
        <CareerQuestionnaire onComplete={handleQuestionnaireComplete} />
      )}
      <Home
        userPreferences={userPreferences}
        onResetPreferences={resetPreferences}
      />
    </>
  );
}
