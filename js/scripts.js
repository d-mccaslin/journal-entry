// Business Logic for Journal Entries

function Journal() {
  this.entries = [],
  this.entryId = 0;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);
}

Journal.prototype.assignId = function() {
  this.entryId += 1;
  return this.entryId;
}

// Business Logic for Entry

function Entry(title,body) {
  this.title = title,
  this.body = body,
  this.fullText = [title,body];
}

Entry.prototype.returnWords = function() {
  const words = Entry.body.split(" ");
  return words.length;
}

const vowels = ["a","e","i","o","u"];
/[aeiou]/

Entry.prototype.returnConsonants = function() {
  const numberOfVowels = this.returnVowels;
  
}

Entry.prototype.returnVowels = function() {
  let vowelsInString = [];
  const text = this.body;
  for (var c = 0; c < text.length; c++) {
    const letter = text[c];
    if (vowels.indexOf(letter) > -1) {
      vowelsInString.push(letter);
    }
  }
  //return vowelsInString;
  return vowelsInString.length;
}

Entry.prototype.fullText = function() {
  return this.title + "\n" + this.name;
}

// $("#myWordCountDisplay").text(entry.returnWords);

// UI Logic
let journalEntry = new Journal();

$(document).ready(function() {
  $("form#new-journal-entry").submit(function(event) {
    event.preventDefault();
    const entryTitle = $("input#new-entry-title").val();
    const entryBody = $("input#new-entry-body").val();

    let newEntry = new Entry(entryTitle,entryBody);
    journalEntry.addEntry(newEntry);
    
    console.log(newEntry.returnVowels());
  })
})

