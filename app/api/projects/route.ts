import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/app/lib/projects-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const filteredProjects =
    type === "opensource" || type === "school"
      ? projects.filter((project) => project.type === type)
      : projects;

  return NextResponse.json(filteredProjects);
}