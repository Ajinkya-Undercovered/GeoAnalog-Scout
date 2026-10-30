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
