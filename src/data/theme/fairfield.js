import Logo from '../../assets/fairfield/logo.png'
import LandingPage from '../../assets/fairfield/landing-page.jpg'
import WelcomePage from '../../assets/fairfield/welcome-page.jpg'
import ThankYouPage from '../../assets/fairfield/thank-you-page.jpg'
import FrontDesk from '../../assets/fairfield/front-desk.jpg'
import FrontDeskA from '../../assets/fairfield/front-desk-1.jpg'
import FrontDeskB from '../../assets/fairfield/front-desk-2.jpg'
import Breakfast from '../../assets/fairfield/breakfast.jpg'
import BreakfastA from '../../assets/fairfield/breakfast-1.jpg'
import BreakfastB from '../../assets/fairfield/breakfast-2.jpg'
import Arrival from '../../assets/fairfield/arrival.jpg'
import ArrivalA from '../../assets/fairfield/arrival-1.jpg'
import ArrivalB from '../../assets/fairfield/arrival-2.jpg'
import CornerMarket from '../../assets/fairfield/corner-market.jpg'
import CornerMarketA from '../../assets/fairfield/corner-market-1.jpg'
import CornerMarketB from '../../assets/fairfield/corner-market-2.jpg'
import GuestRoom from '../../assets/fairfield/guest-room.jpg'
import GuestRoomA from '../../assets/fairfield/guest-room-1.jpg'
import GuestRoomB from '../../assets/fairfield/guest-room-2.jpg'

const Fairfield = {
  styles: {
    colors: {
      background: '#51748b',
      primary: '#fff',
      secondary: '#4a3728',
      arrowLarge: '#c39755',
      arrowSmall: '#c39755',
      button: '#c39755',
      buttonText: '#fff'
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
  welcome: {
    heading: 'Welcome to the Guest Experience 360',
    linkName: 'Continue',
    linkUrl: 'https://www.google.com',
    image: WelcomePage
  },
  thankYou: {
    heading: 'Congratulations',
    text: 'Enter your MARSHA code below to watch a Thank You video, then press submit.',
    buttonText: 'Submit',
    image: ThankYouPage,
    video: 'https://player.vimeo.com/video/113248494'
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
      name: 'Corner Market',
      image: CornerMarket
    },
    {
      id: 4,
      name: 'Breakfast',
      image: Breakfast
    },
    {
      id: 5,
      name: 'Guest Room',
      image: GuestRoom
    },
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
      image: CornerMarketA
    },
    {
      id: 6,
      locationId: 3,
      name: 'Experience B',
      image: CornerMarketB
    },
    {
      id: 7,
      locationId: 4,
      name: 'Experience A',
      image: BreakfastA
    },
    {
      id: 8,
      locationId: 4,
      name: 'Experience B',
      image: BreakfastB
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
    name: 'Fairfield by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Fairfield