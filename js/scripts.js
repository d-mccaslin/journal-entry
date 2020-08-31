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

Journal.prototype.findEntry = function(id) {
  //console.log(this.entries);
  for (let i=0; i< this.entries.length; i++) {
    if (this.entries[i]) {
      //console.log(this.entries[i].id)
      if (this.entries[i].id == id) {
        return this.entries[i];
      }
    }
  };
  return false;
}

// Business Logic for Entry

function Entry(title,body) {
  this.title = title,
  this.body = body,
  this.fullText = title + "\n" + body;
}

Entry.prototype.returnWords = function() {
  const words = this.body.split(" ");
  //console.log(words);
  return words.length;
}

const vowels = ["a","e","i","o","u"];
/[aeiou]/

Entry.prototype.returnConsonants = function() {
  const numberOfVowels = this.returnVowels();
  const text = this.body.split(" ").join("");
  const numberOfConsonants = text.length - numberOfVowels;
  return numberOfConsonants;
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
/*
Entry.prototype.fullText = function() {
  const fullText = this.title + " / " + this.body;
  return fullText;
} */

// $("#myWordCountDisplay").text(entry.returnWords);

// UI Logic
let journalEntry = new Journal();

function displayEntryDetails(journalToDisplay) {
  $("#show-journal-info").show();
  let entriesList = $("ul#entryList");
  let htmlForEntryInfo = "";
  journalToDisplay.entries.forEach(function(entry) {
    htmlForEntryInfo += "<li id=" + entry.id + ">" + entry.title + "<br>" + entry.body + "</li>";
  });
  entriesList.html(htmlForEntryInfo);
}

function showEntry(entryId) {
  const entry = journalEntry.findEntry(entryId);
  $("#entry-info").show();
  $(".entry-full-text").html(entry.fullText);
  $(".entry-word-count").html(entry.returnWords());
  $(".entry-consonants-count").html(entry.returnConsonants());
  $(".entry-vowels-count").html(entry.returnVowels());
}

function attachEntryListeners() {
  $("ul#entryList").on("click", "li", function() {
    showEntry(this.id);
  });
}

$(document).ready(function() {
  attachEntryListeners();
  $("form#new-journal-entry").submit(function(event) {
    event.preventDefault();
    const entryTitle = $("input#new-entry-title").val();
    const entryBody = $("input#new-entry-body").val();

    let newEntry = new Entry(entryTitle,entryBody);
    journalEntry.addEntry(newEntry);
     
    displayEntryDetails(journalEntry);
    //console.log("vowels: " + newEntry.returnVowels());
    //console.log("consonants: " + newEntry.returnConsonants());
    //console.log("word count: " + newEntry.returnWords());
  })
})

