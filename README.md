# MouseClickVisuals

The generative circles are represented by a Circle class that has properties for its position, size, color, and lifetime. The lifetime is a value between 0 and 255 that represents the transparency of the circle.

When the mouse is pressed, a new circle is created with a random size and color, and its position is set to the current mouse position. The new circle is then added to an array called circles.

In the draw function, the update and display methods of each circle are called to update its lifetime and draw it on the canvas. The lifetime of each circle is decreased by 5 each frame, which makes it slowly disappear.

///////////

A few changes were made to make the circles flash on and off.

The Circle class now has a flashInterval property that determines how often the circle should flash, and a flashCounter property that keeps track of the current frame. The update method increments the flashCounter each frame, and resets it to 0 when it reaches the flashInterval.

In the display method, the flashCounter is used to determine whether the circle should be drawn in its original color or white. If the flashCounter is less than half of the flashInterval, the circle is drawn in its original color. Otherwise, it is drawn in white.

As before, the display method also checks if the mouse is hovering over the circle, and if it is, the circle is drawn in white with low opacity.
