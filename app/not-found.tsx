"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function NotFound() {
   const router = useRouter()
    function handleClick(){
        router.push('/')
    }
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div>
                <h1>404 - Page Not Found</h1>
                <p>This room does not exist.</p>
                <Button variant="outline" onClick={handleClick}>Back Home</Button>
            </div>
        </div>
    );
}