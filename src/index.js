import niceRandom from 'src/myModule.js'

// Do dev-testing to your module here
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 Dev mode enabled')
  window.niceRandom = niceRandom
}

// Library export
export default niceRandom
