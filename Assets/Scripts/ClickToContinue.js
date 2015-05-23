#pragma strict


var didwin : int = 0;
function Update () {
if(Input.GetMouseButtonDown(0)){

didwin = 1;


PlayerPrefs.DeleteKey("didwin");
Application.LoadLevel ("menu1");
}
}