const snake = "SNAAAAAAAAAKE!!!";
const onizuka = "At least he's chill, I guess...";
const mlk = "He had a dream...";
const marx = "The beard on that man...";
const danny = "The best Mexican there ever was...";
const ellie = "Yeah! Legitness!";
const epstein = "You are a sick person for typing that...";
const nolan = "Let me cast more white people into my historic film!";
const pewds = "He won at life, SUGOI SUGOI!";
const jf = "There are other COOLER Jacks ya' know...";

const responses = {
    "jack": "This is the most correct answer, DUH!",
    "coach frank": "Valid, man.",
    "epstein": epstein,
    "jeffrey epstein": epstein,
    "elaine": ellie,
    "ellie": ellie,
    "danny": danny,
    "daniel": danny,
    "lizard king": "ONLY he could achieve a 900 dogpiss!",
    "solid snake": snake,
    "snake": snake,
    "lil wayne": "Real G's move in silence like lasagne!",
    "drake": "ICE MAN... MORE LIKE NONCE MAN!",
    "filthy frank": "WELCOME TO THE RICE FIELDS!",
    "pink guy": "STFU!",
    "christopher nolan": nolan,
    "nolan": nolan,
    "sparky": "The best dog ever!",
    "akinator": "How does he know EVERYTHING!?",
    "martin luther king": mlk,
    "mlk": mlk,
    "karl marx": marx,
    "marx": marx,
    "tobuscus": "Nuggets with some far right delusion!",
    "pewdiepie": pewds,
    "pewds": pewds,
    "jacksfilms": jf,
    "jacks films": jf,
    "onizuka": onizuka,
    "gto": onizuka,
    "great teacher onizuka": onizuka
};

function checkName() {
    const x = document.getElementById("name").value
        .trim()
        .toLowerCase();

    let message;

    if (x === "quit") {
        message = "Goodbye! Come again!";
    } else if (x === "alan") {
        message = "SO WRONG, try again!";
    } else {
        message = responses[x] || "You might be right, but idk.";
    }

    document.getElementById("result").textContent = message;
}
