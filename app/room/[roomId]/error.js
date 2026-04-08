"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        
        <CardHeader>
          <CardTitle>Room not found</CardTitle>
          <CardDescription>
            The room you are trying to access does not exist or may have been closed.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Optional: you can show error.message in dev if needed */}
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button onClick={() => reset()} className="w-full">
            Try again
          </Button>

          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Go to home
            </Button>
          </Link>
        </CardFooter>

      </Card>
    </div>
  );
}