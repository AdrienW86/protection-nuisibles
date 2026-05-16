import Banner from '@/components/Banner/Banner';
import GoogleReviews from '@/components/Reviews/Reviews';
import Equipment from '@/components/Equipment/Equipment';
import Description from '@/components/Description/Description';

export default function Home() {
  return (
    // 'flex flex-col w-full min-h-screen' remplace proprement le styles.main
    <main className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
      <Banner />
      <GoogleReviews />
      <Equipment />
      <Description />    
    </main>
  );
}