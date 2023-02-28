// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import BookAccount from 'mdi-material-ui/BookAccount'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'TeamStore',
      icon: BookAccount,
      children: [
        {
          title: 'TeamStore',
          path: '/teamStore',
          icon: BookAccount
        }
      ]
    }
  ]
}

export default navigation
