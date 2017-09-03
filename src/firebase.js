import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyDO4uJPwzsEfgj5zLa_Hlo8nyqh-_v3xLI',
  authDomain: 'blog-92f2f.firebaseapp.com',
  databaseURL: 'https://blog-92f2f.firebaseio.com',
  projectId: 'blog-92f2f',
  storageBucket: 'blog-92f2f.appspot.com',
  messagingSenderId: '190308974601'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
