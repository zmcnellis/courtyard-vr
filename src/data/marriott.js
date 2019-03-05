import Logo from '../assets/marriott/logo.png'
import LandingPage from '../assets/marriott/landing-page.jpg'
import BistroBar from '../assets/marriott/bistro-bar.jpg'
import FrontDesk from '../assets/marriott/front-desk.jpg'
import Pan1 from '../assets/marriott/panorama1.jpg'
import Pan2 from '../assets/marriott/panorama2.jpg'
import Pan3 from '../assets/marriott/panorama.jpg'

const MarriottData = {
  styles: {
    colors: {
      background: '#555759',
      primary: '#d99a29',
      secondary: '#6f263d'
    },
    fonts: {
      primary: 'Museo',
      secondary: 'Verdana'
    }
  },
  home: {
    name: 'Activating the Courtyard Experience',
    image: LandingPage
  },
  footer: {
    heading: 'View the Courtyard Experience Guide on',
    linkName: 'MGS',
    linkUrl: 'https://www.google.com',
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
      image: Pan1
    },
    {
      id: 2,
      locationId: 1,
      name: 'Experience B',
      image: Pan2
    },
    {
      id: 3,
      locationId: 2,
      name: 'Experience A',
      image: Pan3
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: Pan1
    }
  ],
  brand: {
    name: 'Courtyard by Marriott',
    logo: Logo,
    favicon: ''
  }
}

export default MarriottData
