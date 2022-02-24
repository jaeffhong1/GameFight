function Input() {
    self = this;
    self.isLeftPressed = false;
    self.isRightPressed = false;
    self.isUpPressed = false;
    self.isDownPressed = false;
    self.isZPressed = false;
    self.isXPressed = true;


    function handleKeyEvent(event, isKeyDown) {
        if(event.keyCode == 37) {
            self.isLeftPressed = isKeyDown;
        }

        else if(event.keyCode == 39) {
            self.isRightPressed = isKeyDown;
        }

        else if(event.keyCode == 38) {
            self.isUpPressed = isKeyDown;
        }

        else if(event.keyCode == 40) {
            self.isDownPressed = isKeyDown;
        }

        else if(event.keyCode == 90) {
            self.isZPressed = isKeyDown;
        }
        else if(event.keyCode == 88) {
            self.isXPressed = isKeyDown;
        }
        else if(event.keyCode == 71) {
            self.isGPressed = isKeyDown;
        }
    }

    document.addEventListener("keydown", function(event) {handleKeyEvent(event, true)});
    //to make sure the object does not keep moving as it checks if the key has been released
    document.addEventListener("keyup", function(event) {handleKeyEvent(event, false)});
}
