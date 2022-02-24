function HudFontRenderer(fontImage, fontMap, charWidth, charHeight, letterSpacing) {
  this.charHeight = charHeight;
  this.charWidth = charWidth;
  this.fontMap = fontMap;
  this.letterSpacing = letterSpacing;

  this.renderText = function(context, text, x, y) {
    this.x = x;
    this.y = y;
    var b = 0;
    var c = 0;
    var letterSpace = x;
    this.text = text;
    while (c < text.length) {
      if (b < 25) {
        if (text[c] == " ") {
          c++;
          letterSpace += canvaswidth/60;
        }
        if (text[c] == fontMap[b]) { //iterate through text to find position in fontMap
          c++;
          letterSpace += canvaswidth/45;
          context.drawImage(fontImage, b * charWidth, 0, charWidth, charHeight, letterSpace, y, canvaswidth / 42, canvasheight / 15);
          b = 0;
        } else {
          b++;
        }
      }
      if (b >= 25 && b <= 51) {
        if (text[c] == " ") {
          c++;
          letterSpace += canvaswidth/60;
        }
        if (text[c] == fontMap[b]) { //iterate through text to find position in fontMap
          c++;
          letterSpace += canvaswidth/45;
          context.drawImage(fontImage, (b - 26) * charWidth, charHeight, charWidth, charHeight, letterSpace, y, canvaswidth / 42, canvasheight / 15);
          b = 0;
        } else {
          b++;
        }
      }
      if (b > 51 && b < 62) {
        if (text[c] == " ") {
          c++;
          letterSpace += 20;
        }
        if (text[c] == fontMap[b]) { //iterate through text to find position in fontMap
          c++;
          letterSpace += 50;
          context.drawImage(fontImage, (b - 52) * charWidth, charHeight * 2, charWidth, charHeight, letterSpace, y, canvaswidth / 42, canvasheight / 15);
          b = 0;
        } else {
          b++;
        }
      }
      if (b >= 62) {
        if (text[c] == " ") {
          c++;
          letterSpace += canvaswidth/60;
        }
        if (text[c] == fontMap[b]) { //iterate through text to find position in fontMap
          c++;
          letterSpace += canvaswidth/45;
          context.drawImage(fontImage,(b-62)*7 + 89 , charHeight * 2 + 1, 7, charHeight, letterSpace, y, canvaswidth / 42, canvasheight / 15);
          b = 0;
        } else {
          b++;
        }
      }
    }
  }
}
