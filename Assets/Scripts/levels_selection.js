#pragma strict
//var originalWidth : float = 1080.0;  // define here the original resolution
//var originalHeight : float = 1920.0; // you used to create the GUI contents 
var LevelUnl : int = 1;
//var x : float = 10;
//var y : float = 10:
//private var scale: Vector3;
 
 
 
 function Start (){

 LevelUnl =(PlayerPrefs.GetInt("LevelUnl"));
 }
function OnGUI(){
   // scale.x = Screen.width/originalWidth; // calculate hor scale
   // scale.y = Screen.height/originalHeight; // calculate vert scale
  //  scale.z = 1;
   // var svMat = GUI.matrix; // save current matrix
  //  // substitute matrix - only scale is altered from standard
  //  GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, scale);
    // draw your GUI controls here:
   // GUI.Box(Rect(300,50,200,300), "Menu");
   
   
   
   
   
    if (GUI.Button(Rect(325,80,150,50),"level 1") && LevelUnl >= 0){
    
    Application.LoadLevel ("2d");
    }
       if (GUI.Button(Rect(325,140,150,50),"level 1") && LevelUnl >= 1){
    
    Application.LoadLevel ("2d");
    }
    
    
    
    if (GUI.Button(Rect(325,200,150,50),"Back")){
    
      GetComponent(levels_selection).enabled = false;
    GetComponent(main_menu1).enabled = true;
    }
    }
   
   
   
   
   
    //...
    // restore matrix before returning
//    GUI.matrix = svMat; // restore matrix
//}