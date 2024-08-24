import React from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";


export function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form className="w-full max-w-md sm:max-w-lg p-6 sm:p-8  rounded-lg shadow-2xl">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Login Form</h1>
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" className="text-gray-700 font-bold" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required className="w-full" />
          </div>
          <div className="mb-4">
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" className="text-gray-700" />
            </div>
            <TextInput id="password1" type="password" required className="w-full" />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-gray-700">Remember me</Label>
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Submit
          </Button>
        </form>
      </div>
    );
  }
  