// chatbot.js – simple rule‑based helper (no external AI)

// Pre‑defined help messages
const helpMessages = [
  {
    keywords: ['how', 'use', 'dashboard', 'site'],
    response: `Welcome! This dashboard shows three charts:\n- Daily Sales Trend: shows total sales per day.\n- Top‑Selling Dishes: the five dishes that generated the most revenue.\n- Revenue by Category: a breakdown of sales by dish category.\n\nTo see the data, just open the page – the charts load automatically from the data file placed in the \`data/\` folder. No further interaction is required.`
  },
  {
    keywords: ['data', 'file', 'format', 'csv', 'excel'],
    response: 'Upload a CSV or Excel file (named \`data.csv\` or \`data.xlsx\`) into the \`data/\` directory. The file must contain the columns: date, order_id (optional), item, category, quantity (optional), price.'
  },
  {
    keywords: ['refresh', 'update', 'change'],
    response: 'After updating the data file, just reload the page (F5) and the charts will reflect the new values.'
  },
  {
    keywords: ['contact', 'support'],
    response: 'For any issues, edit the README or open an issue on the repository.'
  }
];

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const msg = input.value.trim();
  if (!msg) return;
  addMessage(msg, 'user');
  input.value = '';
  const reply = getReply(msg.toLowerCase());
  setTimeout(() => addMessage(reply, 'bot'), 300); // simulate thinking
}

function addMessage(text, author) {
  const container = document.getElementById('chatbot-messages');
  const msgDiv = document.createElement('div');
  msgDiv.className = 'msg ' + author;
  msgDiv.textContent = text;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function getReply(query) {
  for (const entry of helpMessages) {
    for (const kw of entry.keywords) {
      if (query.includes(kw)) return entry.response;
    }
  }
  return "I'm a simple helper. Ask about how to use the dashboard, data format, or how to refresh the charts.";
}

function toggleChatbot() {
  const bot = document.getElementById('chatbot');
  bot.classList.toggle('chatbot-closed');
}

// Expose functions to HTML
window.sendMessage = sendMessage;
window.toggleChatbot = toggleChatbot;
