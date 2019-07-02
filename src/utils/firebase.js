import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyD_NPKrtZOnriZBv2RLczNu8cMDFFwxDNo',
  authDomain: 'marriott360-staging.firebaseapp.com',
  databaseURL: 'https://marriott360-staging.firebaseio.com',
  projectId: 'marriott360-staging',
  storageBucket: 'marriott360-staging.appspot.com',
  messagingSenderId: '1096321921949',
  appId: '1:1096321921949:web:fe20055053965c86'
}

firebase.initializeApp(config)

export default firebase
