var topics = ["Terminal", "GitHub", "HTML", "CSS", "JavaScript"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === "Terminal") {
        console.log("Let's study the Terminal!");
    } else if (randomTopic === "GitHub") {
        console.log("Let's study GitHub!");
    } else if (randomTopic === "HTML") {
        console.log("Let's study HTML!");
    } else if (randomTopic === "CSS") {
        console.log("Let's study CSS!");
    } else if (randomTopic === "JavaScript") {
        console.log("Let's study JavaScript!");
    } else {
        console.log("Please try again!");
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study today?');
selectTopic()