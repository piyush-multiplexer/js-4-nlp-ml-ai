import nlp from "compromise";

const text = "I was there, suddenly raining starts. I am still sick!";
const doc = nlp(text);

// Tense Changer for Sentences
console.log(`Past Tense: ${doc.sentences().toPastTense().text()}`);
console.log(`Present Tense: ${doc.sentences().toPresentTense().text()}`);
console.log(`Future Tense: ${doc.sentences().toFutureTense().text()}`);

// Convert to Negative
console.log(doc.sentences().toNegative().text());

// Sentence Metadata
console.log(doc.sentences().json());
console.log(doc.sentences().json()[1].terms);

// Adjectives
console.log(doc.adjectives().text());
console.log(doc.adjectives().adverbs().text());
console.log(doc.adjectives().json());

// add pre-post sentence
console.log(doc.pre("/").text());
console.log(doc.post("\\ ").text());

// add hypen to string in whitespace
console.log(doc.hyphenate().text());
