import ky from "ky";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:1337";

// Function to get token from localStorage or other storage
const getAuthToken = (): string | null => {
  // Get token from localStorage, sessionStorage, or cookies
  return (
    localStorage.getItem("authToken") ||
    sessionStorage.getItem("authToken") ||
    process.env.NEXT_PUBLIC_AUTH_TOKEN ||
    null
  );
};

// Create ky instance with Bearer token authentication
const api = ky.create({
  prefixUrl: `${BASE_URL}/api`,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getAuthToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        // Handle 401 Unauthorized responses
        if (response.status === 401) {
          // Clear invalid token
          if (typeof window !== "undefined") {
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
          }

          // Optionally redirect to login or trigger auth refresh
          // window.location.href = '/login';
        }

        return response;
      },
    ],
  },
});

// Separate instance for local Next.js API routes (no external base URL)
export const localApi = ky.create({
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getAuthToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
          }
        }
        return response;
      },
    ],
  },
});

// Helper function to set auth token
export const setAuthToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", token);
  }
};

// Helper function to clear auth token
export const clearAuthToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
  }
};

// Helper function to get current token
export const getCurrentToken = () => getAuthToken();

export default api;
