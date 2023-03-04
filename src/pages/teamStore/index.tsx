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
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

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
    title: 'General Cabinet',
    id: '1',
    children: [
      {
        title: 'Finance',
        id: '6',
        children: [{ title: 'Improper Segregation of Duties', id: '333' }]
      }
    ]
  },
  {
    title: 'Other Audit Programs',
    id: '2',
    children: [
      {
        title: 'Polish Audit',
        id: '3',
        children: [
          {
            title: 'Brak właściwego rozdziału obowiązków',
            id: '7'
          },
          {
            title: 'Brak formalnego przeglądu uprawnień użytkowników w SAP',
            id: '67'
          }
        ]
      }
    ]
  }
]
const objectivesData: ITree[] = [
  {
    title: 'Risk and Control Library',
    id: '1',
    children: [
      {
        title: 'General',
        id: '6',
        children: [
          {
            title: 'To perform an annual strategic-level risk assessment.',
            id: '66'
          }
        ]
      },
      {
        title: 'Accounting',
        id: '444',
        children: [
          {
            title: 'Assets.',
            id: '1341',
            children: [
              {
                title: 'To ensure accurate and reliable financial reporting.',
                id: '133'
              }
            ]
          },
          {
            title: 'Inventory management.',
            id: '13481',
            children: [
              {
                title: 'Ensure accurate inventory records are maintained.',
                id: '13333'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Social Media',
    id: '2',
    children: [
      {
        title: 'Ensure information and communication is consistently presented to stakeholders',
        id: '3'
      },
      {
        title: 'Ensure infomation is shared among approrpriate members of the organization',
        id: '4'
      },
      {
        title: 'Ensure there is awareness of social media within management groups',
        id: '224'
      }
    ]
  }
]
const strategicRisksData: ITree[] = [
  {
    title: 'Unapproved Risk Universe Cabinet',
    id: '1',
    children: [
      {
        title: '2022 Audit Risk Assessment',
        id: '61',
        children: [
          {
            title: 'Italy Human Resources Risk',
            id: '62'
          },
          {
            title: 'WKFS UK Procurement Risk',
            id: '63'
          }
        ]
      },

      {
        title: '2023 SOX Compliance Assessment',
        id: '64',
        children: [
          {
            title: 'R2R.BSR.R01 BS accounts key factors are not fully determined or understood',
            id: '65'
          },
          {
            title: 'R2R.BSR.R02 Balances posted in the GL system are incomplete or inaccurate',
            id: '66'
          },
          {
            title: 'R2R.BSR.R02.02 Reconciliation of BS Accounts',
            id: '67'
          }
        ]
      }
    ]
  },
  {
    title: 'Risk Factors',
    id: '2',
    children: [
      {
        title: 'Financial Risk',
        id: '3'
      },
      {
        title: 'Operational Risk',
        id: '4'
      },
      {
        title: 'Strategic Risk',
        id: '51'
      },
      {
        title: 'IT Risk',
        id: '41'
      },
      {
        title: 'Compliance Risk',
        id: '42'
      }
    ]
  },
  {
    title: 'Risk and Control Library',
    id: '11',
    children: [
      {
        title: 'Financial Risk',
        id: '22',
        children: [
          {
            title: 'Access to Capital and Liquidity ',
            id: '33'
          }
        ]
      },
      {
        title: 'Exchange Rate',
        id: '44'
      },
      {
        title: 'Residual Value Risk',
        id: '342'
      },
      {
        title: 'Operational Risk',
        id: '51'
      }
    ]
  }
]
const risksData: ITree[] = [
  {
    title: 'Cyber Security',
    id: '1',
    children: [
      {
        title: 'Information Systems Acquisition, Development and Maintenance',
        id: '6'
      },
      {
        title: 'Mitigated Targeted Intrusions',
        id: '6'
      },
      {
        title: 'Mitigated Targeted Intrusions',
        id: '6'
      },
      {
        title: 'Asset Management',
        id: '6'
      }
    ]
  }
]
const controlData: ITree[] = [
  {
    title: 'Risk and Control Library',
    id: '1',
    children: [
      {
        title: 'Finance',
        id: '6'
      },
      {
        title: 'Human Resources',
        id: '61'
      },
      {
        title: 'Information Technology',
        id: '62'
      },
      {
        title: 'Legal',
        id: '64'
      }
    ]
  },
  {
    title: 'Social Media',
    id: '2',
    children: [
      {
        title: 'Controls',
        id: '3',
        children: [
          {
            title: 'Social Media committee is formed',
            id: '7'
          },
          {
            title: 'Social Media committee is monitored',
            id: '71'
          },
          {
            title: 'Information is shared with management',
            id: '72'
          },
          {
            title: 'Messaging is planned and monitored',
            id: '723'
          }
        ]
      }
    ]
  },
  {
    title: 'Cyber Security',
    id: '11',
    children: [
      {
        title: 'Security Policy',
        id: '22',
        children: [
          {
            title: 'Information security policy document ',
            id: '33'
          },
          {
            title: 'Review of the information security policy',
            id: '331'
          }
        ]
      },
      {
        title: 'Asset Management',
        id: '44',
        children: [
          {
            title: 'Classification guidelines',
            id: '55'
          }
        ]
      }
    ]
  }
]
const testData: ITree[] = [
  {
    title: 'Unapproved Cabinet',
    id: '2',
    children: [
      {
        title: 'Cyber Security Policy',
        id: '3',
        children: [
          {
            title: 'Information security policy test',
            id: '7'
          }
        ]
      },
      {
        title: 'Organization of Information Security',
        id: '4',
        children: [
          {
            title: 'Management commitment to information security test',
            id: '5'
          }
        ]
      }
    ]
  }
]
const Home = () => {
  const [type, setType] = React.useState('issue')

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Users Store'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Select Items to be exported</Typography>
            <Typography>Items are exported in excel format</Typography>
            <Box sx={{ width: '220px', mt: '30px', marginLeft: 'auto' }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>type</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={type}
                  label='Age'
                  onChange={handleChange}
                >
                  <MenuItem value={'issue'}>
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/issue.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> Issue</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value={'objective'}>
                    {' '}
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/objective.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> objective</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value={'strategic_risk'}>
                    {' '}
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/strategicRisk.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> Strategic Risk</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value={'risk'}>
                    {' '}
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/risk.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> Risk</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value={'control'}>
                    {' '}
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/control.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> Control</Box>
                    </Box>
                  </MenuItem>
                  <MenuItem value={'test'}>
                    <Box sx={{ display: 'flex' }}>
                      <img
                        alt='error-illustration'
                        src='/images/usersStore/test.png'
                        style={{ width: '20px', marginRight: '10px' }}
                      />
                      <Box> Test</Box>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Cabinet'></CardHeader>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                {type === 'issue' && (
                  <DropTree
                    data={issuesData}
                    img={<Img alt='error-illustration' src='/images/usersStore/issue.png' />}
                  />
                )}
                {type === 'objective' && (
                  <DropTree
                    data={objectivesData}
                    img={<Img alt='error-illustration' src='/images/usersStore/objective.png' />}
                  />
                )}
                {type === 'strategic_risk' && (
                  <DropTree
                    data={strategicRisksData}
                    img={<Img alt='error-illustration' src='/images/usersStore/strategicRisk.png' />}
                  />
                )}
                {type === 'risk' && (
                  <DropTree data={risksData} img={<Img alt='error-illustration' src='/images/usersStore/risk.png' />} />
                )}
                {type === 'control' && (
                  <DropTree
                    data={controlData}
                    img={<Img alt='error-illustration' src='/images/usersStore/control.png' />}
                  />
                )}
                {type === 'test' && (
                  <DropTree data={testData} img={<Img alt='error-illustration' src='/images/usersStore/test.png' />} />
                )}
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
