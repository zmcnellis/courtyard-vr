import Logo from '../../assets/fourpoints/logo.png'
import LandingPage from '../../assets/fourpoints/landing-page.jpg'
import WelcomePage from '../../assets/fourpoints/welcome-page.jpg'
import ThankYouPage from '../../assets/fourpoints/thank-you-page.jpg'
import Arrival from '../../assets/fourpoints/arrival.jpg'
import FrontDesk from '../../assets/fourpoints/front-desk.jpg'
import FitnessCenter from '../../assets/fourpoints/fitness-center.jpg'
import RestaurantBar from '../../assets/fourpoints/restaurant-bar.jpg'
import GuestRoom from '../../assets/fourpoints/guest-room.jpg'

const FourPoints = {
  styles: {
    colors: {
      background: '#05374e',
      primary: '#fff',
      secondary: '#10293c',
      arrowLarge: '#9cc4c8',
      arrowSmall: '#9cc4c8',
      button: '#9cc4c8',
      buttonText: '#000'
    },
    fonts: {
      primary: 'TradeGothic',
      fallback: 'Arial'
    },
    env: 'fp'
  },
  home: {
    heading: 'Four Points Guest Experience 360',
    subheading: 'Select a hotel area below',
    image: LandingPage
  },
  welcome: {
    heading: 'Welcome to the Guest Experience 360',
    linkName: 'Continue',
    linkUrl: 'https://www.google.com',
    image: WelcomePage
  },
  thankYou: {
    heading: 'Congratulations',
    text: 'Find your hotel below and press submit to watch a Thank You video.',
    buttonText: 'Submit',
    image: ThankYouPage,
    video: 'https://player.vimeo.com/video/35396305'
  },
  footer: {
    heading: 'View the Four Points Experience Guide on',
    linkName: 'MGS',
    linkUrl: 'https://mgscloud.marriott.com/common/brands/fourpoints/guest-experience/',
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
      name: 'Fitness Center',
      image: FitnessCenter
    },
    {
      id: 4,
      name: 'Restaurant & Bar',
      image: RestaurantBar
    },
    {
      id: 5,
      name: 'Guest Room',
      image: GuestRoom
    },
  ],
  scenes: [
  ],
  brand: {
    name: 'Four Points by Marriott',
    logo: Logo,
    useBoldLinks: false
  }
}

export default FourPoints