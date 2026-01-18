//locallead/Dental Clinic Website Template/src/app/lib/api.ts

import type { FormData } from "@/app/components/SetupForm";

const API_BASE = "http://127.0.0.1:8000";

export async function runPipeline(data: FormData) {
  const res = await fetch(`${API_BASE}/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      businessType: data.businessType,
      location: data.location,
      maxResults: data.maxResults,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to start pipeline");
  }

  return res.json();
}
