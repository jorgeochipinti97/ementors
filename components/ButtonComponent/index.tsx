import React, { FC } from 'react'
import NextLink from 'next/link'
import { Button, Card, CardMedia, Divider, Link, Box, Typography } from '@mui/material'
import Image from 'next/image'
import StorefrontIcon from '@mui/icons-material/Storefront';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
interface Props {
    title: string,
    img: string,
    width: number
    height: number
    instagram: string
    web: string
}

export const ButtonComponent: FC<Props> = ({ title, img, width, height, instagram, web }) => {
    return (
        <>
            <Box >
                <Link sx={{ m: 1, textDecoration: 'none' }}>
                    <Box display='flex' justifyContent='center' sx={{ mb: title.includes('Noche de Luna') ? 3 : 0 }}>
                        <Image src={img} width={width} height={height} alt={title} />
                    </Box>
                    {
                        title.includes('FULFILLMENT')
                        &&
                        < Box display='flex' justifyContent='center' sx={{ height: '5em' }}>
                            <Typography variant='h4' sx={{ color: 'black', mt: 4, fontFamily: 'Abyssinica SIL' }} >FULFILLMENT</Typography>
                        </Box >
                    }
                    <Box display='flex' justifyContent='center'>
                        <NextLink href={instagram} passHref>

                            <Link sx={{ m: 1 }}>
                                <Box sx={{ border: '1px solid black', borderRadius:'9px' }}
                                    display='flex' justifyContent='center' alignItems='center'
                                >
                                    <InstagramIcon sx={{ color: 'black', fontSize: '30px', m:0.3 }} />
                                </Box>
                            </Link>
                        </NextLink>
                        <NextLink href={web} passHref>

                            <Link sx={{ m: 1 }}>
                            <Box sx={{ border: '1px solid black', borderRadius:'9px' }}
                                    display='flex' justifyContent='center' alignItems='center'
                                >

                                    {
                                        title.includes('FULFILLMENT')
                                            ? <WhatsAppIcon sx={{ color: 'black', fontSize: '30px', m:0.3 }} />
                                            : <LanguageIcon sx={{ color: 'black', fontSize: '30px', m:0.3 }} />
                                    }
                                </Box>
                            </Link>
                        </NextLink>
                    </Box>

                </Link>
            </Box>
        </>
    )
}
