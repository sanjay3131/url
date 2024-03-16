import { NextResponse } from "next/server";

export function GET(_, response) {
  const { id } = response.prams;
  return NextResponse.json({ id });
}
