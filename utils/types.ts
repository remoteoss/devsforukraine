
import { Role } from "@prisma/client";
import { ISODateString } from "next-auth";

export type Session = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        registrationNumber?: number | null;
        donationAmount?: number | null;
        username?: string | null;
    };
    expires: ISODateString;
}

export type UserType = {
    "name": string,
    "image": string,
    "donationAmount": number,
    "registrationNumber": number,
    "role": Role,
    "username": string,
    "location": string,
    "createdAt": string
}

export type balance = {
    balance: number
    goal: number
    percentage: number
    donations: number
}