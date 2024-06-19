import {
    Property,
    Developer,
    Compound,
    Area,
    Listing,
    Reservation,
    User,
} from "@prisma/client";

export type SafeProperty = Omit<
    Property,
    "createdAt" | "updatedAt"
> & {
    createdAt: string;
    updatedAt: string;
    compounds: SafeCompound;
    area: SafeArea;
    developer: SafeDeveloper;
};

export type SafeCompound = Omit<Compound, "createdAt"> & {
    createdAt: string;
    area: SafeArea;
    developer: SafeDeveloper;
    properties: SafeProperty[];
};
export type SafeArea = Omit<Area, "createdAt"> & {
    createdAt: string;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string;
};
export type SafeDeveloper = Omit<Developer, "createdAt"> & {
    createdAt: string;
};

export type SafeReservation = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing;
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
