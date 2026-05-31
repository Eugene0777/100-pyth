const facts = [
  { id: 1, text: "Pyth Network is an oracle network for blockchains." },
  { id: 2, text: "Pyth delivers market prices to smart contracts." },
  { id: 3, text: "Pyth helps DeFi apps access up-to-date data." },
  { id: 4, text: "Pyth's main product is price feeds." },
  { id: 5, text: "Pyth works with crypto, equities, FX, and commodities." },
  { id: 6, text: "Pyth uses data from real market participants." },
  { id: 7, text: "Exchanges and trading firms publish data to Pyth." },
  { id: 8, text: "Pyth makes prices available to Web3 apps." },
  { id: 9, text: "Pyth is often used in DeFi protocols." },
  { id: 10, text: "Pyth is built for fast on-chain price delivery." },
  { id: 11, text: "Pyth supports many blockchains." },
  { id: 12, text: "Pyth can be used in EVM networks." },
  { id: 13, text: "Pyth works beyond Solana." },
  { id: 14, text: "Pyth has its own data infrastructure." },
  { id: 15, text: "Pyth uses a Pull oracle model." },
  { id: 16, text: "In the Pull model, an app requests the price it needs." },
  { id: 17, text: "The Pull model helps save gas." },
  { id: 18, text: "Pyth also supports Push updates." },
  { id: 19, text: "Push feeds update automatically." },
  { id: 20, text: "Pyth fits high-speed trading apps." },
  { id: 21, text: "Pyth shows an asset's price." },
  { id: 22, text: "Pyth shows the confidence interval for a price." },
  { id: 23, text: "The confidence interval helps estimate price accuracy." },
  { id: 24, text: "Pyth aggregates data from multiple sources." },
  { id: 25, text: "Pyth protects against price outliers." },
  { id: 26, text: "Pyth uses the median to calculate prices." },
  { id: 27, text: "Pyth accounts for data quality from providers." },
  { id: 28, text: "Pyth makes data transparent for developers." },
  { id: 29, text: "Pyth can be integrated through SDKs." },
  { id: 30, text: "Pyth has developer documentation." },
  { id: 31, text: "Pyth is used for perp DEXs." },
  { id: 32, text: "Pyth is used for lending protocols." },
  { id: 33, text: "Pyth is used for options and derivatives." },
  { id: 34, text: "Pyth fits prediction markets." },
  { id: 35, text: "Pyth helps protocols avoid stale prices." },
  { id: 36, text: "Pyth can check price freshness." },
  { id: 37, text: "Pyth reduces the risk of data manipulation." },
  { id: 38, text: "Pyth helps DeFi stay closer to real-time markets." },
  { id: 39, text: "Pyth makes on-chain prices more accessible." },
  { id: 40, text: "Pyth can be used in trading applications." },
  { id: 41, text: "Pyth has a network called Pythnet." },
  { id: 42, text: "Pythnet is built specifically for Pyth." },
  { id: 43, text: "Pythnet aggregates prices from data providers." },
  { id: 44, text: "Pythnet is built on Solana technology." },
  { id: 45, text: "Pythnet is independent from Solana mainnet." },
  { id: 46, text: "Pyth uses Hermes to deliver price updates." },
  { id: 47, text: "Hermes serves updates through an API." },
  { id: 48, text: "Hermes helps developers get fresh prices." },
  { id: 49, text: "Pyth supports a REST API." },
  { id: 50, text: "Pyth supports streaming updates." },
  { id: 51, text: "Each price feed has a unique ID." },
  { id: 52, text: "A price feed ID is used to query a specific asset." },
  { id: 53, text: "Pyth can provide the BTC/USD price." },
  { id: 54, text: "Pyth can provide the ETH/USD price." },
  { id: 55, text: "Pyth supports feeds for stablecoins." },
  { id: 56, text: "Pyth supports feeds for LST assets." },
  { id: 57, text: "Pyth supports feeds for indices." },
  { id: 58, text: "Pyth supports feeds for U.S. equities." },
  { id: 59, text: "Pyth supports feeds for FX pairs." },
  { id: 60, text: "Pyth supports feeds for metals." },
  { id: 61, text: "Pyth supports feeds for commodities." },
  { id: 62, text: "Pyth supports feeds for energy markets." },
  { id: 63, text: "Pyth can be used for RWA applications." },
  { id: 64, text: "Pyth is useful for on-chain finance." },
  { id: 65, text: "Pyth helps bring TradFi data into Web3." },
  { id: 66, text: "Pyth makes market data available to smart contracts." },
  { id: 67, text: "Pyth can be used in gaming projects." },
  { id: 68, text: "Pyth can be used in NFT projects." },
  { id: 69, text: "Pyth can be used in analytics services." },
  { id: 70, text: "Pyth fits automatic liquidations." },
  { id: 71, text: "Pyth helps calculate collateral value." },
  { id: 72, text: "Pyth can be used to calculate funding rates." },
  { id: 73, text: "Pyth is useful for leveraged protocols." },
  { id: 74, text: "Pyth helps reduce latency between markets and blockchains." },
  { id: 75, text: "Pyth makes DeFi infrastructure faster." },
  { id: 76, text: "Pyth has a product called Benchmarks." },
  { id: 77, text: "Benchmarks provides historical prices." },
  { id: 78, text: "Pyth historical prices can be used for analytics." },
  { id: 79, text: "Pyth historical prices are useful for backtesting." },
  { id: 80, text: "Pyth Benchmarks is useful for reporting." },
  { id: 81, text: "Pyth has a product called Pyth Pro." },
  { id: 82, text: "Pyth Pro is built for enterprise clients." },
  { id: 83, text: "Pyth Pro lets teams customize price feeds." },
  { id: 84, text: "Pyth Pro was previously called Pyth Lazer." },
  { id: 85, text: "Pyth has a product called Entropy." },
  { id: 86, text: "Entropy provides on-chain randomness." },
  { id: 87, text: "Entropy fits games." },
  { id: 88, text: "Entropy fits NFT mint mechanics." },
  { id: 89, text: "Pyth has a product called Express Relay." },
  { id: 90, text: "Express Relay helps protocols work with MEV." },
  { id: 91, text: "Pyth has its own token, PYTH." },
  { id: 92, text: "PYTH is tied to governance of the Pyth ecosystem." },
  { id: 93, text: "Pythenians is an NFT collection from the Pyth community." },
  { id: 94, text: "The Pythenians collection trades on Magic Eden." },
  { id: 95, text: "Pythenians can also be found on Tensor." },
  { id: 96, text: "Pythenians are connected to Pyth community culture." },
  { id: 97, text: "Pythenians is a community takeover NFT collection." },
  { id: 98, text: "The Pythenians collection ticker is PTN." },
  { id: 99, text: "Pythenians became part of the Pyth community's visual identity." },
  { id: 100, text: "Pythenians can act as an NFT symbol of the early Pyth community." },
];

const categories = [
  { id: "all", label: "All", match: () => true },
  { id: "core", label: "Core", range: [1, 15] },
  { id: "model", label: "Oracle", range: [16, 30] },
  { id: "defi", label: "DeFi", range: [31, 40] },
  { id: "infra", label: "Pythnet", range: [41, 52] },
  { id: "assets", label: "Assets", range: [53, 65] },
  { id: "cases", label: "Use Cases", range: [66, 75] },
  { id: "products", label: "Products", range: [76, 90] },
  { id: "community", label: "Community", range: [91, 100] },
];

categories.forEach((category) => {
  if (!category.match) {
    category.match = (fact) => fact.id >= category.range[0] && fact.id <= category.range[1];
  }
});

const elements = {
  categoryTabs: document.querySelector("#categoryTabs"),
  drawFact: document.querySelector("#drawFact"),
  copyFact: document.querySelector("#copyFact"),
  factPanel: document.querySelector(".fact-panel"),
  factText: document.querySelector("#factText"),
  factIndex: document.querySelector("#factIndex"),
  feedCategory: document.querySelector("#feedCategory"),
  seenCount: document.querySelector("#seenCount"),
  poolCount: document.querySelector("#poolCount"),
  activeCategory: document.querySelector("#activeCategory"),
  historyList: document.querySelector("#historyList"),
};

const state = {
  activeCategory: categories[0],
  remaining: [...facts],
  seen: [],
  history: [],
  currentFact: null,
};

const randomIndex = (length) => {
  if (window.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return value[0] % length;
  }

  return Math.floor(Math.random() * length);
};

const categoryFacts = () => facts.filter(state.activeCategory.match);

const resetPool = () => {
  state.remaining = categoryFacts().filter((fact) => fact.id !== state.currentFact?.id);

  if (state.remaining.length === 0) {
    state.remaining = categoryFacts();
  }
};

const formatIndex = (id) => `#${String(id).padStart(3, "0")}`;

const renderStats = () => {
  const total = categoryFacts().length;
  elements.seenCount.textContent = String(state.seen.length);
  elements.poolCount.textContent = String(total);
  elements.activeCategory.textContent = state.activeCategory.label;
};

const renderHistory = () => {
  elements.historyList.innerHTML = "";

  if (state.history.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Waiting for update";
    elements.historyList.append(item);
    return;
  }

  state.history.slice(0, 4).forEach((fact) => {
    const item = document.createElement("li");
    item.textContent = `${formatIndex(fact.id)} ${fact.text}`;
    elements.historyList.append(item);
  });
};

const flashPanel = () => {
  elements.factPanel.classList.remove("is-flashing");
  window.requestAnimationFrame(() => {
    elements.factPanel.classList.add("is-flashing");
  });
};

const drawFact = () => {
  if (state.remaining.length === 0) {
    resetPool();
  }

  const index = randomIndex(state.remaining.length);
  const [fact] = state.remaining.splice(index, 1);
  state.currentFact = fact;
  state.seen = [...new Set([...state.seen, fact.id])];
  state.history = [fact, ...state.history.filter((item) => item.id !== fact.id)].slice(0, 4);

  elements.factText.textContent = fact.text;
  elements.factIndex.textContent = formatIndex(fact.id);
  elements.feedCategory.textContent = state.activeCategory.label;
  elements.copyFact.textContent = "Copy";

  renderStats();
  renderHistory();
  flashPanel();
};

const setCategory = (categoryId) => {
  const nextCategory = categories.find((category) => category.id === categoryId);

  if (!nextCategory) {
    return;
  }

  state.activeCategory = nextCategory;
  state.seen = [];
  state.history = [];
  state.currentFact = null;
  resetPool();

  elements.feedCategory.textContent = nextCategory.label;
  elements.factIndex.textContent = "#000";
  elements.factText.textContent = "Click the button to get a random Pyth fact.";
  elements.copyFact.textContent = "Copy";

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === categoryId);
  });

  renderStats();
  renderHistory();
};

const copyCurrentFact = async () => {
  if (!state.currentFact) {
    return;
  }

  const value = `${formatIndex(state.currentFact.id)} ${state.currentFact.text}`;

  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  elements.copyFact.textContent = "Copied";
  window.setTimeout(() => {
    elements.copyFact.textContent = "Copy";
  }, 1100);
};

const initTabs = () => {
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tab-button";
    button.dataset.category = category.id;
    button.textContent = category.label;
    button.classList.toggle("is-active", category.id === state.activeCategory.id);
    button.addEventListener("click", () => setCategory(category.id));
    fragment.append(button);
  });

  elements.categoryTabs.append(fragment);
};

initTabs();
renderStats();
renderHistory();

elements.drawFact.addEventListener("click", drawFact);
elements.copyFact.addEventListener("click", copyCurrentFact);
