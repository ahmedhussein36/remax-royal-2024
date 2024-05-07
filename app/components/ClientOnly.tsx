"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
    fallback: React.ReactNode | null;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }, { fallback }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return fallback;

    return <div>{children}</div>;
};

export default ClientOnly;
