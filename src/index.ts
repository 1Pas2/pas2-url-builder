export type QueryValue =
  | string
  | number
  | boolean
  | readonly (string | number | boolean)[]
  | null
  | undefined;
export function buildUrl(
  base: string | URL,
  segments: readonly string[] = [],
  query: Record<string, QueryValue> = {},
): string {
  const url = new URL(base);
  if (segments.length)
    url.pathname =
      url.pathname.replace(/\/$/, "") +
      "/" +
      segments.map((x) => encodeURIComponent(x)).join("/");
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.delete(key);
    if (value === null || value === undefined) continue;
    for (const item of Array.isArray(value) ? value : [value])
      url.searchParams.append(key, String(item));
  }
  return url.href;
}
