"use client";

import { useFormState } from "react-dom";

import { createGoal } from "@/app/actions";
import Input from "../Input";
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
    <form className="fle flex-col gap-2 w-[30rem] mx-12" action={formAction}>
      <Input title="title" type="text" name="title" />
      <Input title="description" name="description" isTextArea />

      {state?.message}
      <SubmitButton />
    </form>
  );
};

export default GoalForm;
