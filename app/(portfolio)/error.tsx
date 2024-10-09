"use client";
import { useEffect } from "react";


type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error fetching user data:", error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h2 className="mb-8 text-xl-2 w-1/2 text-justify"> ERROR {`${error.message}`}</h2>
      <div className="mt-4">
        <button
          className="p-4 bg-red-500 rounded-md"
          // Attempt to recover by trying to re-render the segment
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
