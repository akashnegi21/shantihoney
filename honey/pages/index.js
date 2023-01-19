import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import LocalFarm from '../components/LocalFarm'
import Menu from '../components/Menu'
import Services from '../components/Services'
import Client from '../lib/client'
export default function Home({honeys}) {
  return (
    <Layout>
      <Head>
        <title>HoneyWax</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Services/>
      <LocalFarm/>
      <Menu honeys={honeys}/>
    </Layout>
  )
}
export const getServerSideProps=async()=>{
  const query=`*[_type=="honey"]`;
  const honeys=await Client.fetch(query);
  return{
    props:{
      honeys
    }
  }
}