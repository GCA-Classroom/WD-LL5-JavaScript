// ============================================================
//  🎟  Event Welcome Center — script.js  (SOLUTION)
//  JavaScript Foundations · Lab 5
// ============================================================

// ── Challenge 1: Event Information ──────────────────────────

let eventName = "CodeFest";
let speakerName = "Dr. Kim";
let roomNumber = 204;
let attendeeName = "Jazz";

console.log(eventName);
console.log(speakerName);
console.log(roomNumber);
console.log(attendeeName);

// ── Challenge 2: Personalized Greetings ─────────────────────

console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log("Your session is in Room " + roomNumber + ".");

// ── Challenge 3: Build Functions ────────────────────────────

function welcomeGuest() {
  console.log("Welcome to " + eventName + "!");
}

function displaySessionInfo() {
  console.log("Speaker: " + speakerName);
  console.log("Room: " + roomNumber);
}

welcomeGuest();
displaySessionInfo();

// ── Challenge 4: Alert Messages ─────────────────────────────

alert("Welcome to " + eventName + "!");
alert("Your session with " + speakerName + " is in Room " + roomNumber + ".");
alert("Enjoy the conference, " + attendeeName + "!");

// ── Challenge 5: Attendee Counter ───────────────────────────

let attendeeCount = 0;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

// ── 🚀 Level Up 1: Additional Functions ─────────────────────

function displaySpeaker() {
  console.log("Today's speaker: " + speakerName);
}

function displayRoom() {
  console.log("Session location: Room " + roomNumber);
}

function displayAgenda() {
  console.log("--- CodeFest Agenda ---");
  console.log("9:00 AM  - Registration");
  console.log("10:00 AM - Keynote with " + speakerName);
  console.log("12:00 PM - Lunch Break");
  console.log("1:00 PM  - Workshop Sessions (Room " + roomNumber + ")");
  console.log("4:00 PM  - Closing Remarks");
}

displaySpeaker();
displayRoom();
displayAgenda();

// ── 🚀 Level Up 2: Multiple Attendees ───────────────────────

let attendee1 = "Jazz";
let attendee2 = "Terry";
let attendee3 = "Barent";

console.log("Welcome " + attendee1 + " to " + eventName + "!");
console.log("Welcome " + attendee2 + " to " + eventName + "!");
console.log("Welcome " + attendee3 + " to " + eventName + "!");

// ── 🚀 Level Up 3: Mini Conference Dashboard ─────────────────

function displayDashboard() {
  console.log("============================================");
  console.log("         " + eventName + " DASHBOARD");
  console.log("============================================");
  console.log("Speaker:    " + speakerName);
  console.log("Room:       " + roomNumber);
  console.log("Attendees:  " + attendeeCount);
  console.log("--------------------------------------------");
  console.log("Registered: " + attendee1 + ", " + attendee2 + ", " + attendee3);
  console.log("============================================");
}

displayDashboard();

// ── 🚀 Level Up 4: New Console Methods ──────────────────────

console.info("ℹ️  Event check-in is now open at Room " + roomNumber + ".");
console.warn("⚠️  Seating is limited — doors close at 9:50 AM!");
console.table({
  Event: eventName,
  Speaker: speakerName,
  Room: roomNumber,
  Capacity: attendeeCount,
});
