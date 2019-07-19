import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyD-bYgjoN168nfutlnz8h9diULKKS6xX9A',
  authDomain: 'guestexp360.firebaseapp.com',
  databaseURL: 'https://guestexp360.firebaseio.com',
  projectId: 'guestexp360',
  storageBucket: 'guestexp360.appspot.com',
  messagingSenderId: '618068279449',
  appId: '1:618068279449:web:25f385f6c6c75aac'
}

firebase.initializeApp(config)

export default firebase
