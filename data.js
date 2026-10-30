// Planetary Analogue Field Protocol - Scientific Dataset
// Exact match for GEO-ANALOG SCOUT // MISSION OPS workstation

const planetarySites = [
  {
    id: "haughton",
    dossierCode: "LOCATION #01",
    sector: "ARCTIC CRATER REGION",
    name: "Haughton Crater, Devon Island",
    region: "Nunavut, Canada",
    coords: "75°22′N 89°41′W",
    lat: 75.38,
    lng: -89.68,
    elev: "230m ASL",
    impactAge: "~39 Million Years Ago",
    fidelity: 94.2,
    analogType: "MOON SOUTH POLE & MARS ICE",
    category: "all lunar-polar martian-permafrost",
    geoZone: "TERRAIN: METEOR IMPACT CRATER",
    geoZoneDesc: "Cracked rocks and dried lake beds that closely match the Moon's South Pole and ancient Mars craters.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Crater Rocks & Rover Grip",
        desc: "Shattered limestone and loose gravel match the rocky ground at the Moon's South Pole, testing rover wheels against slip and wear.",
        match: "96.8%"
      },
      climate: {
        title: "Freezing Arctic Desert",
        desc: "Freezing average temperatures of −17°C with high-speed dry winds replicate the harsh, bone-chilling cold of space missions.",
        match: "93.1%"
      },
      hab: {
        title: "Astronaut Base & Suit Tests",
        desc: "Real habitat dome where crews practice airlock procedures and test whether abrasive rock dust clogs spacesuit joints.",
        match: "91.5%"
      },
      volatile: {
        title: "Deep Frozen Ground Ice",
        desc: "Thick underground ice layers let scientists practice drilling to extract fresh water for astronaut drinking and rocket fuel.",
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
      poiIndex: "0.89 Rock Match",
      poiStatus: "ACCURATE",
      uvFlux: "14.8 W/m² (Intense UV)",
      uvStatus: "STRONG SUN",
      wie: "3.2% Ice in Soil",
      wieStatus: "WATER FOUND",
      latency: "342 ms Delay",
      latencyStatus: "NORMAL",
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
    dossierCode: "LOCATION #02",
    sector: "ANTARCTICA ICE-FREE VALLEY",
    name: "McMurdo Dry Valleys",
    region: "Victoria Land, Antarctica",
    coords: "77°30′S 162°52′E",
    lat: -77.5,
    lng: 162.5,
    elev: "150m ASL",
    impactAge: "Ancient Bedrock",
    fidelity: 96.1,
    analogType: "96.1% MARS TWIN",
    category: "all martian-permafrost",
    geoZone: "TERRAIN: ULTRA-DRY COLD POLAR DESERT",
    geoZoneDesc: "The coldest, driest place on Earth with frozen salty soils, matching the barren freeze of modern Mars.",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Wind-Carved Rocks & Sandy Plains",
        desc: "Fierce polar winds blast rocks into polished facets and gravel plains identical to Mars rover landing sites.",
        match: "97.4%"
      },
      climate: {
        title: "Extreme Freeze & Bone-Dry Air",
        desc: "Less than 10 mm of moisture per year and humidity near 5%—nearly as dry and cold as the Martian atmosphere.",
        match: "98.2%"
      },
      hab: {
        title: "Extreme Cold Life Support",
        desc: "Tests insulated living modules and heaters to ensure astronauts stay warm through brutally cold polar winters.",
        match: "94.0%"
      },
      volatile: {
        title: "Underground Salty Water & Ice",
        desc: "Hidden veins of ultra-salty water beneath ice crusts mimic the dark seasonal water streaks spotted on Mars slopes.",
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
      poiIndex: "0.94 Rock Match",
      poiStatus: "ACCURATE",
      uvFlux: "18.2 W/m² (Intense UV)",
      uvStatus: "STRONG SUN",
      wie: "8.7% Frozen Ice",
      wieStatus: "RICH ICE",
      latency: "512 ms Delay",
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
    dossierCode: "LOCATION #03",
    sector: "CHILE HIGH DESERT",
    name: "Atacama Desert (Yungay)",
    region: "Antofagasta Region, Chile",
    coords: "24°04′S 69°52′W",
    lat: -24.05,
    lng: -69.85,
    elev: "1200m ASL",
    impactAge: "Ancient Sun-Dried Soil",
    fidelity: 91.8,
    analogType: "MARS SOIL & CHEMICAL TWIN",
    category: "all martian-permafrost",
    geoZone: "TERRAIN: DRIEST SUN-BAKED SALAR",
    geoZoneDesc: "Super-dry salt flats baked by intense ultraviolet sunlight, matching the sterile, salty red soil of Mars.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Hard Salt Crusts & Dry Mud Cracks",
        desc: "Dried clay flats and sharp salt crusts identical to the ancient dried lake beds explored by Mars rovers.",
        match: "94.5%"
      },
      climate: {
        title: "Virtually Zero Rain & Fierce Sun",
        desc: "Decades pass without rain, while intense solar radiation sterilizes the ground just like on the surface of Mars.",
        match: "95.8%"
      },
      hab: {
        title: "Rover Drill & Dust Seal Endurance",
        desc: "Robotic drills chew through hard, crunchy salt-crusted ground to test robotic sample arms without breaking.",
        match: "89.2%"
      },
      volatile: {
        title: "Baking Moisture Out of Rocks",
        desc: "Crews test small thermal ovens that heat gypsum minerals to bake out tiny droplets of trapped drinking water.",
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
      poiIndex: "0.91 Rock Match",
      poiStatus: "ACCURATE",
      uvFlux: "31.4 W/m² (Fierce UV)",
      uvStatus: "DANGEROUS",
      wie: "0.1% Trace Moisture",
      wieStatus: "VERY DRY",
      latency: "82 ms Delay",
      latencyStatus: "FAST RELAY",
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
    dossierCode: "LOCATION #04",
    sector: "VOLCANIC CAVE SYSTEM",
    name: "Mauna Loa Lava Tubes",
    region: "Hawaii Island, HI, United States",
    coords: "19°28′N 155°35′W",
    lat: 19.53,
    lng: -155.57,
    elev: "2500m ASL",
    impactAge: "Fresh Lava Flows",
    fidelity: 88.4,
    analogType: "MOON & MARS CAVE SHELTER",
    category: "all lunar-polar lava-tubes",
    geoZone: "TERRAIN: UNDERGROUND LAVA CAVES",
    geoZoneDesc: "Natural underground tunnels formed by ancient lava flows that naturally block space radiation and weather extremes.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Giant Lava Tunnels & Cave Skylights",
        desc: "Solid basalt rock ceilings 5 to 15 meters thick match the giant underground lava tube caves found on the Moon and Mars.",
        match: "92.0%"
      },
      climate: {
        title: "Natural Cozy Room Temperature",
        desc: "Inside the cave, it stays a steady 14°C year-round, naturally shielding astronauts from freezing nights and baking heat.",
        match: "89.4%"
      },
      hab: {
        title: "Inflatable Underground Living Pods",
        desc: "Astronaut crews practice deploying inflatable dome habitats inside dark caverns while wearing full spacesuits.",
        match: "93.1%"
      },
      volatile: {
        title: "Rock Moisture & Cave Humidity",
        desc: "Cool underground rock naturally traps moisture from circulating air, helping validate water collection systems.",
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
      poiIndex: "0.96 Rock Match",
      poiStatus: "ACCURATE",
      uvFlux: "0.0 W/m² (Blocked)",
      uvStatus: "SAFE / SHIELDED",
      wie: "1.4% Rock Moisture",
      wieStatus: "BASELINE",
      latency: "68 ms Delay",
      latencyStatus: "FAST RELAY",
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
    dossierCode: "LOCATION #05",
    sector: "VOLCANIC HIGHLAND DESERT",
    name: "Iceland Highlands (Askja)",
    region: "Dyngjufjöll, Iceland",
    coords: "65°02′N 16°45′W",
    lat: 65.03,
    lng: -16.75,
    elev: "1100m ASL",
    impactAge: "Caldera Eruption 1875",
    fidelity: 86.7,
    analogType: "APOLLO MOON TRAINING GROUND",
    category: "all lunar-polar",
    geoZone: "TERRAIN: VOLCANIC ASH & GLASS DESERT",
    geoZoneDesc: "Where Apollo astronauts trained in the 1960s. Glassy dark volcanic sand matches rough lunar highland plains.",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80",
    specs: {
      geomorphology: {
        title: "Sharp Volcanic Sand & Moon Rock",
        desc: "Rough, sharp volcanic sand that wears down rover wheels and tests spacesuit boots against cuts and punctures.",
        match: "91.2%"
      },
      climate: {
        title: "Windy Subarctic Wilderness",
        desc: "Cold winds and blowing black sand test whether astronaut cameras, solar panels, and sensors can survive gritty storms.",
        match: "87.0%"
      },
      hab: {
        title: "Astronaut Moonwalk Field Practice",
        desc: "Astronauts hike across jagged volcanic plains practicing how to collect geological samples with robotic tongs.",
        match: "88.6%"
      },
      volatile: {
        title: "Volcanic Heat & Melted Snow",
        desc: "Underground volcanic heat melting winter snow mimic steam plumes and warm zones beneath young Mars volcanoes.",
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
      poiIndex: "0.86 Rock Match",
      poiStatus: "ACCURATE",
      uvFlux: "8.4 W/m² (Normal Sun)",
      uvStatus: "MILD",
      wie: "4.8% Frozen Moisture",
      wieStatus: "WATER FOUND",
      latency: "124 ms Delay",
      latencyStatus: "FAST RELAY",
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
    code: "MOON SOUTH POLE BASE CAMP",
    title: "Find Earth Locations That Match Moon Base & Mars Missions",
    body: "Moon & Mars Polar Testbed",
    topSiteId: "haughton"
  },
  {
    id: "marius-lava-tube",
    code: "UNDERGROUND MOON CAVE SHELTER",
    title: "Find Natural Underground Caves to Shield Permanent Moon Bases",
    body: "Moon Lava Tube Shelter",
    topSiteId: "maunaloa"
  },
  {
    id: "jezero-astrobiology",
    code: "MARS PERSEVERANCE // ANCIENT LAKE BED",
    title: "Find Earth Sites with Ancient Dried Lakes to Test Mars Life Detectors",
    body: "Mars Ancient Lake Bed",
    topSiteId: "mcmurdo"
  },
  {
    id: "arcadia-ice",
    code: "MARS UNDERGROUND ICE HARVESTING",
    title: "Find Freezing Ground Ice on Earth to Test Deep Water Drilling",
    body: "Mars Underground Ice Table",
    topSiteId: "mcmurdo"
  }
];

const criteriaDefinitions = [
  { id: "terrain", label: "Driving & Rover Traction", desc: "Easy driving, smooth slopes, and good wheel grip on loose gravel", icon: "terrain" },
  { id: "illumination", label: "Sunlight & Solar Power", desc: "Plentiful sunlight to power solar panels and keep base batteries charged", icon: "wb_sunny" },
  { id: "resources", label: "Water Ice for Drinking & Fuel", desc: "Thick underground ice ready to drill and melt into water and rocket fuel", icon: "water_drop" },
  { id: "geology", label: "Rock & Soil Similarity", desc: "How closely local rocks and sand match actual Moon and Mars samples", icon: "landscape" },
  { id: "environment", label: "Harsh Cold & Realistic Weather", desc: "Brutal freezing cold and desert winds that push space gear to the limit", icon: "ac_unit" },
  { id: "research", label: "Search for Life & Science Tests", desc: "Hidden microbes and fossil signs to practice finding signs of alien life", icon: "biotech" },
  { id: "resilience", label: "Cave Protection from Radiation", desc: "Thick underground rock ceilings that shield astronauts from solar flares", icon: "shield" },
  { id: "accessibility", label: "Easy Road Access & Fast Rescue", desc: "How quickly supply trucks and emergency rescue crews can reach the base", icon: "local_shipping" }
];

const settlementScenarios = {
  "scenario-a": {
    id: "scenario-a",
    code: "SCENARIO A",
    title: "Scenario A: Moon Base (Lunar Research Outpost)",
    subtitle: "NASA Artemis Outpost Plan",
    requirement: "Must have: Crater rocks to test rovers, low-angle sunlight, and underground water ice to drill.",
    badge: "MOON BASE MISSION",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    targetBody: "Moon South Pole (Shackleton Crater Rim)",
    priorities: ["Driving & Rover Traction", "Sunlight & Solar Power", "Water Ice for Drinking & Fuel"],
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
      missionCharter: "Build a permanent Moon base at the lunar South Pole where astronauts live, generate continuous solar power, and drill ice to make water and oxygen.",
      defenseStatement: "Haughton Crater (Canada) is the undisputed #1 choice for a Moon Base. Why? Its far-north Arctic sun stays low along the horizon—just like the sunlight at the Moon's South Pole. Its crushed crater gravel tests how rovers drive on loose lunar soil, and its thick underground permafrost ice lets crews practice drilling water from frozen dirt.",
      whyEliminated: "Why other sites didn't win: Hawaii is underground in a cave without sunlight; the Atacama Desert is completely dry with zero ice; and McMurdo lacks a crater bowl.",
      keyRiskMitigations: "Ice drilling tools tested in frozen ground; spacesuit joints tested against fine dust inside the arctic habitat dome.",
      boardVerdict: "UNANIMOUS APPROVAL: Haughton Crater wins 1st place as the primary Moon Base testing ground."
    }
  },
  "scenario-b": {
    id: "scenario-b",
    code: "SCENARIO B",
    title: "Scenario B: Mars Science Station (Search for Life)",
    subtitle: "Mars Rover & Ancient Lake Exploration",
    requirement: "Must have: Ancient Mars-like rocks, freezing cold air, and living microbes to test life-detecting tools.",
    badge: "SEARCH FOR ALIEN LIFE",
    badgeColor: "bg-terracotta-500/10 text-terracotta-400 border-terracotta-500/20",
    targetBody: "Mars (Jezero Crater & Ancient Dry Lakes)",
    priorities: ["Rock & Soil Similarity", "Harsh Cold & Realistic Weather", "Search for Life & Science Tests"],
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
      missionCharter: "Search for signs of ancient alien life, study how Mars dried up into a cold desert, and test sensitive rover instruments in freezing conditions.",
      defenseStatement: "McMurdo Dry Valleys (Antarctica) is the best Mars twin on Earth. With temperatures dropping below −50°C and bone-dry air, it looks and behaves just like the Red Planet. Even better, tiny microbes live inside the porous rocks here, making it the perfect real-world test for rover laser spectrometers and life-detecting cameras.",
      whyEliminated: "Why other sites didn't win: Hawaii is too warm and wet; Iceland has young black lava instead of ancient Mars mud; and Haughton doesn't have rock-dwelling microbes.",
      keyRiskMitigations: "Sterile sampling drills prevent Earth germs from spoiling samples; automated sample containers tested in subzero winds.",
      boardVerdict: "UNANIMOUS APPROVAL: McMurdo Dry Valleys wins 1st place as the primary Mars Science Station testing ground."
    }
  },
  "scenario-c": {
    id: "scenario-c",
    code: "SCENARIO C",
    title: "Scenario C: Emergency Survival Shelter (Astronaut Safety)",
    subtitle: "Deep Underground Bunker Protection",
    requirement: "Must have: Thick underground cave ceilings to block radiation, natural warmth, and fast emergency rescue.",
    badge: "ASTRONAUT SAFETY & BUNKER",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    targetBody: "Subterranean Underground Shelters (Moon & Mars Lava Tubes)",
    priorities: ["Cave Protection from Radiation", "Easy Road Access & Fast Rescue", "Water Ice for Drinking & Fuel"],
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
      missionCharter: "Protect astronaut crews when surface habitats fail or during deadly solar radiation storms, providing a natural rock shield, stable room temperatures, and fast emergency rescue.",
      defenseStatement: "Mauna Loa Lava Tubes (Hawaii) is the ultimate survival shelter. Its 5-to-15-meter thick solid rock ceiling blocks more than 99.4% of deadly cosmic radiation and solar flares. Inside the cave, it stays a comfortable 14°C all year without any heaters, and nearby roads ensure rescue teams and supplies can arrive quickly.",
      whyEliminated: "Why other sites didn't win: Surface sites like Atacama, McMurdo, and Haughton have 0% natural cave shielding—astronauts on the surface would be exposed to deadly cosmic radiation during solar flares.",
      keyRiskMitigations: "Underground wireless radio relays keep communication alive; rock sensors listen constantly to ensure cave ceilings remain solid.",
      boardVerdict: "UNANIMOUS APPROVAL: Mauna Loa Lava Tubes wins 1st place as the primary Emergency Survival Shelter."
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
