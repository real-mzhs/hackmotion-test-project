import { v4 as uuid4 } from "uuid";

export function getUserId(): string {
  if (typeof window !== "undefined") {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuid4();
      localStorage.setItem("userId", userId);
    }
    return userId;
  }
  return "server-side";
}

export async function trackEvent(eventType: string, metadata: object = {}) {
  const event = {
    eventType,
    url: typeof window !== "undefined" ? window.location.href : "",
    timestamp: new Date().toISOString(),
    userId: getUserId(),
    userAgent: typeof window !== "undefined" ? window.navigator.userAgent : "",
    metadata: JSON.stringify(metadata),
  };

  try {
    const response = await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      console.error("Failed to send analytics event");
    }
  } catch (error) {
    console.error("Error sending analytics event:", error);
  }
}
