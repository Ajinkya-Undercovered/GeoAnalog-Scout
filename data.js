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
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
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

if (typeof window !== 'undefined') {
  window.PlanetarySites = planetarySites;
  window.SimulantProfiles = simulantProfiles;
  window.MissionTargets = missionTargets;
}
