import React from "react";



import { Alert } from "flowbite-react";

export function Success() {
  return (
    <div className="p-4">
      <Alert color="success">
        <span className="font-medium">Success alert!</span> This should have a green background.
      </Alert>
    </div>
  );
}
