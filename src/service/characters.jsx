import CryptoJS from "crypto-js"

  const time_stamp = new Date().getTime()
  const private_api_key = '508136543e2f90a6693939814c9253b640f52a60'
  const public_api_key= 'ca795263121c7e0c813382e27ccf4628'
  const name = 'spiderman'

  const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString()

  export const reqCharacters = async(page) =>{
  const resp = await fetch (`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}&offset=${page}&name=${name}`)
  const {data} = await resp.json()
    console.log(data)
  return data

}

