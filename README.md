# Github-and-Microbit-Exploration
<p><b>Objective:</b>
To create a game where there are two LEDs, which turn on randomly. The player must press the corresponding button for the LED in time in order to score a point and turn it off. This repeats until the player doesn't press the right button on time, and then the microbit displays a frownie face and the vibrator vibrates. Our goal is throughout the process is to better understand how to use Microbit and sensors as well as create functions.</p>

<p><b>How To Play:</b>
<ol>
  <li>Watch the LEDs and how they turn on, the red LED is on the left and the yellow one is on the right.</li>
  <li>When the red LED blinks, you must press down on button A as quickly as possible to turn it off and score a point. If the yellow one blinks, quickly press the B button to turn it off and score a point</li>
  <li>If you don't press the proper button on time, the Micro bit will display a frownie face and the vibrator will start vibrating. Do not worry, all that happens is that your score resets. Try again and press the buttons on time, the vibrator will stop vibrating and the score will start to go up again.</li>
  <li>Have fun!</li>
</ol></p>


<p><b>Materials:</b></p>

<p>I used the Grove Inventor Kit for micro:bit. The specific materials I used are displayed below:
<ul>
<li>Microbit</li>
<li>Microbit Innovation Board</li>
<li>2 Grove LEDs</li>
<li>Grove Vibration Motor</li>
<li>Micro-USB cable</li>
</ul></p>


<p><b>Steps for wiring:</b>
<ol>
  <li>Plug the Microbit into the Innovation Bord</li>
  <li>Assemble each of the two LEDs using the parts provided in their ziploc</li>
  <li>Assemble the Vibration motor using the parts provided in the Grove vibration motor ziploc</li>
  <li>Plug the red LED into Pin 1 of the Innovation Board, the yellow one into Pin 13 and the vibration motor into Pin 2</li>
  <li>connect the Microbit to your computer by using thr Micro-USB cable</li>
  <li>All done!</li>
</ol></p>

<p><b>Block code with comments:</b></p>
<ul>
  <li>Create the functions:</li>

  ![Screenshot 2022-12-20 151515](https://user-images.githubusercontent.com/113818647/208784308-305eba2d-9a89-4e3f-8a6a-1edcf7f9ae91.png)
  
  <li>Defining variables at the start and creating a while loop. (This makes sure the variables aren't defined more than once):</li>
  
  ![Screenshot 2022-12-20 152424](https://user-images.githubusercontent.com/113818647/208785338-fce0a65f-14bd-4c57-9eec-052117bdb99c.png)
  
  <li>Use a random selector to randomly turn on an LED:</li>
  
  ![Screenshot 2022-12-20 152721](https://user-images.githubusercontent.com/113818647/208785558-008b5927-f91c-412d-a3af-70107f2fd9c5.png)

  <li>If the player doesn't press button A on time:</li>
  
  ![Screenshot 2022-12-20 152920](https://user-images.githubusercontent.com/113818647/208785725-f9106d83-aa4f-4f87-8cd7-926064eb3679.png)

  <li>Add 'else' to the if statement. If the player does player presses button A on time:</li>
  
  ![Screenshot 2022-12-20 153132](https://user-images.githubusercontent.com/113818647/208785993-48c0db57-f9f6-4f16-9ef8-6a91afdcd845.png)
  
  <li>Repeat the same code for the other lightbulb and pin:</li>
  
  ![Screenshot 2022-12-20 153325](https://user-images.githubusercontent.com/113818647/208786167-fc6de1da-009a-461f-ac57-3d90e39598da.png)

  <li>All done! Enjoy:)</li>
  
  ![Screenshot 2022-12-20 153500](https://user-images.githubusercontent.com/113818647/208786327-f6ee1c88-2dec-47f5-ac97-b101233d4ec4.png)

</ul>

<p><b>Ressources</b>
  <ul>
    <li>https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
      https://micromaker.co.uk/innovation-lessons/</li>
    <li>https://github.com/otsop110/microbit-projects</li>
</p>



 

  

