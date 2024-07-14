import {
    Property,
    Developer,
    Compound,
    Area,
    Listing,
    Reservation,
    User,
} from "@prisma/client";

export type SingleProperty = Omit<Property, "createdAt" | "updatedAt"> & {
    createdAt: string;
    updatedAt: string;
    compound: lightCompound;
    area: lightArea;
    developer: lightDeveloper;
};

export type SingleCompound = Omit<Compound, "createdAt" | "updatedAt"> & {
    createdAt: string;
    updatedAt: string;
    area: lightArea;
    developer: lightDeveloper;
};

export type SingleDeveloper = Omit<Developer, "createdAt" | "updatedAt"> & {
    createdAt: string;
    updatedAt: string;
    compound: {
        id: string;
    }[];
    property: {
        id: string;
    }[];
};

export type SafeProperty = Omit<
    Property,
    | "createdAt"
    | "updatedAt"
    | "content"
    | "images"
    | "description"
    | "seoDetails"
    | "city"
    | "countery"
> & {
    createdAt: string;
    updatedAt: string;
    compound: lightCompound;
    area: lightArea;
    developer: lightDeveloper;
};

export type SafeCompound = Omit<
    Compound,
    | "createdAt"
    | "updatedAt"
    | "content"
    | "images"
    | "description"
    | "seoDetails"
> & {
    area: lightArea;
    developer: lightDeveloper;
    properties: {
        id: string;
        price: number;
        propertType: string;
    }[];
};
export type SafeArea = Omit<Area, "createdAt" | "updatedAt"> & {
    createdAt: string;
    compounds: {
        id: string;
    }[];
    properties: {
        id: string;
    }[];
};

export type SafeListing = Omit<
    Listing,
    "createdAt" | "updatedAt" | "content"
> & {
    createdAt: string;
};
export type SafeDeveloper = Omit<
    Developer,
    "createdAt" | "updatedAt" | "content"
> & {
    createdAt: string;
    updatedAt: string;
    compounds: lightCompound[];
    property: {
        id: string;
    };
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

export type lightCompound = Pick<
    Compound,
    "id" | "title" | "name" | "slug" | "mainImage" | "lat" | "lng" | "masterPlan"
>;
export type lightDeveloper = Pick<Developer, "id" | "title" | "slug" | "image">;
export type lightArea = Pick<Area, "id" | "title" | "slug">;
