export const sendOrderToTelegram = (product) => {
  const BOT_TOKEN = "8492338118:AAHKUwAbzS864vVE-xK42Fzwe9PdboW-QVo"; // bu yerga o'zingizni bot tokeningizni yozasiz
  const CHAT_ID = "5704255218";     // bu yerga o'zingizni chat_id yozasiz
  const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const message = `
🛒 Yangi buyurtma
📌 Nomi: ${product.name}
💰 Narxi: ${product.price}
ℹ️ Tavsif: ${product.desc}

  `;

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  })
    .then((res) => res.json())
    .then(() => alert("Buyurtma Telegramga yuborildi ✅"))
    .catch(() => alert("Buyurtma yuborishda xatolik ❌"));
};
