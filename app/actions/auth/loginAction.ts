"use server";

import { LoginSchema } from "@/schemas";
import z from "zod";

type LoginValues = z.infer<typeof LoginSchema>;

export const loginAction = async (values: LoginValues) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields" };
  }
  return { success: "Email sent!" };
};
