import axios from 'axios'

export default async function Fetch (options) {
  try {
    const res = axios(options)
    return res
  } catch (error) {
    console.log(error)
    return error
  }
}
