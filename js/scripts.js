// Business Logic for Journal Entries

function JournalEntry() {
  this.entries = [],
  this.entryId = 0;
}

JournalEntry.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);
}

JournalEntry.prototype.assignId = function() {
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

Entry.prototype.returnConsonants = function() {

}

Entry.prototype.returnVowels = function() {

}

Entry.prototype.fullText = function() {
  return this.title + "\n" + this.name;
}

// $("#myWordCountDisplay").text(entry.returnWords);

// UI Logic
let journalEntry = new JournalEntry();

$(document).ready(function() {
  $("form#new-journal-entry").submit(function(event) {
    event.preventDefault();
    const entryTitle = $("input#new-entry-title").val();
    const entryBody = $("input#new-entry-body").val();

    let newEntry = new Entry(entryTitle,entryBody);
    journalEntry.addEntry(newEntry);
    console.log(journalEntry);
    console.log(journalEnewEntry.entries);
  })
})

