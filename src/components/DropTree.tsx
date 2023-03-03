import * as React from 'react'
import { ReactNode } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TreeView from '@mui/lab/TreeView'
import { styled } from '@mui/material/styles'
import TreeItem, { TreeItemProps, useTreeItem, TreeItemContentProps } from '@mui/lab/TreeItem'
import Checkbox from '@mui/material/Checkbox'

import clsx from 'clsx'

// Types import
import { ITree } from 'src/types/appTypes'

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

const DropTree = ({ img, data }: { img: ReactNode; data: ITree[] }) => {
  const renderTree = (nodes: ITree[]) => {
    return nodes.map(node => (
      <CustomTreeItem
        key={node.id}
        nodeId={node.id}
        icon={Array.isArray(node.children) ? null : img}
        label={
          <Box sx={{ display: 'flex', flexDirection: 'row', width: { xs: '90%', md: '100%' } }}>
            <Typography noWrap style={{ marginTop: '8px' }}>
              {node.title}
            </Typography>
            <div style={{ marginLeft: 'auto' }}>
              <Checkbox />
            </div>
          </Box>
        }
      >
        {Array.isArray(node.children) ? renderTree(node.children) : null}
      </CustomTreeItem>
    ))
  }

  return (
    <TreeViewStyled
      aria-label='file system navigator'
      defaultCollapseIcon={<Img alt='error-illustration' src='/images/usersStore/i2.png' />}
      defaultExpandIcon={<Img alt='error-illustration' src='/images/usersStore/i1.png' />}
      sx={{ flexGrow: 1 }}
    >
      {renderTree(data)}
    </TreeViewStyled>
  )
}

export default DropTree
