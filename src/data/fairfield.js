import Logo from '../assets/fairfield/logo.png'
import LandingPage from '../assets/fairfield/landing-page.jpg'
import FrontDesk from '../assets/fairfield/front-desk.jpg'
import FrontDeskA from '../assets/fairfield/front-desk-1.jpg'
import FrontDeskB from '../assets/fairfield/front-desk-2.jpg'
import Breakfast from '../assets/fairfield/breakfast.jpg'
import BreakfastA from '../assets/fairfield/breakfast-1.jpg'
import BreakfastB from '../assets/fairfield/breakfast-2.jpg'

const Fairfield = {
  styles: {
    colors: {
      background: '#51748b',
      primary: '#fff',
      secondary: '#4a3728',
      arrowLarge: '#c39755',
      arrowSmall: '#c39755'
    },
    fonts: {
      primary: 'ProximaNova',
      fallback: 'Arial'
    }
  },
  home: {
    name: 'Activating the Fairfield Experience',
    image: LandingPage
  },
  footer: {
    heading: 'View the Fairfield Experience Guide on',
    linkName: 'MGS',
    linkUrl: 'https://mgscloud.marriott.com/common/brands/fairfield/guest-experience/',
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
      name: 'Breakfast',
      image: Breakfast
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
      image: BreakfastA
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: BreakfastB
    }
  ],
  brand: {
    name: 'Fairfield by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Fairfield