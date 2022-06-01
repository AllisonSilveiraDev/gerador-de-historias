const customName = document.getElementById('customname')
const randomize = document.querySelector('.randomize')
const story = document.querySelector('.story')

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}
const storyText =
  'Estava 94 fahrenheit lá fora, então :insertx: foi dar uma volta. Quando eles chegaram a :inserty:, eles olharam horrorizados por alguns momentos, então :insertz:. Bob viu tudo, mas não ficou surpreso — :insertx: pesa 300 libras, e era um dia quente.'

const insertX = ['Willy o duende', 'Paizão', 'Papai Noel']

const insertY = ['a sopa da cozinha', 'Disneylandia', 'a Casa Branca']

const insertZ = [
  'queimado espontaneamente',
  'derreteu em uma poça na calçada',
  'se transformou em uma lesma e rastejou para longe'
]

randomize.addEventListener('click', result)

function result() {
  let newStory = storyText

  const xItem = randomValueFromArray(insertX)
  const yItem = randomValueFromArray(insertY)
  const zItem = randomValueFromArray(insertZ)

  newStory = newStory.replaceAll(':insertx:', xItem)
  newStory = newStory.replaceAll(':inserty:', yItem)
  newStory = newStory.replaceAll(':insertz:', zItem)

  if (customName.value !== 'Bob') {
    const name = customName.value
    newStory = newStory.replaceAll('Bob', name)
  }

  if (document.getElementById('br').checked) {
    const weight = `${Math.round(300 * 0.0714286)} Kg`
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} centigrados`

    newStory = newStory.replaceAll('94 fahrenheit', temperature)
    newStory = newStory.replaceAll('300 libras', weight)
  }

  story.textContent = newStory
  story.style.visibility = 'visible'
}
