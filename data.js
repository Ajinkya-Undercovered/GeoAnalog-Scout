// Planetary Analogue Field Protocol - Scientific Dataset
// Exact match for GEO-ANALOG SCOUT // MISSION OPS workstation

const planetarySites = [
  {
    id: "haughton",
    dossierCode: "PRIMARY TESTBED #01",
    sector: "DEVON ISLAND RECON SECTOR",
    name: "Haughton Crater, Devon Island",
    region: "Nunavut, Canada",
    coords: "75°22′N 89°41′W",
    lat: 75.38,
    lng: -89.68,
    elev: "230m ASL",
    impactAge: "~39 Ma",
    fidelity: 94.2,
    analogType: "LUNAR SOUTH POLE / MARS PERMAFROST",
    category: "all lunar-polar martian-permafrost",
    geoZone: "GEO-ZONE: IMPACT STRUCTURAL BASIN",
    geoZoneDesc: "High shock metamorphism, paleolake sediment analogs to Jezero / Shackleton rim rubble.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Impact Breccia & Shatter Cones",
        desc: "Target carbonate & crystalline basement clasts mimic lunar South Pole regolith mechanical shear.",
        match: "96.8%"
      },
      climate: {
        title: "Hyper-Cold Dry Desert Biome",
        desc: "Mean annual temp −17°C, severe desiccating katabatic winds, negligible liquid precipitation.",
        match: "93.1%"
      },
      hab: {
        title: "Autonomous Perimeter Trial",
        desc: "Validated FMARS habitat core, pressurized rover ingress, EVA suit joint dust intrusion testing.",
        match: "91.5%"
      },
      volatile: {
        title: "Subsurface Massive Ground Ice",
        desc: "Active continuous permafrost polygonal wedges simulating Martian mid-latitude ice tables.",
        match: "95.4%"
      }
    },
    criteriaScores: {
      terrain: 96,
      illumination: 94,
      resources: 95,
      geology: 96,
      environment: 92,
      research: 94,
      resilience: 73,
      accessibility: 68
    },
    telemetry: {
      poiIndex: "0.89 POI-NORM",
      poiStatus: "CALIBRATED",
      uvFlux: "14.8 W/m² (SURFACE)",
      uvStatus: "ELEVATED",
      wie: "3.2 wt% DRY MASS",
      wieStatus: "DETECTION+",
      latency: "342 ms ROUNDTRIP",
      latencyStatus: "NOMINAL",
      bars: {
        sio2: "93.4%",
        grain: "88.1%",
        volatile: "79.5%",
        dielectric: "95.2%"
      },
      radarPoints: "50,18 78,39 68,74 34,71 20,36"
    }
  },
  {
    id: "mcmurdo",
    dossierCode: "PRIMARY TESTBED #02",
    sector: "VICTORIA LAND RECON SECTOR",
    name: "McMurdo Dry Valleys",
    region: "Victoria Land, Antarctica",
    coords: "77°30′S 162°52′E",
    lat: -77.5,
    lng: 162.5,
    elev: "150m ASL",
    impactAge: "Pre-Cambrian basement",
    fidelity: 96.1,
    analogType: "96.1% MARS ANALOG",
    category: "all martian-permafrost",
    geoZone: "GEO-ZONE: HYPER-ARID POLAR REGOLITH",
    geoZoneDesc: "Subzero salt brines, cryptoendoliths, and cold permafrost modeling Mars Noachian transition.",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Ventifacts & Porous Sandstones",
        desc: "Extreme aeolian saltation carving polished rock facets analogous to Gusev Crater plain.",
        match: "97.4%"
      },
      climate: {
        title: "Extreme Katabatic Hyper-Arid",
        desc: "Precipitation <10mm/yr water equivalent, relative humidity down to 5%, continuous freeze.",
        match: "98.2%"
      },
      hab: {
        title: "Subzero Habitat Life-Support",
        desc: "Closed-loop atmospheric insulation testing for sustained polar martian outposts.",
        match: "94.0%"
      },
      volatile: {
        title: "Sublimation Ice & Permafrost Brines",
        desc: "Hyper-saline liquid water veins beneath ice crust serving as recurring slope lineae proxies.",
        match: "96.5%"
      }
    },
    criteriaScores: {
      terrain: 94,
      illumination: 88,
      resources: 92,
      geology: 98,
      environment: 99,
      research: 99,
      resilience: 70,
      accessibility: 62
    },
    telemetry: {
      poiIndex: "0.94 POI-NORM",
      poiStatus: "CALIBRATED",
      uvFlux: "18.2 W/m² (SURFACE)",
      uvStatus: "ANOMALOUS",
      wie: "8.7 wt% CRYOGENIC",
      wieStatus: "DETECTION+",
      latency: "512 ms ROUNDTRIP",
      latencyStatus: "STABLE",
      bars: {
        sio2: "91.2%",
        grain: "94.6%",
        volatile: "88.2%",
        dielectric: "92.0%"
      },
      radarPoints: "50,15 82,36 72,78 30,75 16,35"
    }
  },
  {
    id: "atacama",
    dossierCode: "PRIMARY TESTBED #03",
    sector: "YUNGAY BASIN RECON SECTOR",
    name: "Atacama Desert (Yungay)",
    region: "Antofagasta Region, Chile",
    coords: "24°04′S 69°52′W",
    lat: -24.05,
    lng: -69.85,
    elev: "1200m ASL",
    impactAge: "Oligocene Paleosol",
    fidelity: 91.8,
    analogType: "91.8% MARS OXIDATION",
    category: "all martian-permafrost",
    geoZone: "GEO-ZONE: HYPER-OXIDIZING NITRATE SALARS",
    geoZoneDesc: "Perchlorates, extreme solar UV flux, and dry limit for soil microbial habitability.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Perchlorate Polygons & Gypsum Crust",
        desc: "Evaporite salt polygons and desiccated clay soils identical to Gale Crater mudstones.",
        match: "94.5%"
      },
      climate: {
        title: "Solar Hyper-Aridity Matrix",
        desc: "Decadal zero-precipitation core with maximum planetary ultraviolet flux at surface.",
        match: "95.8%"
      },
      hab: {
        title: "Rover Ingress & Seal Endurance",
        desc: "Autonomous sample collection drilling tests in abrasive oxidizing soils.",
        match: "89.2%"
      },
      volatile: {
        title: "Hygroscopic Mineral Trapping",
        desc: "Anhydrite-gypsum water extraction mimicking Martian clay roasting protocols.",
        match: "88.0%"
      }
    },
    criteriaScores: {
      terrain: 91,
      illumination: 96,
      resources: 82,
      geology: 96,
      environment: 98,
      research: 97,
      resilience: 66,
      accessibility: 89
    },
    telemetry: {
      poiIndex: "0.91 POI-NORM",
      poiStatus: "CALIBRATED",
      uvFlux: "31.4 W/m² (SURFACE)",
      uvStatus: "CRITICAL",
      wie: "0.1 wt% DESICCATED",
      wieStatus: "TRACE",
      latency: "82 ms ROUNDTRIP",
      latencyStatus: "OPTIMAL",
      bars: {
        sio2: "89.5%",
        grain: "91.0%",
        volatile: "64.2%",
        dielectric: "87.8%"
      },
      radarPoints: "50,22 74,42 60,68 38,66 24,40"
    }
  },
  {
    id: "maunaloa",
    dossierCode: "PRIMARY TESTBED #04",
    sector: "HAWAII PYRODUCT RECON SECTOR",
    name: "Mauna Loa Lava Tubes",
    region: "Hawaii Island, HI, United States",
    coords: "19°28′N 155°35′W",
    lat: 19.53,
    lng: -155.57,
    elev: "2500m ASL",
    impactAge: "Holocene Basalt Flow",
    fidelity: 88.4,
    analogType: "88.4% LUNAR BASALT",
    category: "all lunar-polar lava-tubes",
    geoZone: "GEO-ZONE: BASALTIC THOLEIITE PYRODUCT",
    geoZoneDesc: "Unweathered volcanic tube networks providing 99.4% radiation shielding for permanent bases.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Pyroduct Conduits & Collapse Skylights",
        desc: "Basaltic roof thickness of 5-15m mimicking Marius Hills and Mare Tranquillitatis skylights.",
        match: "92.0%"
      },
      climate: {
        title: "Subterranean Thermal Buffer",
        desc: "Internal cave temperature steady at 14°C regardless of exterior surface temperature swings.",
        match: "89.4%"
      },
      hab: {
        title: "Subterranean Inflatable Modules",
        desc: "HI-SEAS isolation trials testing pressurized modular habitat deployment underground.",
        match: "93.1%"
      },
      volatile: {
        title: "Secondary Cave Volatiles",
        desc: "Perennial rock condensation and trapped moisture in deep basalt chambers.",
        match: "81.5%"
      }
    },
    criteriaScores: {
      terrain: 88,
      illumination: 62,
      resources: 84,
      geology: 95,
      environment: 86,
      research: 90,
      resilience: 99,
      accessibility: 96
    },
    telemetry: {
      poiIndex: "0.96 POI-NORM",
      poiStatus: "CALIBRATED",
      uvFlux: "0.0 W/m² (SURFACE)",
      uvStatus: "SHIELDED",
      wie: "1.4 wt% ROCK MATRIX",
      wieStatus: "BASELINE",
      latency: "68 ms ROUNDTRIP",
      latencyStatus: "OPTIMAL",
      bars: {
        sio2: "96.8%",
        grain: "85.0%",
        volatile: "72.0%",
        dielectric: "97.4%"
      },
      radarPoints: "50,16 86,34 76,72 26,76 18,34"
    }
  },
  {
    id: "askja",
    dossierCode: "PRIMARY TESTBED #05",
    sector: "ICELAND HIGHLANDS RECON SECTOR",
    name: "Iceland Highlands (Askja)",
    region: "Dyngjufjöll, Iceland",
    coords: "65°02′N 16°45′W",
    lat: 65.03,
    lng: -16.75,
    elev: "1100m ASL",
    impactAge: "Caldera Eruption 1875",
    fidelity: 86.7,
    analogType: "86.7% LUNAR HIGHLANDS",
    category: "all lunar-polar",
    geoZone: "GEO-ZONE: ANORTHOSITIC PLAGIOCLASE DESERT",
    geoZoneDesc: "Apollo astronaut field geology training site. Glassy basaltic sands and volcanic tephra.",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Volcanic Tephra & Anorthosite",
        desc: "Abrasive, angular glassy basalt sand matching lunar regolith grain mechanical wear.",
        match: "91.2%"
      },
      climate: {
        title: "Subarctic Volcanic Wilderness",
        desc: "Cold arid winds, seasonal snow sublimation, and high weathering rates on basalt plains.",
        match: "87.0%"
      },
      hab: {
        title: "Apollo Traverse Retracing",
        desc: "Astronaut lunar sampling field drills and spacesuit joint dust seal testing.",
        match: "88.6%"
      },
      volatile: {
        title: "Sub-Glacial Hydrothermal Ice",
        desc: "Hydrothermal volcanic interaction with glacial caps, analog for young Mars volcanoes.",
        match: "82.3%"
      }
    },
    criteriaScores: {
      terrain: 92,
      illumination: 89,
      resources: 86,
      geology: 96,
      environment: 87,
      research: 93,
      resilience: 76,
      accessibility: 85
    },
    telemetry: {
      poiIndex: "0.86 POI-NORM",
      poiStatus: "CALIBRATED",
      uvFlux: "8.4 W/m² (SURFACE)",
      uvStatus: "NOMINAL",
      wie: "4.8 wt% DRY MASS",
      wieStatus: "DETECTION+",
      latency: "124 ms ROUNDTRIP",
      latencyStatus: "OPTIMAL",
      bars: {
        sio2: "92.1%",
        grain: "96.4%",
        volatile: "76.8%",
        dielectric: "91.5%"
      },
      radarPoints: "50,20 75,38 65,70 32,73 22,38"
    }
  }
];

const simulantProfiles = {
  "lhs-jsc": {
    label: "LHS-1 vs JSC-1A",
    bars: { sio2: "93.4%", grain: "88.1%", volatile: "79.5%", dielectric: "95.2%" }
  },
  "lhs-apollo": {
    label: "LHS-1 vs Apollo 16 Anorthosite",
    bars: { sio2: "97.2%", grain: "92.5%", volatile: "84.0%", dielectric: "98.1%" }
  },
  "lms-apollo11": {
    label: "LMS-1 vs Apollo 11 Mare Basalt",
    bars: { sio2: "95.6%", grain: "91.8%", volatile: "76.2%", dielectric: "96.0%" }
  },
  "mms-rocknest": {
    label: "MMS-1 vs Curiosity Rocknest Sand",
    bars: { sio2: "89.4%", grain: "94.2%", volatile: "86.5%", dielectric: "90.3%" }
  },
  "jsc-jezero": {
    label: "JSC Mars-1A vs Jezero Clay Mudstone",
    bars: { sio2: "91.0%", grain: "87.4%", volatile: "91.2%", dielectric: "88.7%" }
  }
};

const missionTargets = [
  {
    id: "artemis-south-pole",
    code: "ARTEMIS-III / ARES-1 ARCHITECTURE TESTBED",
    title: "Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars",
    body: "Moon & Mars Polar Hybrid",
    topSiteId: "haughton"
  },
  {
    id: "marius-lava-tube",
    code: "LUNAR LAVA TUBE HABITAT VALIDATION (MARIUS HILLS)",
    title: "Identify Subterranean Shielding Analogs for Permanent Lunar Cavern Outposts",
    body: "Moon Volcanic Conduit",
    topSiteId: "maunaloa"
  },
  {
    id: "jezero-astrobiology",
    code: "MARS PERSEVERANCE // JEZERO DELTA MATRIX",
    title: "Identify Terrestrial Biosignature Preservation Sites for Mars Paleo-Lakes",
    body: "Mars Ancient Aqueous",
    topSiteId: "mcmurdo"
  },
  {
    id: "arcadia-ice",
    code: "MARS GLACIAL ICE TABLE HARVESTING (ARCADIA PLANITIA)",
    title: "Identify Cryogenic Subsurface Water Ice Drilling Analogs on Earth",
    body: "Mars Subsurface Cryosphere",
    topSiteId: "mcmurdo"
  }
];

const criteriaDefinitions = [
  { id: "terrain", label: "Terrain & Trafficability", desc: "Slope stability, ejecta rubble, rover wheel traction", icon: "terrain" },
  { id: "illumination", label: "Illumination Conditions", desc: "Low-angle polar sunlight, solar array exposure", icon: "wb_sunny" },
  { id: "resources", label: "Resource Access (Volatiles)", desc: "Subsurface massive ground ice, water-ice equivalent", icon: "water_drop" },
  { id: "geology", label: "Geological & Mineral Analogy", desc: "Impact shock breccia, basaltic tholeiite, evaporites", icon: "landscape" },
  { id: "environment", label: "Environmental Severity", desc: "Hyper-cold, desiccating katabatics, planetary UV flux", icon: "ac_unit" },
  { id: "research", label: "Research Opportunities", desc: "Astrobiology, biosignatures, extremophile limit of life", icon: "biotech" },
  { id: "resilience", label: "Operational Resilience & Shielding", desc: "Lava tube ceiling, 99.4% radiation & meteoroid barrier", icon: "shield" },
  { id: "accessibility", label: "Accessibility & Logistics", desc: "Emergency egress, transport corridor, telemetry latency", icon: "local_shipping" }
];

const settlementScenarios = {
  "scenario-a": {
    id: "scenario-a",
    code: "SCENARIO A",
    title: "Lunar Research Outpost",
    subtitle: "Frontier Twist // Artemis Moon Base Architecture",
    requirement: "Prioritise terrain, illumination conditions and access to relevant resources.",
    badge: "LUNAR POLAR BASE",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    targetBody: "Moon South Pole (Shackleton / Malapert Mountain)",
    priorities: ["Terrain & Trafficability", "Illumination Conditions", "Resource Access (Volatiles)"],
    weights: {
      terrain: 95,
      illumination: 95,
      resources: 95,
      geology: 70,
      environment: 60,
      research: 70,
      resilience: 50,
      accessibility: 45
    },
    topCandidateId: "haughton",
    defense: {
      missionCharter: "Establish permanent crewed scientific presence at Lunar South Pole with persistent ISRU water-ice harvesting and polar summit solar power stations.",
      defenseStatement: "Haughton Crater (Devon Island) provides the gold standard for Lunar Research Outpost qualification. Its high-latitude Arctic regime mimics the grazing low-angle solar incidence of Lunar South Pole summits of eternal light. Its impact-fractured carbonate and crystalline breccia replicates regolith shear encountered by heavy rovers, while its massive permafrost ice tables serve as an exact physical and operational proxy for permanently shadowed crater (PSR) water extraction.",
      whyEliminated: "Mauna Loa is subterranean without polar illumination; Atacama lacks cryogenic water ice; McMurdo presents extreme logistics and lacks impact crater topography.",
      keyRiskMitigations: "Cryogenic drill mechanical binding mitigated via permafrost trials; EVA dust intrusion validated at FMARS core.",
      boardVerdict: "UNANIMOUS APPROVAL: Haughton Crater selected as primary Lunar Research Outpost analog testbed."
    }
  },
  "scenario-b": {
    id: "scenario-b",
    code: "SCENARIO B",
    title: "Martian Science Station",
    subtitle: "Frontier Twist // Mars Astrobiology & Paleoclimate",
    requirement: "Prioritise geological analogues, environmental conditions and research opportunities.",
    badge: "MARS ASTROBIOLOGY",
    badgeColor: "bg-terracotta-500/10 text-terracotta-400 border-terracotta-500/20",
    targetBody: "Mars (Jezero Crater Delta / Gusev / Noachian Highlands)",
    priorities: ["Geological Analogues", "Environmental Severity", "Research Opportunities"],
    weights: {
      terrain: 65,
      illumination: 50,
      resources: 70,
      geology: 98,
      environment: 98,
      research: 98,
      resilience: 55,
      accessibility: 40
    },
    topCandidateId: "mcmurdo",
    defense: {
      missionCharter: "Conduct in-situ search for ancient and extant biosignatures, examine Noachian aqueous mineral transition, and evaluate microbial habitability under extreme hyper-aridity.",
      defenseStatement: "McMurdo Dry Valleys stands as the undisputed premier Mars analog on planet Earth. Featuring mean annual temperatures down to −50°C, decadal desiccating katabatic winds, and continuous freeze-thaw cycles, it replicates Martian Noachian-to-Amazonian transitional climate. Most critically, endolithic cyanobacteria living inside porous sandstones provide a unique real-world benchmark for testing life-detection payloads (Raman, UV fluorescence, and mass spectrometers).",
      whyEliminated: "Hawaii lacks subzero temperatures and hyper-aridity; Iceland is too wet with young basalt; Haughton lacks the extreme desiccated endolithic biome.",
      keyRiskMitigations: "Forward contamination controlled under COSPAR Category IVc standards; autonomous sample caching verified under subzero katabatic winds.",
      boardVerdict: "UNANIMOUS APPROVAL: McMurdo Dry Valleys selected as primary Martian Science Station validation site."
    }
  },
  "scenario-c": {
    id: "scenario-c",
    code: "SCENARIO C",
    title: "Emergency Survival Outpost",
    subtitle: "Frontier Twist // Extreme Resilience & Evacuation",
    requirement: "Prioritise accessibility, resource availability and operational resilience.",
    badge: "SURVIVAL & RESILIENCE",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    targetBody: "Subterranean Planetary Shelter (Lunar & Martian Lava Tubes)",
    priorities: ["Operational Resilience", "Accessibility & Logistics", "Resource Availability"],
    weights: {
      terrain: 60,
      illumination: 40,
      resources: 90,
      geology: 65,
      environment: 65,
      research: 60,
      resilience: 98,
      accessibility: 95
    },
    topCandidateId: "maunaloa",
    defense: {
      missionCharter: "Guarantee human survival in extreme abort or severe solar particle event (SPE) scenarios where surface habitats fail, requiring subterranean radiation shielding, thermal buffering, and critical logistics.",
      defenseStatement: "Mauna Loa Lava Tubes provides the highest operational survival rating of any terrestrial candidate. Its 5–15 meter thick unweathered basalt ceiling offers over 99.4% radiation and micrometeorite shielding, completely mitigating lethal galactic cosmic rays and solar flares. Internally, it maintains a constant 14°C natural thermal buffer independent of surface extremes, while its proximity to logistical corridors guarantees rapid emergency extraction and continuous life-support resupply.",
      whyEliminated: "Surface sites (Atacama, McMurdo, Haughton) have 0% natural cosmic radiation shielding and would suffer catastrophic decompression/thermal failure during severe solar storms.",
      keyRiskMitigations: "Autonomous subterranean communications relay verified; structural acoustic monitoring for roof integrity deployed.",
      boardVerdict: "UNANIMOUS APPROVAL: Mauna Loa Lava Tubes selected as primary Emergency Survival Outpost subterranean benchmark."
    }
  }
};

if (typeof window !== 'undefined') {
  window.PlanetarySites = planetarySites;
  window.SimulantProfiles = simulantProfiles;
  window.MissionTargets = missionTargets;
  window.SettlementScenarios = settlementScenarios;
  window.CriteriaDefinitions = criteriaDefinitions;
}
