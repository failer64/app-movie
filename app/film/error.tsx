"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>oopps...{error.message}</h1>;
}
