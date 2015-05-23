#pragma strict
var isPause = false;
var MainMenu : Rect= Rect(10, 20, 300,200);
function Start () {

}

function Update () {
if (Application.platform == RuntimePlatform.Android)
{
if( Input.GetKeyDown(KeyCode.Escape))
{

isPause = !isPause;
if(isPause)
Time.timeScale = 0;

else Time.timeScale = 1;
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