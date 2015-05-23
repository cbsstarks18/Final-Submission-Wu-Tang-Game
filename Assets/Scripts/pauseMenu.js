#pragma strict
 var call = false; // will be true when clicked
var button : GameObject;
static var ShowGUI = true;
var isPause = false;
var MainMenu : Rect= Rect(10, 20, 300,200);
function Start () {
ShowGUI = true;
}

function Update () {



if( Input.GetKeyDown(KeyCode.Escape))
{

isPause = !isPause;
if(isPause)
Time.timeScale = 0;

else Time.timeScale = 1;
}

//The 'ShowGUI' enables you do either view or not view the actual GUI
 
if(ShowGUI == true ){
 
guiTexture.enabled = true;
 
}else{
 
guiTexture.enabled = false;
 
}
 
if(ShowGUI == true){
 
if(Input.touchCount > 0 ){
 
for(var i : int = 0; i < Input.touchCount; i++){
 
var touch : Touch = Input.GetTouch(i);
 
if(touch.phase == TouchPhase.Began && // if touched on gui texture
guiTexture.HitTest(touch.position)){
 
call = true; // 
 DoAction ();  // if touched will call function to execute things you want
}
}
}
else{
 call = false;
//Stops Action
// thing that when finger or mouse released will be stoped, if you will
// leave this emty, it wont stop action, like you main character wont stop runing.
}
}
}

function OnGUI()
{
if (isPause)

GUI.Window(0, MainMenu, TheMainMenu, "Pause Menu");
}

function TheMainMenu(){
if(GUILayout.Button("Resume")){
Time.timeScale = 1;
isPause = false;

}
if(GUILayout.Button("Main Menu")){
Application.LoadLevel("menu1");
}

if(GUILayout.Button("Restart")){
Application.LoadLevel(Application.loadedLevel);
}

if(GUILayout.Button("Quit")){
Application.Quit();
}
}


function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
 call = true; // will set call true to hellp fully  execute all task's you want
 DoAction (); // if pressed will call function to execute things you want
 }
 else {
 call = false;
 }
}




function DoAction (){  
if (call == true){  

Time.timeScale = 0;
isPause = true;
//button.active = false;
button.guiText.enabled = false;
}
}