import { create } from "zustand";

export interface Obituary {
  id: string;
  termsAndConditions: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  deceasedFirstName: string;
  deceasedLastName: string;
  deceasedBirthDate: Date;
  dateOfPassing: Date;
  wakeLocation: string;
  familyMembers: string[];
  dateOfInternment: Date;
  funeralServiceProvider?: string[] | undefined;
  obituaryText?: string;
  images?: string[];
  videos?: string[];
  deathCertificate?: string[];
  barangayCertificate?: string[];
  governmentId?: string[];
  selfiePhoto?: string[];
}

interface ObituaryStore {
  obituaries: Obituary[];
  addObituary: (newObituary: Omit<Obituary, "id">) => void;
  updateObituary: (updatedObituary: Obituary) => void;
  deleteObituary: (id: string) => void;
}

export const useObituaryStore = create<ObituaryStore>((set) => ({
  obituaries: [
    {
      id: "1",
      termsAndConditions: true,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phoneNumber: "1234567890",
      address: "123 Main St, Cityville",
      deceasedFirstName: "Jane",
      deceasedLastName: "Doe",
      deceasedBirthDate: new Date("1970-05-20"),
      dateOfPassing: new Date("2025-01-15"),
      wakeLocation: "Townsville Memorial Chapel",
      familyMembers: ["Tom Doe", "Lucy Doe"],
      dateOfInternment: new Date("2025-01-20"),
      funeralServiceProvider: ["City Funeral Services"],
      obituaryText: "Jane was a loving mother and friend.",
      images: [],
      videos: [],
      deathCertificate: [],
      barangayCertificate: [],
      governmentId: [],
      selfiePhoto: [],
    },
  ],

  addObituary: (newObituary) =>
    set((state) => ({
      obituaries: [...state.obituaries, { id: String(Date.now()), ...newObituary }],
    })),

  updateObituary: (updatedObituary) =>
    set((state) => ({
      obituaries: state.obituaries.map((ob) =>
        ob.id === updatedObituary.id ? { ...ob, ...updatedObituary } : ob
      ),
    })),

  deleteObituary: (id) =>
    set((state) => ({
      obituaries: state.obituaries.filter((ob) => ob.id !== id),
    })),
}));
