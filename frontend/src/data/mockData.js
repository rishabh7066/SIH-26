// Mock data engine for GramVenture AI (SIH 26091)
export const LOCATIONS = [
  {
    state: "Uttar Pradesh",
    district: "Varanasi",
    block: "Sewapuri",
    villages: [
      { name: "Adampur", pop: 3420, households: 480, agro: "Sugarcane, Wheat, Dairy", marketDistKm: 4.2 },
      { name: "Baraki", pop: 2890, households: 390, agro: "Paddy, Vegetables", marketDistKm: 6.5 },
      { name: "Kapsethi", pop: 5120, households: 710, agro: "Dairy, Vegetables, Poultry", marketDistKm: 2.1 }
    ]
  },
  {
    state: "Bihar",
    district: "Muzaffarpur",
    block: "Kanti",
    villages: [
      { name: "Damodarpur", pop: 4100, households: 580, agro: "Litchi, Maize, Dairy", marketDistKm: 3.5 },
      { name: "Kothia", pop: 2750, households: 360, agro: "Fisheries, Paddy", marketDistKm: 5.0 }
    ]
  },
  {
    state: "Maharashtra",
    district: "Nashik",
    block: "Niphad",
    villages: [
      { name: "Pimpalgaon", pop: 6200, households: 920, agro: "Onion, Grapes, Food Processing", marketDistKm: 1.8 },
      { name: "Ranwad", pop: 3100, households: 430, agro: "Tomato, Dairy", marketDistKm: 4.0 }
    ]
  },
  {
    state: "Rajasthan",
    district: "Alwar",
    block: "Thanagazi",
    villages: [
      { name: "Ajabgarh", pop: 2980, households: 410, agro: "Mustard, Bajra, Handicrafts", marketDistKm: 7.2 },
      { name: "Bhangarh", pop: 1850, households: 270, agro: "Dairy, Tourism crafts", marketDistKm: 8.5 }
    ]
  }
];

export const BUSINESS_CATEGORIES = [
  { id: "dairy", name: "Dairy & Milk Products", icon: "Milk", viabilityBase: 78, roiMonths: 14, minCap: 75000, demandHigh: "Festival season, Daily morning" },
  { id: "poultry", name: "Poultry Farming (Broiler/Desi)", icon: "Egg", viabilityBase: 74, roiMonths: 12, minCap: 60000, demandHigh: "Year-round, Weekend spikes" },
  { id: "food_proc", name: "Spices & Food Processing Unit", icon: "Wheat", viabilityBase: 82, roiMonths: 16, minCap: 90000, demandHigh: "Post-harvest & winter" },
  { id: "tailoring", name: "Garment & Tailoring Boutique", icon: "Scissors", viabilityBase: 71, roiMonths: 10, minCap: 40000, demandHigh: "Wedding & Festive months" },
  { id: "agro_retail", name: "Agri-Input & Organic Fertilizer Shop", icon: "Sprout", viabilityBase: 79, roiMonths: 18, minCap: 120000, demandHigh: "Kharif & Rabi sowing" },
  { id: "solar_pump", name: "Solar Pump & Electric Motor Repair", icon: "Wrench", viabilityBase: 84, roiMonths: 8, minCap: 50000, demandHigh: "Summer & Irrigation cycle" }
];

export const SCHEMES = [
  {
    id: "pmmy_kishore",
    name: "Pradhan Mantri Mudra Yojana (PMMY) - Kishore",
    maxLoan: 500000,
    interestRate: 8.5,
    subsidy: "Nil (Collateral Free)",
    tenureYears: 5,
    moratoriumMonths: 6,
    bestFor: "Working capital + small equipment purchase"
  },
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation (PMEGP)",
    maxLoan: 2500000,
    interestRate: 9.0,
    subsidy: "25% - 35% Margin Money Subsidy for Rural Areas",
    tenureYears: 7,
    moratoriumMonths: 6,
    bestFor: "Manufacturing & processing units with capital grant"
  },
  {
    id: "kcc_dairy",
    name: "Kisan Credit Card (KCC) - Animal Husbandry",
    maxLoan: 200000,
    interestRate: 7.0,
    subsidy: "3% Interest Subvention on Prompt Repayment (Eff. 4%)",
    tenureYears: 3,
    moratoriumMonths: 3,
    bestFor: "Working capital for dairy cows/buffaloes & feed"
  }
];

export const COMPETITORS_MOCK = [
  { id: 1, name: "Shree Ram Milk Collection", distKm: 1.2, type: "Raw Milk Depot", pricePerLtr: "₹48/L", saturation: "High", latOffset: 0.012, lngOffset: 0.008 },
  { id: 2, name: "Kisan Dudh Dairy", distKm: 3.4, type: "Traditional Shop", pricePerLtr: "₹50/L", saturation: "Medium", latOffset: -0.015, lngOffset: 0.014 },
  { id: 3, name: "Yadav Milk Vendor", distKm: 4.8, type: "Door-to-door cycle", pricePerLtr: "₹46/L", saturation: "High", latOffset: 0.022, lngOffset: -0.011 },
  { id: 4, name: "Saras Milk Agency", distKm: 7.1, type: "Chilling Point", pricePerLtr: "₹52/L", saturation: "Low", latOffset: -0.03, lngOffset: -0.02 }
];

export const OPPORTUNITY_Gaps = [
  {
    id: "gap_1",
    title: "Chilled Milk Home Delivery + Daily Paneer & Curd Subscription",
    score: 89,
    category: "High Margin Value-Addition",
    description: "15 traditional milk vendors exist in 10 km, but ZERO organized morning delivery or fresh paneer subscription exists for 650+ teacher & govt employee households.",
    addressableDemand: "₹1,45,000 / mo",
    recommendedPricing: "₹58/L packaged + ₹340/kg fresh Paneer",
    badge: "Top AI Recommendation"
  },
  {
    id: "gap_2",
    title: "Direct B2B Supply to Local Sweet Shops & Dhabas (Highway 19)",
    score: 83,
    category: "Bulk Institutional Supply",
    description: "3 dhabas within 4 km currently travel 14 km to block headquarters daily for 120 liters of milk. Opportunity to establish guaranteed bulk contract.",
    addressableDemand: "₹1,80,000 / mo",
    recommendedPricing: "₹49/L bulk contract with 15-day credit",
    badge: "Stable Cashflow"
  },
  {
    id: "gap_3",
    title: "Organic Cow Dung Vermicompost & Biogas By-product",
    score: 76,
    category: "Circular Agri-Waste",
    description: "Nearby vegetable farmers pay high shipping for bagged vermicompost from district center. Zero local processing creates a high-margin secondary revenue.",
    addressableDemand: "₹38,000 / mo",
    recommendedPricing: "₹12/kg packaged vermicompost",
    badge: "Eco-Bonus"
  }
];

export const SEASONAL_DATA = [
  { month: "Jan", demand: 85, note: "High winter dairy consumption & weddings" },
  { month: "Feb", demand: 80, note: "Steady domestic demand" },
  { month: "Mar", demand: 70, note: "Holi festival peak milk/khoya demand" },
  { month: "Apr", demand: 55, note: "Early summer dry fodder transition" },
  { month: "May", demand: 45, note: "Peak heat, lower milk yield; prepare water reserves" },
  { month: "Jun", demand: 50, note: "Monsoon onset, humidity care needed" },
  { month: "Jul", demand: 65, note: "Green fodder abundant, lactation increases" },
  { month: "Aug", demand: 75, note: "Raksha Bandhan & Janmashtami sweet demand" },
  { month: "Sep", demand: 80, note: "Navratri & festive season onset" },
  { month: "Oct", demand: 95, note: "Diwali, Dussehra - Peak annual dairy margin" },
  { month: "Nov", demand: 90, note: "Wedding season surge" },
  { month: "Dec", demand: 92, note: "Winter peak consumption" }
];

export const DIGITAL_TWIN_BASE = {
  conservative: {
    monthlyRevenue: 124000,
    monthlyOpex: 89000,
    netProfit: 35000,
    emiPayment: 15400,
    netSurplus: 19600,
    dscr: 1.45,
    breakEvenUnits: "2,100 Litres/mo"
  },
  expected: {
    monthlyRevenue: 182000,
    monthlyOpex: 114000,
    netProfit: 68000,
    emiPayment: 15400,
    netSurplus: 52600,
    dscr: 2.15,
    breakEvenUnits: "1,850 Litres/mo"
  },
  optimistic: {
    monthlyRevenue: 245000,
    monthlyOpex: 138000,
    netProfit: 107000,
    emiPayment: 15400,
    netSurplus: 91600,
    dscr: 3.4,
    breakEvenUnits: "1,600 Litres/mo"
  }
};

// ==========================================
// 15 NEW FEATURES DATASETS (docs/New_Features.md)
// ==========================================

// 1 & 4. Budget Business Planner & Finder presets
export const BUDGET_PLANS = [
  {
    tier: 25000,
    label: "₹25,000",
    labelHi: "₹25,000 तक (अल्प पूँजी)",
    businesses: [
      {
        id: "mobile_recharge_csc",
        nameHi: "डिजिटल सेवा व मोबाइल रिचार्ज केंद्र",
        nameEn: "Digital CSC & Mobile Point",
        capex: 22000,
        opex: 4500,
        expectedRev: 21000,
        expectedProfit: 16500,
        breakEvenMonths: 2,
        risk: "Low",
        demandScore: 88,
        compScore: 65,
        oppScore: 84,
        bestFor: "Tech-savvy youth, low space required"
      },
      {
        id: "spices_packaging",
        nameHi: "घरेलू मसाला पिसाई व मिनी पैकेजिंग",
        nameEn: "Home Spice Grinding & Micro-Packaging",
        capex: 24000,
        opex: 8000,
        expectedRev: 28000,
        expectedProfit: 20000,
        breakEvenMonths: 3,
        risk: "Low",
        demandScore: 91,
        compScore: 50,
        oppScore: 87,
        bestFor: "Women SHG, local kitchen demand"
      }
    ]
  },
  {
    tier: 50000,
    label: "₹50,000",
    labelHi: "₹50,000 तक (मध्यम पूँजी)",
    businesses: [
      {
        id: "tailoring_boutique",
        nameHi: "आधुनिक सिलाई व रेडीमेड गारमेंट केंद्र",
        nameEn: "Modern Tailoring & Garment Boutique",
        capex: 48000,
        opex: 12000,
        expectedRev: 45000,
        expectedProfit: 33000,
        breakEvenMonths: 3.5,
        risk: "Low",
        demandScore: 85,
        compScore: 55,
        oppScore: 82,
        bestFor: "High wedding and festive rush"
      },
      {
        id: "poultry_desi",
        nameHi: "देसी कड़कनाथ व ब्रायलर बैकयार्ड पोल्ट्री",
        nameEn: "Backyard Desi Poultry Unit",
        capex: 45000,
        opex: 15000,
        expectedRev: 48000,
        expectedProfit: 33000,
        breakEvenMonths: 4,
        risk: "Medium",
        demandScore: 86,
        compScore: 40,
        oppScore: 85,
        bestFor: "Farmers with spare backyard land"
      }
    ]
  },
  {
    tier: 100000,
    label: "₹1,00,000",
    labelHi: "₹1,00,000 तक (मानक उद्यम)",
    businesses: [
      {
        id: "dairy_chilled_value_add",
        nameHi: "दूध चिलिंग, पनीर व सुबह घर-घर डिलीवरी",
        nameEn: "Chilled Milk Delivery & Paneer Hub",
        capex: 95000,
        opex: 52000,
        expectedRev: 125000,
        expectedProfit: 73000,
        breakEvenMonths: 5,
        risk: "Low-Medium",
        demandScore: 94,
        compScore: 45,
        oppScore: 91,
        bestFor: "Cattle owners & daily dairy vendors"
      },
      {
        id: "agro_input_organic",
        nameHi: "जैविक खाद, बीज व कीटनाशक केंद्र",
        nameEn: "Organic Fertilizer & Agri-Input Center",
        capex: 90000,
        opex: 35000,
        expectedRev: 92000,
        expectedProfit: 57000,
        breakEvenMonths: 6,
        risk: "Low",
        demandScore: 89,
        compScore: 60,
        oppScore: 83,
        bestFor: "Farming clusters & vegetable growers"
      }
    ]
  },
  {
    tier: 500000,
    label: "₹5,00,000+",
    labelHi: "₹5,00,000+ (औद्योगिक / एग्रो प्रोसेसिंग)",
    businesses: [
      {
        id: "flour_oil_mini_mill",
        nameHi: "मिनी आटा चक्की, सरसों तेल एक्सपेलर व फीड प्लांट",
        nameEn: "Mini Flour & Mustard Oil Expeller Unit",
        capex: 480000,
        opex: 120000,
        expectedRev: 280000,
        expectedProfit: 160000,
        breakEvenMonths: 9,
        risk: "Medium",
        demandScore: 96,
        compScore: 35,
        oppScore: 93,
        bestFor: "PMEGP 35% Subsidy eligible entrepreneurs"
      },
      {
        id: "solar_cold_storage",
        nameHi: "सोलर पावर्ड माइक्रो कोल्ड स्टोरेज व रूरल हब",
        nameEn: "Solar Micro-Cold Room for Perishables",
        capex: 520000,
        opex: 80000,
        expectedRev: 240000,
        expectedProfit: 160000,
        breakEvenMonths: 11,
        risk: "Low",
        demandScore: 92,
        compScore: 20,
        oppScore: 95,
        bestFor: "Vegetable & fruit farmer collectives"
      }
    ]
  }
];

// 2. Village Business Gap Map Data
export const VILLAGE_GAP_MAP_DATA = {
  village: "Adampur (Sewapuri Block)",
  population: 3420,
  households: 480,
  densityRating: "High Competition in Traditional, Zero in Value-Addition",
  totalShops: 28,
  existingCategories: [
    { name: "पारंपरिक किराना (Traditional Grocery)", count: 12, saturation: "Over-Saturated", color: "#ef4444" },
    { name: "कच्चा दूध विक्रेता (Raw Milk Vendors)", count: 6, saturation: "Saturated", color: "#f59e0b" },
    { name: "साइकिल व पंचर रिपेयर (Cycle Repair)", count: 4, saturation: "Normal", color: "#3b82f6" },
    { name: "चाय व समोसा नाश्ता (Tea & Snacks)", count: 5, saturation: "Normal", color: "#10b981" },
    { name: "नाई व सैलून (Local Salon)", count: 1, saturation: "Low", color: "#8b5cf6" }
  ],
  missingCategories: [
    {
      nameHi: "पनीर, दही व पैकेज्ड चिलिंग यूनिट",
      nameEn: "Paneer, Curd & Cold Milk Storage",
      gapScore: 94,
      demandReasonHi: "480 में से 180 नौकरीपेशा व शिक्षक परिवार प्रतिदिन ब्लॉक मुख्यालय से ₹380/किग्रा पनीर लाते हैं।",
      estimatedMarketMonthly: "₹1,45,000"
    },
    {
      nameHi: "पशु आहार, साइलेज व मिनरल मिक्सचर डिपो",
      nameEn: "Cattle Feed, Silage & Mineral Depot",
      gapScore: 89,
      demandReasonHi: "गाँव में 620 दुधारू पशु हैं, पर उच्च गुणवत्ता पशु आहार 8 किमी दूर से महंगा मंगाना पड़ता है।",
      estimatedMarketMonthly: "₹2,10,000"
    },
    {
      nameHi: "सोलर पंप व कृषि उपकरण सर्विस सेंटर",
      nameEn: "Solar Pump & Farm Tech Repair Center",
      gapScore: 85,
      demandReasonHi: "पीएम कुसुम योजना के तहत 34 सोलर पंप लगे हैं, किसी भी तकनीकी खराबी पर मैकेनिक बनारस शहर से आता है।",
      estimatedMarketMonthly: "₹95,000"
    },
    {
      nameHi: "मिनी कोल्ड स्टोरेज व फल-सब्जी ग्रेडिंग",
      nameEn: "Micro Cold Storage & Produce Grading",
      gapScore: 91,
      demandReasonHi: "टमाटर व हरी मिर्च की तुड़ाई के समय 25% फसल सड़ जाती है। कोल्ड स्टोरेज से 3x दाम मिलता है।",
      estimatedMarketMonthly: "₹2,80,000"
    }
  ],
  nearbyComparison: [
    { village: "आदमपुर (Adampur - Your Village)", pop: 3420, shopCount: 28, missingGaps: 4, healthScore: 82 },
    { village: "कपसेठी (Kapsethi)", pop: 5120, shopCount: 54, missingGaps: 2, healthScore: 88 },
    { village: "बराकी (Baraki)", pop: 2890, shopCount: 16, missingGaps: 6, healthScore: 68 }
  ]
};

// 9. Village Business Health Score (7 Indicators)
export const VILLAGE_HEALTH_SCORE = {
  overallScore: 82,
  tier: "High Growth Potential",
  indicators: [
    { nameHi: "स्थानीय बाज़ार मांग (Local Demand)", nameEn: "Local Market Demand", score: 86, max: 100, weight: "20%", status: "Strong" },
    { nameHi: "प्रतिस्पर्धा संतुलन (Competition Balance)", nameEn: "Competition Balance", score: 72, max: 100, weight: "15%", status: "Moderate" },
    { nameHi: "व्यापार विविधता (Business Diversity)", nameEn: "Business Diversity", score: 65, max: 100, weight: "15%", status: "Needs Improvement" },
    { nameHi: "डिजिटल व यूपीआई अपनाना (Digital Adoption)", nameEn: "Digital & UPI Adoption", score: 88, max: 100, weight: "15%", status: "Excellent" },
    { nameHi: "संस्थागत लोन उपलब्धता (Credit Access)", nameEn: "Credit & Bank Access", score: 84, max: 100, weight: "15%", status: "Strong" },
    { nameHi: "हाईवे व मंडी कनेक्टिविटी (Market Connectivity)", nameEn: "Market Connectivity", score: 92, max: 100, weight: "10%", status: "Superb (NH-19 4km)" },
    { nameHi: "उभरते नए अवसर (Emerging Sectors)", nameEn: "Emerging Trade Gaps", score: 90, max: 100, weight: "10%", status: "Very High" }
  ]
};

// 11. Local Resource Finder Database
export const LOCAL_RESOURCES_DATA = [
  {
    category: "दूध व कच्चा माल (Dairy & Agri Raw Materials)",
    items: [
      { name: "आदमपुर दुग्ध उत्पादक समूह (22 किसान)", type: "Raw Milk Supplier", contact: "98712XXXXX", rate: "₹42/L भैंस, ₹34/L गाय", dist: "गाँव में ही (Local)" },
      { name: "किसान एग्रो बीज भंडार", type: "Certified Seeds & Bio-Inputs", contact: "94501XXXXX", rate: "सरकारी दर से 10% छूट", dist: "2.1 किमी (कपसेठी)" }
    ]
  },
  {
    category: "पैकेजिंग व मशीनरी सप्लायर (Packaging & Machinery)",
    items: [
      { name: "काशी पैकवेल इंडस्ट्रीज", type: "Food Grade Pouches & Bottles", contact: "98390XXXXX", rate: "₹0.85 प्रति पाउच (न्यूनतम 5000)", dist: "14 किमी (रोहनिया)" },
      { name: "पूर्वांचल एग्रो इंजीनियरिंग", type: "Milk Chiller & Paneer Press", contact: "94152XXXXX", rate: "PMEGP अनुमोदित मशीनरी", dist: "18 किमी (वाराणसी इंडस्ट्रियल)" }
    ]
  },
  {
    category: "ट्रांसपोर्ट व लॉजिस्टिक्स (Transporters & Delivery)",
    items: [
      { name: "सेवापुरी रूरल टेम्पो यूनियन", type: "Daily Morning Market Route", contact: "91612XXXXX", rate: "₹250 प्रति ट्रिप (वाराणसी मंडी)", dist: "1.5 किमी" },
      { name: "ई-रिक्शा डिलीवरी फ्लीट (रमेश कुमार)", type: "Inter-Village Delivery", contact: "97940XXXXX", rate: "₹30 प्रति 5 किमी डिलीवरी", dist: "गाँव में ही" }
    ]
  },
  {
    category: "बैंक व सरकारी सेवा केंद्र (Banks & CSC)",
    items: [
      { name: "यूनियन बैंक ऑफ इंडिया (सेवापुरी शाखा)", type: "PMEGP / Mudra Nodal Branch", contact: "0542-262XXXX", rate: "मुद्रा नोडल अधिकारी: श्री वर्मा", dist: "3.2 किमी" },
      { name: "कॉमन सर्विस सेंटर (CSC) आदमपुर", type: "Udyam Registration & Loan Filing", contact: "99180XXXXX", rate: "निशुल्क सरकारी परामर्श", dist: "गाँव चौपाल" }
    ]
  }
];

// 12. Local-to-National Market Advisor (5-Stage Ladder)
export const MARKET_LADDER = [
  {
    stage: "चरण 1",
    level: "गाँव स्तर (Village Direct)",
    radius: "0-3 किमी",
    targetCustomers: "गाँव के 480 परिवार, स्कूल, पंचायत व स्थानीय ग्रामीण",
    products: "ताज़ा दूध, रोज़मर्रा का आटा व किराना",
    paymentMode: "नकद, मासिक खाता, UPI",
    margin: "18% - 25%"
  },
  {
    stage: "चरण 2",
    level: "पड़ोसी हाट व गाँव (Nearby Haats)",
    radius: "3-8 किमी",
    targetCustomers: "कपसेठी, बराकी, साप्ताहिक ग्रामीण बाजार व ढाबे",
    products: "पनीर, खोया, जैविक सब्जियां व रेडीमेड कपड़े",
    paymentMode: "तुरंत UPI, साप्ताहिक भुगतान",
    margin: "25% - 32%"
  },
  {
    stage: "चरण 3",
    level: "जिला व मंडी (District Market)",
    radius: "8-25 किमी",
    targetCustomers: "वाराणसी शहर की मिष्ठान्न दुकानें, होटल, रेस्टोरेंट",
    products: "थोक में ताजा पनीर, शुद्ध देसी घी, सरसों तेल",
    paymentMode: "15 दिवसीय बैंक अनुबंध",
    margin: "30% - 38%"
  },
  {
    stage: "चरण 4",
    level: "राज्य स्तरीय ब्रांड (State Network)",
    radius: "25-200 किमी",
    targetCustomers: "लखनऊ, कानपुर, प्रयागराज के सुपरमार्केट व एग्रो ब्रांड्स",
    products: "FSSAI प्रमाणित पैकेज्ड दालें, मसाले व आंवला कैंडी",
    paymentMode: "लेटर ऑफ क्रेडिट, बी2बी बैंक ट्रांसफर",
    margin: "35% - 45%"
  },
  {
    stage: "चरण 5",
    level: "राष्ट्रीय ई-कॉमर्स (National Digital Market)",
    radius: "अखिल भारतीय (Pan-India)",
    targetCustomers: "ONDC, Amazon Saheli, Flipkart Samarth, GeM पोर्टल",
    products: "GI-टैग्ड हस्तशिल्प, ऑर्गेनिक उत्पाद, बनारसी हैंडलूम",
    paymentMode: "डिजिटल एस्क्रो, प्रीपेड ऑर्डर्स",
    margin: "45% - 60%"
  }
];

// 13. Business Partner Finder
export const BUSINESS_PARTNERS = [
  {
    id: "shg_1",
    name: "उजाला महिला स्वयं सहायता समूह (12 सदस्य)",
    type: "Women Self-Help Group",
    skills: "मसाला पिसाई, पैकेजिंग, दाल प्रसंस्करण",
    capitalAvailable: "₹1,50,000 (SHG सीसीएल लोन)",
    lookingFor: "मार्केटिंग पार्टनर जो शहर में सप्लाई करे",
    location: "आदमपुर, वार्ड 4"
  },
  {
    id: "youth_1",
    name: "सुमित पटेल (डिप्लोमा इलेक्ट्रिकल)",
    type: "Skilled Technical Youth",
    skills: "सोलर पैनल इंस्टालेशन, वायरिंग, इन्वर्टर रिपेयर",
    capitalAvailable: "₹40,000 + टूल्स",
    lookingFor: "पूँजी निवेश भागीदार सोलर दुकान शुरू करने हेतु",
    location: "सेवापुरी"
  },
  {
    id: "farmer_1",
    name: "रामबली यादव (डेयरी फार्मर)",
    type: "Milk Producer Partner",
    skills: "14 गाय-भैंस, 90 लीटर दैनिक दूध उत्पादन",
    capitalAvailable: "प्रतिदिन 90 लीटर कच्चा दूध सप्लाई गारंटी",
    lookingFor: "चिलिंग व पनीर यूनिट में 40% इक्विटी पार्टनर",
    location: "कपसेठी रोड"
  }
];

// 14. AI Business Alerts (Real-Time Dynamic Conditions)
export const AI_BUSINESS_ALERTS = [
  {
    id: "alert_1",
    type: "festival",
    urgency: "High",
    titleHi: "आगामी नवरात्रि व दशहरा मांग उछाल",
    titleEn: "Navratri & Dussehra Surge Alert",
    descHi: "अगले 15 दिनों में पनीर, घी, कुट्टू का आटा व फल-मिठाई की मांग में 40% वृद्धि अनुमानित है। कच्चा माल अग्रिम स्टॉक करें।",
    descEn: "40% spike expected in paneer, ghee & buckwheat flour. Stock raw materials in advance.",
    impactTrade: "डेयरी व किराना (Dairy & Grocery)",
    action: "स्टॉक 30% बढ़ाएँ"
  },
  {
    id: "alert_2",
    type: "weather",
    urgency: "Medium",
    titleHi: "मौसम चेतावनी: 3 दिन भारी बारिश का अनुमान",
    titleEn: "Weather Alert: Heavy Monsoon Rains",
    descHi: "सब्जियों व खुले अनाज को सुरक्षित सूखे स्थान पर रखें। हरा चारा गीला न होने दें, पशुओं में खुरपका से बचाव का टीका लगवाएँ।",
    descEn: "Protect grain stocks from moisture. Ensure dry storage and cattle vaccination.",
    impactTrade: "पशुपालन व सब्जी विक्रेता",
    action: "सुरक्षित स्टोरेज सुनिश्चित करें"
  },
  {
    id: "alert_3",
    type: "price",
    urgency: "Opportunity",
    titleHi: "सरसों थोक भाव में ₹420/क्विंटल की गिरावट",
    titleEn: "Mustard Raw Price Dip Opportunity",
    descHi: "मंडी में सरसों के दाम घटने से तेल एक्सपेलर यूनिट्स के लिए पेराई मार्जिन 12% बढ़ गया है। कच्चा माल खरीदने का उत्तम समय।",
    descEn: "Mustard prices dipped in mandi, creating an immediate 12% higher profit margin for oil expellers.",
    impactTrade: "तेल एक्सपेलर व मिनी मिल",
    action: "कच्ची सरसों खरीदें"
  }
];

// 7. Expanded Government Scheme Matcher Profiles
export const SCHEMES_EXPANDED = [
  {
    id: "pmegp",
    name: "Prime Minister's Employment Generation Programme (PMEGP)",
    nameHi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
    category: "विनिर्माण व सेवा (Manufacturing & Processing)",
    maxProjectCost: 5000000,
    subsidyRuralGeneral: "25%",
    subsidyRuralSpecial: "35% (SC/ST/OBC/Women/Minority/Ex-Servicemen)",
    ownContribution: "5% (Special) या 10% (General)",
    interestRate: "9.0% - 10.5%",
    collateral: "₹10 लाख तक शून्य (No Collateral under CGTMSE)",
    eligibility: {
      minAge: 18,
      education: "8th Pass for projects > ₹10 Lakh",
      location: "Rural Area gets 35% subsidy"
    },
    documents: [
      "आधार कार्ड व पैन कार्ड",
      "विस्तृत प्रोजेक्ट रिपोर्ट (DPR - GramVenture द्वारा जनरेटेड)",
      "जाति / श्रेणी प्रमाण पत्र (35% सब्सिडी हेतु)",
      "शैक्षणिक योग्यता प्रमाण पत्र (8वीं पास)",
      "ग्राम प्रधान या पंचायत का निवास प्रमाण पत्र"
    ]
  },
  {
    id: "pmmy_kishore",
    name: "Pradhan Mantri Mudra Yojana (PMMY) - Kishore & Tarun",
    nameHi: "प्रधानमंत्री मुद्रा योजना (PMMY)",
    category: "व्यापार व लघु सेवा (Trading, Shop & Small Service)",
    maxProjectCost: 1000000,
    subsidyRuralGeneral: "बिना गारंटी शून्य कोलैटरल (0% Subsidy, Collateral Free)",
    subsidyRuralSpecial: "शून्य प्रोसेसिंग शुल्क + CGTMSE गारंटी",
    ownContribution: "15% - 20%",
    interestRate: "8.5% - 9.5%",
    collateral: "पूर्णतः संपार्श्विक मुक्त (100% Collateral Free)",
    eligibility: {
      minAge: 18,
      education: "कोई न्यूनतम शैक्षणिक शर्त नहीं",
      location: "गाँव व शहर दोनों"
    },
    documents: [
      "पहचान व निवास प्रमाण (Aadhaar / Voter ID)",
      "उद्यम रजिस्ट्रेशन (Udyam Certificate)",
      "अंतिम 6 माह का बैंक खाता विवरण",
      "दुकान या व्यापार का कोटेशन व बिल"
    ]
  },
  {
    id: "stand_up_india",
    name: "Stand-Up India Scheme for Women & SC/ST",
    nameHi: "स्टैंड-अप इंडिया योजना (महिला व SC/ST उद्यमी)",
    category: "ग्रीनफील्ड नया उद्यम (Greenfield Ventures)",
    maxProjectCost: 10000000,
    subsidyRuralGeneral: "कन्वर्जेंस सब्सिडी + 15% मार्जिन मनी सपोर्ट",
    subsidyRuralSpecial: "7 वर्ष की आसान पुनर्भुगतान अवधि",
    ownContribution: "15%",
    interestRate: "MCLR + 3% + Tenor Premium",
    collateral: "क्रेडिट गारंटी फंड (NABCredit Guarantee)",
    eligibility: {
      minAge: 18,
      education: "नया उद्यम (Greenfield only)",
      location: "महिला या SC/ST आवेदक अनिवार्य"
    },
    documents: [
      "आवेदक महिला या SC/ST प्रमाण पत्र",
      "प्रोजेक्ट फिजिबिलिटी रिपोर्ट",
      "भूमि या लीज एग्रीमेंट दस्तावेज",
      "पैन, आधार व 3 पासपोर्ट साइज फोटो"
    ]
  }
];

