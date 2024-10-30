"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { create } from "zustand";

type CountState = {
  count: number;
  increment: (by: number) => void;
};

const useDinoStore = create<CountState>((set) => ({
  count: 0,
  increment: (by) => set((state) => ({ count: state.count + by })),
}));

export default function IncrementSection() {
  const { count, increment } = useDinoStore();
  return (
    <Card>
      <CardHeader className="flex h-24 w-48 items-center justify-center align-middle">
        <CardTitle>{`${count}`}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center align-middle">
        <Button onClick={() => increment(1)}>Add</Button>
      </CardContent>
    </Card>
  );
}
