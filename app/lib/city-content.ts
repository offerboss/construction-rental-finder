import type { City, CityGuideLink, SourceLink } from "./locations";

// Rich content for cluster city pages. Every local fact is verified against the
// linked official or primary source; see references/published-pages.md.

type CityEntry = Omit<City, "stateSlug">;

export const sources = {
  texas811: { label: "Texas811: excavator notice requirements", url: "https://texas811.org/" },
  utilitiesCode251: { label: "Texas Utilities Code ch. 251, sec. 251.151", url: "https://statutes.capitol.texas.gov/Docs/UT/htm/UT.251.htm" },
  nwsDfwClimate: { label: "National Weather Service Fort Worth: Dallas/Fort Worth climate narrative", url: "https://www.weather.gov/fwd/dfw_narrative" },
  oshaAerialLifts: { label: "OSHA 29 CFR 1926.453, aerial lifts", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-L/section-1926.453" },
  oshaMaterialHandling: { label: "OSHA 29 CFR 1926.602(d), powered industrial truck operator training", url: "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-O/section-1926.602" },
  arlingtonRowManual: { label: "City of Arlington Public Right-of-Way Permitting and Construction Manual (2026)", url: "https://www.arlingtontx.gov/files/assets/city/v/1/strategic-initiatives/documents/real-estate-services/right-of-way-permitting/arlington-row-manual-2026-update.pdf" },
  faaPart77: { label: "14 CFR 77.9, construction or alteration requiring FAA notice", url: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77/subpart-B/section-77.9" },
  faaForm7460: { label: "FAA Form 7460-1, Notice of Proposed Construction or Alteration", url: "https://www.faa.gov/documentLibrary/media/Form/FAA_Form_7460-1_052026.pdf" },
  irvingPlan: { label: "City of Irving, Imagine Irving Comprehensive Plan (2024 update)", url: "https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/corecode/2024_%20Imagine%20Irving%20Comprehensive%20Plan_6_27_2024_edits_web_202406270822438228_5029.pdf" },
  irvingNoise: { label: "City of Irving Code ch. 22, Noise, sec. 22-3", url: "https://ecode360.com/45598628" },
  irvingRowCode: { label: "City of Irving Code, Right-of-Way Management", url: "https://ecode360.com/45701351" },
  irvingRowPermit: { label: "City of Irving Franchise Utility Construction Permit Application (ROW)", url: "https://irvingtx.gov/corecode/storage/uber_resource/uploaded_pdfs/corecode/FranchiseUtilityPermitApplication_10620.pdf" },
  planoTomorrowFaq: { label: "City of Plano, Plano Tomorrow comprehensive plan FAQ", url: "https://www.planotomorrow.org/235/Frequently-Asked-Questions" },
  planoTcp: { label: "City of Plano Traffic Control Plan Procedures and General Notes", url: "https://content.civicplus.com/api/assets/c54619d8-5548-4254-8ed1-7944575def53" },
  planoRow: { label: "City of Plano ROW Guidelines and Requirements for Right-of-Way Permits", url: "https://content.civicplus.com/api/assets/81530df0-a2a4-4b02-9139-cfdede821898" },
  planoNoise: { label: "City of Plano Code ch. 14, art. V, Noise (ordinance passed Aug. 11, 2025)", url: "https://plano.novusagenda.com/Agendapublic/AttachmentViewer.ashx?AttachmentID=20487&ItemID=10194" },
  usdaHoustonBlack: { label: "USDA NRCS: Houston Black, the Texas state soil", url: "https://www.twdb.texas.gov/conservation/education/doc/tx_State_soil.pdf" },
  usdaOsd: { label: "USDA NRCS Official Series Description: Houston Black", url: "https://soilseries.sc.egov.usda.gov/OSD_Docs/H/HOUSTON_BLACK.html" },
  oshaTrenching: { label: "OSHA trenching and excavation safety fact sheet", url: "https://www.osha.gov/sites/default/files/publications/TRENCH_EXCAVATION_FS.pdf" },
  tceqConstructionStormwater: { label: "TCEQ Stormwater General Permit for Construction Activities (TXR150000)", url: "https://www.tceq.texas.gov/permitting/stormwater/construction" },
  friscoPlan: { label: "City of Frisco 2040 Comprehensive Plan, Chapter 2: Land Use", url: "https://www.friscotexas.gov/DocumentCenter/View/36065/2040-Comp-Plan-Chapter-2PDF" },
  friscoRow: { label: "City of Frisco Right-of-Way permits", url: "https://www.friscotexas.gov/167/Right-of-Way" },
  friscoRowOrdinance: { label: "City of Frisco Ordinance No. 2025-05-30, Chapter 78 right-of-way amendments", url: "https://ecode360.com/FR6313/laws/LF2373258.pdf" },
  friscoLineLocates: { label: "City of Frisco Line Locates", url: "https://www.friscotexas.gov/1478/Line-Locates" },
  friscoGeneralNotes: { label: "City of Frisco Engineering Standards, General Notes (October 2025)", url: "https://www.friscotexas.gov/DocumentCenter/View/39415/2025-General-Notes-ONLY-PDF-Opens-in-New-Window" },
  friscoNoise: { label: "City of Frisco Code ch. 54, art. IV, Noise, sec. 54-90", url: "https://ecode360.com/38351335" },
  tshaFrisco: { label: "Handbook of Texas: Frisco, TX", url: "https://www.tshaonline.org/handbook/entries/frisco-tx" },
  mckinneyHistory: { label: "City of McKinney: McKinney's History", url: "https://www.mckinneytexas.org/122/History" },
  mckinneyPlan: { label: "City of McKinney, ONE McKinney 2040 Comprehensive Plan", url: "https://www.mckinneytexas.org/292/2040-Comprehensive-Plan" },
  mckinneyTownCenter: { label: "ONE McKinney 2040, Town Center District strategy", url: "https://www.mckinneytexas.org/DocumentCenter/View/35443" },
  mckinneyCoa: { label: "City of McKinney Historic Preservation: Certificate of Appropriateness FAQ", url: "https://www.mckinneytexas.org/faq.aspx?TID=50" },
  mckinneyCommercialGuide: { label: "City of McKinney Commercial Building Permit Guide", url: "https://www.mckinneytexas.org/DocumentCenter/View/361/New-Commercial-or-Additions-Submittal-Packet" },
  mckinneyRowManual: { label: "City of McKinney Right-of-Way Construction and Permitting Procedures Manual (effective July 1, 2025)", url: "https://www.mckinneytexas.org/DocumentCenter/View/36331/ROW-Construction-and-Permitting-Procedures-Manual-v-7125" },
  garlandEnvision: { label: "City of Garland, Envision Garland 2030 Comprehensive Plan", url: "https://www.garlandtx.gov/DocumentCenter/View/23463/Envision-Garland-2012" },
  garlandStrategicPlan: { label: "City of Garland, Garland on the Rise Strategic Plan 2026–2036", url: "https://garlandtx.gov/DocumentCenter/View/24242/Garland-on-the-Rise-Community-Brochure" },
  garlandPermitProcess: { label: "City of Garland Right-of-Way Permit Process", url: "https://www.garlandtx.gov/348/Permit-Process" },
  garlandRowDirectives: { label: "City of Garland Directives: Utility Registration, Permits, and Construction", url: "https://garlandtx.gov/DocumentCenter/View/591/Utility-Registration-Permits-and-Construction-PDF" },
  garlandRowChecklist: { label: "City of Garland Utility Construction Checklist (right-of-way)", url: "https://www.garlandtx.gov/DocumentCenter/View/20358/Utility-Construction-checklist" },
  garlandWorkingHours: { label: "City of Garland Ordinance No. 7079 (2019), construction working hours", url: "https://ecode360.com/GA6318/laws/LF2220209.pdf" },
  garlandPowerLight: { label: "Garland Power & Light: Line Locations (Call 811)", url: "https://www.gpltexas.org/residential/line-locations-call-811" },
  grandPrairieAbout: { label: "City of Grand Prairie: About Grand Prairie", url: "https://www.gptx.org/About-Grand-Prairie" },
  grandPrairieEngineeringPermits: { label: "City of Grand Prairie Engineering Permits", url: "https://www.gptx.org/Departments/Engineering/Engineering-Development-Services/Permit-Forms" },
  grandPrairieFranchisePermit: { label: "City of Grand Prairie Franchise Utility Permit: standards for construction in public right-of-way", url: "https://www.gptx.org/files/sharedassets/public/v/6/departments/engineering/documents/franchise-utility-permit-form.pdf" },
  grandPrairieCommercialGuide: { label: "City of Grand Prairie New Commercial Construction Project Guide", url: "https://www.gptx.org/files/sharedassets/public/v/1/departments/building-inspections/documents/new-commercial-const-packet.pdf" },
  mesquitePlan: { label: "City of Mesquite Comprehensive Plan (adopted Oct. 7, 2019)", url: "https://cityofmesquite.com/DocumentCenter/View/14187/Mesquite-Comprehensive-Plan-Adopted-October-7-2019" },
  mesquiteRow: { label: "City of Mesquite Code ch. 15, art. III, Rights-of-Way Rules and Regulations", url: "https://apps.cityofmesquite.com/city_secweb/ordinances/3422.pdf" },
  mesquiteNoise: { label: "City of Mesquite Noise Ordinance", url: "https://cityofmesquite.com/3475/Noise-Ordinance" },
  mesquiteAirport: { label: "City of Mesquite: Mesquite Metro Airport pilot information", url: "https://www.cityofmesquite.com/651/Pilot-Information" },
  carrolltonTransitCenter: { label: "City of Carrollton Transit Center (TC) Zoning District", url: "https://www.carrolltontxdevelopment.com/development/transit-oriented-development/transit-center-zoning-district" },
  carrolltonTod: { label: "City of Carrollton Transit Oriented Development", url: "https://www.carrolltontxdevelopment.com/development/transit-oriented-development" },
  carrolltonRow: { label: "City of Carrollton Code ch. 57, Right-of-Way Management Ordinance", url: "https://ecode360.com/45833391" },
  carrolltonNoise: { label: "City of Carrollton Code sec. 130.18, Unlawful noise", url: "https://ecode360.com/45836750" },
  richardsonEnhancementAreas: { label: "City of Richardson Enhancement Areas", url: "https://www.cor.net/departments/development-services/comprehensive-planning/enhancement-areas" },
  richardsonComprehensivePlan: { label: "City of Richardson Comprehensive Planning (Envision Richardson, 2024)", url: "https://www.cor.net/departments/development-services/comprehensive-planning-6014" },
  richardsonRow: { label: "City of Richardson Right-of-Way Permits", url: "https://www.cor.net/departments/capital-projects-engineering/right-of-way-permits" },
  richardsonNoise: { label: "City of Richardson Ordinance No. 4153 (2016), construction noise, sec. 13-75(9)", url: "https://mcclibraryfunctions.azurewebsites.us/api/ordinanceDownload/10221/783255/pdf" },
  oshaScissorLifts: { label: "OSHA interpretation letter (Aug. 1, 2000): scissor lifts are covered by the scaffold standards", url: "https://www.osha.gov/laws-regs/standardinterpretations/2000-08-01-0" },
  texasHighVoltage: { label: "Texas Health and Safety Code ch. 752, High Voltage Overhead Lines", url: "https://statutes.capitol.texas.gov/Docs/HS/htm/HS.752.htm" },

  denton2040: { label: "City of Denton: Denton 2040 Comprehensive Plan", url: "https://www.cityofdenton.com/772/Denton-2040-Comprehensive-Plan" },
  dentonNoise: { label: "City of Denton: Noise Ordinance Special Permit (construction hours, Code sec. 17-20(c)(3)(f))", url: "https://www.cityofdenton.com/1271/Noise-Ordinance-Special-Permit" },
  dentonRow: { label: "City of Denton: Right-of-Way Permits", url: "https://www.cityofdenton.com/937/Right-of-Way-Permits" },
  dentonDevHandbook: { label: "City of Denton Development Handbook (May 2026)", url: "https://www.cityofdenton.com/DocumentCenter/View/13997/Development-Handbook-PDF" },
  dentonDowntown: { label: "City of Denton: Design Downtown Denton Final Report", url: "https://www.cityofdenton.com/DocumentCenter/View/10959/Design-Downtown-Denton-Final-Report?bidId=" },
  lewisvilleLongRange: { label: "City of Lewisville: Long Range Plans", url: "https://www.cityoflewisville.com/city-hall/city-departments/planning/long-range-plans" },
  lewisvilleOldTown: { label: "City of Lewisville: Old Town Development", url: "https://www.ecodevlewisville.com/old-town/development" },
  lewisvilleRow: { label: "City of Lewisville: How to Apply for Right-of-Way Permit", url: "https://www.cityoflewisville.com/city-hall/city-departments/engineering/how-to-apply-for-right-of-way-permit" },
  allen2045: { label: "City of Allen: Allen 2045 Comprehensive Plan", url: "https://www.cityofallen.org/departments/community_development/planning_and_development/allen_2045_comprehensive_plan.php" },
  allenRow: { label: "City of Allen: Right-of-Way Management", url: "https://www.cityofallen.org/departments/engineering_and_traffic/right_of_way_management.php" },
  flowerMoundFaq: { label: "Town of Flower Mound Building Inspections FAQ (construction hours)", url: "https://www.flower-mound.com/167/FAQs" },
  flowerMoundLocates: { label: "Town of Flower Mound: Utility Line Locates", url: "https://www.flower-mound.com/2446/RowUtility-Locates" },
  flowerMoundLakeside: { label: "Town of Flower Mound: Lakeside Business District area plan", url: "https://www.flowermound.gov/DocumentCenter/View/8311/20-Area-Plans?bidId=" },
  mansfieldLandUse: { label: "City of Mansfield 2012 Land Use Plan", url: "https://www.mansfieldtexas.gov/DocumentCenter/View/766/Comprehensive-Land-Use-Plan-PDF" },
  mansfieldEngineering: { label: "City of Mansfield Engineering Services (ROW, grading and floodplain permits)", url: "https://www.mansfieldtexas.gov/364/Engineering-Services" },
  mansfieldElectricRow: { label: "City of Mansfield Electric and Street Light Design and Installation Guidelines (2021)", url: "https://www.mansfieldtexas.gov/DocumentCenter/View/9388/Electric-Design-Install-Guidelines---2021-PDF?bidId=" },
  nrhPermits: { label: "City of North Richland Hills: Permit Information (ROW, paving and contractor registration)", url: "https://www.nrhtx.com/1310/Permit-Information" },
  nrhConstructionHours: { label: "City of North Richland Hills: Authorized Construction Hours (Code sec. 98-61(b))", url: "https://www.nrhtx.com/618/Authorized-Construction-Hours" },
  nrhTransportationContext: { label: "City of North Richland Hills Transportation Plan, Chapter B: Current Context (HomeTown, Smithfield and Iron Horse TOD)", url: "https://www.nrhtx.com/DocumentCenter/View/9065/03---Chapter-B_Current-Context" },
  tshaRowlett: { label: "Handbook of Texas: Rowlett, TX", url: "https://www.tshaonline.org/handbook/entries/rowlett-tx" },
  rowlettRealize: { label: "City of Rowlett: Realize Rowlett 2020 Comprehensive Plan", url: "https://www.rowletttx.gov/1090/Realize-Rowlett-2020" },
  rowlettDevEngineering: { label: "City of Rowlett: Development Engineering (ROW, grading and floodplain)", url: "https://www.rowletttx.gov/1318/Development-Engineering" },
  tshaEuless: { label: "Handbook of Texas: Euless, TX", url: "https://www.tshaonline.org/handbook/entries/euless-tx" },
  eulessNoise: { label: "City of Euless Code ch. 46, art. VI, Noise, sec. 46-172(9)", url: "https://ecode360.com/39084057" },
  eulessBuilding: { label: "City of Euless: Building Construction and Permitting", url: "https://www.eulesstx.gov/departments/planning-and-economic-development/building-construction-and-permitting" },
  eulessEngineering: { label: "City of Euless: Engineering Division", url: "https://www.eulesstx.gov/departments/public-works-and-engineering/engineering" },
  tshaWylie: { label: "Handbook of Texas: Wylie, TX (Collin County)", url: "https://www.tshaonline.org/handbook/entries/wylie-tx-collin-county" },
  wylieConstructionHours: { label: "City of Wylie: Construction Hours (Ordinance No. 2024-31)", url: "https://www.wylietexas.gov/departments/building_inspection/construction_hours.php" },
  wylieEngineeringApplications: { label: "City of Wylie Engineering: Applications, Fees & Reports (Saturday work)", url: "https://www.wylietexas.gov/departments/engineering/applications_fees_reports.php" },
  wylieRow: { label: "City of Wylie Engineering: Right of Way", url: "https://www.wylietexas.gov/departments/engineering/right_of_way.php" },
  wylieEngineering: { label: "City of Wylie Engineering Department", url: "https://www.wylietexas.gov/departments/engineering/index.php" },
  wyliePlanning: { label: "City of Wylie Planning and Zoning (Envision Wylie Comprehensive Plan)", url: "https://www.wylietexas.gov/departments/planning/index.php" },
  tshaDesoto: { label: "Handbook of Texas: DeSoto, TX", url: "https://www.tshaonline.org/handbook/entries/desoto-tx" },
  desotoComprehensivePlan: { label: "City of DeSoto: Comprehensive Plan (adopted February 2024)", url: "https://www.desototexas.gov/495/Comprehensive-Plan" },
  desotoBuilding: { label: "City of DeSoto: Building Inspections (construction hours)", url: "https://www.desototexas.gov/462/Building-Inspections" },
  desotoGradingPermit: { label: "City of DeSoto Engineering Division Grading Permit (PDF)", url: "https://www.desototexas.gov/DocumentCenter/View/1138/Grading-Permit-PDF" },
  desotoRowApplication: { label: "City of DeSoto R.O.W. Permit Application and Conditions (PDF)", url: "https://www.desototexas.gov/DocumentCenter/View/1125/ROW-Application-Form-PDF" },
  desotoRow: { label: "City of DeSoto: Right of Way", url: "https://www.desototexas.gov/489/Right-of-Way" },
  tshaGrapevine: { label: "Handbook of Texas: Grapevine, TX (Tarrant County)", url: "https://www.tshaonline.org/handbook/entries/grapevine-tx-tarrant-county" },
  grapevineRowFaq: { label: "City of Grapevine Public Works: Right-of-Way permit FAQ", url: "https://www.grapevinetexas.gov/FAQ.aspx?QID=141" },
  grapevineRowNotes: { label: "City of Grapevine Right-of-Way Permitting Notes & Requirements (PDF)", url: "https://www.grapevinetexas.gov/DocumentCenter/View/45" },
  grapevineGeneralNotes: { label: "City of Grapevine Construction Standard Details, General Notes (PDF)", url: "https://www.grapevinetexas.gov/DocumentCenter/View/5621/Construction-Standard-Details" },
  tshaBedford: { label: "Handbook of Texas: Bedford, TX", url: "https://www.tshaonline.org/handbook/entries/bedford-tx" },
  bedfordGeneralNotes: { label: "City of Bedford General Construction Notes (PDF)", url: "https://www.bedfordtx.gov/DocumentCenter/View/10989/General-Construction-Notes" },
  bedfordRowOrdinance: { label: "City of Bedford Ordinance No. 17-3204 (2017), Chapter 96 Right-of-Way Management", url: "https://mcclibraryfunctions.azurewebsites.us/api/ordinanceDownload/14937/845485/pdf" },
  bedfordPermits: { label: "City of Bedford: Permits, Applications, and Information", url: "https://www.bedfordtx.gov/185/Permits-Applications-and-Information" },
  tshaCedarHill: { label: "Handbook of Texas: Cedar Hill, TX (Dallas County)", url: "https://www.tshaonline.org/handbook/entries/cedar-hill-tx-dallas-county" },
  cedarHillNature: { label: "City of Cedar Hill: Nature & Open Space", url: "https://cedarhilltx.com/2905/Nature-Open-Space" },
  cedarHillPreCon: { label: "City of Cedar Hill Public Works Pre-Construction Packet and ROW Permit Conditions (PDF)", url: "https://www.cedarhilltx.com/DocumentCenter/View/32234/Pre-Construction-Packet-2019-PDF" },
  cedarHillForms: { label: "City of Cedar Hill Engineering: Forms, Permits and ROW permits", url: "https://www.cedarhilltx.com/658/Forms-Permits-Instructions" },
  tshaBurleson: { label: "Handbook of Texas: Burleson, TX", url: "https://www.tshaonline.org/handbook/entries/burleson-tx" },
  burlesonChisholmSummit: { label: "City of Burleson: Chisholm Summit", url: "https://www.burlesontx.com/2309/Chisholm-Summit" },
  burlesonRow: { label: "City of Burleson: Right-of-Way Permits", url: "https://www.burlesontx.com/919/Right-of-Way-Permits" },
  burlesonRowApplication: { label: "City of Burleson ROW Permit Application and Locate Request", url: "https://www.burlesontx.com/FormCenter/Public-Works-6/ROW-Permit-Application-136" },
  burlesonNoise: { label: "City of Burleson Code of Ordinances sec. 34-191, Noise (construction work)", url: "https://ecode360.com/39930276" },
  burlesonForms: { label: "City of Burleson Development Engineering: Forms & Checklists", url: "https://www.burlesontx.com/495/Forms-Checklists" },
  tshaRockwall: { label: "Handbook of Texas: Rockwall, TX (Rockwall County)", url: "https://www.tshaonline.org/handbook/entries/rockwall-tx-rockwall-county" },
  rockwallConstructionNotes: { label: "City of Rockwall Construction Notes (Ordinance 05-45 working hours; inspections) (PDF)", url: "https://www.rockwall.com/documents/engineering/City%20Construction%20Notes.pdf" },
  rockwallFill: { label: "City of Rockwall Fill Material Request Form and instructions (PDF)", url: "https://ra.rockwall.com/documents/Engineering/FillRequestrev2004_000.pdf" },
  rockwallEngineering: { label: "City of Rockwall Engineering (ROW portal, floodplain, Saturday work requests)", url: "https://www.rockwall.com/engineering.asp" },
  rockwallTakeline: { label: "City of Rockwall Building Inspections: Takeline (Lake Ray Hubbard)", url: "https://www.rockwall.com/buildinginspections_takeline.asp" },
} satisfies Record<string, SourceLink>;

// Guide links render only once the guide is published in resources.ts.
const compactGuide: CityGuideLink = {
  slug: "skid-steer-vs-mini-excavator",
  reason: "Compare the two most common compact machines before you book.",
};
const excavatorSizeGuide: CityGuideLink = {
  slug: "what-size-excavator-do-i-need",
  reason: "Match dig depth, reach and machine size to your site.",
};
const boomLiftGuide: CityGuideLink = {
  slug: "how-to-choose-a-boom-lift",
  reason: "Compare boom and scissor lift types, working height, reach and ground conditions.",
};
const sitePrepGuide: CityGuideLink = {
  slug: "site-preparation-equipment",
  reason: "Plan clearing, grading, compaction and trenching equipment in the right order.",
};
const rentalChecklistGuideLink: CityGuideLink = {
  slug: "equipment-rental-checklist",
  reason: "Confirm access, locates, operators and delivery details before the machine arrives.",
};
const shortVsLongGuideLink: CityGuideLink = {
  slug: "short-term-vs-long-term-rentals",
  reason: "Plan daily, weekly or monthly rental length around schedule and utilization.",
};
const utilityLocatesGuideLink: CityGuideLink = {
  slug: "utility-locates-before-digging",
  reason: "Line up Texas811 notice, City water and sewer locates and permits before the first dig.",
};
const generatorGuideLink: CityGuideLink = {
  slug: "jobsite-generator-sizing",
  reason: "Size temporary power by rated output and runtime, and set it up to OSHA rules.",
};
const trenchSafetyGuideLink: CityGuideLink = {
  slug: "trench-safety-basics",
  reason: "Know when trenches need sloping, shoring or a trench box before crews go in.",
};
const telehandlerForkliftGuideLink: CityGuideLink = {
  slug: "telehandler-vs-forklift",
  reason: "Compare reach, ground conditions and operator rules for material handling.",
};

export const arlington: CityEntry = {
  name: "Arlington",
  slug: "arlington",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Arlington sits in Tarrant County between Dallas and Fort Worth, home to UT Arlington and a busy entertainment district.",
  metaDescription:
    "Construction equipment rentals in Arlington, TX: boom lifts, telehandlers, scissor lifts and generators for commercial and infill work, plus local site rules.",
  localIntro: [
    "Arlington sits in Tarrant County between Dallas and Fort Worth, and a lot of its construction is commercial work, tenant finish-outs and infill on sites that already have neighbors, traffic and finished surfaces around them. That puts lifts, telehandlers and jobsite power near the top of most rental lists here.",
    "Use this page to match equipment to Arlington work, then confirm availability, delivery and terms directly with providers that serve your site.",
  ],
  useCaseContext: [
    "Much of the work happens around buildings that are already open: retail centers, offices, campus buildings and the venues of the Entertainment District, which the City generally describes as the area bounded by Lamar Boulevard, Cooper Street, Abram Street and State Highway 360. Facade, canopy, roofline and interior work at height calls for boom lifts and scissor lifts, and telehandlers place materials on upper floors and roofs when there's no crane on site.",
    "Infill sites bring their own limits. Staging space is often a strip of parking lot, deliveries compete with customers and event traffic, and the street out front may be a city thoroughfare where lanes can't be closed at rush hour. A machine that fits the gate, rides on non-marking tires and arrives at the right time matters as much as its lift height.",
    "Weather shapes the schedule too. The National Weather Service office in Fort Worth notes that Metroplex daytime highs in July and August are consistently in the 90s and often reach 100 degrees, and that thunderstorms and severe weather peak in spring. Generators and lighting let crews shift work into cooler hours, and lift work needs a plan for wind and storms.",
  ],
  featuredEquipment: [
    { slug: "boom-lift-rental", reason: "Facade, canopy and roofline work on occupied commercial buildings, where the platform has to reach up and over landscaping, entries or a lower roof. Articulating booms suit tight setups; telescopic booms give more straight-line reach." },
    { slug: "scissor-lift-rental", reason: "Interior finish-outs, ceilings and exterior walls with level ground in front of them. Electric slab scissors with non-marking tires suit finished floors in retail and office space." },
    { slug: "telehandler-rental", reason: "Lifting pallets of block, roofing and framing materials to upper floors or roofs. Check the load chart at the reach you actually need, not just the maximum lift height." },
    { slug: "generator-rental", reason: "Power before permanent service is live, for tools on far corners of a lot, and for lights when hot-weather schedules push work into early mornings or evenings." },
    { slug: "skid-steer-rental", reason: "Clearing, grading pads, moving spoil and carrying pallets on forks on infill lots where a larger loader won't fit between curbs and buildings." },
    { slug: "mini-excavator-rental", reason: "Utility tie-ins, footings and short trench runs on developed sites, where City lines, irrigation and private service lines all have to be located before anyone digs." },
  ],
  siteConsiderations: [
    {
      title: "Two locate requests, not one",
      text: "Texas law requires excavators to notify a one-call center at least 48 hours before digging, not counting weekends and holidays. For right-of-way work, Arlington's manual also requires a separate City locate request, made through the Ask Arlington app or the City website at least two working days ahead, for City water and sewer lines, streetlights, signals, communication lines and median irrigation.",
      sources: [sources.utilitiesCode251, sources.arlingtonRowManual],
    },
    {
      title: "Private lines aren't marked",
      text: "The same manual notes that private water and sanitary sewer services and stormwater pipes aren't identified through Texas 811 or the City locate process. On redevelopment sites, allow time to find them with plans, potholing or vacuum excavation before a mini excavator or trencher goes in.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Right-of-way hours and rush-hour limits",
      text: "Work in Arlington's public right-of-way runs Monday through Friday, 7 a.m. to 5 p.m., unless the City approves other hours in writing. On streets in the Thoroughfare Development Plan, work can't interfere with traffic from 7 to 9 a.m. or 4 to 6 p.m. on weekdays, so plan any delivery that needs a lane around those windows.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Event days in the Entertainment District",
      text: "For right-of-way work in the Entertainment District, the City requires work to stop at least four hours before a special event at venues such as AT&T Stadium and Globe Life Field, and bars subsurface work on the working day before one. Open excavations must be backfilled the day before an event, and equipment can't be left on site overnight without approval.",
      sources: [sources.arlingtonRowManual],
    },
    {
      title: "Plan for heat and spring storms",
      text: "Summer highs in the Metroplex are consistently in the 90s and often reach 100 degrees, and severe weather peaks in spring, according to the National Weather Service in Fort Worth. Ask providers about cab air conditioning, check the lift's rated wind limits in the operator's manual, and keep a weather call in the daily plan.",
      sources: [sources.nwsDfwClimate],
    },
    {
      title: "Boom lift rules on site",
      text: "OSHA requires boom lift controls to be tested each day before use and allows only authorized persons to operate the lift. Workers in the basket must wear a body belt or harness with a lanyard attached to the boom or basket, never tied off to a nearby pole or structure.",
      sources: [sources.oshaAerialLifts],
    },
  ],
  faqs: [
    { question: "Do I need a City locate as well as Texas 811 in Arlington?", answer: "For work in the public right-of-way, yes. Arlington's right-of-way manual requires a Texas 811 request plus a separate City locate for City water, sewer, streetlight, signal, communication and irrigation lines, made through the Ask Arlington app or the City website at least two working days ahead. Private service lines aren't marked by either process." },
    { question: "Can I work in the Entertainment District on event days?", answer: "Right-of-way work there has to stop at least four hours before a special event, and subsurface work isn't allowed on the working day before one. Check the event schedules for AT&T Stadium, Globe Life Field and the other venues before you book deliveries and pickups." },
    { question: "What lift should I rent for storefront and facade work?", answer: "If the lift can sit on level pavement directly below the work, a scissor lift is often simplest. If you need to reach over landscaping, a canopy or a lower roof, an articulating boom lift is the usual choice. Give the provider your working height, the outreach you need and the surface the lift will sit on." },
    { question: "When should I schedule equipment deliveries in Arlington?", answer: "If a delivery needs a lane on a city thoroughfare, avoid the weekday 7 to 9 a.m. and 4 to 6 p.m. windows when right-of-way work can't interfere with traffic, and avoid event days near the Entertainment District. Confirm the delivery window and the unloading spot with the provider." },
  ],
  nearbyCities: ["irving", "grand-prairie", "mansfield", "euless", "north-richland-hills", "dallas", "fort-worth"],
  heroImage: {
    src: "/images/locations/arlington-tx-construction-equipment-rental.webp",
    alt: "Telehandler placing a pallet beside a steel-frame commercial building on a clay pad in Arlington, Texas",
  },
  guides: [excavatorSizeGuide, compactGuide, boomLiftGuide, rentalChecklistGuideLink, utilityLocatesGuideLink, generatorGuideLink],
};

export const irving: CityEntry = {
  name: "Irving",
  slug: "irving",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Irving sits at the center of the Dallas–Fort Worth Metroplex, bordering DFW Airport and home to the Las Colinas Urban Center.",
  metaDescription:
    "Construction equipment rentals in Irving, TX: forklifts, telehandlers and scissor lifts for Las Colinas offices and warehouse work near DFW Airport.",
  localIntro: [
    "Irving sits at the center of the Dallas–Fort Worth Metroplex. The City's comprehensive plan notes that it borders DFW Airport and neighboring cities, with little or no room left to expand its boundaries, so much of the work here happens inside and around existing offices in the Las Colinas Urban Center and warehouse and light industrial buildings along major corridors.",
    "That mix makes material handling and work-at-height equipment the core of many Irving rentals. Use this page to match equipment to the job, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The Imagine Irving comprehensive plan includes a Manufacturing/Warehouse land use category for light manufacturing, warehousing and storage inside buildings, and envisions office, light industrial and logistics uses along major thoroughfares and State Highway 161. Racking installs, dock work, interior fit-outs and tenant turnovers in these buildings lean on forklifts, scissor lifts and telehandlers more than on earthmoving equipment.",
    "In Las Colinas and other office areas, the work tends to be finish-outs, facade and window work, and site improvements around occupied buildings and parking areas. Slab scissor lifts with non-marking tires, compact booms and careful delivery timing matter here, because deliveries often share drives and loading areas with tenants.",
    "Two features of Irving's geography also show up on jobsites. DFW Airport borders the city, so tall temporary equipment can trigger federal airspace notice. And the comprehensive plan notes that Irving's channels drain to the Elm Fork of the Trinity River, with flood control districts maintaining levees along Grapevine Creek, the Elm Fork, Bear Creek and Hackberry Creek, so ask early if your site sits near a levee or floodplain.",
    "Weather matters on open yards and building exteriors. The National Weather Service office in Fort Worth notes that thunderstorms and severe weather peak in spring, and that large hail, damaging winds and flooding occur in the region nearly every year. Check each lift's rated wind limit, plan where machines will be parked overnight, and expect gravel and dirt yards to soften after heavy rain.",
  ],
  featuredEquipment: [
    { slug: "forklift-rental", reason: "Unloading trailers, staging racking and moving palletized materials inside warehouse and light industrial buildings. Tell the provider if you need a warehouse forklift for a slab floor or a rough-terrain model for a gravel or dirt yard." },
    { slug: "scissor-lift-rental", reason: "Racking installs, ceiling and sprinkler work, lighting and interior finish-outs. Electric slab scissors fit through doors and aisles without marking floors; rough-terrain scissors suit exterior walls and unpaved areas." },
    { slug: "telehandler-rental", reason: "Placing materials on roofs and upper floors, setting loads over obstacles and handling pallets on uneven yard surfaces where a standard forklift can't travel." },
    { slug: "boom-lift-rental", reason: "Facade, glazing and exterior maintenance on office buildings, and high exterior walls on warehouses. Check working height, outreach and whether the boom can reach from the drive or lot you have." },
    { slug: "skid-steer-rental", reason: "Yard cleanup, grading around new docks and drives, and moving material with buckets, forks or a broom where space is tight between buildings and parked trailers." },
    { slug: "compactor-rental", reason: "Compacting subgrade and base under new paving, dock aprons and utility trenches. Plate compactors cover small patches; rollers make sense for larger yard and parking areas." },
  ],
  siteConsiderations: [
    {
      title: "Tall equipment near DFW Airport",
      text: "Federal rules require FAA notice for construction more than 200 feet above ground, or construction that exceeds an imaginary surface sloping 100 to 1 out to 20,000 feet from the nearest runway at airports like DFW. The FAA's notice form covers temporary structures such as cranes and must be filed at least 45 days before work starts.",
      sources: [sources.faaPart77, sources.faaForm7460],
    },
    {
      title: "Airport property has its own authority",
      text: "Irving's comprehensive plan notes that DFW International Airport exercises its own land use regulations and authority. For work on airport property, confirm requirements with the airport rather than assuming City rules cover it.",
      sources: [sources.irvingPlan],
    },
    {
      title: "Construction hours near homes",
      text: "Irving's noise ordinance limits building construction, demolition, alteration and repair in or next to a residential district, and street excavation there, to 6 a.m. to 9 p.m. on weekdays and 7 a.m. to 8 p.m. on weekends, unless it's an emergency or the City issues an after-hours permit.",
      sources: [sources.irvingNoise],
    },
    {
      title: "Delivery windows next to neighborhoods",
      text: "The same ordinance restricts noise from loading or unloading materials and equipment at a business next to a residential area from 9 p.m. to 7 a.m. on weekdays and 9 p.m. to 9 a.m. on weekends. Schedule drop-offs and pickups at warehouses near homes inside those limits.",
      sources: [sources.irvingNoise],
    },
    {
      title: "Right-of-way and street cuts",
      text: "Construction in Irving's right-of-way requires a permit, and City code states that it's the City's policy not to cut streets or sidewalks; a cut needs prior approval. The City's permit application also asks contractors to contact the Traffic Department 48 hours before working within 500 feet of a signalized intersection.",
      sources: [sources.irvingRowCode, sources.irvingRowPermit],
    },
    {
      title: "Forklift operator training",
      text: "OSHA's construction standard applies the same powered industrial truck operator training rules as general industry, so forklift operators need training and an evaluation before they run the truck. Ask the provider to send the operator's manual and capacity information with the machine.",
      sources: [sources.oshaMaterialHandling],
    },
  ],
  faqs: [
    { question: "Do I need FAA approval to use a boom lift or crane near DFW Airport?", answer: "It depends on height and distance. FAA rules require notice for construction more than 200 feet above ground, or construction that penetrates a 100:1 surface extending 20,000 feet from the nearest runway at airports like DFW, and temporary structures such as cranes count. The FAA's online notice criteria tool shows if you need to file; if you do, file at least 45 days before work starts." },
    { question: "Which forklift do I need for an Irving warehouse job?", answer: "Indoors on a finished slab, a standard warehouse forklift is usually right. For gravel yards, unpaved lots or uneven ground, ask about a rough-terrain forklift or a telehandler. Share load weights, lift heights, aisle widths and door clearances with the provider." },
    { question: "Do I need to call 811 for yard and dock work in Irving?", answer: "Yes, if you'll dig, trench or set anything below grade. Texas law requires notice to a one-call center no later than 48 hours before excavation, not counting weekends and holidays, and no earlier than 14 days before. Texas811 takes requests by phone at 811 or online." },
    { question: "Can I get a lift into a finished office or retail space?", answer: "Usually, with the right machine. Ask for an electric slab scissor or compact boom with non-marking tires, check door widths, ramp or elevator limits and floor load ratings, and plan delivery around tenant hours." },
  ],
  nearbyCities: ["arlington", "grand-prairie", "carrollton", "euless", "grapevine", "dallas", "fort-worth"],
  heroImage: {
    src: "/images/locations/irving-tx-construction-equipment-rental.webp",
    alt: "Telehandler and forklift moving pallets in the gravel yard of a new tilt-wall warehouse in Irving, Texas",
  },
  guides: [compactGuide, excavatorSizeGuide, boomLiftGuide, shortVsLongGuideLink, telehandlerForkliftGuideLink],
};

export const plano: CityEntry = {
  name: "Plano",
  slug: "plano",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Plano is a mature suburb north of Dallas with only about 6% of its land still available for development, so most work is redevelopment.",
  metaDescription:
    "Construction equipment rentals in Plano, TX: mini excavators, compact track loaders and compactors for redevelopment on tight lots, plus local site rules.",
  localIntro: [
    "Plano is a mature suburb north of Dallas, and the City's comprehensive plan says only about 6% of its land is still available for development. Much of the construction here is redevelopment and reinvestment: rebuilding on existing lots, refreshing older commercial sites and adding to established neighborhoods.",
    "Those jobs usually come with tight access, finished surfaces and neighbors on every side, so compact equipment does most of the work. Use this page to match machines to Plano projects, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Plano Tomorrow, the City's comprehensive plan, aims to conserve established neighborhoods while encouraging reinvestment in underperforming commercial sites and redevelopment along regional transportation corridors. In practice that means teardowns and rebuilds, utility upgrades, new flatwork and additions on lots already hemmed in by streets, alleys, fences and mature trees.",
    "On those sites, a mini excavator, a compact track loader or skid steer, and a plate compactor or small roller can handle the digging, grading and backfill that a larger fleet would do on open ground. If the lot is reached from an alley, measure the alley width, gate openings and any overhead lines before you pick a machine.",
    "The ground matters too. USDA describes the Blackland Prairie as extending from north of Dallas south to San Antonio. Its signature soil, Houston Black clay, shrinks and cracks when dry, swells when wet and takes in water very slowly once it's moist, and USDA notes that its shrink-swell potential commonly limits building sites in metro areas. Look up your parcel in the USDA Web Soil Survey and plan for ground that turns sticky after rain.",
    "Timing helps on clay. The National Weather Service office in Fort Worth notes that spring and fall are the wettest seasons in the Metroplex, which is when small sites are most likely to turn to mud. Schedule grading and compaction around the forecast, and ask providers whether rubber-tracked machines and ground protection mats are available for the lawns, drives and alleys you need to cross.",
  ],
  featuredEquipment: [
    { slug: "mini-excavator-rental", reason: "Teardowns, footings, utility tie-ins and pool or drainage work on lots where a full-size excavator won't fit between the house, fence and trees. Rubber tracks are easier on drives and curbs." },
    { slug: "skid-steer-rental", reason: "Grading, spreading base and moving material on small lots. A compact track loader spreads its weight better than a wheeled skid steer on soft or wet clay." },
    { slug: "compactor-rental", reason: "Compacting backfill around foundations and utilities and base under new flatwork. Plate compactors and rammers suit trenches and tight corners; small rollers cover drives and pads." },
    { slug: "trencher-rental", reason: "Irrigation, electrical and drain lines across a yard, where a walk-behind trencher cuts a narrow, consistent trench with less spoil and turf damage than a bucket." },
    { slug: "concrete-equipment-rental", reason: "Driveway, patio and sidewalk replacement on redevelopment and remodel projects: mixers, saws and power trowels for flatwork." },
    { slug: "excavator-rental", reason: "Commercial demolition and deeper cuts on larger redevelopment sites with room to stage the machine and load trucks." },
  ],
  siteConsiderations: [
    {
      title: "Lane closures run 9 a.m. to 4 p.m.",
      text: "Plano's traffic control notes allow lane closures only from 9 a.m. to 4 p.m.; anything outside that window needs separate approval. Contractors working under a permit must contact Public Works at least 48 hours before a lane closure, and the Traffic Management Center 48 hours ahead when working within 200 feet of a signalized intersection.",
      sources: [sources.planoTcp],
    },
    {
      title: "When a traffic control plan is required",
      text: "For work in City right-of-way along a roadway 26 feet or wider, a traffic control plan must accompany the permit application if the work is within 12 inches of a sidewalk, 2 feet of a road posted 40 mph or less, 6 feet of a faster road, or detours traffic. Staff aim to review plans within 7 working days, and each revision can add another 7.",
      sources: [sources.planoTcp],
    },
    {
      title: "Digging next to traffic",
      text: "Plano requires vertical panels or barrels for any excavation within 10 feet of open traffic that's more than 2 inches below the road surface, and positive barriers, such as water-filled or concrete barriers, once it's more than 24 inches deep. Plan for that before a mini excavator digs a tie-in at the curb.",
      sources: [sources.planoTcp],
    },
    {
      title: "State highways and tollways",
      text: "For work along US 75, Preston Road, State Highway 121 or SH 190/President George Bush Turnpike, Plano's right-of-way guidelines ask for an approved TxDOT or NTTA permit as well. Plano Engineering says a right-of-way permit response can take up to 10 work days.",
      sources: [sources.planoRow],
    },
    {
      title: "No night work near homes",
      text: "Plano's noise ordinance makes it an offense to conduct construction on private property within 500 feet of a residential area or use between 10:01 p.m. and 6:59 a.m., unless the building official approves it in writing.",
      sources: [sources.planoNoise],
    },
    {
      title: "Call 811 before you dig",
      text: "Texas law requires notice to a one-call center no later than 48 hours before excavation, not counting weekends and holidays, and no earlier than 14 days before. On redevelopment lots, old service lines are common, so compare the marks against any plans you have and dig carefully near them.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
  ],
  faqs: [
    { question: "What equipment fits a tight Plano lot?", answer: "Start compact: a mini excavator for digging, a compact track loader or skid steer for grading and material, and a plate compactor or small roller for backfill. Measure gates, the alley or driveway and overhead lines, and tell the provider which surfaces need protecting." },
    { question: "Can I close a lane for an equipment delivery in Plano?", answer: "Work in City right-of-way starts with Plano Engineering, which sets the permit requirements for your project. Under the City's traffic control notes, lane closures are limited to 9 a.m. to 4 p.m. and need 48 hours' notice to Public Works." },
    { question: "How does clay soil affect equipment in Plano-area projects?", answer: "Expansive clay like Houston Black is very hard when dry and sticky when wet. Rubber tracks keep traction better than tires on soft ground, ground mats protect drives and lawns, and padfoot rollers are a common choice for compacting clay fill." },
    { question: "Should I rent a mini excavator or a full-size excavator for a teardown?", answer: "For most residential teardowns, utility tie-ins and footing work, a mini excavator fits the lot and leaves less surface damage. A larger excavator makes sense for commercial demolition or deep cuts where there's room to stage it and load trucks. Share the depth, access width and what has to be hauled off." },
  ],
  nearbyCities: ["frisco", "mckinney", "richardson", "carrollton", "allen", "dallas"],
  heroImage: {
    src: "/images/locations/plano-tx-construction-equipment-rental.webp",
    alt: "Mini excavator digging a footing trench beside a compact track loader on an infill lot between homes in Plano, Texas",
  },
  guides: [compactGuide, excavatorSizeGuide],
};

export const frisco: CityEntry = {
  name: "Frisco",
  slug: "frisco",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Frisco sits in western Collin County, extending into Denton County, about 30 miles north of Dallas, with roughly 13% of its land still undeveloped.",
  metaDescription:
    "Construction equipment rentals in Frisco, TX: excavators, wheel loaders, compactors and trenchers for grading and site work on new development, plus local rules.",
  localIntro: [
    "Frisco sits in western Collin County, with part of the city extending into Denton County, about 30 miles north of Dallas. The City's 2040 Comprehensive Plan says roughly 13% of its land is still undeveloped, which keeps a lot of Frisco construction focused on new ground: mass grading, utilities, streets and building pads.",
    "That work runs on larger earthmoving and compaction equipment. Use this page to match machines to Frisco site work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "According to the comprehensive plan, Frisco's undeveloped land is concentrated around Grand Park, northeast of the Preston Road and Main Street intersection, and in other parts of northern Frisco, where City Council has made activating the north a priority by building roads and infrastructure ahead of development. The plan's available-land map shows about 71% of the city already developed and another 5.5% in the construction phase, so many active sites border finished neighborhoods and busy thoroughfares.",
    "New development follows a familiar sequence: clearing and mass grading, storm drain, water and sewer lines, then street subgrade and paving. Excavators dig and load, wheel loaders move stockpiles and feed trucks, trenchers cut utility and conduit runs, and rollers compact fill and subgrade. Frisco's engineering general notes add a timing wrinkle: earthwork, lime application or other subgrade preparation for streets, alleys and fire lanes can't start until the City authorizes it after utility trench backfill testing, so plan compaction equipment around those tests rather than a fixed date.",
    "Soil and weather drive the schedule. USDA describes the Blackland Prairie, home of the expansive Houston Black clay, as extending from north of Dallas south to San Antonio. Check your parcel in the USDA Web Soil Survey and your geotechnical report before you choose compaction equipment. The National Weather Service office in Fort Worth notes that spring and fall are the wettest seasons in the Metroplex, which is when grading crews lose days to mud, and Frisco's general notes require contractors to keep adjacent streets and driveways free of mud and debris and to control dust.",
    "The plan also looks ahead. As vacant land is used up, it expects a “second wave” of redevelopment on existing sites. Redevelopment and infill sites come with tighter access and finished surfaces nearby, which is where compact machines earn their place alongside the big iron.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Mass excavation, detention ponds, storm drain and deep utility trenches, and loading trucks on open development sites. Size the machine to your deepest cut and the trucks it will load." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles, loading trucks, spreading base and keeping material flowing on large sites where a skid steer would make too many trips." },
    { slug: "compactor-rental", reason: "Smooth drum and padfoot rollers for fill, subgrade and base under streets and pads, and plate compactors or rammers for trench backfill around utilities." },
    { slug: "trencher-rental", reason: "Long, narrow runs for conduit, irrigation and small utilities across graded lots, cutting a consistent trench faster than a bucket." },
    { slug: "skid-steer-rental", reason: "Fine grading, cleanup, moving pallets and keeping construction entrances and adjacent streets clear of mud and spoil." },
    { slug: "mini-excavator-rental", reason: "Service connections, footings and utility work on individual lots and infill sites where a full-size excavator would be more machine than the job needs." },
  ],
  siteConsiderations: [
    {
      title: "City line locates are separate from 811",
      text: "Texas law requires excavators to notify a one-call center at least 48 hours before digging, not counting weekends and holidays. Frisco's own water, sewer and traffic line locates in City right-of-way and easements aren't part of the 811 process; they're required when digging deeper than 18 inches and need an active ROW, TxDOT or irrigation permit number. The City doesn't locate lines on private property.",
      sources: [sources.utilitiesCode251, sources.friscoLineLocates],
    },
    {
      title: "Right-of-way permits and hours",
      text: "Contractors must register with the City and get a ROW permit before working in Frisco right-of-way or easements; the City asks for 5 business days for review. Under the 2025 ordinance, excavation and boring in the right-of-way run 7 a.m. to 3:30 p.m. weekdays and 8 a.m. to 5 p.m. Saturdays, with no Sunday or holiday work unless the ROW manager approves it in writing.",
      sources: [sources.friscoRow, sources.friscoRowOrdinance],
    },
    {
      title: "Street closures run 9 a.m. to 3:30 p.m.",
      text: "Frisco's engineering general notes require road closures to be requested through the City Traffic Division at least 48 hours ahead, and don't allow closures before 9 a.m. or after 3:30 p.m. on weekdays unless the City approves. The right-of-way ordinance also requires 24 hours' notice to police and fire before any lane closure.",
      sources: [sources.friscoGeneralNotes, sources.friscoRowOrdinance],
    },
    {
      title: "Erosion control before you grade",
      text: "Frisco requires erosion control devices on all projects before construction begins, including wire-reinforced silt fence and construction entrances built on geotextile fabric. At the state level, TCEQ's construction general permit covers sites that disturb one acre or more and discharge stormwater to surface waters, and it requires a stormwater pollution prevention plan before construction starts.",
      sources: [sources.friscoGeneralNotes, sources.tceqConstructionStormwater],
    },
    {
      title: "Trench safety plans",
      text: "For storm drain, water and wastewater work, Frisco's general notes require a trench safety plan before the pre-construction meeting. OSHA requires a protective system for trenches 5 feet deep or more, spoil piles at least 2 feet back from the edge, and an inspection after rain.",
      sources: [sources.friscoGeneralNotes, sources.oshaTrenching],
    },
    {
      title: "Night work near homes",
      text: "Frisco's noise ordinance treats construction equipment operating within 500 feet of a residence or quiet zone, such as a school or hospital, as a noise disturbance per se between 10 p.m. and 7 a.m. On sites bordering finished neighborhoods, plan early starts and long pours with that window in mind.",
      sources: [sources.friscoNoise],
    },
  ],
  faqs: [
    { question: "Do I need a Frisco line locate as well as Texas 811?", answer: "For digging deeper than 18 inches in City right-of-way or easements, yes. Frisco's water, sewer and traffic locates are requested through the City's online form with an active ROW, TxDOT or irrigation permit number, separate from your 811 ticket. On private property, the City doesn't locate lines, so 811 and your own plans are the starting point." },
    { question: "What equipment does a typical Frisco site prep job need?", answer: "On open development sites, a common lineup is an excavator for digging and loading, a wheel loader for stockpiles, a roller for fill and subgrade, and a trencher or mini excavator for utilities. Share the site acreage, cut and fill depths, and the soil report with the provider so machine sizes match the work." },
    { question: "When can I close a lane in Frisco to deliver equipment?", answer: "Frisco's engineering general notes limit road closures to 9 a.m. to 3:30 p.m. on weekdays unless the City approves otherwise, with requests made through the Traffic Division at least 48 hours ahead. Lane closures in the right-of-way also need 24 hours' notice to police and fire." },
    { question: "Does my Frisco grading project need a stormwater permit?", answer: "If the project disturbs one acre or more, or is part of a larger plan of development that will, and its stormwater reaches surface waters, it falls under TCEQ's construction general permit, which requires a stormwater pollution prevention plan before construction. Frisco also requires erosion controls to be in place before any construction begins." },
  ],
  nearbyCities: ["plano", "mckinney", "allen", "lewisville", "denton", "dallas"],
  heroImage: {
    src: "/images/locations/frisco-tx-construction-equipment-rental.webp",
    alt: "Excavator loading a dump truck beside a roller and wheel loader on a large graded development site in Frisco, Texas",
  },
  guides: [excavatorSizeGuide, compactGuide, sitePrepGuide, shortVsLongGuideLink, utilityLocatesGuideLink, trenchSafetyGuideLink],
};

export const mckinney: CityEntry = {
  name: "McKinney",
  slug: "mckinney",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "McKinney is the Collin County seat, pairing a largely built-out historic Town Center with new construction on its growing edges.",
  metaDescription:
    "Construction equipment rentals in McKinney, TX: mini excavators, skid steers, excavators and concrete equipment for historic downtown infill and edge-of-city builds.",
  localIntro: [
    "McKinney has been the Collin County seat since 1848, and construction here splits into two very different kinds of jobs. Around the historic downtown square, work means infill and adaptive reuse on tight, established blocks. On the city's edges, it means new subdivisions, streets and commercial sites on open ground.",
    "The right rental depends on which McKinney you're building in. Use this page to match equipment to the job, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The ONE McKinney 2040 Comprehensive Plan describes the Town Center District as the historic commercial core and its surrounding neighborhoods west of State Highway 5. Because it's the oldest part of McKinney, the plan calls it largely developed, with future investment coming through adaptive reuse of existing buildings and infill on vacant or underutilized parcels. Work there happens beside occupied buildings, on narrow lots and alleys, and inside the City's historic overlay, so mini excavators, skid steers and careful staging fit better than a full-size fleet.",
    "The same plan expects McKinney to keep growing in every direction outward from the Town Center, and it covers the city plus its extraterritorial jurisdiction, roughly 51 square miles of surrounding area, for about 116 square miles in all. That is where the larger work is: grading new neighborhoods, building streets and laying water, sewer and storm lines, with excavators, trenchers and rollers doing most of it.",
    "Ground conditions are part of local history. The City's own history notes that early settlers found the soil fertile but a quagmire when it rained. USDA describes the Blackland Prairie, with its expansive Houston Black clay, as extending from north of Dallas to San Antonio, so check your parcel in the USDA Web Soil Survey. McKinney's commercial permit guide asks contractors to cancel foundation, flatwork and similar inspections when it rains, a reminder to build weather days into any concrete schedule.",
    "Concrete is its own planning item. National Weather Service data shows Metroplex summer highs consistently in the 90s and often reaching 100 degrees, which pushes many pours into early morning. McKinney allows construction from 6 a.m. on weekdays, and the City considers overnight concrete pours case by case.",
  ],
  featuredEquipment: [
    { slug: "mini-excavator-rental", reason: "Footings, utility tie-ins and drainage on downtown infill lots and older neighborhoods, where the machine has to work between existing buildings, fences and trees." },
    { slug: "skid-steer-rental", reason: "Grading, spreading base and moving material on tight sites, plus breakers, augers and forks for demolition cleanup and flatwork prep." },
    { slug: "concrete-equipment-rental", reason: "Mixers, saws and power trowels for foundations, sidewalks and flatwork, from storefront rebuilds downtown to new slabs at the edge of town." },
    { slug: "excavator-rental", reason: "Mass grading, detention, and deep sewer and storm drain work on new subdivisions and commercial sites with room to stage and load trucks." },
    { slug: "compactor-rental", reason: "Plate compactors and rammers for trench backfill in tight spaces, and rollers for subgrade and base on new streets and pads." },
    { slug: "trencher-rental", reason: "Irrigation, conduit and small utility runs across new lots and commercial sites, with a narrow trench and less spoil to manage." },
  ],
  siteConsiderations: [
    {
      title: "Historic overlay approvals",
      text: "In McKinney's Historic Overlay District, new construction, alterations, additions and demolition visible from the public right-of-way need a Certificate of Appropriateness before work starts and before a permit is issued. In the commercial area, paint color changes need one too. Build that review into the schedule before booking equipment for downtown exterior work.",
      sources: [sources.mckinneyCoa],
    },
    {
      title: "Construction hours",
      text: "McKinney's commercial permit guide lists permitted construction hours of 6 a.m. to 9 p.m. Monday through Friday, 8 a.m. to 5 p.m. Saturday and 1 p.m. to 5 p.m. Sunday. Overnight concrete pours may be allowed case by case, and if the pour area is at least 500 feet from residential property, contractors can apply for a noise exception.",
      sources: [sources.mckinneyCommercialGuide],
    },
    {
      title: "Right-of-way hours and peak traffic",
      text: "Permitted work in McKinney's right-of-way runs 7 a.m. to 4 p.m. weekdays unless the Director approves otherwise in writing. Work can't interfere with traffic on major thoroughfares from 6 to 9 a.m. or 4 to 6 p.m., lane closures on those streets are limited to two hours per daylight period, and streets near schools are restricted from 6 to 9 a.m. and 3 to 6 p.m. when school is in session.",
      sources: [sources.mckinneyRowManual],
    },
    {
      title: "811 covers City lines here",
      text: "Texas law requires a one-call notice at least 48 hours before digging, not counting weekends and holidays. The City of McKinney is a member of the One Call system and marks its water, wastewater, drainage and traffic or fiber lines through Texas 811. For right-of-way work, the City's manual also requires notifying adjacent property owners at least 48 hours before requesting locates.",
      sources: [sources.utilitiesCode251, sources.mckinneyRowManual],
    },
    {
      title: "Streets, driveways and trees",
      text: "In the right-of-way, McKinney requires concrete driveways and streets to be bored rather than open cut, and doesn't allow pavement cuts in streets built or resurfaced within the past 36 months. Protected trees near the work get a construction fence 12 inches outside the drip line, with no equipment or materials inside it.",
      sources: [sources.mckinneyRowManual],
    },
    {
      title: "Erosion control, backfill and trenches",
      text: "McKinney requires erosion control measures to be inspected and approved before construction begins. For right-of-way work, backfill goes in lifts no deeper than 8 inches, compacted to at least 95% of Standard Proctor density, and any excavation deeper than 5 feet needs a City-accepted trench safety plan on site, consistent with OSHA's 5-foot protective system rule.",
      sources: [sources.mckinneyCommercialGuide, sources.mckinneyRowManual, sources.oshaTrenching],
    },
  ],
  faqs: [
    { question: "Do I need approval for exterior work in downtown McKinney?", answer: "If the property is in the Historic Overlay District and the work is visible from the street, you generally need a Certificate of Appropriateness before work starts and before a permit is issued. Ordinary in-kind maintenance usually doesn't, but the Historic Preservation Office recommends checking first." },
    { question: "What equipment fits a downtown McKinney infill lot?", answer: "Start compact: a mini excavator for footings and utility connections, a skid steer or compact track loader for grading and material, and a plate compactor for backfill. Measure alley and gate widths, check overhead lines, and plan staging so you don't block neighboring businesses." },
    { question: "Can I pour concrete at night in McKinney?", answer: "Standard construction hours start at 6 a.m. on weekdays. The City considers overnight pours case by case, and a noise exception can be requested when the pour area is at least 500 feet from residential property. Confirm before you schedule a truck and a finishing crew." },
    { question: "Does the City mark its own lines when I call 811 in McKinney?", answer: "Yes. McKinney participates in the One Call system and marks City water, wastewater, drainage and traffic or fiber lines through Texas 811 requests. The City's right-of-way manual notes that the customer's section of a service line typically runs from the water meter or sewer cleanout to the building." },
  ],
  nearbyCities: ["plano", "frisco", "allen", "dallas"],
  heroImage: {
    src: "/images/locations/mckinney-tx-construction-equipment-rental.webp",
    alt: "Mini excavator trenching beside concrete forms and a skid steer next to historic brick buildings in McKinney, Texas",
  },
  guides: [compactGuide, excavatorSizeGuide, sitePrepGuide, trenchSafetyGuideLink],
};

export const garland: CityEntry = {
  name: "Garland",
  slug: "garland",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Garland is a largely built-out Dallas County suburb reinvesting in aging retail corridors, older neighborhoods and its long-standing industrial base.",
  metaDescription:
    "Construction equipment rentals in Garland, TX: forklifts, scissor lifts, skid steers and mini excavators for renovation and redevelopment work, plus local rules.",
  localIntro: [
    "Garland was one of the first Dallas County suburbs to boom, and its comprehensive plan describes a first-ring suburb where nearly all of the vacant land has already been developed. The City's 2026–2036 strategic plan puts it plainly: Garland is largely built out, so its future comes from reinvesting in aging commercial corridors, older neighborhoods and the land already inside the city.",
    "That makes most Garland construction renovation, conversion and redevelopment rather than new ground. Use this page to match equipment to that work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Envision Garland, the City's comprehensive plan, puts general industry at about nine percent of the city's land and calls its industrial base a long-standing strength, with room for existing industries to expand and for vacant industrial buildings to be converted for new users. Expanding or converting an older plant or warehouse is mostly material handling and work at height: forklifts and telehandlers for stock and materials, scissor lifts for ceilings, lighting and sprinklers, and concrete saws when a floor is opened for new utilities.",
    "The strategic plan concentrates reinvestment in designated focus areas, including commercial corridors with redevelopment potential and aging retail centers ready for repositioning. Those sites come with existing parking lots, curbs, islands and open businesses next door, so skid steers and mini excavators that can work between storefronts tend to do more than large earthmovers.",
    "Homes follow the same pattern. The comprehensive plan notes that about 60 percent of Garland's housing was built before 1980, and it supports infill and redevelopment that keeps established neighborhoods stable. Service line replacement, driveways, additions and foundation work on older lots call for compact machines and careful locating.",
    "Ground and water shape the rest. When the plan was written, about 15 percent of the city was undeveloped, much of it floodplain, and the remaining large tracts sat along the State Highway 190 and Interstate 30 corridors. The plan also recalls that settlers along Duck Creek found the black soil ideal for cotton; for a jobsite, check your parcel in the USDA Web Soil Survey and your geotechnical report before planning footings or compaction.",
  ],
  featuredEquipment: [
    { slug: "forklift-rental", reason: "Moving pallets, racking and materials in and around older industrial buildings being expanded or converted for new users. Match mast height to the door openings and tires to the floor and yard." },
    { slug: "scissor-lift-rental", reason: "Ceilings, lighting, sprinklers and HVAC inside older warehouses, plants and retail boxes, where a level slab sits under the work. Electric slab scissors keep exhaust out of occupied buildings." },
    { slug: "telehandler-rental", reason: "Lifting roofing, steel and rooftop equipment onto industrial and retail buildings when there's no crane on site, and moving materials across rough yards." },
    { slug: "skid-steer-rental", reason: "Demolition cleanup, regrading pads and parking areas, and hauling spoil on retail redevelopment sites where a larger loader can't turn between islands and buildings." },
    { slug: "mini-excavator-rental", reason: "Water, sewer and storm connections, footings and drainage on older residential lots and commercial pads, where existing lines have to be found before anyone digs." },
    { slug: "concrete-equipment-rental", reason: "Saws, breakers and finishing tools for cutting slabs for new utilities, replacing flatwork and pouring new floors in converted buildings." },
  ],
  siteConsiderations: [
    {
      title: "Locate, then pothole",
      text: "Texas law requires notice to a one-call center at least 48 hours before excavating, not counting weekends and holidays, and Garland Power & Light, the City's electric utility, asks anyone digging to call 811 at least two days ahead. For right-of-way work, Garland's construction directives make the contractor responsible for locates from all affected utilities and for confirming each line's horizontal and vertical location by potholing or hand digging before excavating or boring.",
      sources: [sources.utilitiesCode251, sources.garlandPowerLight, sources.garlandRowDirectives],
    },
    {
      title: "Storm drains aren't located",
      text: "Garland's utility construction checklist for right-of-way work notes that storm drains aren't located, so they have to be verified from plans and by potholing. On older sites, budget time to find them before a trencher or mini excavator goes in.",
      sources: [sources.garlandRowChecklist],
    },
    {
      title: "Right-of-way permits and pavement",
      text: "Work in Garland's right-of-way starts with contractor registration and a permit, and the City's directives ask for complete applications at least 10 working days ahead. Streets, alleys and sidewalks less than five years old can't be cut without the Director's approval, trenches under paving are backfilled with cement-treated sand or flowable fill, and pavement has to be restored within 14 days.",
      sources: [sources.garlandPermitProcess, sources.garlandRowDirectives, sources.garlandRowChecklist],
    },
    {
      title: "Lane closures and City holidays",
      text: "For right-of-way work, the City's checklist bars lane closures in school zones, limits them to after 8 a.m. and before 4 p.m. on streets other than residential streets, and ends them at noon on Fridays. It also rules out work on City holidays, the weekend of a City holiday and the day before one, except in emergencies.",
      sources: [sources.garlandRowChecklist],
    },
    {
      title: "Working next to homes",
      text: "Garland's building code amendments allow outside work adjacent to an occupied residential subdivision or residential use, including apartments, only from 7 a.m. to 8 p.m., every day of the week. On redevelopment sites beside homes, keep deliveries, generators and early pours inside that window.",
      sources: [sources.garlandWorkingHours],
    },
    {
      title: "Heat and wet seasons",
      text: "The National Weather Service office in Fort Worth notes that Metroplex highs in July and August are consistently in the 90s and often reach 100 degrees, and that spring and fall are the wettest seasons. Plan roof and exterior lift work around heat and storms, and cover open trenches and stockpiles before rain.",
      sources: [sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "Does Garland Power & Light mark its lines when I call 811?", answer: "Garland Power & Light directs anyone digging to call 811 at least two days before starting so buried utility lines can be marked. Texas law requires the one-call notice at least 48 hours before excavating, excluding weekends and holidays. For right-of-way work, Garland also expects you to pothole or hand dig to confirm line locations, and storm drains have to be verified from plans because they aren't located." },
    { question: "Can I cut a street or alley in Garland?", answer: "In the right-of-way, only under a permit and with the City's approval. Garland doesn't allow cuts in streets, alleys or sidewalks less than five years old unless the Director approves, requires cement-treated sand or flowable fill under paving, and expects pavement restored within 14 days." },
    { question: "What hours can I work next to homes in Garland?", answer: "Garland's building code amendments allow outside work adjacent to occupied homes or apartments from 7 a.m. to 8 p.m., seven days a week. Right-of-way work has its own limits on lane closures and holidays, so check your permit as well." },
    { question: "What equipment suits converting an older industrial building in Garland?", answer: "Plan for material handling and work at height first: a forklift or telehandler for materials, electric scissor lifts for ceilings and overhead systems, and concrete saws and a mini excavator if new utilities go under the slab. Measure door openings and check the floor before choosing machine sizes." },
  ],
  nearbyCities: ["richardson", "mesquite", "rowlett", "wylie", "rockwall", "dallas"],
  heroImage: {
    src: "/images/locations/garland-tx-construction-equipment-rental.webp",
    alt: "Forklift carrying a pallet beside a scissor lift at the open warehouse bay of an older masonry building in Garland, Texas",
  },
  guides: [boomLiftGuide, compactGuide],
};

export const grandPrairie: CityEntry = {
  name: "Grand Prairie",
  slug: "grand-prairie",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Grand Prairie runs about 26 miles between Dallas and Fort Worth, from the Great Southwest Industrial District south toward Joe Pool Lake.",
  metaDescription:
    "Construction equipment rentals in Grand Prairie, TX: telehandlers, boom lifts, forklifts and rollers for warehouse, distribution and site work, plus local rules.",
  localIntro: [
    "Grand Prairie sits between Dallas and Fort Worth and runs about 26 miles long and roughly eight miles across at its widest, overlapping three counties. Its northern edge is a short drive south of DFW Airport, and the City says much of the Great Southwest Industrial District, about 80 million square feet of industrial space, lies inside its limits.",
    "That puts warehouse, distribution and manufacturing construction at the center of a lot of Grand Prairie work. Use this page to match equipment to it, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "According to the City, its central location, airport access, rail and interstates keep drawing new warehouse, distribution and manufacturing buildings. Recent industrial, hotel and apartment projects have taken up large tracts in the northern Great Southwest Industrial District, but land remains there, nearby and to the south. A big industrial build moves from clearing and pad grading through slab and wall work to roofing and dock fit-out, so the rental list shifts from rollers and loaders to telehandlers, boom lifts and forklifts as the building rises.",
    "The south end is different ground. The City describes hill country–like terrain around Joe Pool Lake drawing high-end residential development, which means grading, utilities and foundations for subdivisions and custom lots rather than flat industrial pads.",
    "The city's size adds paperwork. TxDOT permits for development work in state highway right-of-way are issued to the City, not the developer, and plans go through the Engineering Department, which lists separate processes for TxDOT's Dallas and Fort Worth districts. Development within 200 feet of a special flood hazard area or floodplain needs a City floodplain permit, and the City's municipal airport has a 4,000-foot runway, which matters for tall equipment nearby.",
    "Weather sets the pace on open pads. The National Weather Service office in Fort Worth notes that spring and fall are the wettest seasons in the Metroplex and that July and August highs are consistently in the 90s, often reaching 100 degrees. Expect lost grading days after storms and plan concrete and roofing work around the heat.",
  ],
  featuredEquipment: [
    { slug: "telehandler-rental", reason: "Setting materials on the roofs and upper walls of new warehouses and manufacturing buildings, and unloading trucks across unpaved pads before the truck court is poured." },
    { slug: "boom-lift-rental", reason: "Wall panel connections, roof edges, dock canopies and exterior lighting on tall industrial buildings, with telescopic booms for long, straight reach from the yard." },
    { slug: "forklift-rental", reason: "Moving pallets and racking components on finished slabs and paved yards during fit-out and move-in. Use a rough-terrain model until the yard is paved." },
    { slug: "compactor-rental", reason: "Smooth-drum and padfoot rollers for building pads, paving subgrade and truck courts, plus rammers and plates for utility trench backfill." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles, loading trucks and spreading base on large industrial pads where a skid steer would need too many trips." },
    { slug: "excavator-rental", reason: "Detention ponds, storm drain and water and sewer mains for industrial parks, and grading and utilities for subdivisions toward Joe Pool Lake." },
  ],
  siteConsiderations: [
    {
      title: "Allow 72 hours for City locates",
      text: "Texas law requires one-call notice at least 48 hours before excavating, not counting weekends and holidays. For utility work in Grand Prairie's right-of-way, the City's franchise utility permit says City water, sewer, signal and fiber locates are requested by phone with 72 hours' notice, so build in the longer lead time.",
      sources: [sources.utilitiesCode251, sources.grandPrairieFranchisePermit],
    },
    {
      title: "Permits before the first scrape",
      text: "Grand Prairie's Clearing, Grubbing and Earthwork Permit is what allows erosion controls to go in and earth-disturbing work to begin, and the City issues it only after a stormwater pollution prevention plan has been submitted and released. At the state level, TCEQ's construction general permit covers sites disturbing one acre or more that discharge stormwater to surface waters.",
      sources: [sources.grandPrairieEngineeringPermits, sources.tceqConstructionStormwater],
    },
    {
      title: "Floodplain and TxDOT permits",
      text: "Development within 200 feet of a special flood hazard area or floodplain needs a Floodplain Development Permit. Where a project builds or ties into infrastructure in TxDOT right-of-way, the permit is issued to the City, and the City requires it before construction starts.",
      sources: [sources.grandPrairieEngineeringPermits],
    },
    {
      title: "Trench, bore and street-cut rules",
      text: "For utility work in the right-of-way, Grand Prairie requires mechanical tamping of ditch lines to 95 percent Standard Proctor density, doesn't allow boring of any type on Fridays, and doesn't let street cuts stay open overnight without approval. Bore pits must be fenced and can't stay open more than 48 hours, and lane closures need a City-released traffic control plan.",
      sources: [sources.grandPrairieFranchisePermit],
    },
    {
      title: "Construction hours near homes",
      text: "The City's commercial construction guide lists construction hours of 6 a.m. to 10 p.m. when work is within 300 feet of residential property, citing section 13-277 of the City code. Industrial sites that back up to neighborhoods need deliveries and pours inside that window.",
      sources: [sources.grandPrairieCommercialGuide],
    },
    {
      title: "Tall equipment near the airport",
      text: "The City's municipal airport has a 4,000-foot runway. Federal rules require FAA notice for construction more than 200 feet above ground, or construction that exceeds an imaginary surface sloping 100 to 1 out to 20,000 feet from a runway longer than 3,200 feet. The FAA's notice form covers temporary structures such as cranes and must be filed at least 45 days before work starts.",
      sources: [sources.grandPrairieAbout, sources.faaPart77, sources.faaForm7460],
    },
  ],
  faqs: [
    { question: "How much notice do I need for City line locates in Grand Prairie?", answer: "For utility work in the right-of-way, Grand Prairie's franchise utility permit asks for 72 hours' notice for City water, sewer, signal and fiber locates, requested by phone. That's in addition to the Texas 811 ticket, which state law requires at least 48 hours before excavation, excluding weekends and holidays." },
    { question: "Can I start grading a Grand Prairie site before the stormwater plan is approved?", answer: "No. The City's Clearing, Grubbing and Earthwork Permit is what allows erosion controls and earth-disturbing work to begin, and it isn't issued until a stormwater pollution prevention plan has been submitted and released. Line up the plan before you book loaders and rollers." },
    { question: "What equipment does a new warehouse build in Grand Prairie use?", answer: "Site work usually starts with excavators, wheel loaders and rollers for the pad and utilities. As the building goes up, telehandlers and boom lifts take over for walls and roofing, and forklifts handle racking and materials once the slab is in. Share the building height, yard surface and schedule with the provider." },
    { question: "Do I need FAA notice to use a boom lift or crane near the Grand Prairie airport?", answer: "It depends on height and distance. Because the municipal airport's runway is longer than 3,200 feet, FAA notice is required for anything that would exceed a 100:1 surface extending 20,000 feet from the runway, or that is more than 200 feet tall, and temporary cranes count. If you need to file, do it at least 45 days before work starts." },
  ],
  nearbyCities: ["arlington", "irving", "mansfield", "desoto", "cedar-hill", "dallas"],
  heroImage: {
    src: "/images/locations/grand-prairie-tx-construction-equipment-rental.webp",
    alt: "Telescopic boom lift and telehandler at a new tilt-wall concrete warehouse on a dirt pad in Grand Prairie, Texas",
  },
  guides: [boomLiftGuide, sitePrepGuide, telehandlerForkliftGuideLink],
};

export const mesquite: CityEntry = {
  name: "Mesquite",
  slug: "mesquite",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Mesquite is a first-ring suburb east of Dallas at the junction of I-30, I-635, I-20 and US 80, with its remaining open land in the south along I-20.",
  metaDescription:
    "Construction equipment rentals in Mesquite, TX: excavators, rollers, telehandlers and trenchers for new I-20 corridor sites and older-area redevelopment, plus local rules.",
  localIntro: [
    "Mesquite is a first-ring suburb east of Dallas, at the junction of Interstates 30, 635 and 20 and US 80, and home to a Union Pacific intermodal facility that serves the region's logistics sector. Its 2019 comprehensive plan describes a city with two construction markets: an older, largely developed north and a south that still has room to build.",
    "The right rental depends on which part of Mesquite you're working in. Use this page to match equipment to the job, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The plan estimates that about 69 percent of Mesquite is developed and 31 percent undeveloped, but 9 percent of the city sits in flood hazard areas and is generally unsuitable for development, leaving about 22 percent with real potential. The largest contiguous tracts are in the south, below Cartwright Road and along the Interstate 20 corridor. New construction there means clearing, mass grading, utilities and building pads, so excavators, wheel loaders, trenchers and rollers do most of the work.",
    "Homes built before 1980 are mostly in northern Mesquite, the plan notes, and many existing structures have started to age, so the City looks to redevelopment and infill to reinvigorate older areas. Those jobs suit compact machines: mini excavators for service lines and footings, and lifts and telehandlers for commercial renovations along the highway frontages.",
    "Water and rail cut through the city. North and South Mesquite Creeks run to the East Fork of the Trinity River, which the plan says divides the city between Dallas and Kaufman counties along I-20, and the creeks' flood hazards are a barrier to development. A heavily used railroad splits Mesquite north and south, buffered mostly by industrial land.",
    "Two more factors shape schedules. Mesquite Metro Airport has a 6,000-foot runway and a control tower, which matters for cranes, telehandlers and tall boom lifts on nearby sites. And the National Weather Service office in Fort Worth notes that spring and fall are the wettest seasons in the Metroplex, which is when open grading sites lose the most days.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Mass grading, detention, and water, sewer and storm lines for new development on the open tracts south of Cartwright Road and along I-20." },
    { slug: "compactor-rental", reason: "Rollers for building pads and street subgrade on new southern sites, and plates or rammers for trench backfill and pavement repairs in older neighborhoods." },
    { slug: "telehandler-rental", reason: "Placing roofing, block and steel on new industrial and commercial buildings. Near the airport, check the machine's maximum lift height against FAA notice rules first." },
    { slug: "trencher-rental", reason: "Long, narrow runs for conduit, irrigation and small utilities across new lots and commercial sites, with less spoil to handle than a bucket." },
    { slug: "boom-lift-rental", reason: "Exterior walls, rooflines and canopies on new buildings and on older retail renovations along the highway frontages." },
    { slug: "mini-excavator-rental", reason: "Service line replacements, footings and drainage on older lots in the developed north, where access is tight and existing lines are old." },
  ],
  siteConsiderations: [
    {
      title: "City utility locates 48 hours ahead",
      text: "Texas law requires one-call notice at least 48 hours before digging, not counting weekends and holidays. Mesquite's right-of-way rules for utility work also require requests for locates of City-owned utilities at least 48 hours before construction, state that GIS maps and plans of record don't satisfy the locate requirement, and make the permittee confirm each line's horizontal and vertical location before excavating or boring.",
      sources: [sources.utilitiesCode251, sources.mesquiteRow],
    },
    {
      title: "Right-of-way working hours",
      text: "Under the same rules, work in Mesquite's right-of-way runs from one hour after sunrise until sunset, Monday through Friday. Saturday work needs approval 48 hours in advance, there's no work on Sundays or City holidays except emergencies, and lane closures on major thoroughfares are limited to 8:30 a.m. to 4 p.m. unless the City approves otherwise.",
      sources: [sources.mesquiteRow],
    },
    {
      title: "Construction noise near homes",
      text: "Mesquite adopted a new noise ordinance in 2021. The City's summary lists construction-related activity from 7 a.m. to 8 p.m. Monday through Friday as an affirmative defense, with separate hours for Saturdays, Sundays and holidays. Check the ordinance before scheduling early pours or weekend deliveries next to neighborhoods.",
      sources: [sources.mesquiteNoise],
    },
    {
      title: "Creeks and flood hazard areas",
      text: "The comprehensive plan puts about 9 percent of Mesquite's land in flood hazard areas and treats the creek corridors feeding the East Fork of the Trinity River as a barrier to development. If a site touches a creek corridor, check floodplain requirements with the City of Mesquite before grading.",
      sources: [sources.mesquitePlan],
    },
    {
      title: "Tall equipment near Mesquite Metro Airport",
      text: "The City lists Mesquite Metro Airport's runway at 6,000 feet. Federal rules require FAA notice for construction more than 200 feet above ground, or construction that exceeds an imaginary surface sloping 100 to 1 out to 20,000 feet from a runway longer than 3,200 feet. The FAA's notice form covers temporary structures such as cranes and must be filed at least 45 days before work starts.",
      sources: [sources.mesquiteAirport, sources.faaPart77, sources.faaForm7460],
    },
    {
      title: "Stormwater on open sites",
      text: "Grading the large southern tracts usually disturbs an acre or more. TCEQ's construction general permit covers sites disturbing one acre or more that discharge stormwater to surface waters, and it requires a stormwater pollution prevention plan before construction starts. Spring and fall storms are when silt fence and construction entrances get tested.",
      sources: [sources.tceqConstructionStormwater, sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "Where is new construction happening in Mesquite?", answer: "According to the City's 2019 comprehensive plan, the largest contiguous tracts of undeveloped land are in the south, below Cartwright Road and along the I-20 corridor. The north is mostly developed, so work there leans toward redevelopment and infill of aging buildings." },
    { question: "Do I need to request City locates in Mesquite as well as calling 811?", answer: "For utility work in the right-of-way, Mesquite's rules require requests for locates of City-owned utilities at least 48 hours before construction, and they say GIS maps or plans of record don't count as a locate. Make your Texas 811 request as well, and check with the City of Mesquite on how it takes locate requests for your project." },
    { question: "When can I work in Mesquite's right-of-way?", answer: "From one hour after sunrise until sunset, Monday through Friday. Saturday work needs City approval 48 hours ahead, Sundays and City holidays are off-limits except for emergencies, and lane closures on major thoroughfares run 8:30 a.m. to 4 p.m." },
    { question: "Do I need FAA notice to use a crane or tall lift near Mesquite Metro Airport?", answer: "It depends on height and distance. Because the runway is longer than 3,200 feet, FAA notice is required for anything that would exceed a 100:1 surface extending 20,000 feet from it, or that is more than 200 feet tall, and temporary cranes count. If you need to file, do it at least 45 days before work starts." },
  ],
  nearbyCities: ["garland", "dallas"],
  heroImage: {
    src: "/images/locations/mesquite-tx-construction-equipment-rental.webp",
    alt: "Padfoot soil compactor on a prepared dirt pad with an excavator on a soil pile behind it in Mesquite, Texas",
  },
  guides: [sitePrepGuide, excavatorSizeGuide, trenchSafetyGuideLink],
};

export const carrollton: CityEntry = {
  name: "Carrollton",
  slug: "carrollton",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Carrollton is building walkable, mixed-use development around its Downtown Carrollton and Trinity Mills DART light rail stations.",
  metaDescription:
    "Construction equipment rentals in Carrollton, TX: telehandlers, scissor lifts, mini excavators and generators for transit-oriented infill, plus local site rules.",
  localIntro: [
    "Carrollton is concentrating much of its new construction around its rail stations. In 2005 the City created a Transit Center zoning district around the Downtown Carrollton and Trinity Mills DART light rail stations to encourage development and redevelopment there, and its design standards aim to make those station areas walkable, pedestrian-oriented places with a mix of homes, shops and offices.",
    "Building that way means tight urban sites rather than open pads. Use this page to match equipment to Carrollton work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The Transit Center district's goals read like a site logistics brief: buildings close to the sidewalk and street, continuous building frontage along each block, and parking in the middle of blocks or on the street. The City's urban street standards for these districts say pedestrians' needs are to be prioritized above vehicle traffic in all cases. That leaves little room to stage materials or swing a large machine, so telehandlers, compact equipment and well-timed deliveries carry most jobs.",
    "Mid-rise mixed-use buildings are lift work: telehandlers to place framing and materials on upper floors, boom lifts for facades and balconies, and scissor lifts for interiors and storefronts. Below grade, utility connections and footings inside an existing street grid suit mini excavators and skid steers, with close attention to lines already in the ground.",
    "The district is also meant to build on the existing character of Downtown Carrollton, so a lot of work happens beside established businesses and homes. Carrollton's noise ordinance restricts operating construction equipment within 1,000 feet of a residence outside set hours and limits engine-generators overnight, which shapes early starts, late pours and temporary power.",
    "Weather still matters on tight sites. The National Weather Service office in Fort Worth notes that July and August highs are consistently in the 90s and often reach 100 degrees, and that severe weather peaks in spring. Plan lift work around wind and storms, and protect open excavations next to sidewalks before rain.",
  ],
  featuredEquipment: [
    { slug: "telehandler-rental", reason: "Placing framing, block and materials on the upper floors of mid-rise mixed-use buildings when there's no room for a crane, and unloading trucks in tight staging areas." },
    { slug: "scissor-lift-rental", reason: "Interiors, storefronts, ceilings and building systems on level slabs, with electric models for enclosed spaces and finished floors." },
    { slug: "boom-lift-rental", reason: "Facades, balconies and exterior finishes on buildings set close to the sidewalk, where an articulating boom can reach up and over from a narrow strip." },
    { slug: "mini-excavator-rental", reason: "Water, sewer and storm connections and footings inside an established street grid, with existing utilities and neighbors close on every side." },
    { slug: "skid-steer-rental", reason: "Grading, moving base and cleanup on compact sites, plus forks for pallets and a broom to keep streets and sidewalks clear." },
    { slug: "generator-rental", reason: "Temporary power for tools, lighting and site offices before permanent service is live. Carrollton restricts engine-generators from 10 p.m. to 7 a.m., so plan overnight needs another way." },
  ],
  siteConsiderations: [
    {
      title: "Equipment hours near homes",
      text: "Carrollton's noise ordinance makes it unlawful to operate construction equipment or machinery within 1,000 feet of any residence except from 6 a.m. to 8 p.m. on weekdays and 8 a.m. to 7 p.m. on Saturdays. It's barred on Sundays and on New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving and the following Friday, and Christmas Day.",
      sources: [sources.carrolltonNoise],
    },
    {
      title: "Generators overnight",
      text: "The same ordinance lists running engine-generators between 10 p.m. and 7 a.m. as unlawful noise, with an affirmative defense for generators keeping utility service going during a power outage. Plan temporary power so generators shut down overnight.",
      sources: [sources.carrolltonNoise],
    },
    {
      title: "Right-of-way permits and locates",
      text: "Carrollton's right-of-way ordinance requires a construction permit for utility work in the right-of-way, with complete applications at least 10 working days ahead. The City must be told 24 hours before work starts, with the one-call ticket number, and contractors must get locates from all affected utilities at least 48 hours before excavating, then verify line locations by potholing, hand digging or another approved method.",
      sources: [sources.carrolltonRow, sources.utilitiesCode251],
    },
    {
      title: "Hours, lanes and new pavement",
      text: "Under the same ordinance, right-of-way work that doesn't close a lane runs 7 a.m. to 6 p.m. on weekdays, with no work on City holidays except emergencies. Lane closures in school zones and on streets other than residential streets are limited to 8:30 a.m. to 4 p.m., and streets, alleys and sidewalks less than three years old can't be cut without approval.",
      sources: [sources.carrolltonRow],
    },
    {
      title: "Backfill and restore quickly",
      text: "Carrollton requires right-of-way excavations to be filled and compacted within 24 hours and street, alley and sidewalk pavement to be fully restored within 14 days, unless the City allows otherwise in writing. Erosion controls, signs and barricades have to be in place before work begins.",
      sources: [sources.carrolltonRow],
    },
    {
      title: "Lift rules on site",
      text: "OSHA requires boom lift controls to be tested each day before use, allows only authorized persons to operate the lift, and requires a body belt or harness with the lanyard attached to the boom or basket. Scissor lifts fall under OSHA's scaffold rules instead, which rely on guardrails and trained users.",
      sources: [sources.oshaAerialLifts, sources.oshaScissorLifts],
    },
  ],
  faqs: [
    { question: "When can I run construction equipment near homes in Carrollton?", answer: "Within 1,000 feet of a residence, Carrollton allows construction equipment from 6 a.m. to 8 p.m. on weekdays and 8 a.m. to 7 p.m. on Saturdays. It isn't allowed on Sundays or on the holidays listed in the noise ordinance, including Thanksgiving and the Friday after." },
    { question: "Can I run a generator overnight on a Carrollton jobsite?", answer: "Carrollton's noise ordinance treats engine-generators running between 10 p.m. and 7 a.m. as unlawful noise. There's an affirmative defense for generators maintaining utility service during a power outage, but routine site power should be planned to shut down overnight." },
    { question: "What equipment fits a transit-oriented infill site in Carrollton?", answer: "Expect tight staging and buildings set close to the sidewalk. A telehandler for upper-floor materials, boom and scissor lifts for exterior and interior work, and a mini excavator and skid steer for utilities and grading cover most jobs. Measure staging space and overhead lines before choosing sizes." },
    { question: "How quickly do I have to restore a street cut in Carrollton?", answer: "In the right-of-way, excavations have to be filled and compacted within 24 hours and pavement fully restored within 14 days unless the City allows otherwise in writing. Streets, alleys and sidewalks less than three years old can't be cut without approval." },
  ],
  nearbyCities: ["irving", "plano", "lewisville", "flower-mound", "dallas"],
  heroImage: {
    src: "/images/locations/carrollton-tx-construction-equipment-rental.webp",
    alt: "Telehandler lifting lumber to a wood-frame mid-rise building behind orange barriers in Carrollton, Texas",
  },
  guides: [boomLiftGuide, compactGuide, generatorGuideLink],
};

export const richardson: CityEntry = {
  name: "Richardson",
  slug: "richardson",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Richardson is a 28-square-mile first-tier suburb with little undeveloped land, reinvesting in aging commercial areas and its Innovation District.",
  metaDescription:
    "Construction equipment rentals in Richardson, TX: scissor lifts, boom lifts, forklifts and generators for building upgrades and redevelopment, plus local site rules.",
  localIntro: [
    "Richardson covers about 28 square miles, and the City describes itself as a first-tier suburb with limited undeveloped land and areas of aging development and infrastructure. Since 2009 its comprehensive plans have designated Enhancement Areas where reinvestment and redevelopment are encouraged, and Envision Richardson, the plan approved in November 2024, names five more for study.",
    "That makes upgrading and rebuilding what's already there the core of Richardson construction. Use this page to match equipment to that work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The clearest example is the Collins/Arapaho Transit-Oriented Development and Innovation District, a study area of about 1,200 acres around a DART light rail station. The City's vision study lists building upgrades and modernization and shared innovation space among its main strategies, and the 2019 form-based code adds entitlements to encourage reuse, reinvestment and activation of existing buildings. Modernizing an office or flex building is mostly interior and envelope work: scissor lifts for ceilings and systems, boom lifts for facades and glazing, forklifts for materials, and saws for new slab penetrations.",
    "The five Enhancement Areas named in Envision Richardson sit along Campbell, Arapaho, Spring Valley and Belt Line roads, and the City describes them as mostly restaurants, retail centers, small offices, auto-related businesses and older apartments. It envisions mixes of housing with neighborhood-serving retail, office and service uses there, which points to demolition, utility upgrades and new mid-scale buildings on sites surrounded by open businesses and neighborhoods.",
    "Envision Richardson also continues the City's push for transit-oriented development near its DART rail stations, so many sites sit beside rail lines, busy arterials and Central Expressway. Plan deliveries around the City's lane-closure window, and check overhead clearances before a lift or telehandler goes up near power lines.",
    "Weather affects exterior and roof work. The National Weather Service office in Fort Worth notes that thunderstorms and severe weather peak in spring and that July and August highs are consistently in the 90s, often reaching 100 degrees. Check each lift's rated wind limit and keep a weather call in the daily plan.",
  ],
  featuredEquipment: [
    { slug: "scissor-lift-rental", reason: "Ceilings, lighting, HVAC and cabling in office, lab and flex buildings being modernized. Electric slab scissors with non-marking tires suit occupied floors." },
    { slug: "boom-lift-rental", reason: "Facade, glazing and roof-edge work on office buildings, reaching over landscaping and entries from parking lots and drives." },
    { slug: "forklift-rental", reason: "Moving pallets of drywall, ceiling grid, equipment and furniture between trucks, docks and building entries during renovations." },
    { slug: "generator-rental", reason: "Temporary power for tools and lighting during building upgrades, and on redevelopment sites before permanent service is connected." },
    { slug: "mini-excavator-rental", reason: "Utility upgrades, storm connections and footings on redevelopment sites in older commercial corridors, with existing lines and paving all around the work." },
    { slug: "concrete-equipment-rental", reason: "Saws and core drills for new slab penetrations and trenches inside existing buildings, plus mixers and trowels for new flatwork." },
  ],
  siteConsiderations: [
    {
      title: "Right-of-way permits",
      text: "Richardson requires a Right-of-Way Construction Permit for any work in the City's right-of-way or easements, performed to local ordinances and the City's standard construction details. The application includes an annual registration form, plans and a location map.",
      sources: [sources.richardsonRow],
    },
    {
      title: "Lane closures run 9 a.m. to 3:30 p.m.",
      text: "If you'll close a traffic lane or sidewalk, Richardson requires a detailed traffic control plan that complies with the Texas Manual on Uniform Traffic Control Devices, and lane closures are limited to 9 a.m. to 3:30 p.m. Schedule deliveries that need the street inside that window.",
      sources: [sources.richardsonRow],
    },
    {
      title: "Construction noise near homes",
      text: "Richardson's construction noise rule covers building, excavation, demolition, alteration and repair in a residential district or within 300 feet of an occupied home. Before 7 a.m. or after 6 p.m. on weekdays, or at any time on weekends, that work violates the ordinance if its noise exceeds the octave-band limits in the City's zoning ordinance, unless the city manager's office issues a permit for urgent necessity or public safety.",
      sources: [sources.richardsonNoise],
    },
    {
      title: "Call 811 before you dig",
      text: "Texas law requires notice to a one-call center no later than 48 hours before excavating, not counting weekends and holidays, and no earlier than 14 days before. On older commercial sites, compare the marks with any plans you have and expect service lines that predate them.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Six feet from power lines",
      text: "Texas law bars bringing any part of a tool, machine or equipment within six feet of a high voltage overhead line unless the line's operator has been notified at least 48 hours ahead and an arrangement such as de-energizing, relocating or barriers is in place. Check every lift and telehandler setup against nearby lines.",
      sources: [sources.texasHighVoltage],
    },
    {
      title: "Lift rules on site",
      text: "OSHA requires boom lift controls to be tested each day before use, allows only authorized persons to operate the lift, and requires a body belt or harness with the lanyard attached to the boom or basket. Scissor lifts fall under OSHA's scaffold rules instead, which rely on guardrails and trained users.",
      sources: [sources.oshaAerialLifts, sources.oshaScissorLifts],
    },
  ],
  faqs: [
    { question: "What kind of construction happens in Richardson's Innovation District?", answer: "The Collins/Arapaho Transit-Oriented Development and Innovation District covers about 1,200 acres around a DART light rail station. The City's strategies there include upgrading and modernizing buildings and encouraging reuse of existing ones, so a lot of the work is interior renovation, facade work and site improvements around occupied buildings." },
    { question: "When can I close a lane in Richardson?", answer: "Richardson limits traffic lane closures to 9 a.m. to 3:30 p.m., and any lane or sidewalk closure needs a detailed traffic control plan that meets the Texas Manual on Uniform Traffic Control Devices, submitted with the right-of-way permit application." },
    { question: "Can I work on a Saturday near homes in Richardson?", answer: "Within a residential district or 300 feet of an occupied home, weekend construction violates the City's noise ordinance if it exceeds the octave-band noise limits in the zoning ordinance. Quiet interior work may stay within them, but plan loud exterior work, demolition and excavation for weekdays between 7 a.m. and 6 p.m." },
    { question: "Which lift should I rent for an office renovation in Richardson?", answer: "For interior ceilings and systems on a finished floor, an electric slab scissor lift with non-marking tires is usually the fit. For facades, windows and roof edges, an articulating boom lift reaches up and over landscaping and entries. Check door widths, floor load limits and overhead lines before you book." },
  ],
  nearbyCities: ["plano", "garland", "dallas"],
  heroImage: {
    src: "/images/locations/richardson-tx-construction-equipment-rental.webp",
    alt: "Articulating boom lift behind safety cones at a glass office building at golden hour in Richardson, Texas",
  },
  guides: [boomLiftGuide, compactGuide, generatorGuideLink],
};

export const denton: CityEntry = {
  name: "Denton",
  slug: "denton",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Denton is the Denton County seat north of the Metroplex, home to two major universities and a downtown square that the City is redesigning for walkable reinvestment.",
  metaDescription:
    "Construction equipment rentals in Denton, TX: lifts, telehandlers, excavators and compact machines for university-area, downtown and growth-corridor work, plus local rules.",
  localIntro: [
    "Denton sits at the north end of the Dallas–Fort Worth area as the Denton County seat, with the University of North Texas and Texas Woman's University shaping a large share of the city's housing, commercial and campus-adjacent construction. The City's Denton 2040 Comprehensive Plan, approved March 22, 2022, frames the next decades around growth, reinvestment and quality-of-life investments as demographics and housing preferences shift.",
    "That mix puts lifts and compact earthmoving near the top of many rental lists here: renovations around the Square and campus edges, new multi-family and commercial pads on the edges, and utility work throughout. Use this page to match equipment to Denton work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Downtown and the universities set the denser jobs. The City's Design Downtown Denton plan (adopted September 17, 2024) updates priorities around the Square, the transit center and connections toward the campuses, so facade work, tenant finish-outs and mid-rise wood-frame construction call for articulating boom lifts, scissor lifts and telehandlers that fit tight staging strips.",
    "Away from downtown, Denton 2040 and the Development Handbook point applicants toward a structured civil and building process: Pre-Application Conferences, Zoning Compliance Plans, Civil Engineering Plans and Notice to Proceed before private building work begins on projects with public improvements. Larger pads need excavators, rollers and loaders; smaller infill lots lean on mini excavators and skid steers.",
    "Weather and hours matter. The National Weather Service office in Fort Worth notes Metroplex summer highs consistently in the 90s and often 100 degrees, with spring and fall the wettest seasons. Denton's noise ordinance sets construction hours that start earlier in summer (6 a.m. weekdays from June through September) than in the cooler months (7 a.m. weekdays from October through May), with Saturday and Sunday windows that close at 8:30 p.m.",
  ],
  featuredEquipment: [
    { slug: "boom-lift-rental", reason: "Facade, canopy and upper-floor work on downtown and campus-adjacent buildings, where an articulating boom reaches up and over sidewalks, landscaping or a lower roof." },
    { slug: "scissor-lift-rental", reason: "Interior ceilings, lighting and sprinkler work in renovated commercial and multi-family buildings on finished slabs. Electric slab scissors keep exhaust out of occupied floors." },
    { slug: "telehandler-rental", reason: "Placing lumber, roofing and materials on mid-rise wood-frame and mixed-use buildings when staging space is a narrow strip of street or lot." },
    { slug: "excavator-rental", reason: "Detention, utilities and mass grading on growth-corridor pads where Denton's civil process and stormwater rules apply before earthwork starts." },
    { slug: "mini-excavator-rental", reason: "Service connections, footings and short trenches on infill lots near the Square and older neighborhoods, where existing lines have to be found first." },
    { slug: "skid-steer-rental", reason: "Clearing, fine grading and material handling on tight lots where a larger loader cannot turn between buildings and curbs." },
  ],
  siteConsiderations: [
    {
      title: "Seasonal construction hours",
      text: "Denton's Code sec. 17-20(c)(3)(f) limits erection, excavation, demolition, alteration or repair work on any building to 6 a.m.–8:30 p.m. Monday–Friday from June 1 to September 30; 7 a.m.–8:30 p.m. Monday–Friday from October 1 to May 31; 8 a.m.–8:30 p.m. Saturday; and 1 p.m.–8:30 p.m. Sunday. Work outside those hours needs a City Council–approved Noise Ordinance Special Permit.",
      sources: [sources.dentonNoise],
    },
    {
      title: "Right-of-way permits and 48-hour notice",
      text: "ROW work in Denton requires registration and a permit through e-TRAKiT. Properly submitted applications are reviewed within 10 business days. After issuance, and before a Texas 811 ticket, the utility or contractor must notify the city inspector and affected adjacent landowners and residents at least 48 hours before starting, or as the permit specifies.",
      sources: [sources.dentonRow],
    },
    {
      title: "Call 811, then confirm City expectations",
      text: "Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays. Denton's ROW process also requires a ROW Safety Inspection request in e-TRAKiT with 48 hours' notice before commencing work on an issued permit, so build both into the schedule.",
      sources: [sources.utilitiesCode251, sources.texas811, sources.dentonRow],
    },
    {
      title: "Restoration clocks on ROW work",
      text: "For permitted ROW work, Denton expects rubbish and spoil kept clear of the ROW and private property, backfill and compaction of voids within seven business days of excavation, temporary traffic control removed within three business days, and full restoration to City standards within 20 business days after substantial completion of the permitted scope.",
      sources: [sources.dentonRow],
    },
    {
      title: "Public improvements before private building",
      text: "The Development Handbook requires public improvements to be installed, inspected and accepted before private improvement work or building permits on projects that include them, and a Notice to Proceed before construction begins. Line up civil approval and NTP before booking large earthmoving fleets.",
      sources: [sources.dentonDevHandbook],
    },
    {
      title: "Heat and wet seasons",
      text: "NWS Fort Worth notes July and August highs consistently in the 90s and often 100 degrees, with spring and fall the wettest seasons. Plan exterior lift work and open excavations around storms, and use Denton's earlier summer weekday start when heat pushes crews to cooler hours.",
      sources: [sources.nwsDfwClimate, sources.dentonNoise],
    },
  ],
  faqs: [
    { question: "What hours can I run construction equipment in Denton?", answer: "Under Denton's noise ordinance, building construction work is limited to 6 a.m.–8:30 p.m. weekdays from June through September, 7 a.m.–8:30 p.m. weekdays from October through May, 8 a.m.–8:30 p.m. Saturday, and 1 p.m.–8:30 p.m. Sunday. Outside those hours you need a City Council–approved special permit." },
    { question: "Do I need a Denton ROW permit to dig in the street?", answer: "Yes. Denton processes right-of-way permits online through e-TRAKiT after registration, generally reviews complete applications within 10 business days, and requires 48 hours' notice to the inspector and affected adjacent residents before work starts." },
    { question: "What equipment suits downtown Denton renovations?", answer: "Plan for lifts and compact handlers first: articulating boom lifts and scissor lifts for facades and interiors, and telehandlers for materials on tight lots. Measure gate width, overhead lines and staging space before you book." },
    { question: "When can I start grading a Denton site with public improvements?", answer: "After Civil Engineering Plans are approved, pre-construction steps are complete and the City issues Notice to Proceed. Public improvements generally have to be accepted before private building work proceeds. Confirm the sequence with your Development Project Facilitator." },
  ],
  nearbyCities: ["lewisville", "frisco", "carrollton", "dallas"],
  heroImage: {
    src: "/images/locations/denton-tx-construction-equipment-rental.webp",
    alt: "Compact track loader and scissor lift on a gravel lot beside an old red-brick building under oak trees in Denton, Texas",
  },
  guides: [boomLiftGuide, compactGuide, excavatorSizeGuide, rentalChecklistGuideLink],
};

export const lewisville: CityEntry = {
  name: "Lewisville",
  slug: "lewisville",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Lewisville sits along I-35E in Denton County, with a historic Old Town core, corridor redevelopment plans and gateway mixed-use sites at the north and south ends of the city.",
  metaDescription:
    "Construction equipment rentals in Lewisville, TX: telehandlers, lifts, excavators and compact machines for Old Town infill and I-35E corridor work, plus local ROW rules.",
  localIntro: [
    "Lewisville stretches along Interstate 35E in southern Denton County, between older neighborhoods around Old Town and larger redevelopment and gateway sites the City has planned in detail. City long-range plans cover Old Town revitalization and transit-oriented development, an I-35E corridor identity and redevelopment framework, and Northern and Southern Gateway mixed-use guides covering hundreds of acres.",
    "That means two rental patterns: compact equipment for brick-and-infill work near Old Town, and heavier earthmoving and lifts for corridor and gateway pads. Use this page to match equipment to the part of Lewisville you're in, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Old Town is bounded by I-35E, College Street, Railroad Street and Purnell Street. The City regulates development there under the Old Town Development Ordinance with Old Town Design Review Committee review, and it describes the district as retaining early commercial character that new work is expected to respect. Facade, interior and tight-lot builds favor telehandlers, scissor lifts and mini excavators over large earthmovers.",
    "Along I-35E, the City's corridor plans split the eight-mile frontage into zones and aim for new private investment with a clearer identity. North and south gateways (about 300 and 325 acres in the City's planning documents) target mixed-use urban development. Those sites need excavators, rollers, boom lifts and telehandlers as buildings rise from graded pads.",
    "Right-of-way utility work runs through MyGovernmentOnline. The City's engineering division reviews ROW use permit applications for completeness within 30 days and can require missing information within 180 days before an incomplete filing is treated as withdrawn.",
  ],
  featuredEquipment: [
    { slug: "telehandler-rental", reason: "Lifting materials to upper floors on Old Town infill and corridor commercial buildings where street-side staging is narrow." },
    { slug: "scissor-lift-rental", reason: "Interior renovations and exterior wall work on older commercial buildings in Old Town and along the corridor, especially on finished floors." },
    { slug: "boom-lift-rental", reason: "Facade and roof-edge work on taller corridor and gateway buildings, with articulating booms for obstacles and telescopic booms for straight reach." },
    { slug: "mini-excavator-rental", reason: "Utility ties and footings on tight Old Town lots where a full-size excavator cannot stage." },
    { slug: "excavator-rental", reason: "Mass grading, detention and utilities on Northern and Southern Gateway pads and larger I-35E redevelopment sites." },
    { slug: "compactor-rental", reason: "Pad and trench compaction on new mixed-use and commercial sites, including padfoot drums for cohesive North Texas clay." },
  ],
  siteConsiderations: [
    {
      title: "ROW permits through MyGovernmentOnline",
      text: "Lewisville issues right-of-way use permits online. Applications must identify the facility owner, applicant and contractor. Engineering reviews completeness within 30 days and notifies the contractor in writing if information is missing; missing items not supplied within 180 days cause the application to be deemed withdrawn.",
      sources: [sources.lewisvilleRow],
    },
    {
      title: "Call 811 before excavating",
      text: "Texas law requires notice to a one-call center at least 48 hours before excavating, excluding weekends and holidays. On older Old Town lots, allow extra time to find private service lines that franchise locates will not mark.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Old Town design review",
      text: "Development inside the Old Town boundaries is regulated by the Old Town Development Ordinance and reviewed by the Old Town Design Review Committee. Plan equipment and staging that fit the district's tight lots and streetscape expectations, not only the building plans.",
      sources: [sources.lewisvilleOldTown],
    },
    {
      title: "Stormwater on larger sites",
      text: "Sites disturbing one acre or more that discharge stormwater to surface waters generally need coverage under TCEQ's construction general permit, with a stormwater pollution prevention plan before earthwork. Confirm City grading and erosion expectations with Engineering when you apply for related permits.",
      sources: [sources.tceqConstructionStormwater],
    },
    {
      title: "Heat and wet seasons",
      text: "NWS Fort Worth notes Metroplex summer highs in the 90s and often 100 degrees, with spring and fall the wettest seasons. Open corridor pads lose grading days after storms; schedule exterior lift work around heat and wind.",
      sources: [sources.nwsDfwClimate],
    },
    {
      title: "Clay soils",
      text: "Much of North Texas sits on expansive clay described regionally by USDA as Houston Black and related Blackland Prairie soils. Check your parcel in the USDA Web Soil Survey and your geotechnical report before choosing compaction equipment and track versus tire machines.",
      sources: [sources.usdaHoustonBlack, sources.usdaOsd],
    },
  ],
  faqs: [
    { question: "How do I get a Lewisville right-of-way permit?", answer: "Apply online through MyGovernmentOnline for a ROW Use Permit under Engineering. Include the facility owner, applicant and contractor. The City reviews completeness within 30 days and can require additional information; if the missing items are not supplied within 180 days, the application is treated as withdrawn." },
    { question: "What equipment fits Old Town Lewisville work?", answer: "Tight lots and occupied neighbors favor telehandlers, scissor lifts and mini excavators over large earthmovers. Confirm gate width, overhead lines and whether Old Town Design Review applies before you book." },
    { question: "Where is larger site work happening in Lewisville?", answer: "City long-range plans focus larger mixed-use and redevelopment energy on the I-35E corridor and on Northern and Southern Gateway sites of roughly 300 and 325 acres. Those pads typically need excavators, rollers, boom lifts and telehandlers as buildings rise." },
    { question: "Do I need 811 before digging in Lewisville?", answer: "Yes. Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays. Private service lines on older lots are not marked by franchise locates, so plan to find them with plans or potholing." },
  ],
  nearbyCities: ["denton", "carrollton", "frisco", "dallas"],
  heroImage: {
    src: "/images/locations/lewisville-tx-construction-equipment-rental.webp",
    alt: "Excavator loading a dump truck next to a wheel loader on a red clay pad by a frontage road in Lewisville, Texas",
  },
  guides: [boomLiftGuide, sitePrepGuide, compactGuide, rentalChecklistGuideLink],
};

export const allen: CityEntry = {
  name: "Allen",
  slug: "allen",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Allen is a Collin County suburb north of Plano, guided by the Allen 2045 Comprehensive Plan as it continues to grow and reinvest across housing, commercial and infrastructure work.",
  metaDescription:
    "Construction equipment rentals in Allen, TX: excavators, compact track loaders, mini excavators and lifts for residential and commercial growth, plus City ROW locate rules.",
  localIntro: [
    "Allen sits in Collin County north of Plano and has spent decades converting open land into neighborhoods, schools and commercial centers along its major thoroughfares. On April 29, 2025, City Council adopted the Allen 2045 Comprehensive Plan as the policy guide for land use, transportation, housing, economic development, parks and infrastructure over the next fifteen to twenty years.",
    "Most Allen rentals support new residential pads, school and civic sites, and commercial nodes at arterial intersections. Use this page to match equipment to that work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Allen 2045 replaces the prior 2030 plan and keeps the focus on managed growth rather than unchecked strip development. New subdivisions and commercial pads still need clearing, grading, utilities and compaction before vertical work starts, so excavators, compact track loaders, trenchers and rollers dominate early phases.",
    "As buildings rise, the list shifts to telehandlers, boom lifts and concrete equipment for framing, masonry and exterior finishes. Infill and renovation jobs closer to established neighborhoods favor mini excavators and skid steers that fit between homes.",
    "Utility protection is a City priority. Allen's Right-of-Way Management program reviews and inspects work in City ROW so City utilities stay protected, and it asks applicants to review the interactive GIS utility map before filing.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Mass grading, detention ponds and utility mains on new residential and commercial pads across Allen's remaining developable tracts." },
    { slug: "skid-steer-rental", reason: "Fine grading, backfill and material handling on smaller lots and between existing homes where a larger loader will not fit." },
    { slug: "mini-excavator-rental", reason: "Footings, service connections and short trenches on residential and light commercial sites." },
    { slug: "compactor-rental", reason: "Padfoot and smooth-drum rollers for building pads and pavement subgrade, plus rammers and plates for trench backfill in clay." },
    { slug: "telehandler-rental", reason: "Placing framing, masonry and roofing materials on two-story residential and commercial buildings." },
    { slug: "boom-lift-rental", reason: "Exterior finishes, roof edges and lighting on commercial buildings at arterial nodes." },
  ],
  siteConsiderations: [
    {
      title: "Two locates for City utilities",
      text: "Call Texas 811 for franchise utilities (electric, gas and telecom). For City water, sanitary sewer, storm, signals and street lights, email Locates@allentx.gov at least 48 hours before digging and include the ROW permit number, 811 ticket and a location map. City locates run Monday through Friday. Allen does not locate private water beyond the meter, private sanitary sewer or irrigation.",
      sources: [sources.allenRow, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "When a ROW permit is required",
      text: "Allen requires a construction permit when you dig in City ROW; in state ROW where the City has utilities; on private property where you encroach on City or North Texas Municipal Water District utilities; or on private property when tying into facilities the City has already accepted (permit covers the tie-in area).",
      sources: [sources.allenRow],
    },
    {
      title: "Allow 10 business days",
      text: "Before applying, review Allen's interactive GIS utility map and email RecordPlans@allentx.gov if you need more detail. Plan on about 10 business days for ROW permit processing. As of March 3, 2026, ROW permits are submitted through the City's FY2027 application link on the ROW Management page.",
      sources: [sources.allenRow],
    },
    {
      title: "Stormwater coverage",
      text: "Sites disturbing one acre or more that discharge stormwater to surface waters generally need TCEQ construction general permit coverage and a stormwater pollution prevention plan before earthwork. Allen notes it will not accept operational control under that permit for franchise utility projects in public ROW.",
      sources: [sources.tceqConstructionStormwater, sources.allenRow],
    },
    {
      title: "Heat and wet seasons",
      text: "NWS Fort Worth notes Metroplex summer highs consistently in the 90s and often 100 degrees, with spring and fall the wettest seasons. Expect lost grading days after storms and plan exterior lift work around heat.",
      sources: [sources.nwsDfwClimate],
    },
    {
      title: "Clay soils",
      text: "USDA describes Houston Black and related Blackland Prairie soils across much of North Texas, with very high shrink-swell. Verify your parcel in the Web Soil Survey and follow the geotechnical report when choosing rollers and track machines.",
      sources: [sources.usdaHoustonBlack, sources.usdaOsd],
    },
  ],
  faqs: [
    { question: "How do I get City utility locates in Allen?", answer: "Email Locates@allentx.gov at least 48 hours before digging, include your ROW permit number, 811 ticket and a location map, and call 811 separately for franchise utilities. Allen locates City water, sewer, storm, signals and street lights on weekdays and does not locate private service lines past the meter or irrigation." },
    { question: "Do I need an Allen ROW permit for work on private property?", answer: "Sometimes. A permit is required when you encroach on City or NTMWD utilities on private property, or when you tie into City-accepted facilities (for the tie-in area). Digging only in City or applicable state ROW also requires a permit." },
    { question: "What equipment is common on new Allen subdivision pads?", answer: "Early work usually needs excavators, compact track loaders or skid steers, trenchers and rollers. As homes and commercial buildings rise, telehandlers and boom lifts take over for materials and exterior finishes." },
    { question: "How long does an Allen ROW permit take?", answer: "Allen asks applicants to allow about 10 business days after reviewing the GIS utility map. Confirm current intake steps on the City's Right-of-Way Management page, which notes the FY2027 online application path." },
  ],
  nearbyCities: ["plano", "mckinney", "frisco", "wylie", "dallas"],
  heroImage: {
    src: "/images/locations/allen-tx-construction-equipment-rental.webp",
    alt: "Mini excavator trenching along a new curb with utility flags, a skid steer and new brick homes in Allen, Texas",
  },
  guides: [sitePrepGuide, excavatorSizeGuide, compactGuide, shortVsLongGuideLink],
};

export const flowerMound: CityEntry = {
  name: "Flower Mound",
  slug: "flower-mound",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Flower Mound is a Denton County town between Denton and the Metroplex lakes, known for master-planned growth, Cross Timbers conservation areas and the Lakeside Business District.",
  metaDescription:
    "Construction equipment rentals in Flower Mound, TX: boom lifts, telehandlers, excavators and compact machines for Lakeside commercial and residential work, plus Town construction hours.",
  localIntro: [
    "Flower Mound sits in southern Denton County as a largely master-planned town, with residential neighborhoods, Cross Timbers conservation areas and a Lakeside Business District planned for larger commercial and light-industrial campuses. Town documents describe Lakeside for corporate offices, office and industrial parks, clean manufacturing, hotels and compatible retail, while Cross Timbers areas emphasize low-density housing and preservation.",
    "Commercial campus builds and careful residential work drive most rentals here. Use this page to match equipment to Flower Mound's rules and site types, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Lakeside and similar commercial pads need the full site-prep-to-vertical sequence: excavators and rollers for the pad, then telehandlers and boom lifts as tilt-wall or low-rise office buildings rise. Landscaped campuses leave limited staging, so machine width and ground protection matter.",
    "Residential and Cross Timbers-adjacent lots favor compact equipment. Mini excavators, skid steers and plate compactors handle service lines, drainage and additions without disturbing more tree cover than the plans allow.",
    "The Town is strict about construction noise. Building Inspections FAQ states construction working hours are limited to 7 a.m. to 7 p.m. Monday through Friday and 9 a.m. to 5 p.m. Saturday and Sunday, enforced by the police department with a zero-tolerance policy for violations.",
  ],
  featuredEquipment: [
    { slug: "boom-lift-rental", reason: "Exterior finishes, curtain wall and roof-edge work on Lakeside low-rise office and light-industrial buildings." },
    { slug: "telehandler-rental", reason: "Moving materials across campus pads and placing loads on upper walls when crane time is limited." },
    { slug: "forklift-rental", reason: "Warehouse and light-industrial fit-out once slabs and truck courts are in, including racking and palletized materials." },
    { slug: "excavator-rental", reason: "Pads, detention and utilities for commercial sites and larger residential sections." },
    { slug: "mini-excavator-rental", reason: "Service lines, drainage and footings on residential lots where tree protection and tight side yards limit machine size." },
    { slug: "skid-steer-rental", reason: "Fine grading, backfill and landscape site work around finished homes and commercial entries." },
  ],
  siteConsiderations: [
    {
      title: "Construction hours with zero tolerance",
      text: "Flower Mound limits construction working hours to 7 a.m.–7 p.m. Monday through Friday and 9 a.m.–5 p.m. Saturday and Sunday. The police department enforces those hours, and the Town's Building Inspections FAQ describes a zero-tolerance policy for violations.",
      sources: [sources.flowerMoundFaq],
    },
    {
      title: "811 plus Town ROW permits",
      text: "Call Texas 811 at least two business days before digging for franchise utilities. For private development or residential excavation in a Town easement or right-of-way, a permit is required; contact Development Engineering at 972-874-6313. CIP projects use CIP Engineering instead.",
      sources: [sources.flowerMoundLocates, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Stormwater on acre-plus sites",
      text: "Sites disturbing one acre or more that discharge stormwater to surface waters generally need TCEQ construction general permit coverage and a stormwater pollution prevention plan before earthwork begins.",
      sources: [sources.tceqConstructionStormwater],
    },
    {
      title: "Heat and wet seasons",
      text: "NWS Fort Worth notes Metroplex summer highs in the 90s and often 100 degrees, with spring and fall the wettest seasons. Flower Mound's 7 a.m. weekday start helps crews work cooler hours in summer, but open pads still lose days after heavy rain.",
      sources: [sources.nwsDfwClimate, sources.flowerMoundFaq],
    },
    {
      title: "Clay soils and tree cover",
      text: "USDA's regional Blackland Prairie description applies across much of North Texas; verify your parcel in the Web Soil Survey. Cross Timbers and landscaped campus sites also add tree and drip-line protection that can constrain where excavators and stockpiles sit.",
      sources: [sources.usdaHoustonBlack, sources.usdaOsd],
    },
    {
      title: "OSHA excavation basics",
      text: "Federal rules still apply on every trench: protective systems for trenches five feet or deeper unless in stable rock, spoils and equipment at least two feet from the edge, and daily competent-person inspections.",
      sources: [sources.oshaTrenching],
    },
  ],
  faqs: [
    { question: "What are Flower Mound construction hours?", answer: "7 a.m. to 7 p.m. Monday through Friday, and 9 a.m. to 5 p.m. Saturday and Sunday. The police department enforces those hours, and the Town describes a zero-tolerance policy for violations." },
    { question: "Do I need a permit to dig in a Flower Mound easement?", answer: "Yes for private development or residential excavation in a Town easement or right-of-way. Contact Development Engineering at 972-874-6313. Still call 811 at least two business days ahead for franchise utilities." },
    { question: "What equipment suits a Lakeside Business District build?", answer: "Plan excavators and rollers for the pad, then telehandlers, boom lifts and forklifts as the building and warehouse areas come online. Confirm gate width, slab capacity and delivery routes on landscaped campuses." },
    { question: "Can I start early to beat the summer heat in Flower Mound?", answer: "Weekday work may start at 7 a.m., which is the Town's limit. Earlier starts are not allowed under the published construction hours, even in summer heat." },
  ],
  nearbyCities: ["lewisville", "carrollton", "denton", "grapevine", "dallas"],
  heroImage: {
    src: "/images/locations/flower-mound-tx-construction-equipment-rental.webp",
    alt: "Telehandler lifting lumber at a wood-frame house with tree-protection fencing around oaks in Flower Mound, Texas",
  },
  guides: [boomLiftGuide, sitePrepGuide, shortVsLongGuideLink],
};

export const mansfield: CityEntry = {
  name: "Mansfield",
  slug: "mansfield",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Mansfield sits southeast of Fort Worth near Joe Pool Lake along US 287 and SH 360, balancing residential growth, highway commercial nodes and an industrial sector in the southwest.",
  metaDescription:
    "Construction equipment rentals in Mansfield, TX: excavators, rollers, telehandlers and lifts for residential and US 287/SH 360 commercial work, plus City grading and ROW permits.",
  localIntro: [
    "Mansfield lies about 18 miles southeast of downtown Fort Worth and 26 miles from downtown Dallas, along US Highway 287 and State Highway 360 near Joe Pool Lake, spanning parts of Tarrant, Johnson and Ellis counties. The City's 2012 Land Use Plan describes a community that wants quality residential and commercial growth while keeping a hometown character, with regional commercial nodes along the two highways and industrial land concentrated south of downtown.",
    "New neighborhoods, highway commercial and southwest industrial jobs drive most equipment rentals. Use this page to match machines to Mansfield work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "When the Land Use Plan was written, roughly 58 percent of Mansfield's land was developed, with single-family housing the largest use. Remaining growth still means subdivision pads, schools and neighborhood commercial nodes, so excavators, rollers, trenchers and compact track loaders handle early site work.",
    "Along US 287 and SH 360, the plan identifies regional commercial centers with big-box, hotel and restaurant uses that draw from beyond the city. Those sites need telehandlers, boom lifts and forklifts as buildings and parking fields go up. Southwest industrial tracts support warehousing and manufacturing, with the plan noting remaining industrial acreage that depends on water and sewer readiness.",
    "Engineering Services reviews public infrastructure for private development and lists ROW, floodplain, grading and fill, and public infrastructure connection permits. Non-emergency utility installations in ROW require a no-cost ROW permit and plan submittal.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Subdivision grading, detention and utilities, plus industrial pad work in the southwest sector." },
    { slug: "compactor-rental", reason: "Building pads and pavement subgrade on residential and commercial sites; Mansfield's electric/ROW guidelines also call for 95 percent Standard Proctor trench compaction in ROW work." },
    { slug: "telehandler-rental", reason: "Framing, masonry and roofing materials on residential and highway commercial buildings." },
    { slug: "boom-lift-rental", reason: "Exterior finishes and roof edges on commercial buildings at US 287 and SH 360 nodes." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles and loading trucks on larger residential and industrial pads." },
    { slug: "skid-steer-rental", reason: "Fine grading, backfill and site cleanup on smaller lots and between phases of a subdivision." },
  ],
  siteConsiderations: [
    {
      title: "Grading, floodplain and ROW permits",
      text: "Mansfield Engineering lists Grading and Fill, Floodplain Development, ROW, Public Infrastructure Connection and Temporary Batch Plant permits. Confirm which apply before the first scrape, especially near mapped floodplain or when tying into public water, sewer or streets.",
      sources: [sources.mansfieldEngineering],
    },
    {
      title: "ROW permit for non-emergency utility work",
      text: "The City's electric and street-light design guidelines state that non-emergency installations require a Right-of-Way Permit at no cost, with plans submitted on all projects. Wet utilities are field-located by Field Operations under normal locate standards, and trench compaction must meet a minimum 95 percent Standard Proctor.",
      sources: [sources.mansfieldElectricRow],
    },
    {
      title: "Call 811 before digging",
      text: "Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays. Coordinate City water and sewer locates with Field Operations as Engineering directs for your permit type.",
      sources: [sources.utilitiesCode251, sources.texas811, sources.mansfieldElectricRow],
    },
    {
      title: "Stormwater on acre-plus sites",
      text: "Sites disturbing one acre or more that discharge stormwater to surface waters generally need TCEQ construction general permit coverage and a stormwater pollution prevention plan before earthwork.",
      sources: [sources.tceqConstructionStormwater],
    },
    {
      title: "Heat and wet seasons",
      text: "NWS Fort Worth notes Metroplex summer highs in the 90s and often 100 degrees, with spring and fall the wettest seasons. Open subdivision pads along the southern growth edge lose grading days after storms.",
      sources: [sources.nwsDfwClimate],
    },
    {
      title: "Clay soils",
      text: "USDA's Houston Black and Blackland Prairie descriptions cover much of North Texas, with high shrink-swell that affects footings and compaction. Check the Web Soil Survey and the geotechnical report before choosing padfoot versus smooth-drum rollers.",
      sources: [sources.usdaHoustonBlack, sources.usdaOsd],
    },
  ],
  faqs: [
    { question: "Do I need a Mansfield permit before grading?", answer: "Often yes. Engineering lists Grading and Fill and Floodplain Development permits among others. Confirm the right permit set before mobilizing excavators and rollers, especially near floodplain or when connecting to public infrastructure." },
    { question: "Is a Mansfield ROW permit free for utility work?", answer: "The City's electric and street-light guidelines say non-emergency installations require a Right-of-Way Permit at no cost, with plans submitted. Emergency rules differ; follow Engineering's current application links." },
    { question: "What equipment suits a new Mansfield subdivision?", answer: "Early phases usually need excavators, wheel loaders or skid steers, trenchers and rollers. Telehandlers and boom lifts arrive when framing and exterior finishes start. Share pad size, soil report and schedule with the provider." },
    { question: "Where is industrial construction concentrated in Mansfield?", answer: "The 2012 Land Use Plan places most industrial land south of downtown along S. Main Street and notes remaining industrial acreage whose readiness depends on water and sewer infrastructure. Confirm current zoning and utilities with the City before planning heavy equipment." },
  ],
  nearbyCities: ["arlington", "grand-prairie", "desoto", "cedar-hill", "burleson", "dallas", "fort-worth"],
  heroImage: {
    src: "/images/locations/mansfield-tx-construction-equipment-rental.webp",
    alt: "Motor grader and smooth-drum roller working a large graded clay site with two workers in hi-vis in Mansfield, Texas",
  },
  guides: [sitePrepGuide, excavatorSizeGuide, rentalChecklistGuideLink],
};

// Batch 5 (2026-10-22): next uncovered DFW cities by 2020 Census size.

export const northRichlandHills: CityEntry = {
  name: "North Richland Hills",
  slug: "north-richland-hills",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "North Richland Hills is a northeast Tarrant County city on SH 26, SH 183 and IH 820, with two TEXRail station districts and a nearly built-out street network.",
  metaDescription:
    "Construction equipment rentals in North Richland Hills, TX: compact loaders, mini excavators, lifts and telehandlers for TOD infill and redevelopment, plus City ROW and hours rules.",
  localIntro: [
    "North Richland Hills sits in northeastern Tarrant County on State Highways 26 and 183 and Interstate 820, northeast of downtown Fort Worth and west of DFW Airport. The City's transportation plan describes a roadway network that is nearly at build-out, aging infrastructure, and a community maturing through redevelopment and more intense land uses.",
    "That makes much of the work here infill, utility replacement and mixed-use building around the two TEXRail station districts. Use this page to match machines to North Richland Hills work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "The City's plan names three districts that shape future development: HomeTown, a master-planned mixed-use neighborhood bounded by Mid-Cities Boulevard, Davis Boulevard and Boulevard 26; the Smithfield TOD, planned as a walkable neighborhood around its TEXRail station; and the Iron Horse TOD next to IH 820, planned for mixed use with park-and-ride and regional retail. Both station areas are governed by a form-based Transit Oriented Development Code.",
    "Station-area and HomeTown projects tend to be multi-story buildings on lots with streets, trails and neighbors already in place. Telehandlers and boom lifts handle the vertical work, while compact track loaders and mini excavators fit tight utility and flatwork phases. Vacant parcels along Iron Horse Boulevard and big-box frontage on IH 820 are expected to develop or intensify, which brings larger site-prep packages.",
    "Older parts of the city were built before sidewalks were always required, and the plan points to gaps and aging infrastructure. Expect sidewalk, driveway approach and utility replacement work in the public right-of-way, which needs a City ROW permit and separate locates for City water and sewer.",
  ],
  featuredEquipment: [
    { slug: "skid-steer-rental", reason: "Flatwork prep, backfill and cleanup on infill lots and driveway approach replacements where space is tight." },
    { slug: "mini-excavator-rental", reason: "Water, sewer and service line work in older neighborhoods and around TOD streetscapes." },
    { slug: "telehandler-rental", reason: "Placing framing and masonry materials on multi-story mixed-use buildings in HomeTown and the station districts." },
    { slug: "boom-lift-rental", reason: "Facade and canopy work on mixed-use and retail buildings that front finished streets and trails." },
    { slug: "concrete-equipment-rental", reason: "Sidewalk, approach and flatwork replacement, which the City permits as paving work." },
    { slug: "compactor-rental", reason: "Trench and subgrade compaction under restored pavement and new flatwork." },
  ],
  siteConsiderations: [
    {
      title: "ROW permit before any work in the right-of-way",
      text: "The City requires a Right-of-Way Permit for any construction, maintenance or excavation in the public right-of-way, for private contractors, residents and franchise utilities. Applications need a project description, scope, site plan, proof of insurance and a traffic control plan when traffic or pedestrians are affected. The City asks for two to three business days of review; work may not start until the permit is issued and displayed on site, and permits are valid for 30 days unless extended.",
      sources: [sources.nrhPermits],
    },
    {
      title: "Texas811 plus City water and sewer locates",
      text: "The City states that 811 does not mark City-owned water or sewer lines. Notify Texas811 for franchise utilities, and note that an approved NRH ROW permit serves as the request for the City to mark its water and sewer mains. Excavation may begin only after 811 has cleared the site and the ROW permit is issued.",
      sources: [sources.nrhPermits, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Outdoor construction hours change with daylight saving time",
      text: "Code sec. 98-61(b) prohibits outdoor construction from 7 p.m. to 7 a.m. during Central Standard Time and from 8 p.m. to 6 a.m. during daylight saving time, on Sundays, and on New Year's Day, Memorial Day, July 4, Labor Day, Thanksgiving and Christmas. Appeals go to the building official in writing. Schedule deliveries and early starts around the current season.",
      sources: [sources.nrhConstructionHours],
    },
    {
      title: "Paving permits for approaches and sidewalks",
      text: "Rebuilding driveway approaches, driveways and sidewalks needs a Paving Permit with a traffic control plan, site plan and insurance. New approaches and sidewalks are tied to civil and building plans. Contractors must register with the City before permits are issued.",
      sources: [sources.nrhPermits],
    },
    {
      title: "Station districts and form-based code",
      text: "Smithfield and Iron Horse are governed by the Transit Oriented Development Code, which sets street types and building standards. Confirm staging, street closures and access early on these sites, because both districts prioritize pedestrians and trail users.",
      sources: [sources.nrhTransportationContext],
    },
    {
      title: "Heat, storms and clay",
      text: "NWS Fort Worth notes Metroplex summer highs in the 90s and often 100 degrees, with spring and fall the wettest seasons. USDA's Houston Black description covers much of North Texas; check the geotechnical report and Web Soil Survey before choosing compaction equipment.",
      sources: [sources.nwsDfwClimate, sources.usdaHoustonBlack],
    },
  ],
  faqs: [
    { question: "Do I need a permit to work in a North Richland Hills street or easement?", answer: "Yes. The City requires a Right-of-Way Permit for any construction, maintenance or excavation in the public right-of-way, and the permit must be issued and displayed on site before work starts. Allow two to three business days for review." },
    { question: "Will 811 mark North Richland Hills water and sewer lines?", answer: "No. The City says 811 does not mark City-owned water or sewer lines. Notify Texas811 for franchise utilities; the approved City ROW permit serves as the request for City water and sewer locates." },
    { question: "What are construction hours in North Richland Hills?", answer: "Outdoor construction is not allowed from 7 p.m. to 7 a.m. during Central Standard Time or 8 p.m. to 6 a.m. during daylight saving time, on Sundays, or on six listed holidays. Appeals go to the building official in writing." },
    { question: "What equipment suits work near the TEXRail station districts?", answer: "Compact machines for utilities and flatwork, plus telehandlers and boom lifts for multi-story mixed-use buildings. Share lot size, staging space and street access with the provider, since both station areas are planned around pedestrians." },
  ],
  nearbyCities: ["fort-worth", "euless", "arlington", "bedford", "dallas"],
  heroImage: {
    src: "/images/locations/north-richland-hills-tx-construction-equipment-rental.webp",
    alt: "Yellow telehandler lifting a lumber pallet onto a 3-story wood-framed building, mini excavator by a new sidewalk",
  },
  guides: [utilityLocatesGuideLink, compactGuide, telehandlerForkliftGuideLink],
};

export const rowlett: CityEntry = {
  name: "Rowlett",
  slug: "rowlett",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Rowlett lies in northeastern Dallas County and western Rockwall County, bordered by Lake Ray Hubbard on the east and south and Rowlett Creek on the west.",
  metaDescription:
    "Construction equipment rentals in Rowlett, TX: excavators, loaders, rollers and lifts for lakeside and form-based district work, plus City grading, ROW and floodplain rules.",
  localIntro: [
    "Rowlett is in northeastern Dallas County and western Rockwall County, east of Garland, with Lake Ray Hubbard along its east and south edges and Rowlett Creek on the west. The Handbook of Texas ties the city's building boom to the lake's completion in 1971.",
    "Its comprehensive plan, Realize Rowlett 2020, steers growth into a set of form-based districts, so equipment needs swing between lakeside and greenfield site work and denser mixed-use building. Use this page to match machines to Rowlett work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Realize Rowlett 2020 was adopted in 2011, followed in 2012 by a Form Based Code and Strategic Downtown Plan. The City lists seven areas rezoned to form-based districts: Woodside Living, Healthy Living, Signature Gateway, Downtown, Center for Commerce and Industry, and North Shore (north and south). Each comes with its own zoning document, so check the district before planning staging and building height.",
    "Downtown and gateway districts point to multi-story mixed-use buildings, where telehandlers and boom lifts do most of the lifting and compact equipment handles utilities. North Shore and the commerce and industry district involve larger pads and roadway work, which call for excavators, wheel loaders and rollers.",
    "Water shapes many sites. Development Engineering handles floodplain management under FEMA and City rules, administers the stormwater program, and issues grading and right-of-way permits. Lake- and creek-adjacent work often needs extra planning for drainage, erosion control and wet-weather access.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Pad grading, detention and utility work on North Shore and commerce district sites." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles and loading trucks on larger graded sites and roadway packages." },
    { slug: "compactor-rental", reason: "Building pads and pavement subgrade, plus trench backfill in City right-of-way." },
    { slug: "telehandler-rental", reason: "Material placement on multi-story buildings in the Downtown and Signature Gateway districts." },
    { slug: "boom-lift-rental", reason: "Exterior finishes on mixed-use and commercial buildings in form-based districts." },
    { slug: "skid-steer-rental", reason: "Fine grading, erosion-control installation and cleanup on residential and lakeside lots." },
  ],
  siteConsiderations: [
    {
      title: "Grading permit for moving dirt",
      text: "Rowlett requires a Grading Permit to add, remove or move dirt on a lot or subdivision. Apply through the City's MyGov portal before the first load of fill arrives or leaves.",
      sources: [sources.rowlettDevEngineering],
    },
    {
      title: "ROW permit and contractor registration",
      text: "A Right-of-Way Permit is required for work in the City's right-of-way. A complete application includes a valid DCAD or RCAD address, a map or site plan with street names, and any fee due; complex or long projects may need a full set of drawings. The City will not issue ROW permits or authorize civil plans for contractors that are not registered.",
      sources: [sources.rowlettDevEngineering],
    },
    {
      title: "Floodplain and stormwater",
      text: "Development Engineering manages floodplain development under FEMA and City ordinances and administers the stormwater program. Sites disturbing one acre or more that discharge to surface waters generally need TCEQ construction general permit coverage and a stormwater pollution prevention plan.",
      sources: [sources.rowlettDevEngineering, sources.tceqConstructionStormwater],
    },
    {
      title: "Call 811 before digging",
      text: "Texas law requires notice through the one-call system at least 48 hours before excavating, excluding weekends and holidays. Ask Rowlett Development Engineering how City-owned lines are located for your permit.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Construction hours: confirm with the City",
      text: "City sources publish different construction hours, so this page does not state a schedule. Confirm current hours for your permit type with Rowlett Development Engineering or Building Inspections before planning early starts, Saturday work or deliveries.",
      sources: [sources.rowlettDevEngineering],
    },
    {
      title: "Storms and wet ground",
      text: "NWS Fort Worth notes that spring and fall are the wettest seasons and that hail, damaging winds and flooding occur nearly every year. Lakeside and creek-adjacent pads can lose working days after storms, so plan tracked machines and ground protection.",
      sources: [sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "Do I need a permit to grade a lot in Rowlett?", answer: "Yes. Rowlett requires a Grading Permit to add, remove or move dirt on a lot or subdivision. Apply through the City's MyGov portal before mobilizing excavators or loaders." },
    { question: "Can an unregistered contractor get a Rowlett ROW permit?", answer: "No. The City says it will not issue Right-of-Way Permits or authorize civil plans unless the contractor is registered. Register through MyGov before you schedule equipment delivery." },
    { question: "What are Rowlett's construction hours?", answer: "City sources give different figures, so confirm current hours for your permit type with Development Engineering or Building Inspections before planning early, late or Saturday work." },
    { question: "What equipment fits Rowlett's form-based districts?", answer: "Downtown and gateway districts lean toward telehandlers, boom lifts and compact utility equipment for mixed-use buildings. Larger North Shore and commerce district sites add excavators, wheel loaders and rollers." },
  ],
  nearbyCities: ["garland", "wylie", "rockwall", "dallas"],
  heroImage: {
    src: "/images/locations/rowlett-tx-construction-equipment-rental.webp",
    alt: "Excavator and smooth-drum roller on a graded clay pad with silt fence, lake and tree line behind, overcast sky",
  },
  guides: [sitePrepGuide, utilityLocatesGuideLink, excavatorSizeGuide],
};

export const euless: CityEntry = {
  name: "Euless",
  slug: "euless",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Euless is in Tarrant County at State Highways 10 and 183, on the southwest side of DFW Airport and north of the West Fork of the Trinity River.",
  metaDescription:
    "Construction equipment rentals in Euless, TX: telehandlers, lifts, forklifts and compact equipment near DFW Airport, plus City work hours, permits and FAA notice rules.",
  localIntro: [
    "Euless sits at State Highways 10 and 183 in Tarrant County, on the southwest side of Dallas-Fort Worth International Airport and north of the West Fork of the Trinity River. The Handbook of Texas traces much of its postwar growth to the airfield on its eastern edge and to aviation employers that moved in.",
    "Airport-adjacent commercial work, highway frontage and established neighborhoods drive most rentals here. Use this page to match machines to Euless work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Commercial buildings, hotels and service businesses near the airport and along SH 183 and SH 10 call for telehandlers, boom lifts and forklifts during shell and fit-out work. Tall equipment near the airport also raises FAA notice questions that most suburban sites never face.",
    "Neighborhood projects such as room additions, driveway approaches and utility repairs are on the City's list of work that needs a permit. Compact track loaders, mini excavators and plate compactors fit those lots.",
    "Euless Engineering reviews public and private projects, and the paving, drainage, water and wastewater design criteria live in the Unified Development Code. Private development work must tie into at least two of the City's 31 horizontal and vertical control monuments, and Engineering keeps water and sewer locator maps showing the general location of mains.",
  ],
  featuredEquipment: [
    { slug: "telehandler-rental", reason: "Placing materials on commercial and hospitality buildings along SH 183 and near the airport." },
    { slug: "boom-lift-rental", reason: "Facade, signage-structure and roofline work on commercial buildings; check FAA notice needs near runways." },
    { slug: "forklift-rental", reason: "Unloading and staging materials on paved commercial lots and in warehouse fit-outs." },
    { slug: "skid-steer-rental", reason: "Driveway approach, flatwork and backfill work on established residential lots." },
    { slug: "mini-excavator-rental", reason: "Service line and drainage repairs where Engineering's locator maps show nearby mains." },
    { slug: "scissor-lift-rental", reason: "Interior ceiling, sprinkler and electrical work during commercial finish-outs." },
  ],
  siteConsiderations: [
    {
      title: "Weekday building-work hours",
      text: "The Euless noise article lists building erection, excavation, demolition, alteration or repair outside 7 a.m. to 6 p.m. on weekdays among prohibited nuisances, unless the City Council issues a permit for urgent necessity in the interest of public safety. Plan deliveries and noisy work inside that window.",
      sources: [sources.eulessNoise],
    },
    {
      title: "FAA notice for tall equipment near DFW Airport",
      text: "Federal rules require FAA notice for construction or alteration above 200 feet, or above a 100-to-1 surface within 20,000 feet of runways longer than 3,200 feet. Temporary structures such as cranes count. Euless sits on the southwest side of DFW Airport, so check boom and crane heights before booking.",
      sources: [sources.faaPart77, sources.faaForm7460, sources.tshaEuless],
    },
    {
      title: "Permits and control monuments",
      text: "Euless requires permits for new construction, room additions, remodels with structural changes, driveway approaches and other listed work. Private development must tie into at least two City control monuments, and design criteria for paving, drainage, water and wastewater are in the Unified Development Code.",
      sources: [sources.eulessBuilding, sources.eulessEngineering],
    },
    {
      title: "Locate mains before digging",
      text: "Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays. Euless Engineering also provides water and sanitary sewer locator maps showing the size and general location of mains; use them for planning, not as a substitute for locates.",
      sources: [sources.utilitiesCode251, sources.texas811, sources.eulessEngineering],
    },
    {
      title: "Summer inspection limits",
      text: "From May through September, the Building Inspections Division does not inspect confined spaces or attics after noon because of heat. Book those inspections in the morning so lifts and crews aren't idle waiting.",
      sources: [sources.eulessBuilding],
    },
    {
      title: "Heat and storms",
      text: "NWS Fort Worth notes Metroplex summer highs in the 90s and often 100 degrees, with severe weather peaking in spring. Plan lift work around wind and storms.",
      sources: [sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "What hours can construction run in Euless?", answer: "The City's noise article treats building erection, excavation, demolition, alteration or repair outside 7 a.m. to 6 p.m. on weekdays as a nuisance, unless the City Council grants a permit for urgent necessity. Plan noisy work and deliveries within that window." },
    { question: "Do I need FAA approval to use a tall boom or crane in Euless?", answer: "Possibly. Federal rules require FAA notice for structures above 200 feet or above a slope surface near runways longer than 3,200 feet, including temporary cranes. Euless sits on the southwest side of DFW Airport, so check heights early and file Form 7460-1 if required." },
    { question: "Can I use Euless utility maps instead of calling 811?", answer: "No. Engineering's water and sewer locator maps show general locations for planning. Texas law still requires one-call notice before excavating, at least 48 hours ahead excluding weekends and holidays." },
    { question: "What equipment suits commercial work near DFW Airport?", answer: "Telehandlers, boom lifts and forklifts for shell and fit-out work, plus scissor lifts inside. Share building height, lot layout and airport proximity with the provider." },
  ],
  nearbyCities: ["irving", "arlington", "north-richland-hills", "grapevine", "bedford", "dallas"],
  heroImage: {
    src: "/images/locations/euless-tx-construction-equipment-rental.webp",
    alt: "Telehandler and forklift staging materials at a steel building frame on a paved lot, jet overhead",
  },
  guides: [telehandlerForkliftGuideLink, boomLiftGuide, utilityLocatesGuideLink],
};

export const wylie: CityEntry = {
  name: "Wylie",
  slug: "wylie",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Wylie is on State Highway 78 in south central Collin County, south of Lake Lavon, and has spread into Rockwall and Dallas counties.",
  metaDescription:
    "Construction equipment rentals in Wylie, TX: excavators, rollers, trenchers and telehandlers for residential and SH 78 work, plus City hours, grading and Saturday permit rules.",
  localIntro: [
    "Wylie sits on State Highway 78 sixteen miles south of McKinney in south central Collin County, with Lake Lavon five miles north of the original town and city limits that now reach into Rockwall and Dallas counties. The Handbook of Texas ties its growth to the railroads, the Blackland Prairie farm economy, the lake, and later the expansion of the Dallas urban area.",
    "Residential growth and commercial work along SH 78 drive most equipment rentals. Use this page to match machines to Wylie work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "New neighborhoods mean grading, utilities and pads, so excavators, trenchers, rollers and compact track loaders handle early phases. Telehandlers arrive with framing and roofing materials, and skid steers come back for final grade and flatwork.",
    "The City guides development through its adopted Envision Wylie Comprehensive Plan. Commercial pads along SH 78 and around the historic downtown add lifts and material handlers to the mix, often on sites next to existing homes.",
    "Wylie enforces construction hours firmly. Building Inspections states that stop work orders are issued on the spot for violations, and deliveries are prohibited outside the approved hours, so delivery windows matter as much as machine choice.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Subdivision grading, detention and utility installation on new residential ground." },
    { slug: "trencher-rental", reason: "Long utility and irrigation runs across new phases." },
    { slug: "compactor-rental", reason: "Building pads, street subgrade and trench backfill on Blackland Prairie clay." },
    { slug: "skid-steer-rental", reason: "Final grade, flatwork prep and erosion-control installation on residential lots." },
    { slug: "telehandler-rental", reason: "Framing, roofing and masonry materials on houses and SH 78 commercial buildings." },
    { slug: "boom-lift-rental", reason: "Exterior work on commercial buildings along SH 78 and downtown." },
  ],
  siteConsiderations: [
    {
      title: "Construction and delivery hours",
      text: "Wylie allows construction from 7 a.m. to 9 p.m. Monday through Saturday, with no work on Sundays or the eleven federal holidays (Ordinance No. 2024-31). Deliveries are prohibited outside those hours, stop work orders are issued on the spot, and continued violations draw citations.",
      sources: [sources.wylieConstructionHours],
    },
    {
      title: "Saturday work on engineering permits",
      text: "Engineering says Saturday work is not guaranteed. Construction on Saturday requires a permit and a City inspector on site; email Engineering the preceding Thursday morning to confirm an inspector and pay the Saturday fee by noon that Thursday. Utility contractors must notify Engineering for Saturday work by the preceding Thursday.",
      sources: [sources.wylieEngineeringApplications, sources.wylieConstructionHours],
    },
    {
      title: "Stormwater on acre-plus sites",
      text: "Sites disturbing one acre or more that discharge stormwater to surface waters generally need TCEQ construction general permit coverage and a stormwater pollution prevention plan before earthwork. Ask Wylie Engineering which City grading and erosion-control submittals apply; engineering plans and permits are filed through CitizenServe.",
      sources: [sources.tceqConstructionStormwater, sources.wylieEngineeringApplications],
    },
    {
      title: "ROW construction permits and registration",
      text: "Construction Permit and Contractor Registration applications for the right-of-way are submitted online through the City's CitizenServe portal; registration is good for one year. The former ROW permit email has been discontinued.",
      sources: [sources.wylieRow, sources.wylieEngineering],
    },
    {
      title: "Call 811 before digging",
      text: "Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Clay soils and wet seasons",
      text: "The Handbook of Texas places Wylie in the Blackland Prairie, and USDA describes Houston Black, the signature Blackland Prairie soil, as very high in shrink-swell. NWS Fort Worth notes spring and fall are the wettest seasons. Check the geotechnical report before choosing padfoot or smooth-drum rollers.",
      sources: [sources.tshaWylie, sources.usdaHoustonBlack, sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "What are construction hours in Wylie?", answer: "7 a.m. to 9 p.m. Monday through Saturday, with no work on Sundays or the eleven federal holidays. Deliveries are also prohibited outside those hours, and the City issues stop work orders on the spot for violations." },
    { question: "Can I work on a Saturday under a Wylie engineering permit?", answer: "Only with approval. Engineering says Saturday construction requires a permit and a City inspector on site. Email Engineering the preceding Thursday morning and pay the fee by noon Thursday; Saturday work is not guaranteed." },
    { question: "Where do I file engineering and ROW permits in Wylie?", answer: "Online through the City's CitizenServe portal. Construction Permit and Contractor Registration applications for the right-of-way are filed there, registration is good for one year, and the old ROW permit email has been discontinued." },
    { question: "What equipment suits a new Wylie subdivision?", answer: "Excavators, trenchers, rollers and compact track loaders for early site work, then telehandlers for framing and roofing. Share pad size, soil report and delivery windows with the provider." },
  ],
  nearbyCities: ["allen", "rowlett", "garland", "rockwall", "dallas"],
  heroImage: {
    src: "/images/locations/wylie-tx-construction-equipment-rental.webp",
    alt: "Trencher and compact track loader beside a fresh utility trench in a subdivision with framed houses at golden hour",
  },
  guides: [sitePrepGuide, utilityLocatesGuideLink, shortVsLongGuideLink],
};

export const desoto: CityEntry = {
  name: "DeSoto",
  slug: "desoto",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "DeSoto is twelve miles south of Dallas in southern Dallas County, served by Interstates 35 and 20 and US 67, with Ten Mile Creek running through it.",
  metaDescription:
    "Construction equipment rentals in DeSoto, TX: excavators, loaders, compactors and telehandlers for residential and I-35E corridor work, plus City hours, grading and ROW rules.",
  localIntro: [
    "DeSoto is twelve miles south of Dallas on Interstate highways 35 and 20, US Highway 67 and Ten Mile Creek in southern Dallas County. It is bordered by Lancaster, Glenn Heights, Cedar Hill, Duncanville and Dallas, and the Handbook of Texas describes steady residential, commercial and industrial construction as Dallas expanded south.",
    "The City adopted a new comprehensive plan in February 2024 to guide future land use, transportation and urban design. Use this page to match machines to DeSoto work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Residential neighborhoods, highway commercial sites and industrial and distribution buildings all appear in DeSoto's mix. Larger pads call for excavators, wheel loaders and rollers, while commercial shells and warehouses bring telehandlers, boom lifts and forklifts.",
    "Grading here is closely managed. Before move-in on any new residential, commercial or industrial grading, or on redevelopment of an existing site, the City's Engineering Division reviews grading and drainage plans, an erosion control plan with perimeter control in place, the construction entrance and any traffic control plan.",
    "Right-of-way work comes with detailed conditions: sealed traffic control plans, mechanical compaction with test reports, daily street sweeping and temporary security fencing around open excavations at the end of each day. Plan compactors and fencing into the rental list.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Pad grading, detention and utility work on residential and industrial sites." },
    { slug: "wheel-loader-rental", reason: "Stockpile handling and truck loading on larger graded pads." },
    { slug: "compactor-rental", reason: "Mechanical compaction of every excavation in City right-of-way, plus pads and subgrade." },
    { slug: "telehandler-rental", reason: "Material placement on commercial shells and residential framing." },
    { slug: "forklift-rental", reason: "Unloading and staging on paved commercial and distribution sites." },
    { slug: "skid-steer-rental", reason: "Cleanup behind excavation crews, sod and topsoil restoration, and daily street cleaning." },
  ],
  siteConsiderations: [
    {
      title: "Construction hours and Sunday heavy equipment",
      text: "City Building Inspections lists construction hours of 7 a.m. to 6 p.m. Monday through Friday, 8 a.m. to 6 p.m. Saturday and 9 a.m. to 5 p.m. Sunday, with no heavy equipment on Sundays without written consent. The grading permit cites Chapter 8, Section 8.402 for the same hours. Plan Sunday work for hand crews and quiet tasks.",
      sources: [sources.desotoBuilding, sources.desotoGradingPermit],
    },
    {
      title: "Grading permit requirements",
      text: "Before grading or excavation starts, Engineering reviews grading and drainage plans, an erosion control plan with perimeter control in place, construction entrance design and any traffic control plan. A tree survey approved by the Planning and Zoning Commission may be required. Streets, alleys and neighboring property must be kept free of mud and spoil.",
      sources: [sources.desotoGradingPermit],
    },
    {
      title: "ROW permit conditions",
      text: "A ROW permit must be approved before work starts, with plans and a traffic control plan sealed by a Texas professional engineer. Excavations in City right-of-way require mechanical compaction with test reports, streets must be swept at the end of each working day, and open excavations need temporary security fencing overnight. Contractors must notify residents in the construction area 24 hours ahead.",
      sources: [sources.desotoRowApplication, sources.desotoRow],
    },
    {
      title: "City line locates and 811",
      text: "The ROW application requires 48 hours' notice for City line locates of water and sewer and of signs and signals, with all locates complete before the project starts. The permit does not relieve the contractor of contacting the one-call system and other utility owners. Texas law requires notice at least 48 hours before excavating, excluding weekends and holidays.",
      sources: [sources.desotoRowApplication, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Stormwater on larger sites",
      text: "ROW permits require erosion controls under NCTCOG stormwater practices. Sites disturbing one acre or more that discharge to surface waters generally also need TCEQ construction general permit coverage and a stormwater pollution prevention plan.",
      sources: [sources.desotoRowApplication, sources.tceqConstructionStormwater],
    },
    {
      title: "Clay soils and storms",
      text: "USDA's Houston Black description covers Blackland Prairie soils from north of Dallas to San Antonio, with very high shrink-swell. NWS Fort Worth notes spring and fall are the wettest seasons; open pads lose grading days after storms.",
      sources: [sources.usdaHoustonBlack, sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "Can I run heavy equipment on a Sunday in DeSoto?", answer: "Not without written consent. City Building Inspections lists Sunday hours of 9 a.m. to 5 p.m. with no heavy equipment unless approved. Weekday hours are 7 a.m. to 6 p.m. and Saturday hours are 8 a.m. to 6 p.m." },
    { question: "What does DeSoto require before grading starts?", answer: "Engineering reviews grading and drainage plans, an erosion control plan with perimeter control in place, the construction entrance and any traffic control plan before move-in. A tree survey may also be required." },
    { question: "What compaction is required in DeSoto right-of-way?", answer: "The ROW permit conditions require mechanical compaction of all excavation in City right-of-way, with compaction test reports submitted to the Construction Management Division." },
    { question: "How much notice does DeSoto need for City line locates?", answer: "The ROW application asks for 48 hours' notice for City water, sewer and sign or signal locates, with all locates complete before the project starts. You still need to contact the one-call system separately." },
  ],
  nearbyCities: ["grand-prairie", "mansfield", "cedar-hill", "dallas"],
  heroImage: {
    src: "/images/locations/desoto-tx-construction-equipment-rental.webp",
    alt: "Excavator loading a dump truck and wheel loader on a graded pad, concrete tilt-wall panels behind",
  },
  guides: [sitePrepGuide, utilityLocatesGuideLink, telehandlerForkliftGuideLink],
};

export const grapevine: CityEntry = {
  name: "Grapevine",
  slug: "grapevine",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Grapevine is in the northeast corner of Tarrant County on State Highways 114 and 121, between Grapevine Lake and DFW International Airport.",
  metaDescription:
    "Construction equipment rentals in Grapevine, TX: mini excavators, compactors, lifts and telehandlers, plus the City's ROW rules, festival no-work weeks and airport limits.",
  localIntro: [
    "Grapevine sits on State Highways 114 and 121 in the northeast corner of Tarrant County, with small sections in Dallas and Denton counties. The Handbook of Texas places it on the edge of the Grapevine Prairie and the Eastern Cross Timbers, with Grapevine Lake extending north into Denton County and a sizable part of DFW International Airport inside the city limits.",
    "Hospitality, retail and a historic Main Street sit alongside older neighborhoods, so much of the work here is utility, infill and commercial building work around sites that are already busy. Use this page to match machines to Grapevine work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Utility and right-of-way work runs on a calendar unlike most DFW cities. The City's right-of-way notes stop work from noon Tuesday through Sunday during the weeks of Main Street Fest and GrapeFest, around Thanksgiving, and on most days between Dec. 22 and Jan. 1. Book mini excavators, compactors and traffic control around those blackout weeks, not through them.",
    "Under pavement, the City requires directional boring rather than open cuts unless approved in advance, and City water, wastewater, drainage and telecom lines in the project area have to be potholed at 100-foot intervals and at each crossing. Compact excavators and backfill compaction equipment do the open work at bore pits, service connections and potholes.",
    "Commercial and hospitality buildings near the airport and the lake bring boom lifts, telehandlers and scissor lifts. Because DFW Airport lies partly inside the city, tall equipment near the airport needs a Part 77 check before it goes up.",
  ],
  featuredEquipment: [
    { slug: "mini-excavator-rental", reason: "Bore pits, potholing City lines and service connections in established neighborhoods and along Main Street." },
    { slug: "compactor-rental", reason: "Backfill in 12-inch lifts to 95% Standard Proctor under the City's general notes." },
    { slug: "excavator-rental", reason: "Larger utility runs and site work on commercial and hospitality projects." },
    { slug: "boom-lift-rental", reason: "Exterior work on hotels, retail and office buildings around the SH 114/121 corridor." },
    { slug: "telehandler-rental", reason: "Placing materials on commercial and multifamily buildings where cranes aren't practical." },
    { slug: "skid-steer-rental", reason: "Cleanup, restoration and flatwork prep behind utility crews." },
  ],
  siteConsiderations: [
    {
      title: "Right-of-way permits",
      text: "A City permit is required for any work in Grapevine rights-of-way, public easements or other City property. Where City utilities lie inside TxDOT right-of-way, a City permit is required in addition to the TxDOT permit. Complete applications with compliant plans are usually issued within five working days.",
      sources: [sources.grapevineRowFaq],
    },
    {
      title: "Festival, holiday and weekend no-work days",
      text: "For right-of-way work, the City's permitting notes say no work on Saturdays without 48 hours' notice to the Chief Construction Inspector and none on Sundays. No work is done from noon Tuesday through the following Sunday in the weeks of Main Street Fest and GrapeFest, from the Wednesday before Thanksgiving through that weekend, or on Dec. 22–26, Dec. 30–31 and Jan. 1.",
      sources: [sources.grapevineRowNotes],
    },
    {
      title: "Working hours on public improvements",
      text: "The City's general construction notes describe a normal work week of 8 a.m. to 5 p.m., Monday through Friday. The construction inspector overtime policy allows work from 7 a.m. to 7 p.m. Monday through Saturday, with overtime inspection charges outside the normal week. No work is allowed on Sundays.",
      sources: [sources.grapevineGeneralNotes],
    },
    {
      title: "Potholing, boring and pavement",
      text: "Texas811 locates must be complete before work starts. City water, wastewater, drainage and telecom lines in the project area are potholed at 100-foot intervals and at each crossing, with the contractor supplying the potholing equipment. Directional boring is the required method under pavement, missiles are prohibited, and any pavement cut needs a call to the City first; plates are not allowed.",
      sources: [sources.grapevineRowNotes, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Trenches, backfill, trees and floodplain fill",
      text: "Trenches deeper than 5 feet need trench safety plans prepared by a licensed professional engineer before excavation. Embedment and backfill are compacted in 12-inch lifts to 95% Standard Proctor, with density tests every 5 feet of depth and every 100 feet of trench. A tree preservation inspection is requested before work begins, and no filling in the floodplain is allowed without an executed fill agreement.",
      sources: [sources.grapevineGeneralNotes, sources.oshaTrenching],
    },
    {
      title: "Airport airspace",
      text: "FAA notice is required for construction or alteration more than 200 feet above ground, or that exceeds a 100:1 slope within 20,000 feet of a qualifying runway; temporary structures such as cranes are covered. File Form 7460-1 at least 45 days before work when it applies.",
      sources: [sources.tshaGrapevine, sources.faaPart77, sources.faaForm7460],
    },
  ],
  faqs: [
    { question: "Can I work in Grapevine right-of-way during GrapeFest?", answer: "No. The City's right-of-way notes stop work from noon Tuesday through the following Sunday in the weeks when Main Street Fest or GrapeFest is held. Plan deliveries and digging around those weeks." },
    { question: "Can I open-cut a Grapevine street for a utility line?", answer: "Generally not. Directional boring is the required method under pavement, open cuts need advance approval, and any pavement cut requires a call to the City first. Steel plates are not allowed." },
    { question: "Do I need to pothole City lines in Grapevine?", answer: "Yes. City water, wastewater, drainage and telecom lines in the project area are potholed at 100-foot intervals and at every crossing, and each service or lateral is uncovered where it crosses. The contractor provides the potholing equipment." },
    { question: "Is Saturday work allowed in Grapevine?", answer: "For right-of-way work, only with 48 hours' notice to the Chief Construction Inspector. The public-improvement overtime policy allows 7 a.m. to 7 p.m. Monday through Saturday, and there is no Sunday work." },
  ],
  nearbyCities: ["euless", "bedford", "irving", "flower-mound", "dallas"],
  heroImage: {
    src: "/images/locations/grapevine-tx-construction-equipment-rental.webp",
    alt: "Mini excavator trenching along a curb beside a plate compactor and cones on a tree-lined street in Grapevine, Texas",
  },
  guides: [utilityLocatesGuideLink, trenchSafetyGuideLink, rentalChecklistGuideLink],
};

export const bedford: CityEntry = {
  name: "Bedford",
  slug: "bedford",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Bedford is a compact, largely built-up city in northeast Tarrant County, bisected by State Highway 121 between Fort Worth and Grapevine.",
  metaDescription:
    "Construction equipment rentals in Bedford, TX: compact loaders, mini excavators, compactors and lifts for redevelopment and utility work, plus City grading and ROW rules.",
  localIntro: [
    "Bedford is in the northeast quadrant of Tarrant County, north of the West Fork of the Trinity River and bisected by State Highway 121. The Handbook of Texas traces its growth from about two square miles in the mid-1950s to just over ten, with a building boom from the late 1970s through the mid-1980s that brought an industrial park, shopping centers and thousands of homes.",
    "With a land area of about 10 square miles in the 2020 Census, much of the work now is on sites that already have neighbors: utility replacement, small commercial pads and rework of older buildings. Use this page to match machines to Bedford work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Small sites favor compact machines. Compact track loaders, mini excavators and plate compactors fit between existing buildings and parking lots, and Bedford's general construction notes require work to stay inside the designated area, with no encroachment onto neighboring lots without written approval from the owner and the City.",
    "Bedford treats grading strictly. Every soil-disturbing activity needs a grading permit, and the erosion controls in the stormwater plan must be installed and inspected by the City's Stormwater Inspector before construction starts. Silt fence, construction entrances and inlet protection go in before the first bucket of dirt moves.",
    "Right-of-way work comes with traffic rules. Lane closures on major thoroughfares are limited to after 8:30 a.m. and before 4 p.m. unless approved, and no closure may last more than four hours unless the permit allows it, so schedule excavators and compactors to finish within the closure window.",
  ],
  featuredEquipment: [
    { slug: "skid-steer-rental", reason: "Grading, base and cleanup on tight redevelopment pads and parking lots." },
    { slug: "mini-excavator-rental", reason: "Water and sewer service work and footings between existing buildings." },
    { slug: "compactor-rental", reason: "Fill under pavement in 6-inch lifts and ROW backfill to 95% Standard Proctor." },
    { slug: "scissor-lift-rental", reason: "Interior and storefront work when older retail and office buildings are reworked." },
    { slug: "boom-lift-rental", reason: "Facade, sign-band and roofline work on existing commercial buildings." },
    { slug: "generator-rental", reason: "Temporary power on redevelopment sites before permanent service is connected." },
  ],
  siteConsiderations: [
    {
      title: "Grading permit and stormwater controls",
      text: "Within Bedford, all soil-disturbing activities require a grading permit. Before the permit is issued, the contractor provides the TCEQ Construction Site Notice or Notice of Intent and a site-specific erosion control plan or SWPPP, and no grading starts until those controls are installed and inspected by the City's Stormwater Inspector.",
      sources: [sources.bedfordGeneralNotes, sources.bedfordPermits, sources.tceqConstructionStormwater],
    },
    {
      title: "Floodplain work and spoil disposal",
      text: "Activities inside a 100-year floodplain need a floodplain permit or a documented waiver from the local floodplain administrator before construction. Off-site disposal areas for spoil need written verification that they lie outside the FEMA 100-year floodplain, included with the SWPPP.",
      sources: [sources.bedfordGeneralNotes],
    },
    {
      title: "Right-of-way permits and lane closures",
      text: "Requests for a right-of-way permit are due at least ten working days before work, unless waived. Erosion controls and warning devices go in before work begins, lane closures on major thoroughfares run after 8:30 a.m. and before 4 p.m. unless approved, and closures may not last longer than four hours unless the permit says otherwise.",
      sources: [sources.bedfordRowOrdinance],
    },
    {
      title: "Notice, locates and Saturday work",
      text: "Bedford's general notes ask for at least 48 hours' notice to Public Works-Engineering before work begins in public right-of-way, and Texas811 and affected utilities must verify field locations before excavation, with locates kept current. Saturday work requires advance written notice to the Engineering Inspector, and work on City-observed holidays needs express approval.",
      sources: [sources.bedfordGeneralNotes, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Compaction and trench safety",
      text: "Fill beneath pavement is compacted to 95% of Standard Proctor in lifts no thicker than 6 inches unless the geotechnical report says otherwise, and service-line backfill in right-of-way also reaches 95%. Water, sewer and storm work requires a trench safety plan submitted to the Engineering Inspector before the pre-construction meeting.",
      sources: [sources.bedfordGeneralNotes, sources.oshaTrenching],
    },
    {
      title: "Clay and storms",
      text: "USDA describes Houston Black, the signature Blackland Prairie soil found from north of Dallas to San Antonio, as very high in shrink-swell. NWS Fort Worth notes spring and fall are the wettest seasons, which is when open pads and trenches lose the most days.",
      sources: [sources.usdaHoustonBlack, sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "Do I need a grading permit for a small job in Bedford?", answer: "Bedford's general construction notes say all soil-disturbing activities within the City require a grading permit, with erosion controls installed and inspected by the City's Stormwater Inspector before construction." },
    { question: "How long can a lane be closed in Bedford?", answer: "No more than four hours unless the permit allows a different period. Closures on major thoroughfares are limited to after 8:30 a.m. and before 4 p.m. unless the City approves otherwise." },
    { question: "How far ahead should I apply for a Bedford ROW permit?", answer: "At least ten working days before the work starts, unless the City waives it. Give Public Works-Engineering at least 48 hours' notice before starting work in the right-of-way." },
    { question: "What compaction does Bedford require under pavement?", answer: "95% of Standard Proctor density in lifts no thicker than 6 inches, unless the approved geotechnical report recommends otherwise." },
  ],
  nearbyCities: ["euless", "north-richland-hills", "grapevine", "fort-worth", "dallas"],
  heroImage: {
    src: "/images/locations/bedford-tx-construction-equipment-rental.webp",
    alt: "Compact track loader spreading gravel base inside silt fence beside an older brick commercial building in Bedford, Texas",
  },
  guides: [sitePrepGuide, compactGuide, generatorGuideLink],
};

export const cedarHill: CityEntry = {
  name: "Cedar Hill",
  slug: "cedar-hill",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Cedar Hill is in the rolling hills of southwestern Dallas County on US 67, at the northern edge of the Balcones Escarpment beside Joe Pool Lake.",
  metaDescription:
    "Construction equipment rentals in Cedar Hill, TX: excavators, track loaders and compactors for hillside and residential work, plus City ROW conditions and site rules.",
  localIntro: [
    "Cedar Hill is on US Highway 67 in the rolling hills of southwestern Dallas County, two miles north of the Ellis County line. The City describes it as sitting at the northern edge of the Balcones Escarpment, where rugged limestone bluffs meet the soils of the Blackland Prairie, with the highest elevation in Dallas County.",
    "Joe Pool Lake, shared with Dallas, Grand Prairie, Mansfield and Midlothian, borders the city, and the City Council has set a goal of preserving 25% of land in Cedar Hill as open space. Use this page to match machines to Cedar Hill work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Terrain sets the equipment list. Lots near the escarpment can mean slopes, limestone and shallow rock instead of the deep clay found elsewhere in the county, so excavators sized for rock, compact track loaders for grip on slopes, and plans for spoil handling matter more than on flat prairie sites.",
    "Utility and right-of-way work often happens beside occupied homes. The City's permit conditions require restoring sod, sprinklers and property pins, sweeping streets daily and fencing excavations every night, which keeps skid steers and compactors on the list after the digging is done.",
    "Open space and preserves shape where sites sit. With large preserves and the lake nearby, expect erosion controls along creeks and slopes and plan staging so equipment stays off protected land.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Cuts on sloped lots and utility work where limestone sits close to the surface." },
    { slug: "skid-steer-rental", reason: "Compact track loaders for grading on slopes, restoration and daily cleanup behind crews." },
    { slug: "mini-excavator-rental", reason: "Service connections and trenching beside occupied homes." },
    { slug: "compactor-rental", reason: "Mechanical compaction of every excavation in City right-of-way, with test reports." },
    { slug: "wheel-loader-rental", reason: "Moving rock and spoil and loading trucks on larger graded sites." },
    { slug: "trencher-rental", reason: "Long, narrow runs for irrigation and small utilities in softer soils." },
  ],
  siteConsiderations: [
    {
      title: "ROW work hours",
      text: "Cedar Hill's right-of-way permit conditions set hours of work from 7 a.m. to 4 p.m., Monday through Friday, with no work on holidays. Contractors must comply with the City's Right-of-Way Management Ordinance No. 2001-54.",
      sources: [sources.cedarHillPreCon],
    },
    {
      title: "City line locates",
      text: "ROW permits trigger City line locates, and the permit packet asks for 48 hours' notice. Contractors must confirm that City-owned facilities are located, marked and identified before starting and every 10 days during construction. Texas law separately requires one-call notice at least 48 hours before excavating, excluding weekends and holidays.",
      sources: [sources.cedarHillPreCon, sources.cedarHillForms, sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Traffic control and street cuts",
      text: "ROW plans must include a traffic control plan signed and sealed by a licensed Texas professional engineer, and work areas follow MUTCD traffic control. The City's pre-construction packet states that open cutting of public streets is prohibited.",
      sources: [sources.cedarHillPreCon],
    },
    {
      title: "Compaction, fencing and cleanup",
      text: "All excavation within City right-of-way requires mechanical compaction, with compaction test reports turned in to Public Works. At the end of each work day the contractor puts a temporary security fence around every excavation, sweeps the street, and keeps cleanup within 5 feet behind the excavation crew.",
      sources: [sources.cedarHillPreCon],
    },
    {
      title: "Erosion control and restoration",
      text: "Contractors install and maintain erosion controls under the City's stormwater specifications and NCTCOG practices. Disturbed areas get 4 inches of topsoil with erosion matting and seed or hydromulch, sodded yards are re-sodded, and sprinklers and property pins are restored. Sites disturbing an acre or more generally also need TCEQ construction stormwater coverage.",
      sources: [sources.cedarHillPreCon, sources.tceqConstructionStormwater],
    },
    {
      title: "Escarpment terrain and storms",
      text: "The City notes limestone bluffs bordering Blackland Prairie soils, which USDA describes as very high in shrink-swell. NWS Fort Worth notes spring and fall are the wettest seasons; slopes and creek crossings need erosion controls in place before storms.",
      sources: [sources.cedarHillNature, sources.usdaHoustonBlack, sources.nwsDfwClimate],
    },
  ],
  faqs: [
    { question: "What are ROW work hours in Cedar Hill?", answer: "The City's right-of-way permit conditions allow work from 7 a.m. to 4 p.m., Monday through Friday, with no work on holidays." },
    { question: "Can I open-cut a street in Cedar Hill?", answer: "The City's pre-construction packet says open cutting of public streets is prohibited. Plan to bore under pavement and confirm the method with Public Works." },
    { question: "What has to happen at the end of each day on a Cedar Hill ROW job?", answer: "Sweep the street, keep cleanup close behind the excavation crew, and put a temporary security fence around every open excavation with the contractor's contact information posted." },
    { question: "Why does terrain matter for equipment in Cedar Hill?", answer: "The City sits at the northern edge of the Balcones Escarpment, with limestone bluffs and the highest elevation in Dallas County. Slopes and rock can call for tracked loaders and excavators sized for harder digging." },
  ],
  nearbyCities: ["desoto", "grand-prairie", "mansfield", "dallas"],
  heroImage: {
    src: "/images/locations/cedar-hill-tx-construction-equipment-rental.webp",
    alt: "Excavator cutting limestone and clay on a hillside lot beside a compact track loader in wooded hills in Cedar Hill, Texas",
  },
  guides: [excavatorSizeGuide, sitePrepGuide, trenchSafetyGuideLink],
};

export const burleson: CityEntry = {
  name: "Burleson",
  slug: "burleson",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Burleson is on Interstate 35W fourteen miles south of Fort Worth, in northern Johnson and southern Tarrant counties.",
  metaDescription:
    "Construction equipment rentals in Burleson, TX: excavators, trenchers, rollers and loaders for subdivision and corridor growth, plus City ROW, grading and floodplain rules.",
  localIntro: [
    "Burleson is on Interstate 35W, US 81 and State Highway 174, fourteen miles south of Fort Worth in northern Johnson and southern Tarrant counties, with Shannon and Village creeks running through it. The Handbook of Texas describes its turn from farm town to Fort Worth suburb after 1950.",
    "New ground on the west side is a big part of today's work. The City describes Chisholm Summit, its first master-planned community, as expected to hold about 3,066 homes at build-out, with roads, sewer and lift stations built by the developer and direct access to Chisholm Trail Parkway. Use this page to match machines to Burleson work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Master-planned and subdivision work runs in phases: clearing and mass grading, then water, sewer and storm lines, then street subgrade and paving, then houses. Excavators, trenchers, rollers and wheel loaders carry the early phases, and telehandlers and skid steers take over as homes go up.",
    "Utility service on the west side is split among providers. The City notes Chisholm Summit's water comes from Johnson County Special Utility District, sewer from the City and electricity from United Cooperative, so locates and coordination involve more than one owner.",
    "Grading and floodplain paperwork comes first. Development Engineering publishes an Early Grading Notification, a Floodplain Development Permit, a letter of permission for grading or concentrating flow onto a neighbor, and separate SWPPP checklists for large and small sites.",
  ],
  featuredEquipment: [
    { slug: "excavator-rental", reason: "Mass grading, detention and sewer and water lines on new subdivision phases." },
    { slug: "trencher-rental", reason: "Long, shallow runs for conduit and irrigation across new phases." },
    { slug: "compactor-rental", reason: "Street subgrade, building pads and trench backfill on prairie clay." },
    { slug: "wheel-loader-rental", reason: "Stockpiles, pipe bedding and truck loading on large graded sites." },
    { slug: "skid-steer-rental", reason: "Lot grading, flatwork prep and right-of-way restoration." },
    { slug: "telehandler-rental", reason: "Framing, roofing and masonry materials once homes and commercial buildings go vertical." },
  ],
  siteConsiderations: [
    {
      title: "ROW permits and locate requests",
      text: "A right-of-way permit is required to disturb, excavate, block or place materials in a City road, right-of-way or easement. The City's online application doubles as a locate request, and contractors must call the ROW Inspector at least 48 hours before construction begins.",
      sources: [sources.burlesonRow, sources.burlesonRowApplication],
    },
    {
      title: "Construction hours near homes",
      text: "Burleson's noise ordinance prohibits construction noise within 300 feet of an occupied home before 7 a.m. or after 8 p.m. Monday through Friday, and before 9 a.m. or after 8 p.m. on Saturday and Sunday, unless the city manager or a designee authorizes other hours for a site-specific need.",
      sources: [sources.burlesonNoise],
    },
    {
      title: "No street cuts; restore what you disturb",
      text: "The application's special conditions state that street cuts are not permitted. Contractors are liable for damage to public infrastructure, including sidewalks and ramps, and must restore grass, driveways, fences and other amenities to as good or better condition. Lane closures need a site-specific traffic control plan with the application.",
      sources: [sources.burlesonRowApplication],
    },
    {
      title: "Grading, floodplain and stormwater forms",
      text: "Development Engineering publishes an Early Grading Notification, a Floodplain Development Permit, a Letter of Permission for Grading or Concentration of Flow, a Storm Water Management Site Plan checklist and SWPPP checklists for large and small sites. Sites disturbing an acre or more generally also need TCEQ construction general permit coverage.",
      sources: [sources.burlesonForms, sources.tceqConstructionStormwater],
    },
    {
      title: "TxDOT corridors",
      text: "Work along state highways such as I-35W involves TxDOT. The City's Development Engineering forms page links TxDOT business forms and a TxDOT utility permit questionnaire.",
      sources: [sources.burlesonForms, sources.tshaBurleson],
    },
    {
      title: "Call 811 before digging",
      text: "Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays, in addition to the City's own locate request.",
      sources: [sources.utilitiesCode251, sources.texas811],
    },
    {
      title: "Trenches on new phases",
      text: "Sewer and storm lines on subdivision phases often run deep. OSHA requires a protective system for trenches 5 feet deep or more unless they are entirely in stable rock, with spoil kept at least 2 feet from the edge and daily competent-person inspections.",
      sources: [sources.oshaTrenching],
    },
  ],
  faqs: [
    { question: "Do I need a permit to work in a Burleson easement?", answer: "Yes. The City requires a right-of-way permit to disturb, excavate, block or place materials in a City road, right-of-way or easement. The same application serves as the locate request." },
    { question: "Are street cuts allowed in Burleson?", answer: "The ROW application's special conditions say street cuts are not permitted. Plan to bore under pavement and restore anything disturbed." },
    { question: "What forms come before grading in Burleson?", answer: "Development Engineering lists an Early Grading Notification, a Floodplain Development Permit where it applies, a letter of permission for grading or concentrating flow onto neighboring property, and SWPPP checklists for large and small sites." },
    { question: "What equipment fits a new Burleson subdivision?", answer: "Excavators, trenchers, rollers and wheel loaders for grading and utilities, then telehandlers and skid steers as houses go up. Share phase size, soil report and access with the provider." },
  ],
  nearbyCities: ["fort-worth", "mansfield", "dallas"],
  heroImage: {
    src: "/images/locations/burleson-tx-construction-equipment-rental.webp",
    alt: "Excavator setting sewer pipe in a trench box beside a smooth-drum roller on a new subdivision street in Burleson, Texas",
  },
  guides: [sitePrepGuide, trenchSafetyGuideLink, utilityLocatesGuideLink],
};

export const rockwall: CityEntry = {
  name: "Rockwall",
  slug: "rockwall",
  region: "the Dallas–Fort Worth area",
  shortDescription:
    "Rockwall is the county seat of Rockwall County, at State Highways 66 and 205 on the eastern shore of Lake Ray Hubbard.",
  metaDescription:
    "Construction equipment rentals in Rockwall, TX: rollers, loaders, excavators and lifts for lakeside and growth-area work, plus City work hours, fill permits and takeline rules.",
  localIntro: [
    "Rockwall is the county seat of Rockwall County, at the intersection of State Highways 66 and 205 near the shores of Lake Ray Hubbard. The Handbook of Texas notes that growth sped up in the 1970s and 1980s, driven by jobs in Dallas and the construction of Lake Ray Hubbard.",
    "Lakefront lots, residential subdivisions and commercial sites all bring equipment rentals here. Use this page to match machines to Rockwall work, then confirm availability, delivery and terms with providers that serve your site.",
  ],
  useCaseContext: [
    "Rockwall manages dirt closely. Bringing in fill requires a Fill Material Request with an engineer's grading plan, staked limits, silt fence and compaction to 95% density with a sheepsfoot roller in 8- to 12-inch lifts, verified by a certified lab. Padfoot rollers, loaders and skid steers are the core of most fill jobs here.",
    "Work hours cover more than the noise of digging. The City's construction-hours ordinance includes maintenance, servicing and fueling of equipment and the delivery of materials and equipment, so rental drop-offs and refueling have to land inside the same window as the work.",
    "Along the lake, the City's Takeline Overlay governs development of property along the Lake Ray Hubbard shoreline. Seawalls, docks and other improvements there need a takeline lease and separate permits before equipment arrives.",
  ],
  featuredEquipment: [
    { slug: "compactor-rental", reason: "Sheepsfoot or padfoot rollers for fill placed in 8- to 12-inch lifts to 95% density." },
    { slug: "skid-steer-rental", reason: "Spreading fill, building stockpile slopes and finish grading on residential lots." },
    { slug: "wheel-loader-rental", reason: "Moving stockpiles and loading trucks on larger fill and grading jobs." },
    { slug: "excavator-rental", reason: "Utilities, detention and site grading on new subdivisions and commercial pads." },
    { slug: "telehandler-rental", reason: "Framing and roofing materials on homes and commercial buildings." },
    { slug: "boom-lift-rental", reason: "Exterior work on commercial buildings and lakeside structures." },
  ],
  siteConsiderations: [
    {
      title: "Construction hours, deliveries and fueling",
      text: "Ordinance 05-45 limits construction and construction-related activity to 7 a.m.–7 p.m. Monday through Friday and 8 a.m.–7 p.m. Saturday, with no Sunday construction. The limit covers maintenance, servicing and fueling of construction equipment and the delivery of materials and equipment. The City requires a posted hours sign on commercial and residential development sites and may issue stop-work orders or citations.",
      sources: [sources.rockwallConstructionNotes],
    },
    {
      title: "Saturday and after-hours inspections",
      text: "Saturday Engineering inspections must be requested in writing by noon on the Thursday before, using the City's Saturday request form, and before- or after-hours inspections are billed to the contractor. Build those deadlines into delivery plans for weekend work.",
      sources: [sources.rockwallConstructionNotes, sources.rockwallEngineering],
    },
    {
      title: "Fill material permits",
      text: "Permanent fill needs an engineer's grading plan showing existing and proposed topography, creeks, floodplains and trees; limits staked in the field; silt fence around the fill; and no fill in drainage ways, floodplains or wetlands. Slopes are limited to 3:1, grass must be established within 21 days, and contractors delivering material must sign the permit and carry a copy.",
      sources: [sources.rockwallFill],
    },
    {
      title: "Temporary stockpiles",
      text: "A temporary stockpile may stay up to six months and needs a dimension control plan and a grading or removal schedule approved before it goes in. Material may not be spread without City approval, and if it becomes permanent fill it is respread and compacted to the same standard.",
      sources: [sources.rockwallFill],
    },
    {
      title: "Lake Ray Hubbard takeline",
      text: "The Takeline Overlay district governs development along the Lake Ray Hubbard shoreline. Property owners need a takeline lease from Building Inspections before applying for permits, and a seawall permit from Engineering, with a sealed structural design, comes before any boat-related structure.",
      sources: [sources.rockwallTakeline, sources.tshaRockwall],
    },
    {
      title: "ROW permits and 811",
      text: "Engineering permits for work in City right-of-way are filed through the City's online portal, one permit per work address, with plans uploaded; work in TxDOT right-of-way also needs TxDOT documents. Texas law requires one-call notice at least 48 hours before excavating, excluding weekends and holidays.",
      sources: [sources.rockwallEngineering, sources.utilitiesCode251, sources.texas811],
    },
  ],
  faqs: [
    { question: "What are construction hours in Rockwall?", answer: "7 a.m. to 7 p.m. Monday through Friday and 8 a.m. to 7 p.m. Saturday, with no Sunday construction under Ordinance 05-45. The hours also apply to equipment fueling and servicing and to deliveries." },
    { question: "Do I need a permit to bring fill dirt to a Rockwall lot?", answer: "Yes. Rockwall's Fill Material Request requires an engineer's grading plan, staked limits, silt fence, 3:1 maximum slopes and compaction to 95% density in 8- to 12-inch lifts. Haulers must sign the permit and carry a copy." },
    { question: "Can I deliver a rental on Saturday in Rockwall?", answer: "Deliveries fall under the same hours as the work: 8 a.m. to 7 p.m. on Saturday. If the job needs a City Engineering inspection that day, request it in writing by noon Thursday." },
    { question: "What do I need before building a seawall on Lake Ray Hubbard in Rockwall?", answer: "A takeline lease from Building Inspections, then a seawall permit from the Engineering Department with a sealed structural design before any boat-related structure is permitted." },
  ],
  nearbyCities: ["rowlett", "garland", "wylie", "dallas"],
  heroImage: {
    src: "/images/locations/rockwall-tx-construction-equipment-rental.webp",
    alt: "Padfoot roller and skid steer compacting a fenced fill pad on a lakeside lot in Rockwall, Texas",
  },
  guides: [sitePrepGuide, compactGuide, generatorGuideLink],
};
