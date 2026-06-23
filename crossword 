<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>مولّد الكلمات المتقاطعة</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Amiri:wght@400;700&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#1a1208;
  --paper:#fdf6e3;
  --paper2:#f5ead0;
  --grid-line:#c8a96e;
  --filled:#2d1f0e;
  --accent:#b8640a;
  --accent2:#d4820f;
  --easy:#2d7a3a;
  --med:#b8640a;
  --hard:#9b2335;
  --muted:#8a7560;
  --radius:4px;
  --shadow:0 2px 12px rgba(0,0,0,0.12);
}
html{scroll-behavior:smooth}
body{
  font-family:'Cairo',sans-serif;
  background:var(--paper);
  color:var(--ink);
  min-height:100vh;
  background-image:
    repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(200,169,110,0.18) 31px,rgba(200,169,110,0.18) 32px),
    repeating-linear-gradient(90deg,transparent,transparent 31px,rgba(200,169,110,0.18) 31px,rgba(200,169,110,0.18) 32px);
}

/* NAV */
nav{
  background:var(--filled);
  padding:.9rem 2rem;
  display:flex;align-items:center;justify-content:space-between;
  position:sticky;top:0;z-index:100;
  box-shadow:0 2px 16px rgba(0,0,0,0.3);
}
.nav-logo{
  font-family:'Amiri',serif;
  font-size:1.5rem;font-weight:700;
  color:#f5ead0;letter-spacing:1px;
}
.nav-logo em{color:var(--accent2);font-style:normal}
.nav-tag{
  font-size:.75rem;background:rgba(212,130,15,0.2);
  border:1px solid var(--accent2);color:var(--accent2);
  padding:3px 12px;border-radius:20px;
}

/* HERO */
.hero{
  text-align:center;
  padding:3.5rem 1.5rem 2rem;
  position:relative;
}
.hero::after{
  content:'ض ص ث ق ف غ ع ه خ ح ج د';
  position:absolute;bottom:0;left:0;right:0;
  font-family:'Amiri',serif;font-size:1.1rem;
  color:rgba(184,100,10,0.12);
  letter-spacing:8px;pointer-events:none;
  white-space:nowrap;overflow:hidden;
}
.hero h1{
  font-family:'Amiri',serif;
  font-size:clamp(2rem,5vw,3.2rem);
  font-weight:700;color:var(--filled);
  line-height:1.3;margin-bottom:.8rem;
}
.hero h1 span{color:var(--accent)}
.hero p{color:var(--muted);font-size:1rem;max-width:500px;margin:0 auto}

/* CARD */
.card{
  background:rgba(253,246,227,0.85);
  border:1px solid rgba(200,169,110,0.5);
  border-radius:8px;
  padding:1.6rem;
  margin-bottom:1.2rem;
  box-shadow:var(--shadow);
  backdrop-filter:blur(4px);
}
.section-label{
  font-size:.78rem;font-weight:700;
  color:var(--muted);text-transform:uppercase;
  letter-spacing:2px;margin-bottom:.9rem;
  display:flex;align-items:center;gap:8px;
}
.section-label::before{
  content:'';display:inline-block;
  width:3px;height:14px;
  background:var(--accent);border-radius:2px;
}

/* LEVEL BUTTONS */
.level-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.level-btn{
  border:2px solid transparent;
  border-radius:6px;padding:14px 8px;
  text-align:center;cursor:pointer;
  background:var(--paper2);
  transition:all .25s;
  font-family:'Cairo',sans-serif;
}
.level-btn:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,0.1)}
.level-btn.easy.active{border-color:var(--easy);background:rgba(45,122,58,0.08)}
.level-btn.med.active{border-color:var(--med);background:rgba(184,100,10,0.08)}
.level-btn.hard.active{border-color:var(--hard);background:rgba(155,35,53,0.08)}
.level-icon{font-size:1.6rem;margin-bottom:4px}
.level-name{font-size:.95rem;font-weight:700;color:var(--ink)}
.level-desc{font-size:.72rem;color:var(--muted);margin-top:2px}
.level-btn.easy .level-name{color:var(--easy)}
.level-btn.med .level-name{color:var(--med)}
.level-btn.hard .level-name{color:var(--hard)}

/* TOPIC INPUT */
.topic-wrap{position:relative}
textarea.topic-input{
  width:100%;padding:13px 16px;
  background:var(--paper);
  border:1.5px solid rgba(200,169,110,0.6);
  border-radius:6px;color:var(--ink);
  font-family:'Cairo',sans-serif;font-size:1rem;
  resize:none;height:80px;outline:none;
  transition:border-color .25s;
  line-height:1.7;
}
textarea.topic-input::placeholder{color:rgba(138,117,96,0.55)}
textarea.topic-input:focus{border-color:var(--accent)}

/* SIZE */
.size-chips{display:flex;gap:8px;flex-wrap:wrap}
.size-chip{
  background:var(--paper2);
  border:1.5px solid rgba(200,169,110,0.5);
  color:var(--muted);border-radius:4px;
  padding:7px 18px;font-size:.88rem;
  cursor:pointer;transition:all .22s;
  font-family:'Cairo',sans-serif;font-weight:600;
}
.size-chip:hover{border-color:var(--accent);color:var(--accent)}
.size-chip.active{background:var(--accent);border-color:var(--accent);color:#fff}

/* GENERATE BUTTON */
.generate-btn{
  width:100%;padding:15px;
  background:var(--filled);
  border:none;border-radius:6px;
  color:var(--paper);font-family:'Cairo',sans-serif;
  font-size:1.05rem;font-weight:700;
  cursor:pointer;transition:all .3s;
  display:flex;align-items:center;justify-content:center;gap:10px;
  letter-spacing:.3px;
}
.generate-btn:hover:not(:disabled){
  background:#3d2a10;
  box-shadow:0 6px 20px rgba(0,0,0,0.25);
  transform:translateY(-1px);
}
.generate-btn:disabled{opacity:.55;cursor:not-allowed}

/* CROSSWORD GRID */
.crossword-section{display:none}
.crossword-section.visible{display:block}

.grid-wrapper{
  overflow-x:auto;
  margin-bottom:1.2rem;
}
.crossword-grid{
  display:inline-grid;
  gap:3px;
  background:var(--filled);
  padding:3px;
  border-radius:4px;
  direction:ltr;
}
.cell{
  width:40px;height:40px;
  display:flex;align-items:center;justify-content:center;
  position:relative;border-radius:2px;
  font-family:'Cairo',sans-serif;
  font-size:1.1rem;font-weight:700;
}
.cell.black{background:var(--filled)}
.cell.white{
  background:var(--paper);
  border:1.5px solid var(--grid-line);
  cursor:text;
}
.cell.white input{
  width:100%;height:100%;
  background:transparent;border:none;outline:none;
  text-align:center;font-family:'Cairo',sans-serif;
  font-size:1.1rem;font-weight:700;color:var(--ink);
  cursor:text;caret-color:var(--accent);
  direction:rtl;
}
.cell.white .cell-num{
  position:absolute;top:2px;right:3px;
  font-size:.58rem;color:var(--accent);
  font-weight:700;line-height:1;
  font-family:'Cairo',sans-serif;
}
.cell.correct input{color:var(--easy)!important}
.cell.wrong input{color:var(--hard)!important}
.cell.revealed{background:rgba(212,130,15,0.12)}
.cell.revealed input{color:var(--accent)!important}

/* CLUES */
.clues-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
@media(max-width:560px){.clues-grid{grid-template-columns:1fr}}
.clue-group h3{
  font-family:'Amiri',serif;font-size:1rem;font-weight:700;
  color:var(--filled);margin-bottom:.7rem;
  padding-bottom:.4rem;border-bottom:2px solid var(--grid-line);
}
.clue-item{
  display:flex;align-items:flex-start;gap:8px;
  padding:5px 0;border-bottom:1px solid rgba(200,169,110,0.25);
  cursor:pointer;transition:background .15s;
  border-radius:3px;padding:5px 6px;
}
.clue-item:hover{background:rgba(184,100,10,0.06)}
.clue-item.active{background:rgba(184,100,10,0.1)}
.clue-num{
  min-width:22px;height:22px;
  background:var(--accent);color:#fff;
  border-radius:3px;font-size:.72rem;font-weight:700;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;margin-top:1px;
}
.clue-text{font-size:.88rem;line-height:1.5;color:var(--ink)}

/* CONTROLS */
.game-controls{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1rem}
.ctrl-btn{
  background:var(--paper2);
  border:1.5px solid rgba(200,169,110,0.6);
  border-radius:5px;padding:8px 16px;
  font-family:'Cairo',sans-serif;font-size:.85rem;
  font-weight:600;color:var(--ink);cursor:pointer;
  transition:all .2s;
}
.ctrl-btn:hover{border-color:var(--accent);color:var(--accent)}
.ctrl-btn.danger:hover{border-color:var(--hard);color:var(--hard)}

/* SCORE */
.score-bar{
  display:flex;align-items:center;gap:1rem;
  background:var(--paper2);border-radius:6px;
  padding:10px 16px;margin-bottom:1rem;
  border:1px solid rgba(200,169,110,0.4);
}
.score-item{text-align:center}
.score-num{font-size:1.3rem;font-weight:900;color:var(--accent);font-family:'Amiri',serif}
.score-label{font-size:.72rem;color:var(--muted)}
.score-divider{width:1px;height:30px;background:rgba(200,169,110,0.4)}

/* PROGRESS */
.progress-wrap{margin-bottom:.5rem}
.progress-label{font-size:.8rem;color:var(--muted);margin-bottom:4px;display:flex;justify-content:space-between}
.progress-bar{height:6px;background:rgba(200,169,110,0.3);border-radius:3px;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:3px;transition:width .4s}

/* WIN */
.win-overlay{
  display:none;position:fixed;inset:0;z-index:200;
  background:rgba(26,18,8,0.85);
  align-items:center;justify-content:center;
}
.win-overlay.show{display:flex}
.win-card{
  background:var(--paper);border-radius:12px;
  padding:2.5rem;text-align:center;max-width:400px;width:90%;
  box-shadow:0 20px 60px rgba(0,0,0,0.4);
  animation:popIn .4s cubic-bezier(.34,1.56,.64,1);
}
@keyframes popIn{from{transform:scale(.8);opacity:0}to{transform:scale(1);opacity:1}}
.win-card .trophy{font-size:3rem;margin-bottom:.5rem}
.win-card h2{font-family:'Amiri',serif;font-size:1.8rem;color:var(--filled);margin-bottom:.5rem}
.win-card p{color:var(--muted);margin-bottom:1.5rem}
.win-btn{
  background:var(--filled);color:var(--paper);
  border:none;border-radius:6px;padding:12px 28px;
  font-family:'Cairo',sans-serif;font-size:1rem;font-weight:700;
  cursor:pointer;transition:all .2s;
}
.win-btn:hover{background:#3d2a10;transform:translateY(-1px)}

/* LOADING */
.loading-dots{display:inline-flex;gap:5px;align-items:center}
.loading-dots span{
  width:8px;height:8px;background:var(--paper);
  border-radius:50%;animation:ld 1.2s infinite;
}
.loading-dots span:nth-child(2){animation-delay:.2s}
.loading-dots span:nth-child(3){animation-delay:.4s}
@keyframes ld{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-8px)}}

.hidden{display:none}
.app-wrap{max-width:860px;margin:0 auto;padding:0 1.2rem 4rem}

footer{
  text-align:center;padding:1.5rem;
  color:var(--muted);font-size:.8rem;
  border-top:1px solid rgba(200,169,110,0.3);
}

@media(max-width:480px){
  .cell{width:34px;height:34px}
  .cell input{font-size:.95rem}
}
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">✦ كلمات <em>متقاطعة</em></div>
  <span class="nav-tag">مدعوم بالذكاء الاصطناعي</span>
</nav>

<!-- HERO -->
<div class="hero">
  <h1>مولّد الكلمات<br/><span>المتقاطعة العربية</span></h1>
  <p>اختر موضوعاً وصعوبة، وسيُنشئ الذكاء الاصطناعي لك لعبة كاملة مع التلميحات فوراً</p>
</div>

<!-- APP -->
<div class="app-wrap">

  <!-- SETUP CARD -->
  <div class="card" id="setupCard">

    <!-- Level -->
    <div class="section-label">مستوى الصعوبة</div>
    <div class="level-grid" style="margin-bottom:1.6rem">
      <div class="level-btn easy active" onclick="selectLevel('easy',this)">
        <div class="level-icon">🌱</div>
        <div class="level-name">سهل</div>
        <div class="level-desc">كلمات قصيرة وشائعة</div>
      </div>
      <div class="level-btn med" onclick="selectLevel('med',this)">
        <div class="level-icon">🔥</div>
        <div class="level-name">متوسط</div>
        <div class="level-desc">تحدٍّ مناسب</div>
      </div>
      <div class="level-btn hard" onclick="selectLevel('hard',this)">
        <div class="level-icon">⚡</div>
        <div class="level-name">صعب</div>
        <div class="level-desc">كلمات معقدة ونادرة</div>
      </div>
    </div>

    <!-- Topic -->
    <div class="section-label">الموضوع (اختياري)</div>
    <div class="topic-wrap" style="margin-bottom:1.6rem">
      <textarea class="topic-input" id="topicInput"
        placeholder="مثال: الحيوانات، الطبيعة، الجغرافيا، الرياضة، التاريخ العربي...&#10;اتركه فارغاً لموضوع عشوائي"></textarea>
    </div>

    <!-- Size -->
    <div class="section-label" style="margin-bottom:.9rem">حجم الشبكة</div>
    <div class="size-chips" style="margin-bottom:1.6rem">
      <button class="size-chip active" data-size="8" onclick="selectSize(this)">8×8 صغير</button>
      <button class="size-chip" data-size="10" onclick="selectSize(this)">10×10 متوسط</button>
      <button class="size-chip" data-size="13" onclick="selectSize(this)">13×13 كبير</button>
    </div>

    <button class="generate-btn" id="genBtn" onclick="generatePuzzle()">
      <span>✦</span><span>أنشئ اللعبة</span>
    </button>
  </div>

  <!-- CROSSWORD SECTION -->
  <div class="crossword-section" id="crosswordSection">

    <!-- Score bar -->
    <div class="score-bar">
      <div class="score-item"><div class="score-num" id="scoreCorrect">0</div><div class="score-label">صحيح</div></div>
      <div class="score-divider"></div>
      <div class="score-item"><div class="score-num" id="scoreTotal">0</div><div class="score-label">إجمالي الكلمات</div></div>
      <div class="score-divider"></div>
      <div class="score-item"><div class="score-num" id="scoreTimer">0:00</div><div class="score-label">الوقت</div></div>
      <div style="flex:1"></div>
      <div class="score-item">
        <div class="progress-wrap">
          <div class="progress-label"><span>التقدم</span><span id="progressPct">0%</span></div>
          <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="game-controls">
      <button class="ctrl-btn" onclick="checkAnswers()">✓ تحقق</button>
      <button class="ctrl-btn" onclick="revealCurrent()">💡 كشف الكلمة</button>
      <button class="ctrl-btn" onclick="revealAll()">👁 كشف الكل</button>
      <button class="ctrl-btn danger" onclick="resetPuzzle()">↺ إعادة</button>
      <button class="ctrl-btn" onclick="newGame()">✦ لعبة جديدة</button>
    </div>

    <!-- Grid -->
    <div class="card">
      <div class="grid-wrapper">
        <div class="crossword-grid" id="crosswordGrid"></div>
      </div>
    </div>

    <!-- Clues -->
    <div class="card">
      <div class="clues-grid">
        <div class="clue-group">
          <h3>→ أفقي</h3>
          <div id="cluesAcross"></div>
        </div>
        <div class="clue-group">
          <h3>↓ عمودي</h3>
          <div id="cluesDown"></div>
        </div>
      </div>
    </div>

  </div>

</div>

<!-- WIN OVERLAY -->
<div class="win-overlay" id="winOverlay">
  <div class="win-card">
    <div class="trophy">🏆</div>
    <h2>أحسنت! فزت!</h2>
    <p id="winMsg">أكملت الكلمات المتقاطعة بنجاح!</p>
    <button class="win-btn" onclick="newGame()">✦ العب مرة أخرى</button>
  </div>
</div>

<footer>مدعوم بـ Claude AI · الكلمات المتقاطعة العربية</footer>

<script>
// ============================
// STATE
// ============================
let state = {
  level: 'easy',
  gridSize: 8,
  words: [],       // [{word, clue, row, col, dir}]
  grid: [],        // 2D array of {letter, wordIds, number}
  numbers: {},     // cellKey -> number
  userGrid: [],
  timerInterval: null,
  seconds: 0,
  selectedCell: null,
  selectedDir: 'across',
  wordMap: {},     // id -> word obj
};

// ============================
// SETUP HANDLERS
// ============================
function selectLevel(lvl, el) {
  state.level = lvl;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}
function selectSize(el) {
  state.gridSize = parseInt(el.dataset.size);
  document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ============================
// GENERATE
// ============================
async function generatePuzzle() {
  const btn = document.getElementById('genBtn');
  btn.disabled = true;
  btn.innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>';

  const topic = document.getElementById('topicInput').value.trim();
  const levelMap = {easy:'سهلة وشائعة (3-5 أحرف)', med:'متوسطة الصعوبة (5-7 أحرف)', hard:'صعبة ونادرة (6-9 أحرف)'};
  const count = state.gridSize <= 8 ? 8 : state.gridSize <= 10 ? 12 : 16;

  const prompt = `أنشئ ${count} كلمة عربية ${levelMap[state.level]} ${topic ? 'من موضوع: ' + topic : 'من مواضيع متنوعة'}.
لكل كلمة أعطِ تلميحاً قصيراً (جملة واحدة أو عبارة).
أجب فقط بـ JSON هكذا بدون أي نص خارجه:
{"words":[{"word":"كلمة","clue":"تلميح قصير"},...]}
الكلمات يجب أن تكون بالعربية الفصحى بدون تشكيل، وبدون أرقام أو رموز.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{role:'user', content: prompt}]
      })
    });
    const data = await res.json();
    let text = data.content?.[0]?.text || '';
    text = text.replace(/```json|```/g,'').trim();
    const parsed = JSON.parse(text);
    const words = parsed.words.map(w => ({...w, word: w.word.trim()}));
    buildCrossword(words);
  } catch(e) {
    alert('حدث خطأ أثناء توليد الكلمات. حاول مجدداً.');
  }

  btn.disabled = false;
  btn.innerHTML = '<span>✦</span><span>أنشئ لعبة جديدة</span>';
}

// ============================
// CROSSWORD BUILDER
// ============================
function buildCrossword(wordList) {
  const SIZE = state.gridSize;
  // Filter valid Arabic words
  const words = wordList
    .filter(w => /^[\u0600-\u06FF]+$/.test(w.word) && w.word.length >= 3)
    .map(w => ({...w}));

  // Simple placement algorithm
  const grid = Array.from({length:SIZE}, () => Array(SIZE).fill(null));
  const placed = [];

  // Try to place words
  function canPlace(word, row, col, dir) {
    const len = word.length;
    for (let i = 0; i < len; i++) {
      const r = dir==='across' ? row : row+i;
      const c = dir==='across' ? col+i : col;
      if (r<0||r>=SIZE||c<0||c>=SIZE) return false;
      const cell = grid[r][c];
      if (cell !== null && cell !== word[i]) return false;
      // Check adjacency (prevent side-by-side parallel words)
      if (cell === null) {
        if (dir==='across') {
          if (r>0 && grid[r-1][c]!==null) return false;
          if (r<SIZE-1 && grid[r+1][c]!==null) return false;
        } else {
          if (c>0 && grid[r][c-1]!==null) return false;
          if (c<SIZE-1 && grid[r][c+1]!==null) return false;
        }
      }
    }
    // Check borders
    if (dir==='across') {
      if (col>0 && grid[row][col-1]!==null) return false;
      if (col+len<SIZE && grid[row][col+len]!==null) return false;
    } else {
      if (row>0 && grid[row-1][col]!==null) return false;
      if (row+len<SIZE && grid[row+len]?.[col]!==null) return false;
    }
    return true;
  }

  function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
      const r = dir==='across' ? row : row+i;
      const c = dir==='across' ? col+i : col;
      grid[r][c] = word[i];
    }
    placed.push({word, row, col, dir});
  }

  function findIntersections(word, dir) {
    const results = [];
    for (const p of placed) {
      if (p.dir === dir) continue;
      for (let pi = 0; pi < p.word.length; pi++) {
        for (let wi = 0; wi < word.length; wi++) {
          if (p.word[pi] === word[wi]) {
            let row, col;
            if (dir==='across') {
              row = p.dir==='down' ? p.row+pi : p.row;
              col = dir==='across' ? p.col - wi : p.col;
              row = p.row + pi;
              col = p.col - wi;
            } else {
              row = p.row - wi;
              col = p.col + pi;
            }
            results.push({row, col});
          }
        }
      }
    }
    return results;
  }

  // Place first word in center
  if (words.length > 0) {
    const first = words[0].word;
    const startCol = Math.floor((SIZE - first.length) / 2);
    const startRow = Math.floor(SIZE / 2);
    if (canPlace(first, startRow, startCol, 'across')) {
      placeWord(first, startRow, startCol, 'across');
    }
  }

  // Place remaining words
  for (let wi = 1; wi < words.length; wi++) {
    const w = words[wi].word;
    const dir = placed.length % 2 === 0 ? 'down' : 'across';
    let placed_ok = false;

    // Try intersections first
    const intersects = findIntersections(w, dir);
    for (const pos of intersects) {
      if (canPlace(w, pos.row, pos.col, dir)) {
        placeWord(w, pos.row, pos.col, dir);
        placed_ok = true;
        break;
      }
    }

    // Try random placement
    if (!placed_ok) {
      const altDir = dir === 'across' ? 'down' : 'across';
      outer: for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (canPlace(w, r, c, altDir)) {
            placeWord(w, r, c, altDir);
            placed_ok = true;
            break outer;
          }
        }
      }
    }
  }

  // Merge placed with clues
  const finalWords = placed.map((p, idx) => {
    const orig = words.find(w => w.word === p.word) || {clue: '—'};
    return {id: idx, word: p.word, clue: orig.clue, row: p.row, col: p.col, dir: p.dir};
  });

  // Assign numbers
  const numbers = {};
  const cellNums = {};
  let num = 1;
  // Sort by row then col
  const sorted = [...finalWords].sort((a,b) => a.row!==b.row ? a.row-b.row : a.col-b.col);
  const numberedCells = new Set();
  sorted.forEach(w => {
    const key = `${w.row}-${w.col}`;
    if (!numberedCells.has(key)) {
      cellNums[key] = num;
      numberedCells.add(key);
      num++;
    }
    w.number = cellNums[key];
  });

  state.words = finalWords;
  state.grid = grid;
  state.gridSize = SIZE;
  state.userGrid = Array.from({length:SIZE}, () => Array(SIZE).fill(''));
  state.cellNums = cellNums;
  state.wordMap = {};
  finalWords.forEach(w => state.wordMap[w.id] = w);
  state.seconds = 0;

  renderGame(grid, finalWords, SIZE, cellNums);
  startTimer();

  document.getElementById('setupCard').style.display = 'none';
  const cs = document.getElementById('crosswordSection');
  cs.classList.add('visible');
  document.getElementById('scoreTotal').textContent = finalWords.length;
  updateScore();
}

// ============================
// RENDER
// ============================
function renderGame(grid, words, SIZE, cellNums) {
  const gridEl = document.getElementById('crosswordGrid');
  gridEl.style.gridTemplateColumns = `repeat(${SIZE}, 40px)`;
  gridEl.innerHTML = '';

  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const cell = document.createElement('div');
      cell.className = grid[r][c] !== null ? 'cell white' : 'cell black';
      cell.dataset.r = r;
      cell.dataset.c = c;

      if (grid[r][c] !== null) {
        const key = `${r}-${c}`;
        if (cellNums[key]) {
          const numSpan = document.createElement('div');
          numSpan.className = 'cell-num';
          numSpan.textContent = cellNums[key];
          cell.appendChild(numSpan);
        }
        const inp = document.createElement('input');
        inp.maxLength = 1;
        inp.dataset.r = r;
        inp.dataset.c = c;
        inp.addEventListener('input', onCellInput);
        inp.addEventListener('keydown', onCellKeydown);
        inp.addEventListener('focus', onCellFocus);
        cell.appendChild(inp);
      }
      gridEl.appendChild(cell);
    }
  }

  renderClues(words);
}

function renderClues(words) {
  const across = words.filter(w => w.dir === 'across').sort((a,b)=>a.number-b.number);
  const down = words.filter(w => w.dir === 'down').sort((a,b)=>a.number-b.number);

  function makeClue(w) {
    const div = document.createElement('div');
    div.className = 'clue-item';
    div.dataset.wid = w.id;
    div.innerHTML = `<div class="clue-num">${w.number}</div><div class="clue-text">${w.clue}</div>`;
    div.addEventListener('click', () => focusWord(w));
    return div;
  }

  const acrossEl = document.getElementById('cluesAcross');
  const downEl = document.getElementById('cluesDown');
  acrossEl.innerHTML = '';
  downEl.innerHTML = '';
  across.forEach(w => acrossEl.appendChild(makeClue(w)));
  down.forEach(w => downEl.appendChild(makeClue(w)));
}

// ============================
// INPUT HANDLERS
// ============================
function getCell(r, c) {
  return document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`);
}
function getCellInput(r, c) {
  const cell = getCell(r, c);
  return cell ? cell.querySelector('input') : null;
}

function onCellFocus(e) {
  const r = parseInt(e.target.dataset.r);
  const c = parseInt(e.target.dataset.c);
  state.selectedCell = {r, c};
  highlightCell(r, c);
}

function highlightCell(r, c) {
  // Remove previous highlights
  document.querySelectorAll('.cell.white').forEach(el => {
    el.style.background = '';
  });
  // Find word containing this cell
  const word = state.words.find(w => {
    if (w.dir === 'across') return w.row===r && c>=w.col && c<w.col+w.word.length;
    return w.col===c && r>=w.row && r<w.row+w.word.length;
  });
  if (word) {
    for (let i=0;i<word.word.length;i++){
      const wr = word.dir==='across' ? word.row : word.row+i;
      const wc = word.dir==='across' ? word.col+i : word.col;
      const cell = getCell(wr,wc);
      if(cell) cell.style.background = 'rgba(184,100,10,0.1)';
    }
    highlightClue(word.id);
  }
  const selCell = getCell(r,c);
  if(selCell) selCell.style.background = 'rgba(184,100,10,0.22)';
}

function highlightClue(wid) {
  document.querySelectorAll('.clue-item').forEach(el => el.classList.remove('active'));
  const el = document.querySelector(`.clue-item[data-wid="${wid}"]`);
  if(el){ el.classList.add('active'); el.scrollIntoView({block:'nearest',behavior:'smooth'}); }
}

function onCellInput(e) {
  const r = parseInt(e.target.dataset.r);
  const c = parseInt(e.target.dataset.c);
  let val = e.target.value;
  // Keep only Arabic letters
  val = val.replace(/[^\u0600-\u06FF]/g,'');
  if(val.length > 1) val = val.slice(-1);
  e.target.value = val;
  state.userGrid[r][c] = val;
  getCell(r,c).classList.remove('correct','wrong','revealed');
  if(val) moveNext(r, c);
  updateScore();
}

function onCellKeydown(e) {
  const r = parseInt(e.target.dataset.r);
  const c = parseInt(e.target.dataset.c);
  if(e.key==='Backspace' && !e.target.value){
    movePrev(r, c);
  }
  if(e.key==='ArrowRight'){ e.preventDefault(); focusAt(r, c-1); }
  if(e.key==='ArrowLeft'){  e.preventDefault(); focusAt(r, c+1); }
  if(e.key==='ArrowUp'){    e.preventDefault(); focusAt(r-1, c); }
  if(e.key==='ArrowDown'){  e.preventDefault(); focusAt(r+1, c); }
}

function focusAt(r, c) {
  const inp = getCellInput(r, c);
  if(inp) inp.focus();
}

function moveNext(r, c) {
  // Find the word direction at this cell
  const word = state.words.find(w => {
    if(w.dir==='across') return w.row===r && c>=w.col && c<w.col+w.word.length;
    return w.col===c && r>=w.row && r<w.row+w.word.length;
  });
  if(!word) return;
  if(word.dir==='across') focusAt(r, c-1);
  else focusAt(r+1, c);
}

function movePrev(r, c) {
  const word = state.words.find(w => {
    if(w.dir==='across') return w.row===r && c>=w.col && c<w.col+w.word.length;
    return w.col===c && r>=w.row && r<w.row+w.word.length;
  });
  if(!word) return;
  if(word.dir==='across') focusAt(r, c+1);
  else focusAt(r-1, c);
}

function focusWord(w) {
  const inp = getCellInput(w.row, w.col);
  if(inp) inp.focus();
}

// ============================
// GAME CONTROLS
// ============================
function checkAnswers() {
  let correct = 0;
  state.words.forEach(w => {
    let wordCorrect = true;
    for(let i=0;i<w.word.length;i++){
      const r = w.dir==='across' ? w.row : w.row+i;
      const c = w.dir==='across' ? w.col+i : w.col;
      const inp = getCellInput(r,c);
      const cell = getCell(r,c);
      if(!inp || !cell) continue;
      const userLetter = state.userGrid[r][c];
      if(userLetter === w.word[i]){
        cell.classList.remove('wrong','revealed');
        cell.classList.add('correct');
      } else if(userLetter){
        cell.classList.remove('correct','revealed');
        cell.classList.add('wrong');
        wordCorrect = false;
      } else { wordCorrect = false; }
    }
    if(wordCorrect) correct++;
  });
  document.getElementById('scoreCorrect').textContent = correct;
  if(correct === state.words.length) showWin();
}

function revealCurrent() {
  if(!state.selectedCell) return;
  const {r, c} = state.selectedCell;
  const word = state.words.find(w => {
    if(w.dir==='across') return w.row===r && c>=w.col && c<w.col+w.word.length;
    return w.col===c && r>=w.row && r<w.row+w.word.length;
  });
  if(!word) return;
  for(let i=0;i<word.word.length;i++){
    const wr = word.dir==='across' ? word.row : word.row+i;
    const wc = word.dir==='across' ? word.col+i : word.col;
    const inp = getCellInput(wr,wc);
    const cell = getCell(wr,wc);
    if(!inp||!cell) continue;
    inp.value = word.word[i];
    state.userGrid[wr][wc] = word.word[i];
    cell.classList.remove('correct','wrong');
    cell.classList.add('revealed');
  }
  updateScore();
}

function revealAll() {
  state.words.forEach(w => {
    for(let i=0;i<w.word.length;i++){
      const r = w.dir==='across' ? w.row : w.row+i;
      const c = w.dir==='across' ? w.col+i : w.col;
      const inp = getCellInput(r,c);
      const cell = getCell(r,c);
      if(!inp||!cell) continue;
      inp.value = w.word[i];
      state.userGrid[r][c] = w.word[i];
      cell.classList.add('revealed');
    }
  });
  updateScore();
}

function resetPuzzle() {
  state.userGrid = Array.from({length:state.gridSize}, () => Array(state.gridSize).fill(''));
  document.querySelectorAll('.cell.white input').forEach(inp => inp.value='');
  document.querySelectorAll('.cell.white').forEach(c => c.classList.remove('correct','wrong','revealed'));
  state.seconds = 0;
  updateScore();
}

function newGame() {
  clearInterval(state.timerInterval);
  document.getElementById('winOverlay').classList.remove('show');
  document.getElementById('setupCard').style.display = '';
  document.getElementById('crosswordSection').classList.remove('visible');
  document.getElementById('genBtn').innerHTML = '<span>✦</span><span>أنشئ اللعبة</span>';
  document.getElementById('genBtn').disabled = false;
}

function showWin() {
  clearInterval(state.timerInterval);
  const m = Math.floor(state.seconds/60);
  const s = state.seconds%60;
  document.getElementById('winMsg').textContent = `أكملت ${state.words.length} كلمة في ${m}:${String(s).padStart(2,'0')} دقيقة!`;
  document.getElementById('winOverlay').classList.add('show');
}

// ============================
// SCORE & TIMER
// ============================
function updateScore() {
  let filled = 0, total = 0;
  state.words.forEach(w => {
    for(let i=0;i<w.word.length;i++){
      const r = w.dir==='across'?w.row:w.row+i;
      const c = w.dir==='across'?w.col+i:w.col;
      total++;
      if(state.userGrid[r]?.[c]) filled++;
    }
  });
  const pct = total ? Math.round(filled/total*100) : 0;
  document.getElementById('progressFill').style.width = pct+'%';
  document.getElementById('progressPct').textContent = pct+'%';
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.seconds = 0;
  state.timerInterval = setInterval(() => {
    state.seconds++;
    const m = Math.floor(state.seconds/60);
    const s = state.seconds%60;
    document.getElementById('scoreTimer').textContent = `${m}:${String(s).padStart(2,'0')}`;
  }, 1000);
}
</script>
</body>
</html>
