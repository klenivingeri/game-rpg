const characterLocationOnMap = [
  {
    uuid:1,
    top: 10,
    left: 10
  },
  {
    uuid:2,
    top: 20,
    left: 20
  },
  {
    uuid:3,
    top: 30,
    left: 30
  },
]
class World{
  constructor({uuid, areaSize, divPositon}){
    this.uuid = uuid
    this.areaSize = areaSize
    this.divPosition = divPositon
    this.areaControl()
  }
  areaControl(){

  }
}

const world = new World(
  4,{
    height:40, 
    width:40
  },{
    uuid:4,
    top: 30,
    left: 30
  })
