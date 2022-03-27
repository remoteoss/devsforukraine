import { RegistrationType } from "@prisma/client";
import { ISODateString } from "next-auth";

export type Session = {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        registrationNumber?: number | null;
        donationAmount?: number | null;
        registeredFor?: RegistrationType | null,
        username?: string | null;
    };
    expires: ISODateString;
}