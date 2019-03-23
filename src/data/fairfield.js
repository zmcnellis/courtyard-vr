import Logo from '../assets/fairfield/logo.png'
import LandingPage from '../assets/fairfield/landing-page.jpg'
import Breakfast from '../assets/fairfield/breakfast.jpg'
import FrontDesk from '../assets/fairfield/front-desk.jpg'
import Room from '../assets/fairfield/room.jpg'
import Sample from '../assets/fairfield/test-panorama.jpg'

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
    linkUrl: 'https://www.fairfield.marriott.com/',
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
    name: 'Fairfield by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Fairfield