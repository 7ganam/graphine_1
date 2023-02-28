import * as React from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import TreeItem, { TreeItemProps, useTreeItem, TreeItemContentProps } from '@mui/lab/TreeItem'
import Button from '@mui/material/Button'

import clsx from 'clsx'
import { Box } from '@mui/material'

// ** Styled Components
const TreeViewStyled = styled(TreeView)(() => ({
  '& 	.MuiTreeItem-content': {}
}))

const Img = styled('img')(() => ({
  width: '40px',
  height: '30px',
  marginLeft: '18px'
}))

const CustomContent = React.forwardRef(function CustomContent(props: TreeItemContentProps, ref) {
  const { classes, className, label, nodeId, icon: iconProp, expansionIcon, displayIcon } = props

  const { disabled, expanded, selected, focused, handleExpansion, handleSelection, preventSelection } =
    useTreeItem(nodeId)

  const icon = iconProp || expansionIcon || displayIcon

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    preventSelection(event)
  }

  const handleExpansionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleExpansion(event)
  }

  const handleSelectionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleSelection(event)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled
      })}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ display: 'flex', flexDirection: 'row', border: '1px solid grey', height: '40px', borderRadius: '50px' }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
        {/* {expanded ? <FolderAccount /> : <FolderAccount />} */}
        {/* <Img alt='error-illustration' src='/images/usersStore/i1.png' /> */}
      </div>
      <div style={{ marginLeft: '20px', display: 'flex', width: '100%' }}>
        <Typography onClick={handleSelectionClick} component='div' className={classes.label}>
          {label}
        </Typography>
      </div>
    </div>
  )
})

function CustomTreeItem(props: TreeItemProps) {
  return <TreeItem ContentComponent={CustomContent} {...props} />
}

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Users Store'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Select Items to be exported</Typography>
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
                <TreeViewStyled
                  aria-label='file system navigator'
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{ flexGrow: 1 }}
                >
                  <CustomTreeItem
                    nodeId='1'
                    expandIcon={<Img alt='error-illustration' src='/images/usersStore/i1.png' />}
                    collapseIcon={<Img alt='error-illustration' src='/images/usersStore/i2.png' />}
                    label={
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginTop: '8px' }}>Unapproved Risk Universe Cabinet</div>
                        <div style={{ marginLeft: 'auto' }}>
                          <Checkbox />
                        </div>
                      </div>
                    }
                  >
                    <CustomTreeItem
                      nodeId='2'
                      icon={<Img alt='error-illustration' src='/images/usersStore/i3.png' />}
                      label={
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <div style={{ marginTop: '8px' }}>Vendor invoices are not properly accounted for</div>
                          <div style={{ marginLeft: 'auto' }}>
                            <Checkbox />
                          </div>
                        </div>
                      }
                    />
                  </CustomTreeItem>
                  <CustomTreeItem
                    nodeId='3'
                    expandIcon={<Img alt='error-illustration' src='/images/usersStore/i1.png' />}
                    collapseIcon={<Img alt='error-illustration' src='/images/usersStore/i2.png' />}
                    label={
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginTop: '8px' }}>Risk and Control Library</div>
                        <div style={{ marginLeft: 'auto' }}>
                          <Checkbox />
                        </div>
                      </div>
                    }
                  >
                    <CustomTreeItem
                      nodeId='4'
                      expandIcon={<Img alt='error-illustration' src='/images/usersStore/i1.png' />}
                      collapseIcon={<Img alt='error-illustration' src='/images/usersStore/i2.png' />}
                      label={
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <div style={{ marginTop: '8px' }}>Finance</div>
                          <div style={{ marginLeft: 'auto' }}>
                            <Checkbox />
                          </div>
                        </div>
                      }
                    >
                      <CustomTreeItem
                        nodeId='5'
                        icon={<Img alt='error-illustration' src='/images/usersStore/i3.png' />}
                        label={
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginTop: '8px' }}>
                              Notes to financial statements may not be properly stated.
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                              <Checkbox />
                            </div>
                          </div>
                        }
                      />
                    </CustomTreeItem>
                    <CustomTreeItem
                      nodeId='6'
                      expandIcon={<Img alt='error-illustration' src='/images/usersStore/i1.png' />}
                      collapseIcon={<Img alt='error-illustration' src='/images/usersStore/i2.png' />}
                      label={
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <div style={{ marginTop: '8px' }}>Human Resources</div>
                          <div style={{ marginLeft: 'auto' }}>
                            <Checkbox />
                          </div>
                        </div>
                      }
                    >
                      <CustomTreeItem
                        nodeId='7'
                        icon={<Img alt='error-illustration' src='/images/usersStore/i3.png' />}
                        label={
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginTop: '8px' }}>Loss, Alteration, or unauthorized disclosure of data</div>
                            <div style={{ marginLeft: 'auto' }}>
                              <Checkbox />
                            </div>
                          </div>
                        }
                      />
                      <CustomTreeItem
                        nodeId='8'
                        icon={<Img alt='error-illustration' src='/images/usersStore/i3.png' />}
                        label={
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div style={{ marginTop: '8px' }}>Performing poorly</div>
                            <div style={{ marginLeft: 'auto' }}>
                              <Checkbox />
                            </div>
                          </div>
                        }
                      />
                    </CustomTreeItem>
                  </CustomTreeItem>
                </TreeViewStyled>
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
