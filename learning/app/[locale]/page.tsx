import LandingPage from "@/components/LandingPage/LandingPage";

export default async function Home({ params }: { params: { locale: string } }) {
  return <LandingPage params={params} />;
}
