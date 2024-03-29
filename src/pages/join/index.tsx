import Head from 'next/head';
import Header from '@/components/Header';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';
import Division from '@/components/Division';
import People from '@/components/People';
import Partnership from '@/components/Partnership';

export default function JoinHome() {
  return (
    <div>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Welcome to FairMI" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <SubTitle title="Promoting fair and inclusive AI demands a diversity of people, skills, and experiences—join our team."/>
        <Title title="OUR TEAM"/>
        <Division title="Members"/>
        <People />
        <Division title="Partnership"/>
        <Partnership />
    </div>
  );
}
