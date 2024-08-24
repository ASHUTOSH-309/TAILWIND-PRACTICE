
import { Alert } from "flowbite-react";
import React from "react";

export function Warning() {
    return (
        <div className="p-4">
            <Alert color="warning" withBorderAccent className=" text-black border-yellow-700">
                <span>
                    <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
                </span>
            </Alert>
        </div>
    );
}
