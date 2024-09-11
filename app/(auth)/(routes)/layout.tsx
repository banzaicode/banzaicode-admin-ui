import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center h-full items-center">
            <p> Scrap News </p>
            <h1 className="text-3xl my-2">
                Welcome to Admin Dashboard
            </h1>
            <h2 className="text-2xl md-3">BanzaiCode</h2>
            {children}
        </div>
    )
}