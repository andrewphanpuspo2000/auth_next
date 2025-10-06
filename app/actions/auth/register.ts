"use server";

import { RegisterSchema } from "@/schemas";
import z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
type RegisterValues = z.infer<typeof RegisterSchema>;

export const registerAction = async (values: RegisterValues) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields" };
  }
  const { email, name, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email has been used" };
  const hashPassword = await bcrypt.hash(password, 10);

  await db.user.create({ data: { name, email, password: hashPassword } });

  return { success: "User is created!" };
};
