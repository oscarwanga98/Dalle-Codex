import React from 'react'
import { Product,FooterBanner,HeroBanner } from '@/components/Index'
import { client } from '@/LIB/client'
import product from '@/shop/schemas/product'

function Home({products,bannerData}) {


  return (
    <>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        
        <div className='products-heading'>
          <h2> Best selling products </h2>
          <p>Speakers of many variations</p>
        </div>
        <div className='products-container'>
          {products?.map((product)=><Product key={product._id} product={product}/>)}
        </div>

        <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps=async()=>{
  const query='*[_type=="product"]'
  const products= await client.fetch(query)

  const bannerQuery='*[_type=="banner"]'
  const bannerData= await client.fetch(bannerQuery)

  return{
    props:{products,bannerData}
  }
}

export default Home