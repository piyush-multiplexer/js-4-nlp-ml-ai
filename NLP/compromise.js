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

// Working with numbers
const str = "Price of an Apple is $1.5, per KG may around 6 to 7.5 USD";
const numDoc = nlp(str);

console.log(numDoc.numbers().parse());
console.log(numDoc.numbers().increment().text());
console.log(numDoc.numbers().toText().text());

const paragraph =
  "Hello 😄, this is from Tesla,Inc! You can reach us at our contact no (+92) 0700-8888 and email at fack@example.total :) or physically at Canada.";
const miscDoc = nlp(paragraph);
console.log(miscDoc.emails());
console.log(miscDoc.topics());
