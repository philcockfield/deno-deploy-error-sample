import { Context, Event } from "https://deno.land/x/lambda/mod.ts";

export async function handler(event: Event, context: Context) {
  return {
    statusCode: 200,
    body: `This is deno  🦕 running on ZEIT Now.`,
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  };
}
