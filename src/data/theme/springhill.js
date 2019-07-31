import Logo from '../../assets/springhill/logo.png'
import LandingPage from '../../assets/springhill/landing-page.jpg'
import WelcomePage from '../../assets/springhill/welcome-page.jpg'
import ThankYouPage from '../../assets/springhill/thank-you-page.jpg'
import FrontDesk from '../../assets/springhill/front-desk.jpg'
import FrontDeskA from '../../assets/springhill/front-desk-1.jpg'
import FrontDeskB from '../../assets/springhill/front-desk-2.jpg'
import EveningExperience from '../../assets/springhill/evening-experience.jpg'
import EveningExperienceA from '../../assets/springhill/evening-experience-1.jpg'
import EveningExperienceB from '../../assets/springhill/evening-experience-2.jpg'
import Arrival from '../../assets/springhill/arrival.jpg'
import ArrivalA from '../../assets/springhill/arrival-1.jpg'
import ArrivalB from '../../assets/springhill/arrival-2.jpg'
import BreakfastExperience from '../../assets/springhill/breakfast-experience.jpg'
import BreakfastExperienceA from '../../assets/springhill/breakfast-experience-1.jpg'
import BreakfastExperienceB from '../../assets/springhill/breakfast-experience-2.jpg'
import GuestRoom from '../../assets/springhill/guest-room.jpg'
import GuestRoomA from '../../assets/springhill/guest-room-1.jpg'
import GuestRoomB from '../../assets/springhill/guest-room-2.jpg'

const Springhill = {
  styles: {
    colors: {
      background: '#3e4750',
      primary: '#d1d1d1',
      secondary: '#3e4750',
      arrowLarge: '#0f807f',
      arrowSmall: '#0f807f',
      button: '#0f807f',
      buttonText: '#fff'
    },
    fonts: {
      primary: 'ClanOT',
      fallback: 'Arial'
    },
    env: 'shs'
  },
  home: {
    heading: 'SpringHill Suites Guest Experience 360°',
    subheading: 'Select a hotel area below',
    image: LandingPage
  },
  welcome: {
    heading: 'Welcome to the Guest Experience 360°',
    linkName: 'Let’s Get Started',
    linkUrl: 'https://www.google.com',
    image: WelcomePage
  },
  thankYou: {
    text: 'Find your hotel below and press submit for a Thank You message to share with your team.',
    buttonText: 'Submit',
    image: ThankYouPage,
    video: 'https://player.vimeo.com/video/351000120'
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
      name: 'Arrival',
      image: Arrival
    },
    {
      id: 2,
      name: 'Front Desk',
      image: FrontDesk,
    },
    {
      id: 3,
      name: 'Breakfast Experience',
      image: BreakfastExperience
    },
    {
      id: 4,
      name: 'Evening Experience',
      image: EveningExperience
    },
    {
      id: 5,
      name: 'Guest Room',
      image: GuestRoom
    }
  ],
  scenes: [
    {
      id: 1,
      locationId: 1,
      name: 'Experience A',
      image: ArrivalA
    },
    {
      id: 2,
      locationId: 1,
      name: 'Experience B',
      image: ArrivalB
    },
    {
      id: 3,
      locationId: 2,
      name: 'Experience A',
      image: FrontDeskA
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: FrontDeskB
    },
    {
      id: 5,
      locationId: 3,
      name: 'Experience A',
      image: BreakfastExperienceA
    },
    {
      id: 6,
      locationId: 3,
      name: 'Experience B',
      image: BreakfastExperienceB
    },
    {
      id: 7,
      locationId: 4,
      name: 'Experience A',
      image: EveningExperienceA
    },
    {
      id: 8,
      locationId: 4,
      name: 'Experience B',
      image: EveningExperienceB
    },
    {
      id: 9,
      locationId: 5,
      name: 'Experience A',
      image: GuestRoomA
    },
    {
      id: 10,
      locationId: 5,
      name: 'Experience B',
      image: GuestRoomB
    },
  ],
  brand: {
    name: 'SpringHill Suites by Marriott',
    logo: Logo,
    useBoldLinks: false
  }
}

export default Springhill
