// //locallead/Dental Clinic Website Template/src/app/lib/api.ts
//
// import type { FormData } from "@/app/components/SetupForm";
//
// const API_BASE = "http://127.0.0.1:8000";
//
// export async function runPipeline(data: FormData) {
//   const res = await fetch(`${API_BASE}/run`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       businessType: data.businessType,
//       location: data.location,
//       maxResults: data.maxResults,
//     }),
//   });
//
//   if (!res.ok) {
//     throw new Error("Failed to start pipeline");
//   }
//
//   return res.json();
// }


//locallead/Dental Clinic Website Template/src/app/lib/api.ts

import type { FormData } from "@/app/components/SetupForm";

const API_BASE = "http://127.0.0.1:8000";

export async function runPipeline(data: FormData) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s

  try {
    const res = await fetch(`${API_BASE}/run`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        businessType: data.businessType,
        location: data.location,
        maxResults: data.maxResults,
      }),
    });

    if (!res.ok) {
      throw new Error("Backend is not responding");
    }

    const json = await res.json();

    if (json.error) {
      throw new Error(json.error);
    }

    return json;
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      throw new Error(
        "Request timed out. Please check your internet connection or backend server."
      );
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

