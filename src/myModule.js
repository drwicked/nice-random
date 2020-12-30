import camelCase from 'camelcase'
import {
  places,
  placeDescribe,
  animals,
  adjectives
} from './words'

export const pickArray = (array) => array[Math.floor(Math.random() * array.length)]

export const randomPlace = () => {
  const adj = pickArray(placeDescribe)
  const place = pickArray(places)
  return camelCase(`${adj} ${place}`)
}

export const randomAnimal = () => {
  const adj = pickArray(adjectives)
  const animal = pickArray(animals)
  return camelCase(`${adj} ${animal}`)
}
