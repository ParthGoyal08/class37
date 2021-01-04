class Form {
  constructor() {
this.title = createElement("h2")
this.button = createButton("Play")
this.greeting = createElement("h3")
this.input = createInput("Name")
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2,0);
    
    this.input.position(displayWidth/2,displayHeight/2-100);
    this.button.position(displayWidth/2,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);

      this.greeting.html("Hello" + player.name)
      this.greeting.position(displayWidth/2,displayHeight/2)
    });

  }
  hide(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();  
  }
}
