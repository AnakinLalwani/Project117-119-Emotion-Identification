function setup() {
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gYIo6gKWI/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function draw() {
    image(video, 0, 0, 300, 250);
    classifier.classify(video, gotResult);
}
function gotResult(error, result) {
    if(error){
        console.error(error);
    } else {
        console.log(result);
        emotion1 = document.getElementById("result_emotion_name").innerHTML = result[0].label;
        acuracy1 = ((result[0].confidence)*100).toFixed(1);
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        acuracy2 = ((result[1].confidence)*100).toFixed(1);
        if(emotion1 =="Happy"){
            document.getElementById("updated_emoji").innerHTML = "&#128522;<br><p style = 'color: black; font-size: 20;'>"+acuracy1+" %</p>";
        }
        if(emotion1 =="Angry"){
            document.getElementById("updated_emoji").innerHTML = "&#128548;<br><p style = 'color: black; font-size: 20;'>"+acuracy1+" %</p>";
        }
        if(emotion1 =="Sad"){
            document.getElementById("updated_emoji").innerHTML = "&#128532;<br><p style = 'color: black; font-size: 20;'>"+acuracy1+" %</p>";
        }

        if(result[1].label=="Happy"){
            document.getElementById("updated_emoji2").innerHTML = "&#128522;<br><p style = 'color: black; font-size: 20;'>"+acuracy2+" %</p>";
        }
        if(result[1].label=="Angry"){
            document.getElementById("updated_emoji2").innerHTML = "&#128548;<br><p style = 'color: black; font-size: 20;'>"+acuracy2+" %</p>";
        }
        if(result[1].label=="Sad"){
            document.getElementById("updated_emoji2").innerHTML = "&#128532;<br><p style = 'color: black; font-size: 20;'>"+acuracy2+" %</p>";
        }
    }
}