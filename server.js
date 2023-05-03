
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2343;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/generate-name", (req, res) => {
    const { userName, question1, question2, question3, question4, question5 } = req.body;

    const nameParts = [
        ["The", "Furious", "Master", "Salient", "Enigmatic",
            "Surreal", "Luminous", "Illustrious ", "Crystal", "Majestic", "Ethereal", "Ineffable", "Malevolent",
            "Nostalgic", "Benevolent", "Deep", "Galactic", "Celestial", "Golden", "Incandescent", "Nebulous", "Radiant", "Clear",
            "Harmony", "Silver", "Infinite", "Wicked", "Clever", "Mighty", "Unyeilding", "Undying", "Random"],
        ["Dragon", "Phoenix", "Chimera", "Kraken", "Sphinx", "Yeti", "Minotaur",
            "Basilisk", "Cerberus", "Engraving", "Falcon", "Haze", "Pegasus", "Centaur", "Griffin", "Twins", "Beach", "House",
            "Table", "Werewolf", "Savage", "Tower", "Panther", "Canyon", "Leopard", "Zenith", "Aurora", "Sage", "Warrior", "Immortal",
             "Eagle", "Wolf", "Bandit", "Ransom", "Road", "Border"],
    ];

    const getIndex = (answer) => {
        const firstChar = answer.trim().charAt(0).toLowerCase();
        const index = (firstChar.charCodeAt(0) - 'a'.charCodeAt(0)) % nameParts[0].length;
        return (index + userName.length) % nameParts[0].length;
      };
    
      const namePart1 = nameParts[0][(getIndex(question1) + getIndex(question2) + getIndex(question5)) % nameParts[0].length];
      const namePart2 = nameParts[1][(getIndex(question3) + getIndex(question4) + getIndex(question5)) % nameParts[1].length];
    
      const wuTangClanName = `${namePart1} ${namePart2}`;
    
      res.json({ wuTangClanName });
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
