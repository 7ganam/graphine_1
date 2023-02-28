// ** MUI Imports
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'

const FooterContent = () => {
  // ** Var
  // const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>{`© ${new Date().getFullYear()}, all rights reserved.`}</Typography>
    </Box>
  )
}

export default FooterContent
