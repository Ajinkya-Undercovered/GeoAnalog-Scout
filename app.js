// Planetary Analogue Field Protocol - Full Workstation Controller
// Powers 100% of all interactive buttons, modals, and telemetry

let sites = window.PlanetarySites || [];
const simulantData = window.SimulantProfiles || {};
const missionList = window.MissionTargets || [];

let activeSite = sites[0] || null;
let satelliteMap = null;
let satelliteMarker = null;

// Dynamic weight modifiers from calibration drawer
let weights = {
  rough: 1.0,
  therm: 1.0,
  ice: 1.0,
  mineral: 1.0
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroDossier(activeSite);
  initCandidateCards();
  initFilterChips();
  initSearch();
  initSidebarCatalog();
  initMissionSelector();
  initSimulantSelector();
  initModals();
  initTerminal();
  initCalibrationDrawer();
  initAddReconForm();
  initSyncButton();
  initOrbitalPassTimer();
  populateMatrixTable();
});

// ================= 1. HERO DOSSIER & TELEMETRY =================
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
  if (fidelityEl) fidelityEl.textContent = `${site.fidelity}% FIDELITY`;
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

// ================= 2. CANDIDATE CARDS =================
function initCandidateCards() {
  const grid = document.getElementById('candidate-grid');
  if (!grid) return;

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.candidate-card');
    if (!card) return;

    const siteId = card.getAttribute('data-site-id');
    const found = sites.find(s => s.id === siteId);
    if (found) {
      initHeroDossier(found);
      
      // Update visual active state
      document.querySelectorAll('.candidate-card').forEach(c => {
        c.classList.remove('border-primary', 'bg-surface-container');
        c.classList.add('border-outline-variant/30', 'bg-surface-container-low');
      });
      card.classList.add('border-primary', 'bg-surface-container');
      card.classList.remove('border-outline-variant/30', 'bg-surface-container-low');

      // Scroll to hero section
      const hero = document.getElementById('hero-section');
      if (hero) hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// ================= 3. FILTER CHIPS =================
function initFilterChips() {
  const container = document.getElementById('filter-chips-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    document.querySelectorAll('.filter-chip').forEach(c => {
      c.className = 'filter-chip bg-surface-container border border-outline-variant/40 hover:border-primary text-secondary hover:text-on-surface font-label-telemetry text-label-data-sm uppercase px-3 py-1 rounded transition-colors';
    });
    chip.className = 'filter-chip bg-primary text-on-primary font-label-telemetry text-label-data-sm uppercase px-3 py-1 rounded font-bold border border-primary transition-all';

    const cat = chip.getAttribute('data-cat');
    const cards = document.querySelectorAll('.candidate-card');
    let visible = 0;

    cards.forEach(card => {
      const siteId = card.getAttribute('data-site-id');
      const site = sites.find(s => s.id === siteId);
      if (!site) return;

      if (cat === 'all' || (site.category && site.category.includes(cat))) {
        card.style.display = 'block';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    const badge = document.getElementById('sync-candidate-badge');
    if (badge) badge.textContent = `${visible} SITES ONLINE // SYNCHRONIZED`;
  });
}

// ================= 4. REAL-TIME SEARCH & CMD+K =================
function initSearch() {
  const input = document.getElementById('search-input');
  const badgeCmdK = document.getElementById('badge-cmdk');

  if (badgeCmdK && input) {
    badgeCmdK.addEventListener('click', () => input.focus());
  }

  // Global Ctrl+K / Cmd+K listener
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (input) {
        input.focus();
        input.select();
      }
    }
  });

  if (input) {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.candidate-card');
      let count = 0;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          card.style.display = 'block';
          count++;
        } else {
          card.style.display = 'none';
        }
      });

      const badge = document.getElementById('sync-candidate-badge');
      if (badge) badge.textContent = `${count} MATCHES FOUND`;
    });
  }
}

// ================= 5. SIDEBAR TARGET CATALOG [6] =================
function initSidebarCatalog() {
  const catalogList = document.getElementById('target-catalog-list');
  if (!catalogList) return;

  catalogList.addEventListener('click', (e) => {
    const link = e.target.closest('.catalog-link');
    if (!link) return;
    e.preventDefault();

    document.querySelectorAll('.catalog-link').forEach(l => {
      l.className = 'catalog-link flex items-center gap-3 text-secondary hover:bg-surface-container hover:text-on-surface px-3 py-2.5 font-label-telemetry text-label-telemetry uppercase tracking-wider transition-colors cursor-pointer';
      const icon = l.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = 'radio_button_unchecked';
        icon.className = 'material-symbols-outlined text-secondary';
      }
    });

    link.className = 'catalog-link flex items-center gap-3 bg-surface-container text-primary border-l-2 border-primary px-3 py-2.5 font-label-telemetry text-label-telemetry uppercase tracking-wider rounded-none cursor-pointer';
    const icon = link.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = 'radio_button_checked';
      icon.className = 'material-symbols-outlined text-primary';
    }

    const tid = link.getAttribute('data-target-id');
    if (tid === 'lunar-basalt') initHeroDossier(sites[0]); // Haughton
    else if (tid === 'martian-regolith') initHeroDossier(sites[1]); // McMurdo
    else if (tid === 'hydrothermal') initHeroDossier(sites[2]); // Atacama
    else if (tid === 'polar-permafrost') initHeroDossier(sites[1]); // McMurdo
    else if (tid === 'volcanic-tubes') initHeroDossier(sites[3]); // Mauna Loa
    else if (tid === 'impact-craters') initHeroDossier(sites[4]); // Askja
  });
}

// ================= 6. DYNAMIC MISSION SELECTOR =================
function initMissionSelector() {
  const select = document.getElementById('mission-target-select');
  const badge = document.getElementById('header-mission-badge');
  const title = document.getElementById('mission-main-title');

  if (!select) return;

  select.addEventListener('change', (e) => {
    const val = e.target.value;
    const target = missionList.find(m => m.id === val);
    if (!target) return;

    if (badge) badge.textContent = target.code;
    if (title) title.textContent = target.title;

    // Load top recommended site for that mission
    const topSite = sites.find(s => s.id === target.topSiteId);
    if (topSite) {
      initHeroDossier(topSite);
      
      // Flash live link badge
      const linkBadge = document.getElementById('live-link-badge');
      if (linkBadge) {
        linkBadge.textContent = 'MISSION RECALIBRATED';
        linkBadge.classList.add('bg-primary-container', 'text-on-primary-container');
        setTimeout(() => {
          linkBadge.textContent = 'LIVE LINK';
          linkBadge.classList.remove('bg-primary-container', 'text-on-primary-container');
        }, 1500);
      }
    }
  });
}

// ================= 7. REGOLITH SIMULANT SELECTOR =================
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

// ================= 8. ALL MODALS & ACTIONS =================
function initModals() {
  // Brand Home
  const brandHome = document.getElementById('btn-brand-home');
  const navDossiers = document.getElementById('btn-nav-dossiers');
  if (brandHome) brandHome.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  if (navDossiers) navDossiers.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Satellite Modal
  const satModal = document.getElementById('satellite-modal');
  const openSatBtns = [
    document.getElementById('btn-spectral-layer'),
    document.getElementById('btn-nav-radar'),
    document.getElementById('btn-quick-radar')
  ];
  const closeSatBtn = document.getElementById('btn-close-satellite');

  openSatBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        satModal.classList.remove('hidden');
        setTimeout(initSatelliteMap, 150);
      });
    }
  });
  if (closeSatBtn) closeSatBtn.addEventListener('click', () => satModal.classList.add('hidden'));

  // Dossier Modal
  const dosModal = document.getElementById('dossier-modal');
  const openDosBtns = [
    document.getElementById('btn-full-dossier'),
    document.getElementById('btn-export-dossier')
  ];
  const closeDosBtn = document.getElementById('btn-close-dossier');
  const printBtn = document.getElementById('btn-print-modal');
  const downloadJsonBtn = document.getElementById('btn-download-json');

  openDosBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        populateDossierModal(activeSite);
        dosModal.classList.remove('hidden');
      });
    }
  });
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
  const navMatrixBtn = document.getElementById('btn-nav-matrix');
  const closeMatrixBtn = document.getElementById('btn-close-matrix');

  if (navMatrixBtn) {
    navMatrixBtn.addEventListener('click', (e) => {
      e.preventDefault();
      matrixModal.classList.remove('hidden');
    });
  }
  if (closeMatrixBtn) closeMatrixBtn.addEventListener('click', () => matrixModal.classList.add('hidden'));

  // Spectral Modal
  const spectralModal = document.getElementById('spectral-modal');
  const navSpectralBtn = document.getElementById('btn-nav-spectral');
  const closeSpectralBtn = document.getElementById('btn-close-spectral');

  if (navSpectralBtn) {
    navSpectralBtn.addEventListener('click', (e) => {
      e.preventDefault();
      spectralModal.classList.remove('hidden');
    });
  }
  if (closeSpectralBtn) closeSpectralBtn.addEventListener('click', () => spectralModal.classList.add('hidden'));

  // Calibration Drawer
  const calDrawer = document.getElementById('calibration-drawer');
  const openCalBtns = [
    document.getElementById('btn-quick-calibrate'),
    document.getElementById('btn-sidebar-calibrate')
  ];
  const closeCalBtn = document.getElementById('btn-close-calibrate');

  openCalBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        calDrawer.classList.remove('hidden');
      });
    }
  });
  if (closeCalBtn) closeCalBtn.addEventListener('click', () => calDrawer.classList.add('hidden'));

  // Add Recon Modal
  const reconModal = document.getElementById('add-recon-modal');
  const btnAddRecon = document.getElementById('btn-add-recon');
  const closeReconBtn = document.getElementById('btn-close-add-recon');

  if (btnAddRecon) {
    btnAddRecon.addEventListener('click', () => reconModal.classList.remove('hidden'));
  }
  if (closeReconBtn) closeReconBtn.addEventListener('click', () => reconModal.classList.add('hidden'));

  // Abort Comm Modal
  const abortModal = document.getElementById('abort-modal');
  const btnSidebarAbort = document.getElementById('btn-sidebar-abort');
  const cancelAbort = document.getElementById('btn-cancel-abort');
  const confirmAbort = document.getElementById('btn-confirm-abort');

  if (btnSidebarAbort) {
    btnSidebarAbort.addEventListener('click', (e) => {
      e.preventDefault();
      abortModal.classList.remove('hidden');
    });
  }
  if (cancelAbort) cancelAbort.addEventListener('click', () => abortModal.classList.add('hidden'));
  if (confirmAbort) {
    confirmAbort.addEventListener('click', () => {
      abortModal.classList.add('hidden');
      const linkBadge = document.getElementById('live-link-badge');
      if (linkBadge) {
        linkBadge.textContent = 'COMM ABORTED // STANDALONE';
        linkBadge.className = 'text-caption font-caption bg-error text-on-error px-2 py-0.5 rounded cursor-pointer';
        setTimeout(() => {
          linkBadge.textContent = 'LIVE LINK';
          linkBadge.className = 'text-caption font-caption text-secondary bg-surface-container px-2 py-0.5 rounded cursor-pointer hover:text-primary';
        }, 5000);
      }
    });
  }

  // Operator Profile Modal
  const profileModal = document.getElementById('profile-modal');
  const btnProfile = document.getElementById('btn-user-profile');
  const closeProfile = document.getElementById('btn-close-profile');

  if (btnProfile) btnProfile.addEventListener('click', () => profileModal.classList.remove('hidden'));
  if (closeProfile) closeProfile.addEventListener('click', () => profileModal.classList.add('hidden'));

  // Global ESC key closes any open modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [satModal, dosModal, matrixModal, spectralModal, calDrawer, reconModal, abortModal, profileModal].forEach(m => {
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
    <tr class="border-b border-outline-variant/20 hover:bg-surface-container transition-colors cursor-pointer" onclick="selectSiteFromMatrix('${s.id}')">
      <td class="p-2.5 font-bold text-primary border-r border-outline-variant/30">${s.name}</td>
      <td class="p-2.5 font-bold text-on-surface border-r border-outline-variant/30">${s.fidelity}%</td>
      <td class="p-2.5 border-r border-outline-variant/30">${s.telemetry.poiIndex}</td>
      <td class="p-2.5 border-r border-outline-variant/30">${s.telemetry.uvFlux}</td>
      <td class="p-2.5 border-r border-outline-variant/30">${s.telemetry.wie}</td>
      <td class="p-2.5 text-secondary">${s.analogType}</td>
    </tr>
  `).join('');
}

window.selectSiteFromMatrix = function(siteId) {
  const found = sites.find(s => s.id === siteId);
  if (found) {
    initHeroDossier(found);
    const matrixModal = document.getElementById('matrix-modal');
    if (matrixModal) matrixModal.classList.add('hidden');
  }
};

// ================= 9. MISSION TERMINAL HUD =================
function initTerminal() {
  const termModal = document.getElementById('terminal-modal');
  const openBtns = [
    document.getElementById('btn-nav-telemetry'),
    document.getElementById('btn-quick-terminal'),
    document.getElementById('btn-sidebar-log')
  ];
  const closeBtn = document.getElementById('btn-close-terminal');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  openBtns.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        termModal.classList.remove('hidden');
        if (input) input.focus();
      });
    }
  });

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
    div.className = isErr ? 'text-error' : 'text-on-surface';
    div.innerHTML = msg;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  };

  log(`<span class="text-primary font-bold">&gt; ${cmd.toUpperCase()}</span>`);

  if (!cmd) return;

  switch (cmd) {
    case 'help':
      log(`AVAILABLE COMMANDS:
- <span class="text-primary">scan</span> : Perform orbital SAR sweep on active site
- <span class="text-primary">sites</span> : List all active Earth analog testbeds
- <span class="text-primary">target [name]</span> : Switch target (e.g. target mcmurdo, target atacama)
- <span class="text-primary">dossier</span> : View current active flight authorization summary
- <span class="text-primary">ping</span> : Test orbital uplink latency
- <span class="text-primary">clear</span> : Clear terminal buffer`);
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
      log(`PING ORBITAL RELAY SWOT-2: 64 bytes from 192.0.2.42: icmp_seq=1 time=${activeSite.telemetry.latency}`);
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
          log(`TARGET SWITCHED TO: <span class="text-primary font-bold">${found.name}</span> (${found.coords})`);
        } else {
          log(`Site not found. Use 'sites' to list valid target IDs.`, true);
        }
      } else {
        log(`Command not recognized: '${cmd}'. Type 'help' for available commands.`, true);
      }
      break;
  }
}

// ================= 10. SENSOR CALIBRATION DRAWER SLIDERS =================
function initCalibrationDrawer() {
  const sliders = [
    { id: 'slider-rough', valId: 'slider-rough-val', key: 'rough' },
    { id: 'slider-therm', valId: 'slider-therm-val', key: 'therm' },
    { id: 'slider-ice', valId: 'slider-ice-val', key: 'ice' },
    { id: 'slider-min', valId: 'slider-min-val', key: 'mineral' }
  ];

  sliders.forEach(s => {
    const el = document.getElementById(s.id);
    const valEl = document.getElementById(s.valId);
    if (el) {
      el.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        weights[s.key] = val;
        if (valEl) valEl.textContent = `${val.toFixed(1)}x`;

        // Dynamically adjust fidelity based on calibration weights
        const adjustedFidelity = (activeSite.fidelity * (0.8 + 0.05 * (weights.rough + weights.therm + weights.ice + weights.mineral))).toFixed(1);
        const cappedFidelity = Math.min(99.4, Math.max(75.0, adjustedFidelity));
        
        const fidEl = document.getElementById('hero-fidelity');
        if (fidEl) fidEl.textContent = `${cappedFidelity}% FIDELITY`;
      });
    }
  });

  const resetBtn = document.getElementById('btn-reset-calibration');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sliders.forEach(s => {
        const el = document.getElementById(s.id);
        const valEl = document.getElementById(s.valId);
        if (el) el.value = '1.0';
        if (valEl) valEl.textContent = '1.0x';
        weights[s.key] = 1.0;
      });
      initHeroDossier(activeSite);
    });
  }
}

// ================= 11. ADD TARGET RECON FORM =================
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
    appendCandidateCard(newSite);
    populateMatrixTable();
    initHeroDossier(newSite);

    form.reset();
    modal.classList.add('hidden');
  });
}

function appendCandidateCard(site) {
  const grid = document.getElementById('candidate-grid');
  if (!grid) return;

  const card = document.createElement('div');
  card.setAttribute('data-site-id', site.id);
  card.className = 'candidate-card bg-surface-container border border-primary rounded p-4 transition-colors cursor-pointer group';
  card.innerHTML = `
    <div class="flex justify-between items-start mb-2">
      <div>
        <span class="text-label-data-sm font-label-data-sm text-primary font-bold">${site.region.toUpperCase()} // VECTOR ${site.coords}</span>
        <h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">${site.name}</h4>
      </div>
      <span class="bg-surface-container border border-primary/40 text-primary text-label-data-sm font-label-data-sm px-2 py-0.5 rounded font-bold">${site.fidelity}% FIDELITY</span>
    </div>
    <p class="text-body-sm font-body-sm text-secondary mb-3">${site.geoZoneDesc}</p>
    <div class="grid grid-cols-3 gap-2 border-t border-outline-variant/20 pt-2 text-caption font-caption text-secondary">
      <div><span class="block text-on-surface font-label-data-sm">FIELD STATUS</span> DEPLOYED</div>
      <div><span class="block text-on-surface font-label-data-sm">DATUM</span> WGS84</div>
      <div><span class="block text-on-surface font-label-data-sm">UPLINK</span> ACTIVE</div>
    </div>
  `;
  grid.prepend(card);

  const badge = document.getElementById('sync-candidate-badge');
  if (badge) badge.textContent = `${sites.length} SITES ONLINE // SYNCHRONIZED`;
}

// ================= 12. SATELLITE LEAFLET MAP =================
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
          <span class="absolute w-8 h-8 border-2 border-primary rounded-full animate-ping"></span>
          <div class="w-3.5 h-3.5 bg-primary-container border-2 border-white rounded-full"></div>
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

// ================= 13. SYNC BUTTON ANIMATION =================
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
      if (syncText) syncText.textContent = 'SYNCHRONIZED';
      
      const badge = document.getElementById('live-link-badge');
      if (badge) {
        badge.classList.add('bg-primary-container', 'text-on-primary-container');
        setTimeout(() => badge.classList.remove('bg-primary-container', 'text-on-primary-container'), 1200);
      }
    }, 800);
  });
}

// ================= 14. ORBITAL PASS COUNTDOWN TIMER =================
function initOrbitalPassTimer() {
  const timerEl = document.getElementById('orbital-timer');
  if (!timerEl) return;

  let totalSeconds = 14 * 60 + 28;

  setInterval(() => {
    if (totalSeconds > 0) totalSeconds--;
    else totalSeconds = 45 * 60;

    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    timerEl.textContent = `T-MINUS 00:${m}:${s}`;
  }, 1000);
}
