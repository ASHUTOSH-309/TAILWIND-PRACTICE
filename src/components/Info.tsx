import React from "react";
"use client";

import { Alert } from "flowbite-react";

export function Info() {
  return (

    <div className="p-4">
    <Alert color="warning" rounded>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>

    </div>
  );
}
