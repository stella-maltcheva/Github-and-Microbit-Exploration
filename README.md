# Github-and-Microbit-Exploration
<p><b>Objective:</b>
To create a game where there are two LEDs, which tunr on randomly. The player must press the corresponding button for the LED in time in order to score a point and turn it off. This repeats until the player doesn't press the right button on time, and then the microbit displays a frownie face and the vibrator vibrates. Our goal is throughout the process is to better understand how to use Microbit and sensors as well as create functions.</p>

<p><b>How To Play:</b>
<ol>
  <li>Watch the LEDs and how they turn on, the red LED is on the left and the yellow one is on the right.</li>
  <li>When the red LED blinks, you must press down on button A as quickly as possible to turn it off and score a point. If the yellow one blinks, quickly press the B button to turn it off and score a point</li>
  <li>If you don't press the proper button on time, the Micro bit will display a frownie face and the vibrator will start vibrating. Do not worry, all that happens is that your score resets. Try again and press the buttons on time, the vibrator will stop vibrating and the score will start to go up again.</li>
  <li>Have fun!</li>
</ol></p>


Materials
I used the Grove Inventor Kit for micro:bit. The specific materials I used are displayed below.
Screen Shot 2022-12-12 at 9 14 53 PM
BBC micro:bit
Grove Shield for micro:bit
Grove - Universal 4 Pin Unbuckled Cable
Grove - Moisture Sensor
Grove - Vibration Motor
Steps
Create a function to initiate vibration.
Screen Shot 2022-12-12 at 8 56 05 PM
When the pin 1 is set to 1, the vibration motor will turn on. The pause ensures that the vibration motor will vibrate for an apppropriate amount of time. Pin 1 is set back to 0 to turn the vibration motor off.
In a forever loop, create a variable that reads the mositure sensor, displays the moisture number on the screen of the microbit, and calls vibration when wet.
Screen Shot 2022-12-12 at 8 56 14 PM
When the mositure sensor was completely submerged in water, it displayed a moisture level in the high 40s to high 50s, so I called my vibrations in a 'while' loop accordingly. I had to 'break' my code in the while loop so my code would continuosly recieve another input from my moisture sensor.
This is the resultant code in JavaScript:
  let moisture = 0
function vibrate () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
basic.forever(function () {
    moisture = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 100)
    basic.showNumber(Math.round(moisture))
    basic.clearScreen()
    while (40 <= moisture && moisture <= 65) {
        vibrate()
        break;
    }
})
Or see both block and JavaScript code here!
Next, wire the components.
Input the micro:bit into the Grove Shield. Connect Pin 0 (on the Grove Shield) to the Moisture Sensor using the Universal 4 Pin Unbuckled Cables. Then, in the same way, connect Pin 1 to the Vibration Motor. See image below:
Screen Shot 2022-12-12 at 9 35 09 PM
Finished!
As the video of the final product is too large to be shown here, the video is instead included in the repository as 'SubmergeAndShake.MOV'.
