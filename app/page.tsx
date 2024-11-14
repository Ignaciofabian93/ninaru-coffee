"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Init() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  }, []);

  return (
    <main>
      <h1>Loading page...</h1>
    </main>
  );
}
