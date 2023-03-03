import * as React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import { styled } from '@mui/material/styles'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

// ** Custom Components
import DropTree from 'src/components/DropTree'

// ** Types import
import { ITree } from 'src/types/appTypes'

const Img = styled('img')(() => ({
  width: '40px',
  height: '30px',
  marginLeft: '18px'
}))

// ** Data
const issuesData: ITree[] = [
  {
    title: 'System Access',
    id: '1',
    children: [
      {
        title: 'Remove System Access for Terminated Employees',
        id: '11'
      }
    ]
  },
  {
    title: 'Social Media Campaigns Have No Opt Out Option ',
    id: '2',
    children: [
      {
        title: 'Opt Out Permissions Should be Available',
        id: '22'
      }
    ]
  },
  {
    title: 'Social Media Monitoring Data Privacy',
    id: '3',
    children: [
      {
        title: 'Opt Out Permissions Should be Available',
        id: '33'
      }
    ]
  }
]

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Users Store'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Select issues to be exported</Typography>
            <Typography>Items are exported in excel format</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Cabinet'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                <DropTree data={issuesData} img={<Img alt='error-illustration' src='/images/usersStore/issue.png' />} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <a
                    href='/images/usersStore/exported.xlsx'
                    target='_blank'
                    download
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant='outlined' size='large'>
                      <Box
                        sx={{
                          flexDirection: 'column',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <img
                          style={{ width: '70px', marginLeft: '-10px' }}
                          alt='error-illustration'
                          src='/images/usersStore/x.png'
                        />
                        <div style={{ marginTop: '10px', textDecoration: 'none' }}>Export Selected</div>
                      </Box>
                    </Button>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
