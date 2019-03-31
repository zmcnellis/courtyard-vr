import Logo from '../assets/courtyard/logo.png'
import LandingPage from '../assets/courtyard/landing-page.jpg'
import BistroBar from '../assets/courtyard/bistro-bar.jpg'
import FrontDesk from '../assets/courtyard/front-desk.jpg'
import Room from '../assets/courtyard/room.jpg'
import Sample from '../assets/courtyard/test-panorama.jpg'

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
      image: Room
    },
    {
      id: 2,
      locationId: 1,
      name: 'Experience B',
      image: Sample
    },
    {
      id: 3,
      locationId: 2,
      name: 'Experience A',
      image: Room
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: Sample
    }
  ],
  brand: {
    name: 'Courtyard by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Courtyard
