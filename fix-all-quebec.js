const fs = require('fs');
const path = require('path');
const dir = __dirname;

// ── See Also HTML (matches site's yellow theme) ──────────────────────────────
function getSeeAlso(file) {
  const f = file.toLowerCase();
  let links = [];

  if (f.includes('montreal')) {
    links = [
      ['/iptv-quebec-city.html', '📍 IPTV Quebec City'],
      ['/iptv-laval.html', '📍 IPTV Laval'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('quebec-city')) {
    links = [
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/iptv-gatineau.html', '📍 IPTV Gatineau'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('laval')) {
    links = [
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/iptv-longueuil.html', '📍 IPTV Longueuil'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/cheap-iptv-quebec.html', '💰 Cheap IPTV'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('longueuil')) {
    links = [
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/iptv-laval.html', '📍 IPTV Laval'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('sherbrooke')) {
    links = [
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/iptv-quebec-city.html', '📍 IPTV Quebec City'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/cheap-iptv-quebec.html', '💰 Cheap IPTV'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('gatineau')) {
    links = [
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/iptv-quebec-city.html', '📍 IPTV Quebec City'],
      ['/tsn-iptv-quebec.html', '📺 TSN IPTV'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('rds-iptv')) {
    links = [
      ['/tsn-iptv-quebec.html', '📺 TSN IPTV Quebec'],
      ['/french-channels-quebec.html', '🇫🇷 French Channels'],
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('tsn-iptv')) {
    links = [
      ['/rds-iptv-quebec.html', '📺 RDS IPTV Quebec'],
      ['/french-channels-quebec.html', '🇫🇷 French Channels'],
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('french-channels') || f.includes('chaines-francaises')) {
    links = [
      ['/rds-iptv-quebec.html', '📺 RDS IPTV Quebec'],
      ['/tsn-iptv-quebec.html', '📺 TSN IPTV Quebec'],
      ['/iptv-montreal.html', '📍 IPTV Montreal'],
      ['/channels.html', '📋 All Channels'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('channels')) {
    links = [
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/tsn-iptv-quebec.html', '📺 TSN IPTV'],
      ['/french-channels-quebec.html', '🇫🇷 French Channels'],
      ['/pricing.html', '💰 Pricing'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('firestick')) {
    links = [
      ['/iptv-samsung-tv-quebec.html', '📺 Samsung TV Setup'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/pricing.html', '💰 Pricing'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('samsung-tv')) {
    links = [
      ['/iptv-firestick-quebec.html', '🔥 Firestick Setup'],
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/channels.html', '📋 Channel List'],
      ['/pricing.html', '💰 Pricing'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('best-iptv')) {
    links = [
      ['/cheap-iptv-quebec.html', '💰 Cheap IPTV Quebec'],
      ['/iptv-vs-cable-quebec.html', '⚖️ IPTV vs Cable'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/is-iptv-legal-quebec.html', '⚖️ Is IPTV Legal?'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('cheap-iptv')) {
    links = [
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/iptv-vs-cable-quebec.html', '⚖️ IPTV vs Cable'],
      ['/pricing.html', '💰 Pricing Plans'],
      ['/is-iptv-legal-quebec.html', '⚖️ Is IPTV Legal?'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('vs-cable')) {
    links = [
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/cheap-iptv-quebec.html', '💰 Cheap IPTV'],
      ['/pricing.html', '💰 Pricing Plans'],
      ['/channels.html', '📋 Channel List'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else if (f.includes('is-iptv-legal') || f.includes('iptv-legal')) {
    links = [
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/iptv-vs-cable-quebec.html', '⚖️ IPTV vs Cable'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/pricing.html', '💰 Pricing'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  } else {
    // fallback
    links = [
      ['/best-iptv-quebec.html', '⭐ Best IPTV Quebec'],
      ['/rds-iptv-quebec.html', '📺 RDS IPTV'],
      ['/channels.html', '📋 Channel List'],
      ['/pricing.html', '💰 Pricing'],
      ['/free-trial.html', '🎁 Free Trial 24h'],
    ];
  }

  const linksHTML = links
    .map(([href, label]) => `<a href="${href}" style="background:#fff;border:1px solid #fde68a;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;color:#111;text-decoration:none;transition:.15s">${label}</a>`)
    .join('\n    ');

  return `
<!-- SEE ALSO -->
<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:16px 20px;margin:24px 0 8px">
  <div style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#92400e;margin-bottom:10px">📖 See Also</div>
  <div style="display:flex;flex-wrap:wrap;gap:7px">
    ${linksHTML}
  </div>
</div>`;
}

// ── Steps HTML ────────────────────────────────────────────────────────────────
function getSteps(file) {
  const f = file.toLowerCase();

  let title, steps;

  if (f.includes('firestick')) {
    title = '🔥 Setup on Firestick — 4 Steps';
    steps = [
      ['Download IPTV Smarters', 'Open Amazon App Store on your Firestick. Search "IPTV Smarters Pro" and install it.'],
      ['Start your free trial', 'Go to iptv-quebec.online/free-trial.html — 24h no credit card. Get M3U credentials by email in 5–30 min.'],
      ['Enter your credentials', 'In Smarters: Add User → Xtream Codes. Enter host, username, password received by email.'],
      ['Find your channels', 'Browse Live TV → search "RDS", "TSN", "TVA Sports". Stream in 4K instantly.'],
    ];
  } else if (f.includes('samsung-tv')) {
    title = '📺 Setup on Samsung TV — 4 Steps';
    steps = [
      ['Open Smart Hub', 'Press the Home button on your Samsung remote. Open the Apps store.'],
      ['Install IPTV Smarters', 'Search "IPTV Smarters" in Samsung App Store. Install and open the app.'],
      ['Enter M3U credentials', 'Select "Load your playlist" → Xtream Codes. Enter credentials received after trial signup.'],
      ['Stream RDS & TSN 4K', 'Browse Live TV. Find RDS, TVA Sports, TSN 1-5. Enjoy every game in Ultra HD.'],
    ];
  } else if (f.includes('rds-iptv') || f.includes('tsn-iptv') || f.includes('chaines') || f.includes('french-channels') || f.includes('channels')) {
    title = '▶ How to Get These Channels — 4 Steps';
    steps = [
      ['Start free trial', 'Visit free-trial.html — 24h trial, no credit card. Takes 2 minutes.'],
      ['Receive credentials', 'You\'ll get your M3U link and Xtream Codes by email in 5–30 minutes.'],
      ['Install the app', 'TiviMate on Firestick or IPTV Smarters on Smart TV / phone. Both free.'],
      ['Search your channel', 'Type "RDS", "TSN" or "TVA Sports" in the search bar. Stream immediately in 4K.'],
    ];
  } else if (f.includes('is-iptv-legal') || f.includes('iptv-legal')) {
    title = '✅ Get Legal IPTV — 4 Steps';
    steps = [
      ['Choose a trusted service', 'iptv-quebec.online — CAD pricing, Interac payment, EN/FR support, 30-day refund guarantee.'],
      ['Start the free 24h trial', 'No credit card required. Activate in 5–30 minutes.'],
      ['Test RDS, TSN, TVA Sports', 'Verify all Quebec channels work in 4K before committing to a plan.'],
      ['Subscribe if satisfied', '$12.99 CAD/month — no contract, cancel anytime. 100% legal.'],
    ];
  } else if (f.includes('vs-cable') || f.includes('best-iptv') || f.includes('cheap-iptv')) {
    title = '💡 Switch from Cable to IPTV — 4 Steps';
    steps = [
      ['Start the free trial', 'Try iptv-quebec.online free for 24h — no card. Compare with your current cable plan.'],
      ['Cancel your cable contract', 'Videotron and Bell waive cancellation fees for month-to-month plans.'],
      ['Set up IPTV in minutes', 'Install TiviMate on Firestick or IPTV Smarters on Smart TV. Enter M3U credentials.'],
      ['Save $70–$100/month', 'Same RDS, TSN, TVA Sports channels — for $12.99 instead of $85–$150/month.'],
    ];
  } else {
    // GEO pages fallback
    title = '▶ Get Started — 4 Steps';
    steps = [
      ['Start your free trial', 'Visit iptv-quebec.online/free-trial.html — 24h trial, no credit card required.'],
      ['Receive your M3U link', 'Your credentials arrive by email in 5–30 minutes after activation.'],
      ['Install on your device', 'TiviMate on Firestick, IPTV Smarters on Smart TV, or any M3U-compatible app.'],
      ['Enjoy 25,000+ channels in 4K', 'RDS, TVA Sports, TSN 1-5, ICI Radio-Canada — zero blackouts, no contracts.'],
    ];
  }

  const stepsHTML = steps.map(([t, d], i) =>
    `<div class="step"><div class="snum">${i + 1}</div><div class="sbody"><div class="stitle">${t}</div><div class="sdesc">${d}</div></div></div>`
  ).join('\n    ');

  return `
<!-- STEPS SECTION -->
<h2 style="font-size:17px;font-weight:800;margin:24px 0 10px">${title}</h2>
<div class="steps">
    ${stepsHTML}
</div>`;
}

// ── Quick Answer for channels.html ────────────────────────────────────────────
const CHANNELS_QA = `<div class="ab"><div class="abl">📌 Quick Answer</div><p><strong>iptv-quebec.online includes 25,000+ live channels</strong> — RDS, RDS2, TVA Sports, TSN 1–5, Sportsnet, ICI Radio-Canada, CBC, CTV, ESPN, Sky Sports and more. All plans include 4K Ultra HD. Free 24h trial — no credit card.</p></div>
`;

// ── Pages to process ──────────────────────────────────────────────────────────
const CONTENT_PAGES = [
  'best-iptv-quebec.html',
  'chaines-francaises.html',
  'channels.html',
  'cheap-iptv-quebec.html',
  'french-channels-quebec.html',
  'iptv-firestick-quebec.html',
  'iptv-gatineau.html',
  'iptv-laval.html',
  'iptv-legal-quebec.html',
  'iptv-longueuil.html',
  'iptv-montreal.html',
  'iptv-quebec-city.html',
  'iptv-samsung-tv-quebec.html',
  'iptv-sherbrooke.html',
  'iptv-vs-cable-quebec.html',
  'is-iptv-legal-quebec.html',
  'rds-iptv-quebec.html',
  'tsn-iptv-quebec.html',
];

let seeAlsoAdded = 0;
let stepsAdded = 0;
let qaAdded = 0;
let domainFixed = 0;

CONTENT_PAGES.forEach(file => {
  const fp = path.join(dir, file);
  if (!fs.existsSync(fp)) { console.log(`⚠  Not found: ${file}`); return; }

  let html = fs.readFileSync(fp, 'utf8');
  let changed = false;

  // ── 1. Fix wrong domain iptvv.online → iptv-quebec.online ──────────────
  if (html.includes('iptvv.online') && !file.includes('best-iptv-quebec') === false) {
    // Only fix in best-iptv-quebec.html (the one confirmed occurrence)
  }
  if (html.includes('iptvv.online')) {
    html = html.split('iptvv.online').join('iptv-quebec.online');
    domainFixed++;
    changed = true;
    console.log(`🔧 Fixed wrong domain: ${file}`);
  }

  // ── 2. Add Quick Answer to channels.html if missing ─────────────────────
  if (file === 'channels.html' && !html.includes('class="ab"')) {
    html = html.replace('<div class="art">', CHANNELS_QA + '<div class="art">');
    qaAdded++;
    changed = true;
    console.log(`✅ Quick Answer added: ${file}`);
  }

  // ── 3. Add Steps before FAQ if not already present ──────────────────────
  if (!html.includes('<!-- STEPS SECTION -->') && html.includes('class="faq-list"')) {
    const stepsHTML = getSteps(file);
    html = html.replace('class="faq-list"', stepsHTML + '\n<div class="faq-list"');
    // fix the extra opening tag we just created
    html = html.replace('<div class="faq-list"\n<div class="faq-list"', stepsHTML + '\n<div class="faq-list"');
    stepsAdded++;
    changed = true;
    console.log(`✅ Steps added: ${file}`);
  }

  // ── 4. Add See Also before </main> if not already present ───────────────
  if (!html.includes('<!-- SEE ALSO -->') && html.includes('</main>')) {
    const seeAlsoHTML = getSeeAlso(file);
    html = html.replace('</main>', seeAlsoHTML + '\n</main>');
    seeAlsoAdded++;
    changed = true;
    console.log(`✅ See Also added: ${file}`);
  }

  if (changed) {
    fs.writeFileSync(fp, html, 'utf8');
  } else {
    console.log(`⏭  No changes: ${file}`);
  }
});

console.log(`\n── DONE ──`);
console.log(`See Also added:   ${seeAlsoAdded} pages`);
console.log(`Steps added:      ${stepsAdded} pages`);
console.log(`Quick Answer:     ${qaAdded} pages`);
console.log(`Domain fixed:     ${domainFixed} pages`);
