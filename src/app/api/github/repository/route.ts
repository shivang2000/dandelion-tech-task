import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "octokit-next";
import fetch from "node-fetch";

export async function GET(request: Request) {
  try {
    const username = "shivang2000";
    let data = await fetch(`https://api.github.com/users/${username}/repos`);
    let json = await data.json();

    return NextResponse.json({ data: json });
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
