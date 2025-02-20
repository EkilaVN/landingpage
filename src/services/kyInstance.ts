import ky from "ky";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const api = ky.create({
  prefixUrl: `${BASE_URL}/api`,
});

export default api;
