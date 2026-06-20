import { NextRequest, NextResponse } from "next/server";
import runtimes from "./runtimes";

export async function POST(res : NextRequest){
    const {language, code, problemId} = await res.json();
    console.log(language, code, problemId);
    return NextResponse.json({
        message : "Recieved!"
    })
}