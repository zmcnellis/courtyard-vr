import Logo from '../assets/springhill/logo.png'
import LandingPage from '../assets/springhill/landing-page.jpg'
import EveningExperience from '../assets/springhill/evening-experience.jpg'
import FrontDesk from '../assets/springhill/front-desk.jpg'
import Room from '../assets/springhill/room.jpg'
import Sample from '../assets/springhill/test-panorama.jpg'

const Springhill = {
  styles: {
    colors: {
      background: '#3e4750',
      primary: '#d1d1d1',
      secondary: '#3e4750',
      arrowLarge: '#0f807f',
      arrowSmall: '#0f807f'
    },
    fonts: {
      primary: 'ClanOT',
      fallback: 'Arial'
    }
  },
  home: {
    name: 'Activating the SpringHill Suites Experience',
    image: LandingPage
  },
  footer: {
    heading: 'View the SpringHill Suites Experience Guide on',
    linkName: 'MGS',
    linkUrl: 'https://mgscloud.marriott.com/common/brands/springhill-suites/guest-experience/',
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
      name: 'Evening Experience',
      image: EveningExperience
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
    name: 'SpringHill Suites by Marriott',
    logo: Logo,
    useBoldLinks: false
  }
}

export default Springhill
