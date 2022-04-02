const passos = [
  1,
  4,
  8,
  11
]

const appearance = [{
  uuid: 564,
  classe:{
    category: 'player'
  },
  areaSize:{
    div: 'areaChampion',
    height: 60,
    width: 50
  },
  charSize: {
    div: 'champion',
    height: 60,
    width: 47,
  },
  steps: {
    position:{
      top: 100,
      left: 100,
    },
    step: 14,
    pixel: 4,
    right:{
      [passos[0]]:'0px -155px',
      [passos[1]]:'-51px -155px',
      [passos[2]]:'-100px -155px',
      [passos[3]]:'-152px -155px',
    },
    down:{
      [passos[0]]:'-51px -7px',
      [passos[1]]:'-101px -7px',
      [passos[2]]:'-152px -7px',
      [passos[3]]:'0px -7px',
    },
    left:{
      [passos[0]]:'0px -80px',
      [passos[1]]:'-51px -79px',
      [passos[2]]:'-100px -78px',
      [passos[3]]:'-152px -79px',
    },
    up:{
      [passos[0]]:'-152px -230px',
      [passos[1]]:'0px -230px',
      [passos[2]]:'-51px -230px',
      [passos[3]]:'-99px -230px',
    }
  },
  image: '/chars/champions/champ1.png'
},
]