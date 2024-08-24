import React from "react"
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
"use client";


export function Failure() {
  return (

    <div className="p-4">
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
    </div>
  );
}
