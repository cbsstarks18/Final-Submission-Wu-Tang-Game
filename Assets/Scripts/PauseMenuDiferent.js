#pragma strict
var pref : int;
var buttons : GameObject;

function Start (){
pref = 0;
}

function Update () {
//PlayerPrefs.SetInt("pref", pref);
pref =(PlayerPrefs.GetInt("pref"));

if( Input.GetKeyDown(KeyCode.Escape)) {
pref =1;
}
else { 
//pref =1;
}

if (pref == 1){
PlayerPrefs.SetInt("pref", pref);
Time.timeScale = 0;
 buttons.active = true;
}

else if ( pref == 0){
Time.timeScale = 1;
buttons.active = false;
}

}