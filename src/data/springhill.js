import Logo from '../assets/springhill/logo.png'
import LandingPage from '../assets/springhill/landing-page.jpg'
import WelcomePage from '../assets/springhill/welcome-page.jpg'
import ThankYouPage from '../assets/springhill/thank-you-page.jpg'
import FrontDesk from '../assets/springhill/front-desk.jpg'
import FrontDeskA from '../assets/springhill/front-desk-1.jpg'
import FrontDeskB from '../assets/springhill/front-desk-2.jpg'
import EveningExperience from '../assets/springhill/evening-experience.jpg'
import EveningExperienceA from '../assets/springhill/evening-experience-1.jpg'
import EveningExperienceB from '../assets/springhill/evening-experience-2.jpg'

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
    }
  },
  home: {
    name: 'Activating the SpringHill Suites Experience',
    image: LandingPage
  },
  welcome: {
    heading: 'Welcome to the Guest Experience 360',
    linkName: 'Continue',
    linkUrl: 'https://mgscloud.marriott.com/common/brands/springhill-suites/guest-experience/',
    image: WelcomePage
  },
  thankYou: {
    heading: 'Congratulations',
    text: 'Enter your MARSHA code below to watch a Thank You video, then press submit.',
    buttonText: 'Submit',
    image: ThankYouPage,
    video: ''
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
      image: EveningExperienceA
    },
    {
      id: 4,
      locationId: 2,
      name: 'Experience B',
      image: EveningExperienceB
    }
  ],
  brand: {
    name: 'SpringHill Suites by Marriott',
    logo: Logo,
    useBoldLinks: false
  }
}

export default Springhill
