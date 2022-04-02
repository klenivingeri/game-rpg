const controleDeDirecao = ['right']

class Char {
  constructor({uuid, charSize, areaSize, steps, image, classe}) {
    this.charSize = charSize; 
    this.areaSize = areaSize; 
    this.classe = classe;
    this.uuid = uuid;
    this.steps = steps;
    this.image = image;
    this.world = document.getElementById('world');
    
    this.stop;
    this.count = 0;
    this.carrega;
  }
  get carrega(){
    const divAreaSize = document.createElement('div');
    divAreaSize.setAttribute('class', this.areaSize.div);
    divAreaSize.setAttribute('id', this.uuid);
    divAreaSize.style.height = `${this.areaSize.height}px`;
    divAreaSize.style.width = `${this.areaSize.width}px`;
    divAreaSize.style.top = `${this.steps.position.top}px`;
    divAreaSize.style.left = `${this.steps.position.left}px`;
    divAreaSize.style.zIndex = this.steps.position.top + this.areaSize.height
    const divCharSize = document.createElement('div');
    divCharSize.setAttribute('class', this.charSize.div);
    divCharSize.setAttribute('class', this.charSize.div);
    divCharSize.style.height = `${this.charSize.height}px`;
    divCharSize.style.width = `${this.charSize.width}px`;
    divCharSize.style.backgroundImage = `url('${this.image}')`;
    divCharSize.style.backgroundPosition = this.steps.down[1]
    this.areaChampion = divAreaSize
    this.areaChar = divCharSize
    divAreaSize.appendChild(divCharSize)
    this.world.appendChild(divAreaSize)
  }

  up(previousDirection) {
    if (previousDirection !== 'up'){
      this.count = 0
    }
    clearTimeout(this.stop)
    this.move(this.areaChampion, 'top', '-')
    this.count = this.count+1
    this.areaChar.style.backgroundPosition = this.steps.up[this.count]

    if(this.count == this.steps.step){
      this.count = 0
    }
    
    if(this.classe.category == 'player'){
      this.stop = setTimeout(() => this.moveStop('up'), 500);
    }
  }
  
  left(previousDirection) {
    if (previousDirection !== 'left'){
      this.count = 0
    }
    clearTimeout(this.stop)
    this.move(this.areaChampion, 'left', '-')
    this.count = this.count+1
    this.areaChar.style.backgroundPosition = this.steps.left[this.count]
    if(this.count == this.steps.step){
      this.count = 0
    }
    if(this.classe.category == 'player'){
      this.stop = setTimeout(() => this.moveStop('left'), 500);
    }
  }
  
  right(previousDirection) {
    if (previousDirection !== 'right'){
      this.count = 0
    }
    clearTimeout(this.stop)
    this.move(this.areaChampion, 'left', '+')
    this.count = this.count+1
    this.areaChar.style.backgroundPosition = this.steps.right[this.count]

    if(this.count == this.steps.step){
      this.count = 0
    }
    if(this.classe.category == 'player'){
      this.stop = setTimeout(() => this.moveStop('right'), 500);  
    }
  }
  
  down(previousDirection) {
    if (previousDirection !== 'down'){
      this.count = 0
    }
    clearTimeout(this.stop)
    this.move(this.areaChampion, 'top', '+')
    this.count = this.count+1
    this.areaChar.style.backgroundPosition = this.steps.down[this.count]
    
    if(this.count == this.steps.step){
      this.count = 0
    }
    if(this.classe.category == 'player'){
      this.stop = setTimeout(() => this.moveStop('down'), 500);
    }
  }

  move(champ, style, move){
    let prop = document.defaultView.getComputedStyle(champ, null)[style];
    let pixelSteps = parseInt(prop.replace('px', ''))
    
    if(move == '-'){
      
      let value = pixelSteps - this.steps.pixel
      this.areaChampion.style[style] = `${value}px`
      if(style == 'top'){  
        this.areaChampion.style.zIndex = value + this.areaSize.height
      }
    }  else  {
      let value = pixelSteps + this.steps.pixel
      this.areaChampion.style[style] = `${value}px`
       if(style == 'top'){  
      this.areaChampion.style.zIndex = value + this.areaSize.height
      }
    }
    
    let positionMap = parseInt(this.areaChampion.style.top.replace('px', ''))

  }
  
  moveStop(previousDirection){
      clearTimeout(this.stop)
      switch(previousDirection){
      case 'up':
        this.areaChar.style.backgroundPosition = this.steps.up[4]
        break;
      case 'left':
        this.areaChar.style.backgroundPosition = this.steps.left[1]
        break;
      case 'right':
        this.areaChar.style.backgroundPosition = this.steps.right[1]
        break;
      case 'down':
        this.areaChar.style.backgroundPosition = this.steps.down[4]
        break;
      }
    this.count = 0
  }
}


/*            ------ Execução ------           */
const champ = new Char(appearance[0]);
const monster = new Char(appearanceMonsters[0]);
const monster1 = new Char(appearanceMonsters[1]);
const monster2 = new Char(appearanceMonsters[2]);
const monster3 = new Char(appearanceMonsters[3]);
const monster4 = new Char(appearanceMonsters[4]);
const monster5 = new Char(appearanceMonsters[5]);

document.onkeydown = function(key){
  const {
    keyCode
  } = key

console.log(keyCode)
  if(keyCode == 38){
    controleDeDirecao.push('up')
    champ.up(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 37){
    controleDeDirecao.push('left')
    champ.left(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 39){
    controleDeDirecao.push('right')
    champ.right(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 40){
    controleDeDirecao.push('down')
    champ.down(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  
  if(keyCode == 87){
    controleDeDirecao.push('up')
    monster.up(controleDeDirecao[0])
    monster1.up(controleDeDirecao[0])
    monster2.up(controleDeDirecao[0])
    monster3.up(controleDeDirecao[0])
    monster4.up(controleDeDirecao[0])
    monster5.up(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 65){
    controleDeDirecao.push('left')
    monster.left(controleDeDirecao[0])
    monster1.left(controleDeDirecao[0])
    monster2.left(controleDeDirecao[0])
    monster3.left(controleDeDirecao[0])
    monster4.left(controleDeDirecao[0])
    monster5.left(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 68){
    controleDeDirecao.push('right')
    monster.right(controleDeDirecao[0])
    monster1.right(controleDeDirecao[0])
    monster2.right(controleDeDirecao[0])
    monster3.right(controleDeDirecao[0])
    monster4.right(controleDeDirecao[0])
    monster5.right(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  if(keyCode == 83){
    controleDeDirecao.push('down')
    monster.down(controleDeDirecao[0])
    monster1.down(controleDeDirecao[0])
    monster2.down(controleDeDirecao[0])
    monster3.down(controleDeDirecao[0])
    monster4.down(controleDeDirecao[0])
    monster5.down(controleDeDirecao[0])
    controleDeDirecao.shift()
  }
  
  // if(keyCode == 38 || keyCode == 87){
  //   controleDeDirecao.push('up')
  //   champ.up(controleDeDirecao.shift())
  // }
  // if(keyCode == 37 || keyCode == 65){
  //   controleDeDirecao.push('left')
  //   champ.left(controleDeDirecao.shift())
  // }
  // if(keyCode == 39 || keyCode == 68){
  //   controleDeDirecao.push('right')
  //   champ.right(controleDeDirecao.shift())
  // }
  // if(keyCode == 40 || keyCode == 83){
  //   controleDeDirecao.push('down')
  //   champ.down(controleDeDirecao.shift())
  // }
}


      // var altura = window.screen.height;
      // var largura = window.screen.width;
      // console.log(altura);
      // console.log(largura);