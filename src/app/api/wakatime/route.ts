export async function GET() {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(process.env.WAKATIME_API_KEY!).toString("base64")}`,
        },
        next: { revalidate: 3600 },
      }
    );

    const data = await res.json();

    return Response.json({
      total:    data.data.human_readable_total,
      topLang:  data.data.languages?.[0]?.name ?? null,
      topHours: data.data.languages?.[0]?.human_readable_total ?? null,
    });
  } catch {
    return Response.json({ total: null, topLang: null, topHours: null });
  }
}