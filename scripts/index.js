const program = require('commander')
const firebase = require('firebase')

/**********************************************************
 * ------------------------ SCHEMA ------------------------
 * {
 *  thankyou: {
 *    cy: {
 *      properties: {
 *        [id]: {
 *          name: "string",
 *          updated_at: "timestamp"
 *        }
 *      }
 *    },
 *    ff:  { ... },
 *    fp:  { ... },
 *    shs: { ... }
 *  }
 * }
 * ------------------------ SCHEMA ------------------------
 **********************************************************/

const init = () => {
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
}

const runQuery = (query, env) => {
  const fn = query === 'get' ? getThankYouData : deleteThankYouData
  return fn(env)
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

const deleteThankYouData = env => {
  const db = firebase.firestore()
  return db
    .collection(`thankyou/${env}/properties`)
    .get()
    .then(snapshot => {
      const batch = db.batch()
      snapshot.forEach(doc => {
        batch.delete(doc.ref)
      })
      return batch.commit().then(() => snapshot.size)
    })
    .then(deletedCount => {
      console.log(`Deleted ${deletedCount} record(s)!`)
    })
}

const parseArgs = () => {
  const validEnvironments = ['cy', 'ff', 'fp', 'shs']
  const validQueries = ['get', 'delete']
  program
    .option('-d, --debug', 'output extra debugging')
    .option('-e, --environment <type>', validEnvironments, 'cy')
    .option('-q, --query <type>', validQueries, 'get')
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
