export class Controls {
  constructor(birb, state, canvas) {
    this.canvas = canvas;
    this.state = state;
    document.body.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        if (state.current == state.start) {
          state.current = state.game;
        }
        birb.flap()
      }
    })

    document.body.addEventListener('mousedown', event => {
      this.getMousePosition(this.canvas, event)
    })

  }
  
  getMousePosition(canvas, event) {
    console.log("hejsvejs");
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    if (this.clickedInsideRestartButtonXPos(x) && this.clickedInsideRestartButtonYPos(y) && this.state.current == this.state.over) {
      this.state.current = this.state.start;
    }
  }

  clickedInsideRestartButtonXPos(x) {
    return (x > 320 && x < 402);
  }

  clickedInsideRestartButtonYPos(y) {
    return (y > 241 && y < 259);
  }
}
