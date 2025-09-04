export const sendOrderToTelegram = ({ message }) => {
 const BOT_TOKEN = "8492338118:AAHKUwAbzS864vVE-xK42Fzwe9PdboW-QVo";
  const CHAT_ID = "5704255218";     
  const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  })
    .then((res) => res.json())
    .catch(() => alert("Buyurtma yuborishda xatolik ❌"));
};
