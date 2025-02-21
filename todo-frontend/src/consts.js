import "react";

const url = import.meta.env.VITE_ENDPOINT_URL || "https://default-api.example.com";

// ensure trailing / is removed
export const API_URL = url.replace(/\/$/, "");
