import natural from "natural";

const doc =
  "Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms,  profiling algorithms' accuracy and resource consumption, and the implementation of algorithms   (usually in a chosen programming language, commonly referred to as coding). The source code of a program is written in one or more languages    that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit.     The purpose of programming is to find a sequence of instructions that will automate the performance of a task     (which can be as complex as an operating system) on a computer, often for solving a given problem. Proficient programming thus usually     requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.Tasks     accompanying and related to programming include testing, debugging, source code maintenance, implementation of build systems, and management     of derived artifacts, such as the machine code of computer programs. These might be considered part of the programming process, but often the term software development is used for this larger process with the term programming, implementation, or coding reserved for the actual writing of code. Software engineering combines engineering techniques with software development practices. Reverse engineering is a related process used by designers, analysts, and programmers to understand and re-create/re-implement.";
const stopwords = [
  "i",
  "me",
  "my",
  "myself",
  "we",
  "our",
  "ours",
  "ourselves",
  "you",
  "your",
  "yours",
  "yourself",
  "yourselves",
  "he",
  "him",
  "his",
  "himself",
  "she",
  "her",
  "hers",
  "herself",
  "it",
  "its",
  "itself",
  "they",
  "them",
  "their",
  "theirs",
  "themselves",
  "what",
  "which",
  "who",
  "whom",
  "this",
  "that",
  "these",
  "those",
  "am",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "having",
  "do",
  "does",
  "did",
  "doing",
  "a",
  "an",
  "the",
  "and",
  "but",
  "if",
  "or",
  "because",
  "as",
  "until",
  "while",
  "of",
  "at",
  "by",
  "for",
  "with",
  "about",
  "against",
  "between",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "to",
  "from",
  "up",
  "down",
  "in",
  "out",
  "on",
  "off",
  "over",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "any",
  "both",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "s",
  "t",
  "can",
  "will",
  "just",
  "don",
  "should",
  "now",
];

const sent_tokenizer = new natural.SentenceTokenizer();
const work_tokenizer = new natural.WordTokenizer();

let TfIdf = natural.TfIdf;
let tfidf = new TfIdf();

const sents = sent_tokenizer.tokenize(doc);
let stopWRSent = [];
let word_freq = {};
let sentWeightArr = [];

sents.forEach((sent) => {
  stopWRSent.push(remove_stopwords(sent));
});
let wordArr = [];
stopWRSent.forEach((sent) => {
  wordArr.push(work_tokenizer.tokenize(sent));
  tfidf.addDocument(remove_stopwords(sent));
});
wordArr = [].concat.apply([], wordArr);
wordArr = [...new Set(wordArr)];

wordArr.forEach(word=>{
    tfidf.tfidfs(word, function (i, mesure) {
        word_freq[word] = mesure
      });
})

let sent_scores = {}





function remove_stopwords(str) {
  let res = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word_clean = words[i].split(".").join("");
    if (!stopwords.includes(word_clean)) {
      res.push(word_clean);
    }
  }
  return res.join(" ");
}
