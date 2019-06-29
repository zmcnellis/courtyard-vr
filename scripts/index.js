const program = require('commander')
const firebase = require('firebase')

const init = () => {
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
}

const runQuery = (query, env) => {
  const fn = query === 'thankyou' ? getThankYouData : getWelcomeData
  return fn(env)
}

const getWelcomeData = env => {
  const db = firebase.firestore()
  return db
    .collection(`welcome/${env}/properties`)
    .get()
    .then(snapshot => {
      console.log('id, name, updated_at')
      snapshot.forEach(doc => {
        const { name, updated_at } = doc.data()
        console.log(`${doc.id}, ${name}, ${updated_at.toDate()}`)
      })
    })
}

const getThankYouData = env => {
  const db = firebase.firestore()
  return db
    .collection(`thankyou/${env}/properties`)
    .get()
    .then(snapshot => {
      console.log('id, name, updated_at')
      snapshot.forEach(doc => {
        const { name, updated_at } = doc.data()
        console.log(`${doc.id}, ${name}, ${updated_at.toDate()}`)
      })
    })
}

const parseArgs = () => {
  const validEnvironments = ['cy', 'ff', 'shs']
  const validQueries = ['welcome', 'thankyou']
  program
    .option('-d, --debug', 'output extra debugging')
    .option('-e, --environment <type>', validEnvironments, 'cy')
    .option('-q, --query <type>', validQueries, 'welcome')
  program.parse(process.argv)

  if (program.debug) {
    console.log(program.opts())
  }
  if (!validEnvironments.includes(program.environment)) {
    console.error('Invalid environment specified')
    process.exit(0)
  }
  if (!validQueries.includes(program.query)) {
    console.error('Invalid query specified')
    process.exit(0)
  }
}

const main = () => {
  parseArgs()
  init()
  runQuery(program.query, program.environment).then(() => process.exit(0))
}

main()
