import { Button, Link, Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState, useEffect } from 'react';
import { ButtonComponent, DividerComponent, Footer, FullScreenLoading } from '../components'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    const interval_ = setInterval(() => {
      setIsLoad(true)
      clearInterval(interval_)
    }, 800)

  }, [])
  return (
    <>
      {
        !isLoad
          ? <FullScreenLoading />
          :
          <>
            <div data-aos="zoom-in">
              < Box display='flex' justifyContent='center' >
                <Image src='/logoe.png' width={3240} height={1260} />
              </Box >
            </div>
            <div data-aos="zoom-in-down">
              <Typography sx={{ textAlign: 'center', m: 1, mt: 3, fontFamily: 'Abyssinica SIL' }} variant='h5'>Conoce algunas de nuestras marcas y servicios</Typography>
            </div>
            <div data-aos="fade-right">
              <DividerComponent />
            </div>
            <div data-aos="flip-left">
              <Box display='flex' justifyContent='center'>
                <ButtonComponent title='Chunas' img='/chunas.png' width={250} height={100} instagram='https://www.instagram.com/chunas.argentina/' web='https://www.chunas.com.ar/' />
              </Box>
            </div>
            <div data-aos="fade-left">
              <DividerComponent />
            </div>
            <div data-aos="flip-right">
              <Box display='flex' justifyContent='center'>
                <ButtonComponent title='Yo Te Cielo' img='/yotecielo.png' width={250} height={100} instagram='https://www.instagram.com/yotecielo.argentina/' web='https://www.yotecielo.com.ar/' />
              </Box>
            </div>
            <div data-aos="fade-right">
              <DividerComponent />
            </div>
            <div data-aos="flip-left">
              <Box display='flex' justifyContent='center'>
                <ButtonComponent title='Fogueta' img='/fogueta.png' width={200} height={70} instagram='https://www.instagram.com/fogueta.argentina/' web='https://www.fogueta.com.ar/' />
              </Box>
            </div>
            <div data-aos="fade-left">
              <DividerComponent />
            </div>
            <div data-aos="flip-right">
              <Box display='flex' justifyContent='center'>
                <ButtonComponent title='Jugactico' img='/jugactico.png' width={200} height={100} instagram='https://www.instagram.com/jugactico.ar/' web='https://jugactico.com/' />
              </Box>
            </div>
            <div data-aos="fade-right">
              <DividerComponent />
            </div>
            <div data-aos="flip-left">
              <Box display='flex' justifyContent='center' sx={{ mb: 3 }}>
                <ButtonComponent title='Noche de Luna' img='/luna.png' width={150} height={50} instagram='https://www.instagram.com/nochedeluna_tienda/' web='https://www.nochedeluna.com.ar/' />
              </Box>
            </div>
            <div data-aos="fade-left">
              <DividerComponent />
            </div>
            <div data-aos="flip-left">
              <Box display='flex' justifyContent='center' sx={{ mb: 3 }}>
                <ButtonComponent title='FULFILLMENT' img='/fulfillment.jpeg' width={150} height={100} instagram='https://www.instagram.com/ementors.ecom/' web='https://api.whatsapp.com/send/?phone=%2B5491134613763&text&type=phone_number&app_absent=0' />
              </Box>
            </div>
            <Footer />
          </>

      }
    </>

  )
}

export default Home
