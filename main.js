prediction="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image1" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version-",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gHyABqItM/model.json",model_loded);
 function model_loded(){
     console.log("model_loaded")
 }

 function speech(){
     synth=window.speechSynthesis;
     speech_data="the first pridiction is"+prediction;
     uttrance=new SpeechSynthesisUtterance(speech_data);
     synth.speak(utter);
 }
 function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_name").innerHTML=result[0].label;
        prediction1=result[0].label;
        
        speech();
        if(result[0].label=="amazing")
        {
            document.getElementById("result_grutrue").innerHTML="&#128076;"
        }
        if(result[0].label=="best")
        {
            document.getElementById("result_grutrue").innerHTML="&#128077;"
        }
        if(result[0].label=="victory")
        {
            document.getElementById("result_gruture").innerHTML="&#9996;"
        }
       
    }
}