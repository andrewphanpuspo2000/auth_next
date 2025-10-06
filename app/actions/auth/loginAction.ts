"use server";
interface LoginValues {
  username: string;
  password: string;
}

export const loginAction = (values: LoginValues) => {
  console.log(values);
};
