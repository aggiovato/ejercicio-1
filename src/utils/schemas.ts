import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(3, "Username is a required field"),
  country: z.string().min(3).max(25),
  email: z.string().email("This is not a valid email"),
  url: z.string().url("This is not a valid url"),
  age: z.coerce.number().min(18, "Must be at least 18 years old"),
  phoneNumber: z
    .string()
    .regex(/^\+\d{1,15}$/, {
      message: `It must begin by "+" sign and contain only numbers`,
    })
    .min(10, "A phone number must have at least 10 characters"),
  profession: z
    .string()
    .max(20, "This field has a maximum of 20 characters")
    .optional(),
  date: z.string(),
  datetime: z.string(),
  time: z.string(),
  rate: z.coerce.number().min(-10).max(10, "Rate must be between -10 and 10"),
  search: z.string(),
});

export type FormValues = z.infer<typeof formSchema>;

export type ButtonTypes = "lets_en" | "submit_en" | "clean_en";

export type ButtonsProps = {
  bt_type: ButtonTypes;
};

export type DecorationsProps = {
  imageSrc: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  animation?: string;
  opacity?: number;
  rotation?: number;
  z_index?: number;
};
