"use server";

import { z } from "zod";

const schema = z.object({
  title: z.string({
    invalid_type_error: "Invalid Title",
  }),
  description: z.string({
    invalid_type_error: "Invalid Description",
  }),
});

export const createGoal = async (prevState: any, formData: FormData) => {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  if (!validatedFields.success) {
    // return {
    //   errors: validatedFields.error.flatten().fieldErrors,
    // };
    return {
      message: "Please enter a valid email",
    };
  }
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };
  console.log("form acrion async", rawFormData);
  return {};
};
