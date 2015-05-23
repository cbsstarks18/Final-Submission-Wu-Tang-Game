#pragma strict

	var levels1 : GameObject;
	var creditsWin : GameObject;
	var LEVELSchooser : GameObject;
	var menubuttons : GameObject;
  var TotalLifes :int = 0;
  var call = false;
function Start () {
//TotalLifes =(PlayerPrefs.GetInt("TotalLifes"));
}

function OnMouseOver(){
 if(Input.GetMouseButtonDown(0)){
 call = true;
TotalLifes = 3;
	PlayerPrefs.DeleteAll();
go ();
}
}
function go (){
if (call == true){
	//yield WaitForSeconds (1);
	
	 PlayerPrefs.SetInt("TotalLifes", TotalLifes);
	levels1.active = false;
	creditsWin.active = false;
	menubuttons.active = false;
	LEVELSchooser.active = true;
}}