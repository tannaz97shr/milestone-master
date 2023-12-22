"use server";

export const createGoal = async (formData: FormData) => {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };
  console.log("form acrion async", rawFormData);
};
