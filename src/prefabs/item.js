//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Item extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, image) {
    super(game, x, y, image);

    //set size
    this.width = 64;
    this.height = 64;
    //this.scale.y = Math.abs(this.scale.x);

    this.inputEnabled = true;

    this.events.onInputDown.add(this.select);


    //this.anchor.setTo(0.5, 0.5);

    //set up click listeners
    //this.game.input.onDown.add(this.click, this);


  }

  update(){
    //this.x = this.game.input.mousePointer.x;
    //this.y = this.game.input.mousePointer.y;
  }

  select(){
    this.selected = true;
  }

}

export default Item;
