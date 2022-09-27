import React from 'react'
import { Box, Divider } from '@mui/material'

export const DividerComponent = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <Divider sx={{ my: 1, backgroundColor: 'black', width: '15em' }} />
        </Box>
    )
}
