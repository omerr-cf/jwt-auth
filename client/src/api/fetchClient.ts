import { baseUrl, TOKEN_KEY } from "../constants";

interface FetchClientOptions extends RequestInit {
  withAuth?: boolean;
}

export const fetchClient = (
  endpoint: string,
  options: FetchClientOptions = {},
) => {
  const { withAuth = false, headers, ...rest } = options;
  const token = localStorage.getItem(TOKEN_KEY);
  const finalHeaders = new Headers(headers);

  if (rest.body && !finalHeaders.has("Content-Type")) {
    finalHeaders.set("Content-Type", "application/json");
  }

  if (withAuth && token) {
    finalHeaders.set("Authorization", `Bearer ${token}`);
  }

  return fetch(`${baseUrl}${endpoint}`, {
    ...rest,
    headers: finalHeaders,
  });
};
