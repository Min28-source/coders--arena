import HomeClient from "./HomeClient";

export default async function Home({ searchParams, }: { searchParams: Promise<{ roomId?: string }>; }) {
  const params = await searchParams;
  return <HomeClient roomId={params.roomId ?? null} />;
}