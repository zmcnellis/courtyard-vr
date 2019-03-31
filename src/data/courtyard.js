import Logo from '../assets/courtyard/logo.png'
import LandingPage from '../assets/courtyard/landing-page.jpg'
import FrontDesk from '../assets/courtyard/front-desk.jpg'
import FrontDeskA from '../assets/courtyard/front-desk-1.jpg'
import FrontDeskB from '../assets/courtyard/front-desk-2.jpg'
import BistroBar from '../assets/courtyard/bistro-bar.jpg'
import BistroBarA from '../assets/courtyard/bistro-bar-1.jpg'
import BistroBarB from '../assets/courtyard/bistro-bar-2.jpg'

const Courtyard = {
  styles: {
    colors: {
      background: '#555759',
      primary: '#d99a29',
      secondary: '#797B7C',
      arrowLarge: '#797B7C',
      arrowSmall: '#797B7C'
    },
    fonts: {
      primary: 'Museo',
      fallback: 'Verdana'
    }
  },
  home: {
    name: 'Activating the Courtyard Experience',
    image: LandingPage
  },
  footer: {
    heading: 'View the Courtyard Experience Guide on',
    linkName: 'MGS',
    linkUrl: 'https://mgscloud.marriott.com/common/brands/courtyard/guest-experience.html',
    subheading: 'Marriott International Confidential & Proprietary Information'
  },
  locations: [
    {
      id: 1,
      name: 'Front Desk',
      image: FrontDesk,
    },
    {
      id: 2,
      name: 'Bistro Bar',
      image: BistroBar
    }
  ],
  scenes: [
    {
      id: 1,
      locationId: 1,
      name: 'Experience A',
      image: FrontDeskA
    },
    {
      id: 2,
      locationId: 1,
      name: 'Experience B',
      image: FrontDeskB
    },
    {
      id: 3,
      locationId: 2,
      name: 'Experience A',
      image: BistroBarA
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: BistroBarB
    }
  ],
  brand: {
    name: 'Courtyard by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Courtyard
