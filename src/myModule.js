import camelCase from 'camelcase'
import {
  places,
  placeDescribe,
  animals,
  adjectives
} from './words'

export const pickArray = (array) => array[Math.floor(Math.random() * array.length)]

const randomPlace = () => {
  const adj = pickArray(placeDescribe)
  const place = pickArray(places)
  return camelCase(`${adj} ${place}`)
}

const randomAnimal = () => {
  const adj = pickArray(adjectives)
  const animal = pickArray(animals)
  return camelCase(`${adj} ${animal}`)
}

export default { randomPlace, randomAnimal }
