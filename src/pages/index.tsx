import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { Card } from '@/components/card'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



function Home() {  
  
const [crddata, setCrddata] = useState('aasds');
const [rankData, setRankdata] = useState([]);


const getAnime = async() => {

const res = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=20`) 
const resdata = await res.json();
  
  setRankdata(resdata.data);

console.log(resdata.data);
 
}


useEffect(() => {
  getAnime();
}, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
 
      
<div className='container'>

<div className='row-col'> 

<div className='row'> 

<Card rankData={rankData} /> 

</div>
</div>



  </div>



          


      </main>
    </>
  )
  
}

export async function getServerSideProps() {
  // Fetch data from external API
  

  // Pass data to the page via props
  return { props: {  } }
}

export default Home