// ============================================================
// 🎟 Event Welcome Center — script.js
// JavaScript Foundations · Lab 5
// ============================================================

// ── Challenge 1: Event Information ──────────────────────────
// Variables to store event details

let eventName = "Tech Summit";
let speakerName = "Dr. Lee";
let roomNumber = 204;
let attendeeName = "Jordan";

// Log each variable to the console
console.log(eventName);
console.log(speakerName);
console.log(roomNumber);
console.log(attendeeName);

// ── Challenge 2: Personalized Greetings ─────────────────────
// Combine variables and strings to build welcome messages

console.log("Welcome to " + eventName);
console.log(attendeeName + " is attending the event.");
console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log(attendeeName + " will be in Room " + roomNumber + ".");
console.log("Today's speaker is " + speakerName + ".");

// ── Challenge 3: Build Functions ────────────────────────────
// Two functions that wrap our welcome messages

function welcomeGuest() {
    console.log("Welcome " + attendeeName + " to " + eventName + "!");
}

function displaySessionInfo() {
    console.log("Room: " + roomNumber);
    console.log("Speaker: " + speakerName);
}

// Call the functions
welcomeGuest();
displaySessionInfo();

// ── Challenge 4: Alert Messages ─────────────────────────────
// Send messages directly to the user with alert()

alert("Welcome to " + eventName + "!");
alert("Today's speaker is " + speakerName);
alert("Your session is in Room " + roomNumber + ". Enjoy the event!");

// ── Challenge 5: Attendee Counter ───────────────────────────
// Track how many attendees have checked in

let attendeeCount = 0;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

attendeeCount++;
console.log("Attendees checked in: " + attendeeCount);

// ── 🚀 Level Up Challenges ──────────────────────────────────

// LU1: More Functions
function displaySpeaker() {
    console.log("Today's speaker: " + speakerName);
}

function displayRoom() {
    console.log("Session room: " + roomNumber);
}

function displayAgenda() {
    console.log("Agenda: Welcome → Keynote by " + speakerName + " → Networking");
}

displaySpeaker();
displayRoom();
displayAgenda();

// LU2: Multiple Attendees
let attendee2 = "Sam";
let attendee3 = "Taylor";

console.log("Welcome " + attendeeName + " to " + eventName + "!");
console.log("Welcome " + attendee2 + " to " + eventName + "!");
console.log("Welcome " + attendee3 + " to " + eventName + "!");

// LU3: Console Mastery — exploring different console methods
console.warn("⚠️ Doors close 10 minutes after session start.");
console.info("ℹ️ Wi-Fi password: TechSummit2026");
console.table([
  { name: attendeeName, room: roomNumber },
  { name: attendee2,    room: roomNumber },
  { name: attendee3,    room: roomNumber }
  ]);

// LU4: Mini Event System — variables + functions + counter + messages
function attendeeGreeting(name) {
    attendeeCount++;
    console.log(name + " just checked in! Total attendees: " + attendeeCount);
}

attendeeGreeting(attendeeName);
attendeeGreeting(attendee2);
attendeeGreeting(attendee3);
