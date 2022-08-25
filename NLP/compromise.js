import nlp from "compromise";

const text = "I was there, suddenly raining starts. I am still sick";
let doc = nlp(text);

// Tense Changer for Sentences

console.log(`Past Tense: ${doc.sentences().toPastTense().text()}`);
console.log(`Present Tense: ${doc.sentences().toPresentTense().text()}`);
console.log(`Future Tense: ${doc.sentences().toFutureTense().text()}`);
