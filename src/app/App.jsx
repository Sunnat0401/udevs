// pages/_app.js
import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import HomePage from '@/components/Home/HomePage';
import Services from '@/components/Services/Services';
import Team from '@/pages/Team/Team';
import Mobile from '@/pages/MobileApp/Mobile';
import ERP from '@/pages/ERP/ERP';
import UI from '@/pages/UI/UI';
import Opt from '@/pages/Optimization/Opt';
import Consulting from '@/pages/Consulting/Consulting';
import Tools from '@/pages/Tools/Tools';
import Clients from '@/components/Clients/Clients';
import Delever from '@/pages/Delever/Delever';
import Sms from '@/pages/SMS/Sms';
import Good from '@/pages/GoodZone/Good';
import Iman from '@/pages/Iman/Iman';
import HowTo from '@/pages/HowTo/HowTo';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <HomePage />
      <Services />
      <Team />
      <Mobile />
      <ERP />
      <UI />
      <Opt />
      <Consulting />
      <Clients />
      <Delever />
      <Sms />
      <Good />
      <Iman />
      <HowTo />
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(App);
