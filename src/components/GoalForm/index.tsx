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
    <form action={formAction}>
      {/* <input type="hidden" name="userId" value={userId} /> */}
      <label>
        title:
        <input type="text" name="title" />
      </label>
      <label>
        description:
        <textarea name="description" />
      </label>
      {state?.message}
      <SubmitButton />
    </form>
  );
};

export default GoalForm;
