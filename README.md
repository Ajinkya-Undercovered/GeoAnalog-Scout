# 🛰️ GeoAnalog Scout
> **Terrestrial Planetary Analog Engine for Permanent Moon Bases & Mars Missions**  
> *Built for the NASA Space Apps Challenge 2026*

---

## 🌟 1. Project Overview & The Challenge
Space exploration missions are unforgiving and multi-billion-dollar endeavors. Before sending rovers, drilling rigs, spacesuits, or subterranean habitat structures to the **Artemis Moon Base Camp (Lunar South Pole)** or **Mars**, aerospace engineers and planetary geologists must rigorously test every system in **Earth Analog Environments**.

However, there is no single Earth site that matches the Moon or Mars in every dimension. A site that is perfect for rover mobility might be terrible for soil chemistry; a site that simulates polar ice drilling might offer zero shelter against radiation.

**GeoAnalog Scout** solves this by delivering an **interactive multi-criteria planetary twin matcher**. It dynamically maps candidate off-world destinations (e.g., *Shackleton Crater Rim*, *Marius Hills Lava Tube*, *Jezero Crater Delta*, *Arcadia Planitia*) against Earth's premier planetary analogs, weighting the match based on the specific **mission test objective** (Rover Mobility, Cryo-Ice Drilling, Subterranean Base Shelter, Astrobiology, or Astronaut Field Geology).

---

## 🧠 2. The 6-Dimensional Scientific Framework
GeoAnalog Scout quantifies both planetary destinations and terrestrial analogs across six standardized scientific dimensions ($0–10$ scale):

1. **Terrain Roughness & Slope ($R$):** Topographical relief, boulder frequency, crater rim incline, and wheel-slip hazard.
2. **Thermal Extremes & Diurnal Range ($T$):** Severity of temperature swings (e.g., $+120^\circ\text{C}$ to $-233^\circ\text{C}$ in lunar polar traps vs. $-80^\circ\text{C}$ in Antarctica).
3. **Aridity & Moisture Deficit ($A$):** Absence of liquid water, desiccation index, and low atmospheric humidity.
4. **Regolith & Mineral Simulant Match ($M$):** Presence of basalt, anorthosite, smectite clays, jarosite, sulfates, and abrasive glass shards.
5. **Subsurface Shielding & Cavern Geometry ($S$):** Lava tube conduits, skylight collapse pits, and natural radiation/micrometeorite shielding.
6. **Cryogenic Volatiles & Ice ($I$):** Subsurface permafrost, cold traps, sublimation ice, and drillable hydrated deposits.

---

## 📐 3. Mathematical Matching Algorithm
The compatibility score between an Off-World Target vector $\vec{P}$ and an Earth Analog vector $\vec{E}$ is computed using a **Weighted Root-Mean-Square Deviation (RMSD)**:

$$\text{RMSD}_w = \sqrt{ \frac{\sum_{i=1}^{6} w_i \cdot (P_i - E_i)^2}{\sum_{i=1}^{6} w_i} }$$

Where $w_i$ represents the dynamic weighting assigned to dimension $i$ based on the selected mission focus (e.g., Rover Mobility triples the weight of Terrain Roughness).

The **Analog Compatibility Index ($0–100\%$)** is normalized as:

$$\text{Score} = \max\left(15, \min\left(99, \text{round}\left(100 \times \left(1 - \frac{\text{RMSD}_w}{10}\right)\right)\right)\right)$$

---

## 🛰️ 4. NASA & Orbital Datasets Cited
GeoAnalog Scout is grounded in published data from NASA missions:
- **LRO LOLA (Lunar Orbiter Laser Altimeter):** 5-meter/pixel Digital Elevation Models for lunar slope & crater topography.
- **LRO Diviner Thermal Radiometer:** Cryogenic surface temperature maps and Permanently Shadowed Region (PSR) cold traps.
- **Chandrayaan-1 $M^3$ (Moon Mineralogy Mapper):** Hydroxyl and water-ice spectral absorption signatures.
- **MRO HiRISE & CTX:** 25-centimeter sub-meter imagery of Martian delta fans and volcanic collapse pits.
- **MRO CRISM:** Compact Reconnaissance Imaging Spectrometer mineralogy maps (clays, carbonates, sulfates).
- **MRO SHARAD / SWIM:** Shallow radar sounding of buried Martian glacial ice sheets in Arcadia Planitia.
- **NASA Earthdata (ASTER GDEM & MODIS):** Terrestrial digital elevation and land surface temperature baselines.

---

## 🚀 5. Quick Start (Running the Project)

### Option A: Local Dev Server (Recommended)
Open a terminal in this directory and run:
```bash
# Using Python
python -m http.server 3000

# OR using Node.js
npx serve .
```
Then navigate to: **`http://localhost:3000`**

### Option B: Direct Double-Click
Simply double-click **`index.html`** in Windows Explorer. The application is completely zero-dependency and runs straight in Google Chrome, Microsoft Edge, or Firefox!

---

## 🎙️ 6. Hackathon Presentation Script (2-Minute Pitch)

Use this script during your judging presentation:

* **[0:00 - 0:25] The Hook:**  
  *"Judges, returning to the Moon permanently with Artemis and landing humans on Mars requires testing billion-dollar rovers, habitats, and drills before launch. But Earth has no single twin for the Moon or Mars. A site that looks like Mars might have the wrong chemistry; a site with the right rocks might have tropical rain. How do engineers find the right test bed without wasting millions of dollars?"*

* **[0:25 - 0:50] The Solution (Live Demo):**  
  *"We built **GeoAnalog Scout**. Here is our live dashboard. Let's say NASA wants to test a permanent underground habitat in the Marius Hills Lava Tube on the Moon. When we select 'Subsurface Base Shelter', our algorithm instantly scores 12 global analogs. The #1 match is the **Lanzarote Lava Tubes in Spain** with a 94% compatibility index, backed by real ESA and NASA astronaut field data."*

* **[0:50 - 1:20] The Science & Innovation:**  
  *"Now watch what happens when we switch our mission to 'In-Situ Cryogenic Ice Drilling' at Shackleton Crater. Instantly, the radar chart and map re-rank the planet: the top match shifts to **McMurdo Dry Valleys in Antarctica**, matching cold-trap permafrost and sublimation ice. We don't just give a score—we quantify discrepancies like gravity and atmospheric convection, citing official NASA LOLA and HiRISE datasets."*

* **[1:20 - 1:50] The Deliverable:**  
  *"With one click on 'Export Mission Dossier', flight planners can generate an official NASA-styled analog flight test authorization report complete with test objectives and environmental mitigations."*

* **[1:50 - 2:00] Conclusion:**  
  *"GeoAnalog Scout bridges Earth science and planetary exploration, turning Earth into humanity's launchpad for the Moon and Mars. Thank you!"*
