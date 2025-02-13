import { z } from "zod";

export const obituaryFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(1, "Address is required"),

  deceasedFirstName: z.string().min(1, "Required"),
  deceasedLastName: z.string().min(1, "Required"),
  deceasedBirthDate: z.date().refine((val) => val !== null, {
    message: "Required",
  }),
  dateOfPassing: z.date().refine((val) => val !== null, {
    message: "Required",
  }),
  wakeLocation: z.string().min(1, "Wake location is required"),
  familyMembers: z.array(z.string().min(1, "Family member name is required")),
  dateOfInternment: z.date().refine((val) => val !== null, {
    message: "Required",
  }),
  funeralServiceProvider: z.array(z.string().min(1, "Provider name is required")).optional(),

  obituaryText: z.string().min(10, "Obituary text must be at least 10 characters"),
  images: z.array(z.string().url()).optional(),
  videos: z.array(z.string().url()).max(1, "Only one video URL is allowed").optional(),
});


export type TObituaryFormSchema = z.infer<typeof obituaryFormSchema>;

// export type ObituaryForm = {
//   name: keyof TObituaryFormSchema;
//   label: string;
//   required?: boolean;
//   className?: string;
//   type?: string;
//   description?: string;
//   multiple?: boolean;
// };