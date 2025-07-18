import process from 'node:process'
import {setTimeout} from 'node:timers/promises'

// Prevent automatic closing when executing .exe files
process.stdin.resume()

!(async() => {
  await setTimeout(1000)
  console.log(process.version)
})()
