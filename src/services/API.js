import axios from 'axios'

const response = await axios.get('https://dog.ceo/api/breeds/list/all')
console.log(response)
