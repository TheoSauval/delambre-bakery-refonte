export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return Response.json({ posts: [] });
  }

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink";
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=12&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return Response.json({ posts: [] });
    }

    const data = await res.json();
    return Response.json({ posts: data.data ?? [] });
  } catch (error) {
    return Response.json({ posts: [] });
  }
}
