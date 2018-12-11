# react-native-simple-log
I create a simple log to debug the mobile app in iPhone or an android phone.
This project shows how to use the Log component for debugging purpose.

# reason to develop my simple log
If you need to debug your app in a iPhone or an android phone, you can shake the iphone and a menu will pop up and then you can click "Debug JS remotely". The React Native Debugger app will run in your PC. Then you can step through your code in the React Native Debugger.<br>
<br>
However It never works in my iPhone. I always get an error saying that "Connection to http://localhost:8081/debugger-prox?role=client timed out. Are your running node proxy? If you are running on the device, check if you have the right IP address in 'RCTWebSocketExecutor.m'"<br>
<br>
I can not solve this problem no matter what I try. And I believe a lot of people have the same experience. So I create a simple log component to debug the mobile app.<br>

# how to use it?
1, You can find the code of the Log component in file Log.js in the subfolder 'util".<br>
<br>
2, You need to import and add "\<Log /\>" in App.js file. Then all logs you add in any files in your project will be rendered and displayed inside App component.<br>
<br>
3, If you remove "\<Log /\>" from App.js, logs are not displayed on the iPhone/Android phone's screen.<br>
<br>
4, You can also choose to add "\<Log/\>" in any other components where you want to see the logs.<br>
<br>
5, In your code where you want to dump a log, you just need to import Log component and then add the line: Log.out(your_log_content);<br>
<br>
6, Please take a look at Header.js and Data.js, where you will see the code of Log.out().<br> 

# note
1, All the logs are saved in a static array inside Log component in file Log.js. So it will affect the performance of your mobile app. <br>
<br>
2, You need to remove all the Logl.out() calls from all of your codes when you decide to release your mobile app as a product. And do not forget to remove the code of "import Log ....", and also "\<Log /\>" from your component. And also remove Log.js if you like.<br>
<br>
3, All codes are free to use, change and redistribute. But I am not responsible for any damage these codes may bring to your product.<br>
<br>
4, Welcome any comments and feedbacks. Just create issues<br>
