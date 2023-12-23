"use client";

import { useFormState } from "react-dom";

import { createGoal } from "@/app/actions";
import { SubmitButton } from "../SubmitButton";

interface GoalFormProps {
  initialState: {
    title?: string;
    description?: string;
    message?: string;
  };
}

const GoalForm = ({ initialState }: GoalFormProps) => {
  const [state, formAction] = useFormState(createGoal, initialState);
  return (
    <form className="flex flex-col gap-2 w-[30rem] mx-12" action={formAction}>
      {/* <input type="hidden" name="userId" value={userId} /> */}
      <label className="flex justify-between capitalize p-2 gap-2">
        title:
        <input
          type="text"
          name="title"
          className="w-60 p-2 rounded bg-transparent border border-"
        />
      </label>
      <label className="flex justify-between capitalize p-2 gap-2">
        description:
        <textarea name="description" className="w-60" />
      </label>
      {state?.message}
      <SubmitButton />
    </form>
  );
};

export default GoalForm;
