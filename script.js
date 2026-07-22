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
const kfp = "Belly so big, oh so full of secret ingredient soup...";
const dt = "Orange cunt.";
const kt = "I like pears, shout out to all my... pears.";
const obl = "The most famous pakistani in the world!";
const bigbro = "Best brother ever!";
const vp = "глупый и мерзкий диктатор";
const bibi = "They're calling him the most retarded person of all time!";
const miku = "Only famous because of Finland!!";


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
    "splenda": "Alan likes this one more than the other one.",
    "gracie": "Alan's least favourite one.",
    "eppu": "Hyvä koira :)",
    "kung fu panda": kfp,
    "po": kfp,
    "poe": kfp,
    "tai lung": "You mean the dragon warrior!?",
    "trump": dt,
    "donald trump": dt,
    "teto": kt,
    "kasane teto": kt,
    "miku": miku,
    "hatsune miku": miku,
    "osama bin laden": obl,
    "bin laden": obl,
    "kirito": "Two swords doesn't fix a bad plot.",
    "tetsuya": "#1 Canadian",
    "neko": "Don't smoke, kids!",
    "nekoneko": "#1 Stalker fan + PURE MUSCLE",
    "reece": "which one?",
    "reeci": bigbro,
    "reecilainen": bigbro,
    "reeciläinen": bigbro,
    "reeceläinen": bigbro,
    "boris johnson": "Still waiting on that blue passport...",
    "putin": vp,
    "vladimir putin": vp,
    "soulja boy": "SOULJA BOY TELL EM!!!",
    "dj khaled": "ARAB ATTACK SHOULD STOP ATTACKING THEM PLATES AND START PRODUCING SOME REAL MUSIC!!!",
    "steve Jobs": "Genius LARPer!",
    "denzel": "Curry or Washington?",
    "denzel curry": "I AM DA ONE DA ONE DA ONE",
    "denzel washington": "King Kong ain't got shit on me!",
    "abraham": "Could it be all his fault?",
    "netanyahu": bibi,
    "bibi": bibi,
    "benjamin mileikowsky": bibi,
    "rick ross": "#FRAUD ALERT!!!",
    "lil pump": "GUCCI GUCCI GUCCI GOO... gang! ^-^",
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
