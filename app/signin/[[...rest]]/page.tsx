"use client";

import { useState } from "react";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const [copied, setCopied] = useState<"email" | "password" | null>(null);

  const copyToClipboard = (field: "email" | "password", text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);


  };

  return (
    <main className="flex flex-col items-center gap-6 p-8 ">
      <div className="flex flex-col items-center justify-center min-h-175 w-full ">

        <ClerkLoading>
          <div className="w-100 h-155 bg-base-200 animate-pulse rounded-xl  " />
        </ClerkLoading>
        <ClerkLoaded>

          <div className=" space-y-8">

            <SignIn forceRedirectUrl={"/todos"} />


            <div className="flex flex-col gap-2 ">
              <p className="font-semibold text-lg">Test Credentials (click to copy)</p>

              <div
                onClick={() => copyToClipboard("email", "test@test.com")}
                className=" cursor-pointer flex justify-between items-center px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
              >
                <span className="btn btn-info text-base">Email: test@test.com</span>
                <span className="text-gray-500">{copied === "email" ? "✔️" : "copy"}</span>
              </div>

              <div
                onClick={() => copyToClipboard("password", "12345678")}
                className=" cursor-pointer flex justify-between items-center px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
              >
                <span className="btn btn-info text-base">Password: 12345678</span>
                <span className="text-gray-500">{copied === "password" ? "✔️" : "copy"}</span>
              </div>
            </div>
          </div>
        </ClerkLoaded>
      </div>
    </main>
  );
}
