module.exports = {
  config: {
    name: "intro",
    aliases: ["me", "myinfo", "profile"],
    version: "14.0",
    author: "Mehedi Hasan",
    role: 0,
    shortDescription: "😂 VIP funny intro with jokes instead of photo",
  },

  onStart: async function({ api, event }) {
    try {
      // ===== Stylish info =====
      const name = "💎 𝗠𝗲𝗵𝗲𝗱𝗶 𝗛𝗮𝘀𝗮𝗻 💎";
      const classInfo = "🎓 Inter First Year";
      const hobby = "🎮 Gaming";
      const device = "📱 Samsung Note 8";
      const relation = "❤️ Secret";
      const city = "🏙 Sylhet";
      const religion = "🕌 Islam";

      // ===== Funny replacement for photo =====
      const funnyStuff = [
        "🃏 Meme King of Sylhet",
        "🍕 Pizza Hunter Extraordinaire",
        "😂 Professional Laughter Dealer",
        "🐶 Talks to pets more than humans",
        "⚡ Energy: 100%, Sleep: 0%",
        "🎧 Random dancing expert",
        "💡 Genius-level nonsense specialist",
        "🔥 Too cool for normal vibes",
        "🥳 Chief of Fun Times",
        "🤣 Nap Champion of the Universe"
      ];

      // Pick 5 random funny lines
      const randomFunnyStuff = [];
      while(randomFunnyStuff.length < 5){
        const line = funnyStuff[Math.floor(Math.random() * funnyStuff.length)];
        if(!randomFunnyStuff.includes(line)) randomFunnyStuff.push(line);
      }

      // ===== Message body =====
      const message = `
💫 🌟 𝗨𝗹𝘁𝗿𝗮 𝗩𝗜𝗣 𝗙𝘂𝗻𝗻𝘆 𝗜𝗻𝘁𝗿𝗼 🌟 💫

👤 Name: ${name}
🎓 Class: ${classInfo}
🎮 Hobby: ${hobby}
📱 Device: ${device}
❤️ Rlsn: ${relation}
🏙 City: ${city}
🕌 Religion: ${religion}

💬 VIP Funny Stuff:
${randomFunnyStuff.map(l => `😂 ${l}`).join("\n")}

🌟 Crafted with ❤️ by Your Bot 🌟
      `;

      // ===== Send message =====
      api.sendMessage({ body: message }, event.threadID, event.messageID);

    } catch (err) {
      console.error("Intro command error:", err);
      api.sendMessage("❌ Error loading your VIP intro.", event.threadID, event.messageID);
    }
  }
};
