function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6Yu6oF7mj/model.json', modelReady);
    
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, result){
    
}
