// =====================================
// FILE: shop.js
// PART 3.1 — SHOP DATA & BUY SYSTEM
// =====================================

const shopItems = [
  { id: "bomb", name: "Bomb", price: 50, desc: "Destroy 1 area 3x3" },
  { id: "rowClear", name: "Clear Row", price: 40, desc: "Clear 1 row" },
  { id: "colClear", name: "Clear Column", price: 40, desc: "Clear 1 column" },
  { id: "reroll", name: "Reroll Blocks", price: 30, desc: "Change block options" }
];

function buyItem(itemId) {
  const item = shopItems.find(i => i.id === itemId);
  if (!item) return;

  if (playerCoins >= item.price) {
    playerCoins -= item.price;
    boosters[itemId]++;
    updateUI();
  }
}
