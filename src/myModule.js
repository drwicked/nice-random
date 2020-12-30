import pascalcase from 'pascalcase'
import {
  places,
  placeDescribe,
  animals,
  adjectives
} from './words'

export const pickArray = (array) => array[Math.floor(Math.random() * array.length)]

const niceRandom = {}

niceRandom.ping = () => {
  return 'pong'
}

niceRandom.place = () => {
  const adj = pickArray(placeDescribe)
  const place = pickArray(places)
  return pascalcase(`${adj} ${place}`)
}

niceRandom.animal = () => {
  const adj = pickArray(adjectives)
  const animal = pickArray(animals)
  return pascalcase(`${adj} ${animal}`)
}

export default niceRandom
