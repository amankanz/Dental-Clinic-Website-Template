//locallead/Dental Clinic Website Template/src/app/lib/status.ts
const API_BASE = "http://127.0.0.1:8000";

export async function fetchStatus() {
  const res = await fetch(`${API_BASE}/status`);
  if (!res.ok) {
    throw new Error("Failed to fetch status");
  }
  return res.json();
}