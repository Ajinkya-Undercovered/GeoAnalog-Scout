// Planetary Analogue Field Protocol - Sophisticated Workstation Controller
// Drives GEOANALOG SCOUT clean luxury aerospace experience

let sites = window.PlanetarySites || [];
const simulantData = window.SimulantProfiles || {};
const missionList = window.MissionTargets || [];

let activeSite = sites[0] || null;
let activeCategory = 'all';
let satelliteMap = null;
let satelliteMarker = null;

document.addEventListener('DOMContentLoaded', () => {
  if (!sites.length) {
    console.error('PlanetarySites dataset missing');
    return;
  }

  initHeroDossier(activeSite);
  renderCandidateCards('all');
  initCollapsibleSidebar();
  initFilterChips();
  initSearch();
  initMissionSelector();
  initSimulantSelector();
  initModals();
  initTerminal();
  initAddReconForm();
  initSyncButton();
  initOrbitalPassTimer();
  populateMatrixTable();
});

// ================= 1. HERO SHOWCASE =================
function initHeroDossier(site) {
  if (!site) return;
  activeSite = site;

  // Header badges & metadata
  const badgeEl = document.getElementById('hero-badge');
  const sectorEl = document.getElementById('hero-sector');
  const nameEl = document.getElementById('hero-name');
  const coordsEl = document.getElementById('hero-coords');
  const elevEl = document.getElementById('hero-elev');
  const impactEl = document.getElementById('hero-impact');
  const fidelityEl = document.getElementById('hero-fidelity');
  const imageEl = document.getElementById('hero-image');
  const geoZoneEl = document.getElementById('hero-geo-zone');
  const geoDescEl = document.getElementById('hero-geo-desc');

  if (badgeEl) badgeEl.textContent = site.dossierCode;
  if (sectorEl) sectorEl.textContent = site.sector;
  if (nameEl) nameEl.textContent = `${site.name} (${site.region})`;
  if (coordsEl) coordsEl.textContent = `WGS84: ${site.coords}`;
  if (elevEl) elevEl.textContent = `ELEV: ${site.elev}`;
  if (impactEl) impactEl.textContent = `IMPACT AGE: ${site.impactAge}`;
  if (fidelityEl) fidelityEl.textContent = `${site.fidelity}%`;
  if (imageEl) imageEl.src = site.image;
  if (geoZoneEl) geoZoneEl.textContent = site.geoZone;
  if (geoDescEl) geoDescEl.textContent = site.geoZoneDesc;

  // 4 Bento breakdown specs
  if (site.specs) {
    document.getElementById('hero-geom-title').textContent = site.specs.geomorphology.title;
    document.getElementById('hero-geom-desc').textContent = site.specs.geomorphology.desc;
    document.getElementById('hero-geom-match').textContent = `MATCH INDEX: ${site.specs.geomorphology.match}`;

    document.getElementById('hero-clim-title').textContent = site.specs.climate.title;
    document.getElementById('hero-clim-desc').textContent = site.specs.climate.desc;
    document.getElementById('hero-clim-match').textContent = `MATCH INDEX: ${site.specs.climate.match}`;

    document.getElementById('hero-hab-title').textContent = site.specs.hab.title;
    document.getElementById('hero-hab-desc').textContent = site.specs.hab.desc;
    document.getElementById('hero-hab-match').textContent = `MATCH INDEX: ${site.specs.hab.match}`;

    document.getElementById('hero-vol-title').textContent = site.specs.volatile.title;
    document.getElementById('hero-vol-desc').textContent = site.specs.volatile.desc;
    document.getElementById('hero-vol-match').textContent = `MATCH INDEX: ${site.specs.volatile.match}`;
  }

  // Right-hand telemetry readouts
  if (site.telemetry) {
    document.getElementById('tel-poi').textContent = site.telemetry.poiIndex;
    document.getElementById('tel-poi-status').textContent = site.telemetry.poiStatus;
    document.getElementById('tel-uv').textContent = site.telemetry.uvFlux;
    document.getElementById('tel-uv-status').textContent = site.telemetry.uvStatus;
    document.getElementById('tel-wie').textContent = site.telemetry.wie;
    document.getElementById('tel-wie-status').textContent = site.telemetry.wieStatus;
    document.getElementById('tel-latency').textContent = site.telemetry.latency;
    document.getElementById('tel-latency-status').textContent = site.telemetry.latencyStatus;

    // Bar matrix
    if (site.telemetry.bars) {
      document.getElementById('bar-sio2').style.width = site.telemetry.bars.sio2;
      document.getElementById('bar-sio2-val').textContent = site.telemetry.bars.sio2;
      document.getElementById('bar-grain').style.width = site.telemetry.bars.grain;
      document.getElementById('bar-grain-val').textContent = site.telemetry.bars.grain;
      document.getElementById('bar-vol').style.width = site.telemetry.bars.volatile;
      document.getElementById('bar-vol-val').textContent = site.telemetry.bars.volatile;
      document.getElementById('bar-dielectric').style.width = site.telemetry.bars.dielectric;
      document.getElementById('bar-dielectric-val').textContent = site.telemetry.bars.dielectric;
    }

    // SVG Radar Polygon
    const radarPoly = document.getElementById('svg-radar-poly');
    if (radarPoly && site.telemetry.radarPoints) {
      radarPoly.setAttribute('points', site.telemetry.radarPoints);
    }
  }

  // Update satellite map if open
  if (satelliteMap && satelliteMarker) {
    satelliteMarker.setLatLng([site.lat, site.lng]);
    satelliteMap.setView([site.lat, site.lng], 7);
  }
}

// ================= 2. CANDIDATE CARDS (SOPHISTICATED) =================
function renderCandidateCards(filterCat = 'all') {
  const grid = document.getElementById('candidate-grid');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = sites.filter(s => s.id !== activeSite.id);
  const displaySites = filtered.filter(s => filterCat === 'all' || (s.category && s.category.includes(filterCat)));

  displaySites.forEach(s => {
    const card = document.createElement('div');
    card.className = 'glass-card glass-card-hover p-4 rounded-xl flex flex-col justify-between cursor-pointer space-y-3 group border border-white/[0.06] hover:border-terracotta-500/40';
    card.setAttribute('data-site-id', s.id);

    card.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-terracotta-400 font-bold font-tabular">${s.fidelity}% MATCH</span>
          <span class="text-slate-subtle">${s.coords}</span>
        </div>
        <h4 class="font-space font-bold text-sm text-white group-hover:text-terracotta-400 transition-colors">${s.name}</h4>
        <p class="text-[11px] text-slate-subtle">${s.region}</p>
      </div>

      <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">
        ${s.geoZoneDesc || s.specs?.geomorphology?.desc || s.name}
      </p>

      <div class="flex items-center justify-between text-[10px] font-mono border-t border-white/[0.04] pt-2 text-slate-subtle">
        <span class="truncate max-w-[130px] uppercase text-[9px] tracking-wider">${s.analogType}</span>
        <span class="text-terracotta-400 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
          <span>Inspect</span>
          <span class="text-xs">›</span>
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      initHeroDossier(s);
      renderCandidateCards(activeCategory);
      const hero = document.getElementById('hero-section');
      if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    grid.appendChild(card);
  });

  const badge = document.getElementById('sync-candidate-badge');
  if (badge) badge.textContent = `${displaySites.length} SITES SYNCHRONIZED`;
}

// ================= 3. FILTER PILLS =================
function initFilterChips() {
  const container = document.getElementById('filter-chips-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    document.querySelectorAll('.filter-chip').forEach(c => {
      c.className = 'filter-chip px-3.5 py-1.5 rounded-full bg-space-850 text-slate-subtle hover:text-white border border-white/[0.06] hover:border-white/[0.15] transition-all';
    });
    chip.className = 'filter-chip px-3.5 py-1.5 rounded-full bg-terracotta-500 text-white font-semibold shadow-sm transition-all';

    activeCategory = chip.getAttribute('data-cat');
    renderCandidateCards(activeCategory);
  });
}

// ================= 4. REAL-TIME SEARCH =================
function initSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  // Global Ctrl+K / Cmd+K
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('#candidate-grid > div');
    let count = 0;

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        card.style.display = 'flex';
        count++;
      } else {
        card.style.display = 'none';
      }
    });

    const badge = document.getElementById('sync-candidate-badge');
    if (badge) badge.textContent = `${count} MATCHES FOUND`;
  });
}

// ================= 5. DYNAMIC MISSION SELECTOR =================
function initMissionSelector() {
  const select = document.getElementById('mission-target-select');
  const badge = document.getElementById('mission-sub-badge');
  const title = document.getElementById('mission-main-title');

  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    const target = missionList.find(m => m.id === val);
    if (!target) return;

    if (badge) badge.textContent = `OPS PLAN // ${target.code}`;
    if (title) title.textContent = target.title;

    const topSite = sites.find(s => s.id === target.topSiteId);
    if (topSite) {
      initHeroDossier(topSite);
      renderCandidateCards(activeCategory);
      
      const linkBadge = document.getElementById('live-link-badge');
      if (linkBadge) {
        linkBadge.textContent = 'MISSION RECALIBRATED';
        linkBadge.className = 'text-[10px] font-mono text-terracotta-400 bg-terracotta-500/10 border border-terracotta-500/20 px-2 py-0.5 rounded-full';
        setTimeout(() => {
          linkBadge.textContent = 'ORBIT LINK LOCKED';
          linkBadge.className = 'text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full';
        }, 1500);
      }
    }
  });
}

// ================= 6. REGOLITH SIMULANT SELECTOR =================
function initSimulantSelector() {
  const select = document.getElementById('simulant-select');
  if (!select) return;

  select.addEventListener('change', (e) => {
    const prof = simulantData[e.target.value];
    if (prof && prof.bars) {
      document.getElementById('bar-sio2').style.width = prof.bars.sio2;
      document.getElementById('bar-sio2-val').textContent = prof.bars.sio2;
      document.getElementById('bar-grain').style.width = prof.bars.grain;
      document.getElementById('bar-grain-val').textContent = prof.bars.grain;
      document.getElementById('bar-vol').style.width = prof.bars.volatile;
      document.getElementById('bar-vol-val').textContent = prof.bars.volatile;
      document.getElementById('bar-dielectric').style.width = prof.bars.dielectric;
      document.getElementById('bar-dielectric-val').textContent = prof.bars.dielectric;
    }
  });
}

// ================= 7. MODALS & NAV TABS =================
function initModals() {
  // Brand Home
  const brandHome = document.getElementById('btn-brand-home');
  const tabOverview = document.getElementById('tab-overview');
  if (brandHome) brandHome.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  if (tabOverview) tabOverview.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Satellite Modal
  const satModal = document.getElementById('satellite-modal');
  const tabRadar = document.getElementById('tab-radar');
  const spectralBtn = document.getElementById('btn-spectral-layer');
  const closeSatBtn = document.getElementById('btn-close-satellite');

  function openSatellite() {
    if (satModal) {
      satModal.classList.remove('hidden');
      setTimeout(initSatelliteMap, 150);
    }
  }

  if (tabRadar) tabRadar.addEventListener('click', openSatellite);
  if (spectralBtn) spectralBtn.addEventListener('click', openSatellite);
  if (closeSatBtn) closeSatBtn.addEventListener('click', () => satModal.classList.add('hidden'));

  // Dossier Modal
  const dosModal = document.getElementById('dossier-modal');
  const fullDossierBtn = document.getElementById('btn-full-dossier');
  const exportDossierBtn = document.getElementById('btn-export-dossier');
  const closeDosBtn = document.getElementById('btn-close-dossier');
  const printBtn = document.getElementById('btn-print-modal');
  const downloadJsonBtn = document.getElementById('btn-download-json');

  function openDossier() {
    if (dosModal && activeSite) {
      populateDossierModal(activeSite);
      dosModal.classList.remove('hidden');
    }
  }

  if (fullDossierBtn) fullDossierBtn.addEventListener('click', openDossier);
  if (exportDossierBtn) exportDossierBtn.addEventListener('click', openDossier);
  if (closeDosBtn) closeDosBtn.addEventListener('click', () => dosModal.classList.add('hidden'));
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  if (downloadJsonBtn) {
    downloadJsonBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activeSite, null, 2));
      const a = document.createElement('a');
      a.setAttribute('href', dataStr);
      a.setAttribute('download', `${activeSite.id}-mission-telemetry.json`);
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  // Surface Matrix Modal
  const matrixModal = document.getElementById('matrix-modal');
  const tabMatrix = document.getElementById('tab-matrix');
  const closeMatrixBtn = document.getElementById('btn-close-matrix');

  if (tabMatrix) {
    tabMatrix.addEventListener('click', () => {
      matrixModal.classList.remove('hidden');
    });
  }
  if (closeMatrixBtn) closeMatrixBtn.addEventListener('click', () => matrixModal.classList.add('hidden'));

  // Add Recon Modal
  const reconModal = document.getElementById('add-recon-modal');
  const btnAddRecon = document.getElementById('btn-add-recon');
  const closeReconBtn = document.getElementById('btn-close-add-recon');

  if (btnAddRecon) btnAddRecon.addEventListener('click', () => reconModal.classList.remove('hidden'));
  if (closeReconBtn) closeReconBtn.addEventListener('click', () => reconModal.classList.add('hidden'));

  // Global ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [satModal, dosModal, matrixModal, reconModal].forEach(m => {
        if (m) m.classList.add('hidden');
      });
      const termModal = document.getElementById('terminal-modal');
      if (termModal) termModal.classList.add('hidden');
    }
  });
}

function populateDossierModal(site) {
  if (!site) return;
  document.getElementById('modal-dossier-id').textContent = `NASA-ANALOG-${Math.floor(100000 + Math.random() * 900000)}`;
  document.getElementById('modal-site-name').textContent = `${site.name} (${site.region})`;
  document.getElementById('modal-site-fidelity').textContent = `${site.fidelity}% FIDELITY`;
  document.getElementById('modal-site-coords').textContent = `WGS84: ${site.coords}`;
  document.getElementById('modal-site-elev').textContent = site.elev;
  document.getElementById('modal-site-desc').textContent = site.geoZoneDesc;
  if (site.specs && site.specs.hab) {
    document.getElementById('modal-site-hab').textContent = `${site.specs.hab.title}. ${site.specs.hab.desc}`;
  }
}

function populateMatrixTable() {
  const tbody = document.getElementById('matrix-table-body');
  if (!tbody) return;

  tbody.innerHTML = sites.map(s => `
    <tr class="border-b border-white/[0.04] hover:bg-space-850 transition-colors cursor-pointer" onclick="selectSiteFromMatrix('${s.id}')">
      <td class="p-3 font-bold text-white border-r border-white/[0.06]">${s.name}</td>
      <td class="p-3 font-bold text-terracotta-400 border-r border-white/[0.06] font-tabular">${s.fidelity}%</td>
      <td class="p-3 border-r border-white/[0.06]">${s.telemetry.poiIndex}</td>
      <td class="p-3 border-r border-white/[0.06]">${s.telemetry.uvFlux}</td>
      <td class="p-3 border-r border-white/[0.06]">${s.telemetry.wie}</td>
      <td class="p-3 text-slate-subtle">${s.analogType}</td>
    </tr>
  `).join('');
}

window.selectSiteFromMatrix = function(siteId) {
  const found = sites.find(s => s.id === siteId);
  if (found) {
    initHeroDossier(found);
    renderCandidateCards(activeCategory);
    const matrixModal = document.getElementById('matrix-modal');
    if (matrixModal) matrixModal.classList.add('hidden');
  }
};

// ================= 8. MISSION TERMINAL HUD =================
function initTerminal() {
  const termModal = document.getElementById('terminal-modal');
  const tabTelemetry = document.getElementById('tab-telemetry');
  const closeBtn = document.getElementById('btn-close-terminal');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (tabTelemetry) {
    tabTelemetry.addEventListener('click', () => {
      termModal.classList.remove('hidden');
      if (input) input.focus();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => termModal.classList.add('hidden'));

  if (input && output) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';
        executeTerminalCommand(cmd, output);
      }
    });
  }
}

function executeTerminalCommand(cmd, output) {
  const log = (msg, isErr = false) => {
    const div = document.createElement('div');
    div.className = isErr ? 'text-error text-red-400' : 'text-slate-100';
    div.innerHTML = msg;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  };

  log(`<span class="text-terracotta-400 font-bold">&gt; ${cmd.toUpperCase()}</span>`);

  if (!cmd) return;

  switch (cmd) {
    case 'help':
      log(`AVAILABLE COMMANDS:
- <span class="text-terracotta-400">scan</span> : Perform orbital SAR sweep on active site
- <span class="text-terracotta-400">sites</span> : List all active Earth analog testbeds
- <span class="text-terracotta-400">target [name]</span> : Switch target (e.g. target mcmurdo, target atacama)
- <span class="text-terracotta-400">dossier</span> : View current active flight authorization summary
- <span class="text-terracotta-400">ping</span> : Test orbital uplink latency
- <span class="text-terracotta-400">clear</span> : Clear terminal buffer`);
      break;
    case 'scan':
      log(`[SWOT-2 SAR RECON] P-Band Synthetic Aperture Radar active...`);
      log(`[TARGET] ${activeSite.name} // WGS84: ${activeSite.coords}`);
      log(`[RADAR COMPOSITE] 100% Signal lock. Backscatter intensity: -14.2 dB. Status: NOMINAL.`);
      break;
    case 'sites':
      sites.forEach(s => log(`• ${s.name} [${s.coords}] — Fidelity: ${s.fidelity}%`));
      break;
    case 'dossier':
      log(`ACTIVE DOSSIER: ${activeSite.dossierCode} // ${activeSite.name}`);
      log(`REGIME: ${activeSite.analogType} | ELEVATION: ${activeSite.elev}`);
      break;
    case 'ping':
      log(`PING ORBITAL RELAY SWOT-2: 64 bytes from 192.0.2.42: time=${activeSite.telemetry.latency}`);
      break;
    case 'clear':
      output.innerHTML = '';
      break;
    default:
      if (cmd.startsWith('target ')) {
        const query = cmd.replace('target ', '').trim();
        const found = sites.find(s => s.id.includes(query) || s.name.toLowerCase().includes(query));
        if (found) {
          initHeroDossier(found);
          renderCandidateCards(activeCategory);
          log(`TARGET SWITCHED TO: <span class="text-terracotta-400 font-bold">${found.name}</span> (${found.coords})`);
        } else {
          log(`Site not found. Use 'sites' to list valid target IDs.`, true);
        }
      } else {
        log(`Command not recognized: '${cmd}'. Type 'help' for available commands.`, true);
      }
      break;
  }
}

// ================= 9. ADD TARGET RECON FORM =================
function initAddReconForm() {
  const form = document.getElementById('form-add-recon');
  const modal = document.getElementById('add-recon-modal');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('input-site-name').value;
    const region = document.getElementById('input-site-region').value;
    const lat = parseFloat(document.getElementById('input-site-lat').value);
    const lng = parseFloat(document.getElementById('input-site-lng').value);
    const geo = document.getElementById('input-site-geo').value;

    const newId = `custom-${Date.now()}`;
    const newSite = {
      id: newId,
      dossierCode: `RECON TESTBED #${sites.length + 1}`,
      sector: `${region.toUpperCase()} SECTOR`,
      name: name,
      region: region,
      coords: `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? 'N' : 'S'} ${Math.abs(lng).toFixed(2)}°${lng >= 0 ? 'E' : 'W'}`,
      lat: lat,
      lng: lng,
      elev: "450m ASL",
      impactAge: "Active Field Deployment",
      fidelity: (88.5 + Math.random() * 8).toFixed(1),
      analogType: "DEPLOYED FIELD RECON",
      category: "all lunar-polar martian-permafrost",
      geoZone: `GEO-ZONE: ${geo.toUpperCase()}`,
      geoZoneDesc: `Field scout telemetry established for ${name}. Real-time surface parameters synchronized.`,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      specs: {
        geomorphology: { title: geo, desc: "Custom survey geomorphological target", match: "93.4%" },
        climate: { title: "Polar / Arid Field Recon", desc: "Local meteorological parameters logged", match: "91.0%" },
        hab: { title: "Custom Habitat Placement", desc: "Perimeter soil stability verified", match: "89.5%" },
        volatile: { title: "Subsurface Volatiles", desc: "Moisture / ice assay underway", match: "90.2%" }
      },
      telemetry: {
        poiIndex: "0.88 POI-NORM",
        poiStatus: "CALIBRATED",
        uvFlux: "16.4 W/m²",
        uvStatus: "NOMINAL",
        wie: "2.8 wt%",
        wieStatus: "DETECTION+",
        latency: "148 ms",
        latencyStatus: "OPTIMAL",
        bars: { sio2: "92.0%", grain: "89.0%", volatile: "78.0%", dielectric: "94.0%" },
        radarPoints: "50,19 76,38 66,72 32,70 22,37"
      }
    };

    sites.push(newSite);
    renderCandidateCards(activeCategory);
    populateMatrixTable();
    if (window.refreshSidebarSites) window.refreshSidebarSites();
    initHeroDossier(newSite);

    form.reset();
    modal.classList.add('hidden');
  });
}

// ================= 10. SATELLITE LEAFLET MAP =================
function initSatelliteMap() {
  const container = document.getElementById('satellite-map');
  if (!container || !activeSite) return;

  if (!satelliteMap) {
    satelliteMap = L.map('satellite-map', {
      zoomControl: false,
      attributionControl: false
    }).setView([activeSite.lat, activeSite.lng], 7);

    L.control.zoom({ position: 'topright' }).addTo(satelliteMap);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    }).addTo(satelliteMap);

    const icon = L.divIcon({
      className: 'tactical-beacon',
      html: `
        <div class="relative flex items-center justify-center">
          <span class="absolute w-8 h-8 border-2 border-terracotta-500 rounded-full animate-ping"></span>
          <div class="w-3.5 h-3.5 bg-terracotta-500 border-2 border-white rounded-full"></div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    satelliteMarker = L.marker([activeSite.lat, activeSite.lng], { icon }).addTo(satelliteMap);
  } else {
    satelliteMarker.setLatLng([activeSite.lat, activeSite.lng]);
    satelliteMap.setView([activeSite.lat, activeSite.lng], 7);
    satelliteMap.invalidateSize();
  }
}

// ================= 11. SYNC BUTTON ANIMATION =================
function initSyncButton() {
  const syncBtn = document.getElementById('btn-sync-orbital');
  const syncText = document.getElementById('sync-text');
  if (!syncBtn) return;

  syncBtn.addEventListener('click', () => {
    const icon = syncBtn.querySelector('.material-symbols-outlined');
    if (icon) icon.classList.add('animate-spin');
    if (syncText) syncText.textContent = 'SYNCING...';

    setTimeout(() => {
      if (icon) icon.classList.remove('animate-spin');
      if (syncText) syncText.textContent = 'SYNCED';
      
      const badge = document.getElementById('live-link-badge');
      if (badge) {
        badge.classList.add('text-terracotta-400');
        setTimeout(() => badge.classList.remove('text-terracotta-400'), 1200);
      }
    }, 800);
  });
}

// ================= 12. ORBITAL PASS COUNTDOWN TIMER =================
function initOrbitalPassTimer() {
  const timerEl = document.getElementById('orbital-timer');
  const sidebarTimerEl = document.getElementById('sidebar-pass-timer');

  let totalSeconds = 14 * 60 + 28;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    else totalSeconds = 45 * 60;

    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    const timeStr = `T-MINUS 00:${m}:${s}`;
    if (timerEl) timerEl.textContent = timeStr;
    if (sidebarTimerEl) sidebarTimerEl.textContent = timeStr;
  }, 1000);
}

// ================= 13. COLLAPSIBLE LEFT SIDEBAR (THREE LINES MENU) =================
function initCollapsibleSidebar() {
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const closeBtn = document.getElementById('sidebar-close-btn');
  const backdrop = document.getElementById('sidebar-backdrop');
  const drawer = document.getElementById('left-sidebar-drawer');
  const container = document.getElementById('sidebar-sites-container');
  const searchInput = document.getElementById('sidebar-search-input');
  const filterChips = document.getElementById('sidebar-filter-chips');
  const missionLabel = document.getElementById('sidebar-mission-label');

  if (!toggleBtn || !drawer || !backdrop) return;

  let isSidebarOpen = false;
  let sidebarCategory = 'all';
  let sidebarSearchTerm = '';

  function openSidebar() {
    isSidebarOpen = true;
    drawer.classList.remove('-translate-x-full');
    drawer.classList.add('translate-x-0');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    toggleBtn.classList.add('sidebar-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    renderSidebarSites();
    if (searchInput) searchInput.focus();
  }

  function closeSidebar() {
    isSidebarOpen = false;
    drawer.classList.add('-translate-x-full');
    drawer.classList.remove('translate-x-0');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    toggleBtn.classList.remove('sidebar-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleSidebar() {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  // Toggle button click (Three lines)
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
  });

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  // Backdrop click
  backdrop.addEventListener('click', closeSidebar);

  // Keyboard Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isSidebarOpen) {
      closeSidebar();
    }
  });

  // Search input in sidebar
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      sidebarSearchTerm = e.target.value.toLowerCase().trim();
      renderSidebarSites();
    });
  }

  // Category filter chips in sidebar
  if (filterChips) {
    filterChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.sidebar-cat-chip');
      if (!chip) return;

      document.querySelectorAll('.sidebar-cat-chip').forEach(c => {
        c.className = 'sidebar-cat-chip px-2.5 py-1 rounded-full text-[10px] font-mono bg-space-850 text-slate-subtle hover:text-white border border-white/[0.06] transition-all cursor-pointer';
      });
      chip.className = 'sidebar-cat-chip px-2.5 py-1 rounded-full text-[10px] font-mono bg-terracotta-500 text-white font-semibold transition-all cursor-pointer';

      sidebarCategory = chip.getAttribute('data-cat') || 'all';
      renderSidebarSites();
    });
  }

  // Quick Action Buttons in sidebar
  const btnMap = document.getElementById('sidebar-btn-map');
  if (btnMap) {
    btnMap.addEventListener('click', () => {
      closeSidebar();
      const targetBtn = document.getElementById('btn-view-satellite') || document.getElementById('btn-hero-satellite');
      if (targetBtn) targetBtn.click();
    });
  }

  const btnMatrix = document.getElementById('sidebar-btn-matrix');
  if (btnMatrix) {
    btnMatrix.addEventListener('click', () => {
      closeSidebar();
      const targetBtn = document.getElementById('tab-matrix') || document.getElementById('btn-surface-matrix-view');
      if (targetBtn) targetBtn.click();
    });
  }

  const btnTerminal = document.getElementById('sidebar-btn-terminal');
  if (btnTerminal) {
    btnTerminal.addEventListener('click', () => {
      closeSidebar();
      const targetBtn = document.getElementById('tab-telemetry');
      if (targetBtn) targetBtn.click();
    });
  }

  const btnRecon = document.getElementById('sidebar-btn-recon');
  if (btnRecon) {
    btnRecon.addEventListener('click', () => {
      closeSidebar();
      const targetBtn = document.getElementById('btn-add-recon');
      if (targetBtn) targetBtn.click();
    });
  }

  // Render analog sites in sidebar
  function renderSidebarSites() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = sites.filter(s => {
      const matchesCat = (sidebarCategory === 'all' || (s.category && s.category.includes(sidebarCategory)));
      const matchesSearch = !sidebarSearchTerm || 
        s.name.toLowerCase().includes(sidebarSearchTerm) ||
        s.region.toLowerCase().includes(sidebarSearchTerm) ||
        (s.specs?.geomorphology?.title && s.specs.geomorphology.title.toLowerCase().includes(sidebarSearchTerm)) ||
        (s.specs?.climate?.title && s.specs.climate.title.toLowerCase().includes(sidebarSearchTerm));
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-slate-subtle border border-white/[0.04] rounded-xl bg-space-900/30">
          <span class="material-symbols-outlined text-2xl mb-1 text-slate-500" data-icon="search_off">search_off</span>
          <p class="text-xs font-mono">No matching analog sites found.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(s => {
      const isActive = activeSite && (activeSite.id === s.id);
      const card = document.createElement('div');
      card.className = `p-3 rounded-xl border transition-all flex flex-col gap-1.5 cursor-pointer group ${
        isActive 
          ? 'border-terracotta-500/80 bg-space-850/90 shadow-lg shadow-terracotta-500/10' 
          : 'border-white/[0.06] hover:border-terracotta-500/40 bg-space-900/40 hover:bg-space-850/70'
      }`;
      card.setAttribute('data-sidebar-site-id', s.id);

      card.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-terracotta-400 animate-pulse' : 'bg-slate-500'}"></span>
            <span class="text-[9px] font-mono text-terracotta-400 uppercase tracking-wider font-semibold">${s.dossierCode}</span>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${
            isActive 
              ? 'bg-terracotta-500 text-white font-bold' 
              : 'bg-terracotta-500/10 text-terracotta-400 border border-terracotta-500/20 font-bold'
          }">${s.fidelity}% MATCH</span>
        </div>
        <h4 class="font-space font-bold text-xs text-white group-hover:text-terracotta-400 transition-colors">${s.name}</h4>
        <p class="text-[10px] text-slate-subtle line-clamp-1">${s.region} • ${s.coords}</p>
        <div class="flex items-center justify-between text-[9px] font-mono text-slate-subtle pt-1.5 border-t border-white/[0.04]">
          <span class="uppercase tracking-wider truncate max-w-[170px]">${s.analogType}</span>
          <span class="text-terracotta-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5 font-semibold">
            <span>${isActive ? 'Active' : 'Load Site'}</span>
            <span>›</span>
          </span>
        </div>
      `;

      card.addEventListener('click', () => {
        initHeroDossier(s);
        renderCandidateCards(activeCategory);
        renderSidebarSites();
        
        // Scroll to hero section smoothly
        const hero = document.getElementById('hero-section');
        if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Close drawer after selection so user sees the updated view
        setTimeout(closeSidebar, 200);
      });

      container.appendChild(card);
    });
  }

  // Sync sidebar mission label when mission select changes
  const missionSelect = document.getElementById('mission-target-select');
  if (missionSelect && missionLabel) {
    const updateMissionLabel = () => {
      const selectedOption = missionSelect.options[missionSelect.selectedIndex];
      if (selectedOption) {
        missionLabel.textContent = selectedOption.textContent.replace(/^[^\s]+\s*/, '');
      }
    };
    missionSelect.addEventListener('change', updateMissionLabel);
    updateMissionLabel();
  }

  // Also expose re-render if new recon site added
  window.refreshSidebarSites = renderSidebarSites;

  // Initial render of sidebar sites
  renderSidebarSites();

  // Support ?sidebar=open or #sidebar trigger
  if (window.location.search.includes('sidebar=open') || window.location.hash === '#sidebar') {
    setTimeout(openSidebar, 150);
  }
}
