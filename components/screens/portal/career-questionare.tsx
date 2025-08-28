"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  Circle,
  CheckCheck,
  Clock,
  Target,
} from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";

export type CareerStage =
  | "high_school"
  | "college"
  | "early_career"
  | "mid_career"
  | "advanced_professional"
  | null;

export type UserPreferences = {
  careerStage: CareerStage;
  goals: string[];
  priorities: string[];
};

interface CareerQuestionnaireProps {
  onComplete: (preferences: UserPreferences) => void;
  onClose?: () => void;
}

const LOCAL_STORAGE_KEY = "careerPreferences";

const careerStagesAndGoals = {
  high_school: {
    label: "High School Student",
    goals: [
      "Interest exploration / career navigation",
      "College application process",
    ],
  },
  college: {
    label: "College Student",
    goals: ["Research collaboration", "Job readiness"],
  },
  early_career: {
    label: "Early Career (<5 yrs of experience)",
    goals: ["Career growth or change"],
  },
  mid_career: {
    label: "Mid Career (5-15 yrs of experience)",
    goals: ["Leadership development"],
  },
  advanced_professional: {
    label: "Advanced Professional (15+ yrs of experience)",
    goals: ["Executive leadership", "Giving back to society"],
  },
};

const universalGoals = [
  "Learn essential AI skills",
  "Innovation & entrepreneurship",
];

const aiPriorities = [
  {
    id: "understand",
    text: "Understand how AI will change my career and prepare",
  },
  {
    id: "learn",
    text: "Learn essential AI skills immediately",
  },
  {
    id: "stay-updated",
    text: "Stay up to date with recent AI developments (resources and events)",
  },
  {
    id: "guidance",
    text: "Interact with career assistants for career guidance on various topics",
  },
  {
    id: "jobs",
    text: "Explore job opportunities that require AI skills",
  },
];

export default function CareerQuestionnaire({
  onComplete,
}: CareerQuestionnaireProps) {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>({
    careerStage: null,
    goals: [],
    priorities: aiPriorities.map((p) => p.text),
  });
  const [availableGoals, setAvailableGoals] = useState<string[]>([]);
  const [hasExistingData, setHasExistingData] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPreferences = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedPreferences) {
        try {
          const parsedPreferences = JSON.parse(
            savedPreferences
          ) as UserPreferences;
          setPreferences(parsedPreferences);

          const orderedPriorities = parsedPreferences.priorities.map((text) => {
            const priority = aiPriorities.find((p) => p.text === text);
            return priority || { id: `custom-${text}`, text };
          });

          setPriorityItems(orderedPriorities);
          setHasExistingData(true);
        } catch (error) {
          console.error("Error parsing saved preferences:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (preferences.careerStage) {
      const stageGoals =
        careerStagesAndGoals[preferences.careerStage]?.goals || [];
      setAvailableGoals([...stageGoals, ...universalGoals]);
    } else {
      setAvailableGoals([]);
    }
  }, [preferences.careerStage]);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const [priorityItems, setPriorityItems] = useState(aiPriorities);
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(priorityItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPriorityItems(items);
    setPreferences((prev) => ({
      ...prev,
      priorities: items.map((item) => item.text),
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
      onComplete(preferences);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updatePreferences = (
    key: keyof UserPreferences,
    value: UserPreferences[keyof UserPreferences]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleToggle = (goal: string) => {
    setPreferences((prev) => {
      const currentGoals = [...prev.goals];
      if (currentGoals.includes(goal)) {
        return {
          ...prev,
          goals: currentGoals.filter((g) => g !== goal),
        };
      } else {
        return {
          ...prev,
          goals: [...currentGoals, goal],
        };
      }
    });
  };

  const isGoalSelected = (goal: string) => preferences.goals.includes(goal);

  const handleUseSavedData = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(preferences));
    onComplete(preferences);
  };

  const handleStartFresh = () => {
    setPreferences({
      careerStage: null,
      goals: [],
      priorities: aiPriorities.map((p) => p.text),
    });
    setPriorityItems(aiPriorities);
    setHasExistingData(false);
    setStep(1);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto relative">
        {!hasExistingData && (
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Let us know about your career journey
            </CardTitle>
            <CardDescription>
              We will use this information to tailor your experience.
            </CardDescription>{" "}
            <Progress value={progress} className="h-2 mt-2" />
          </CardHeader>
        )}

        <CardContent>
          {hasExistingData ? (
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center">
                  <CheckCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  We found your previous career preferences
                </h3>
              </div>

              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100">
                <div className="grid grid-cols-3 divide-x divide-pink-100/70">
                  <div className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                      <Target className="h-4 w-4 text-pink-600" />
                    </div>
                    <p className="text-xs font-medium text-slate-500 mb-1">
                      Career Stage
                    </p>
                    <p className="text-sm font-semibold text-slate-800 line-clamp-2">
                      {preferences.careerStage
                        ? careerStagesAndGoals[preferences.careerStage].label
                        : "Not specified"}
                    </p>
                  </div>

                  <div className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <CheckCheck className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-xs font-medium text-slate-500 mb-1">
                      Goals
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {preferences.goals.length} selected
                    </p>
                  </div>

                  <div className="p-4 flex flex-col items-center justify-center text-center">
                    <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center mb-2">
                      <Clock className="h-4 w-4 text-pink-600" />
                    </div>
                    <p className="text-xs font-medium text-slate-500 mb-1">
                      Priorities
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {preferences.priorities.length} ranked
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white/70 border-t border-pink-100/70">
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                        Top Priorities
                      </p>
                      <ol className="space-y-2">
                        {preferences.priorities
                          .slice(0, 3)
                          .map((priority, index) => (
                            <li key={index} className="flex items-center">
                              <span className="h-5 w-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-medium mr-2">
                                {index + 1}
                              </span>
                              <span className="text-sm text-slate-700">
                                {priority}
                              </span>
                            </li>
                          ))}
                      </ol>
                    </div>

                    {preferences.goals.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1.5">
                          Selected Goals
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {preferences.goals.map((goal, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-600"
                            >
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button
                  variant="outline"
                  onClick={handleStartFresh}
                  className="flex-1"
                >
                  Start Fresh
                </Button>
                <Button
                  onClick={handleUseSavedData}
                  className="bg-pink-600 hover:bg-pink-700 flex-1 text-white"
                >
                  Use Saved Data
                </Button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    What stage are you in your career?
                  </h3>
                  <RadioGroup
                    className=""
                    value={preferences.careerStage || ""}
                    onValueChange={(value) =>
                      updatePreferences("careerStage", value as CareerStage)
                    }
                  >
                    {Object.entries(careerStagesAndGoals).map(
                      ([key, { label }]) => (
                        <div
                          key={key}
                          className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
                            preferences.careerStage === key
                              ? "border-pink-500 bg-pink-50"
                              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                          onClick={() =>
                            updatePreferences("careerStage", key as CareerStage)
                          }
                        >
                          <RadioGroupItem
                            value={key}
                            id={key}
                            className="sr-only"
                          />
                          {preferences.careerStage === key ? (
                            <CheckCircle2 className="h-5 w-5 text-pink-500 flex-shrink-0" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-300 flex-shrink-0" />
                          )}
                          <Label
                            htmlFor={key}
                            className="text-sm font-normal cursor-pointer flex-1"
                          >
                            {label}
                          </Label>
                        </div>
                      )
                    )}
                  </RadioGroup>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    What are your primary career goals?
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Select all that apply
                  </p>

                  {preferences.careerStage && (
                    <div className="space-y-3">
                      {availableGoals.map((goal) => (
                        <div
                          key={goal}
                          className={`flex items-center space-x-3 p-2 rounded-lg border-2 transition-all cursor-pointer ${
                            isGoalSelected(goal)
                              ? "border-pink-500 bg-pink-50"
                              : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <Checkbox
                            id={`goal-${goal}`}
                            checked={isGoalSelected(goal)}
                            onCheckedChange={() => handleToggle(goal)}
                            className={`h-5 w-5 border-slate-300 ${
                              isGoalSelected(goal)
                                ? "text-white border-pink-500 bg-pink-500 data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                                : ""
                            }`}
                          />
                          <Label
                            htmlFor={`goal-${goal}`}
                            className="text-sm font-normal cursor-pointer flex-1"
                          >
                            {goal}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-slate-800">
                    Prioritize what matters most to you about AI
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">
                    Drag items to reorder by importance (click and drag anywhere
                    on an item)
                  </p>
                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="priorities">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="space-y-0"
                          style={{ minHeight: priorityItems.length * 68 }}
                        >
                          {priorityItems.map((priority, index) => (
                            <Draggable
                              key={priority.id}
                              draggableId={priority.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`flex items-center p-3 bg-white border rounded-lg ${
                                    snapshot.isDragging
                                      ? "shadow-lg border-pink-400 opacity-90"
                                      : "border-slate-200 shadow-sm hover:shadow-md hover:border-pink-300"
                                  } transition-shadow duration-200 cursor-grab active:cursor-grabbing`}
                                  style={{
                                    ...provided.draggableProps.style,
                                    height: "60px",
                                    marginBottom: "8px",
                                  }}
                                >
                                  <div className="flex items-center w-full">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-pink-50 text-pink-600 mr-3 flex-shrink-0">
                                      <span className="font-medium">
                                        {index + 1}
                                      </span>
                                    </div>
                                    <span className="text-slate-800 font-normal text-sm">
                                      {priority.text}
                                    </span>
                                    <GripVertical
                                      size={20}
                                      className="ml-auto text-slate-400"
                                    />
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              )}
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          {!hasExistingData ? (
            <>
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !preferences.careerStage) ||
                  (step === 2 && preferences.goals.length === 0)
                }
                className="bg-pink-600 hover:bg-pink-700"
              >
                {step === totalSteps ? "Complete" : "Next"}
              </Button>
            </>
          ) : (
            <div></div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
