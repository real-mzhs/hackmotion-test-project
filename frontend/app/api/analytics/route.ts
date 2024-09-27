import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const ip = request.ip || "unknown";

  try {
    await prisma.analyticsEvent.create({
      data: {
        eventType: body.eventType,
        url: body.url,
        timestamp: new Date(body.timestamp),
        userId: body.userId,
        userAgent: body.userAgent,
        ipAddress: ip,
        metadata: body.metadata ? JSON.stringify(body.metadata) : null,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to store analytics data:", error);
    return NextResponse.json(
      { error: "Failed to store analytics data" },
      { status: 500 }
    );
  }
}
