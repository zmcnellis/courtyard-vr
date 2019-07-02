import Logo from '../../assets/courtyard/logo.png'
import LandingPage from '../../assets/courtyard/landing-page.jpg'
import WelcomePage from '../../assets/courtyard/welcome-page.jpg'
import ThankYouPage from '../../assets/courtyard/thank-you-page.jpg'
import FrontDesk from '../../assets/courtyard/front-desk.jpg'
import FrontDeskA from '../../assets/courtyard/front-desk-1.jpg'
import FrontDeskB from '../../assets/courtyard/front-desk-2.jpg'
import BistroBar from '../../assets/courtyard/bistro-bar.jpg'
import BistroBarA from '../../assets/courtyard/bistro-bar-1.jpg'
import BistroBarB from '../../assets/courtyard/bistro-bar-2.jpg'
import Arrival from '../../assets/courtyard/arrival.jpg'
import ArrivalA from '../../assets/courtyard/arrival-1.jpg'
import ArrivalB from '../../assets/courtyard/arrival-2.jpg'
import Bistro from '../../assets/courtyard/bistro.jpg'
import BistroA from '../../assets/courtyard/bistro-1.jpg'
import BistroB from '../../assets/courtyard/bistro-2.jpg'
import GuestRoom from '../../assets/courtyard/guest-room.jpg'
import GuestRoomA from '../../assets/courtyard/guest-room-1.jpg'
import GuestRoomB from '../../assets/courtyard/guest-room-2.jpg'

const Courtyard = {
  styles: {
    colors: {
      background: '#555759',
      primary: '#d99a29',
      secondary: '#797B7C',
      arrowLarge: '#797B7C',
      arrowSmall: '#797B7C',
      button: '#d99a29',
      buttonText: '#fff'
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
    video: 'https://player.vimeo.com/video/26584759'
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
      name: 'Bistro',
      image: Bistro
    },
    {
      id: 4,
      name: 'Bistro Bar',
      image: BistroBar
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
      image: BistroA
    },
    {
      id: 6,
      locationId: 3,
      name: 'Experience B',
      image: BistroB
    },
    {
      id: 7,
      locationId: 4,
      name: 'Experience A',
      image: BistroBarA
    },
    {
      id: 8,
      locationId: 4,
      name: 'Experience B',
      image: BistroBarB
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
    }
  ],
  brand: {
    name: 'Courtyard by Marriott',
    logo: Logo,
    useBoldLinks: true
  }
}

export default Courtyard
