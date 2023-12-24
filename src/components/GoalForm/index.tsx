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
      <Input title="Estimated Date" type="date" name="date" />
      <label
        className="flex x justify-between capitalize p-2 gap-2 mb-2 items-center 
  border-b border-orange text-dark-blue"
      >
        Sub Tasks:
        <button className="border border-orange rounded px-4 text-purple text-xl w-72">
          +
        </button>
      </label>
      {state?.message}
      <SubmitButton />
    </form>
  );
};

export default GoalForm;
