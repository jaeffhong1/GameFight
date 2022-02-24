function DialogPane() {
  var text = ["PAUSED" , "Hello player, press Z on", "keyboard to move to next", "dialogue.G for god mode.", "There is a boss and you must", "defeat it to save all people", "Most of its skills are", "unknown,but dark coloured" ,"objects probably do damage", "However,there is purple", "object that will appear, ","destroy it with Z GOOD LUCK", "You Defeated The Boss", "CONGRATULATIONS", "You Died", "God Mode Activated"];
  this.renderToHudPause = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[0], canvaswidth/2 - canvaswidth/10, canvasheight/2);
  }

  this.renderToHudDialogue1 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[1], canvaswidth/2 - canvaswidth/3, canvasheight/1.35);
  }
  this.renderToHudDialogue1_2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[2], canvaswidth/2 - canvaswidth/3, canvasheight/1.23);
  }
  this.renderToHudDialogue1_3 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[3], canvaswidth/2 - canvaswidth/3, canvasheight/1.12);
  }

  this.renderToHudDialogue2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[4], canvaswidth/2 - canvaswidth/3, canvasheight/1.35);
  }
  this.renderToHudDialogue2_2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[5], canvaswidth/2 - canvaswidth/3, canvasheight/1.23);
  }

  this.renderToHudDialogue3 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[6], canvaswidth/2 - canvaswidth/3, canvasheight/1.35);
  }
  this.renderToHudDialogue3_2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[7], canvaswidth/2 - canvaswidth/3, canvasheight/1.23);
  }
  this.renderToHudDialogue3_3 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[8], canvaswidth/2 - canvaswidth/3, canvasheight/1.12);
  }

  this.renderToHudDialogue4 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[9], canvaswidth/2 - canvaswidth/3, canvasheight/1.35);
  }
  this.renderToHudDialogue4_2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[10], canvaswidth/2 - canvaswidth/3, canvasheight/1.23);
  }
  this.renderToHudDialogue4_3 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[11], canvaswidth/2 - canvaswidth/3, canvasheight/1.12);
  }



  this.renderToHudEndScreen = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[12], canvaswidth/2 - canvaswidth/5, canvasheight/3);
  }
  this.renderToHudEndScreen2 = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[13], canvaswidth/2 - canvaswidth/7, canvasheight/2);
  }

  this.renderToHudDead = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[14], canvaswidth/2 - canvaswidth/7, canvasheight/2);
  }

  this.renderToHudGodMode = function(ctx, fontRenderer) {
    fontRenderer.renderText(ctx, text[15], canvaswidth/2 - canvaswidth/10, canvasheight/15);
  }
}
