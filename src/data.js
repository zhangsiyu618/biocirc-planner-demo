export const unavailableMessage = "Sorry, this function is currently unavailable.";

export const navItems = ["Projects", "Saved Scenarios", "Help"];

export const inputSections = [
  {
    icon: "map",
    label: "Land Availability",
    defaultIndex: 1,
    options: [
      "1-2 hectares available",
      "2-5 hectares available",
      "More than 5 hectares available"
    ],
    note: "Near community: Yes"
  },
  {
    icon: "users",
    label: "Community Size",
    defaultIndex: 1,
    options: ["Population: 500", "Population: 1,250", "Population: 3,000+"],
    note: "Households: ~250"
  },
  {
    icon: "community",
    label: "Population Profile",
    defaultIndex: 1,
    options: [
      "Rural, mixed age",
      "Remote Indigenous community",
      "Mining camp workforce",
      "Farming community"
    ],
    note: "Local service demand: medium"
  },
  {
    icon: "wrench",
    label: "Labour / Workforce",
    defaultIndex: 1,
    options: [
      "Limited technical support",
      "Moderate technical support",
      "Skilled operators available"
    ],
    note: "Technical support: moderate"
  },
  {
    icon: "waste",
    label: "Food / Organic Waste Streams",
    defaultIndex: 2,
    options: [
      "Low: 0.3 t/day",
      "Medium: 0.7 t/day",
      "High: 1.2 t/day",
      "Very high: 2.5 t/day"
    ],
    note: "Sources: food waste, crop residues, manure"
  },
  {
    icon: "energy",
    label: "Existing Energy Infrastructure",
    defaultIndex: 0,
    options: [
      "Diesel gensets",
      "Solar + battery",
      "Weak grid connection",
      "No reliable grid access"
    ],
    note: "Grid: not available or unstable"
  }
];

export const priorities = [
  "Lower energy cost",
  "Local jobs",
  "Waste management",
  "Low emissions",
  "+ Add"
];

export const starterMessages = [
  {
    role: "user",
    content:
      "Please design personalised waste-to-energy solutions for our remote community using the data provided. Prioritise reliability, affordability, and local employment."
  },
  {
    role: "assistant",
    content:
      "Thanks. I have analysed your community data and local priorities.\n\nSummary of your context:\n- Population: ~1,250\n- Organic waste: high, around 1.2 t/day\n- Land available: 2-5 hectares\n- Existing energy: diesel gensets\n- Technical support: moderate\n- Priorities: lower energy cost, local jobs, and waste management\n\nI generated three feasible waste-to-energy options tailored to your context. You can review each option, compare the trade-offs, and see the recommendation below."
  }
];

export const options = [
  {
    id: "A",
    title: "Option A",
    technology: "Anaerobic Digestion",
    recommended: true,
    tone: "green",
    flow: ["Organic Waste", "Digester", "Biogas", "CHP Unit", "Electricity"],
    metrics: [
      { label: "Energy Output", value: "180 kWh/day" },
      { label: "Est. Capital Cost", value: "$420,000" },
      { label: "Suitability", value: "High" }
    ],
    advantages: [
      "High reliability for organic waste",
      "Produces useful fertiliser by-product",
      "Good fit for high food-waste availability",
      "Supports local jobs in operation and maintenance"
    ],
    tradeoffs: [
      "Higher upfront capital cost",
      "Requires trained operators",
      "Feedstock collection logistics needed"
    ]
  },
  {
    id: "B",
    title: "Option B",
    technology: "Biomass Gasification",
    recommended: false,
    tone: "blue",
    flow: ["Biomass Residues", "Gasifier", "Syngas", "Generator", "Electricity"],
    metrics: [
      { label: "Energy Output", value: "220 kWh/day" },
      { label: "Est. Capital Cost", value: "$360,000" },
      { label: "Suitability", value: "Medium" }
    ],
    advantages: [
      "Handles drier biomass and crop residues",
      "Higher electrical efficiency potential",
      "Lower water requirement"
    ],
    tradeoffs: [
      "Requires consistent dry feedstock",
      "Higher technical complexity",
      "More maintenance attention"
    ]
  },
  {
    id: "C",
    title: "Option C",
    technology: "Waste-to-Energy Combustion",
    recommended: false,
    tone: "orange",
    flow: ["Mixed Waste", "RDF Preparation", "Boiler", "Steam Turbine", "Power"],
    metrics: [
      { label: "Energy Output", value: "350 kWh/day" },
      { label: "Est. Capital Cost", value: "$680,000" },
      { label: "Suitability", value: "Low-Medium" }
    ],
    advantages: [
      "Accepts mixed municipal solid waste",
      "Higher scale and energy output",
      "Proven technology"
    ],
    tradeoffs: [
      "Higher capital and operating costs",
      "Emissions control required",
      "Less suitable for small remote communities"
    ]
  }
];

export const comparisonRows = [
  ["Energy Output", "180 kWh/day", "220 kWh/day", "350 kWh/day"],
  ["Est. Capital Cost", "$420,000", "$360,000", "$680,000"],
  ["Est. O&M Cost", "$32,000/year", "$38,000/year", "$60,000/year"],
  ["Suitability", "High", "Medium", "Low-Medium"],
  ["Reliability", "High", "Medium", "Medium"],
  ["Complexity", "Low-Medium", "Medium", "High"],
  ["Local Jobs Potential", "High", "Medium", "Medium"],
  ["Overall Score", "4.6 / 5", "3.7 / 5", "3.0 / 5"]
];

export const quickInsights = [
  "High organic waste makes biogas a strong fit",
  "All options can reduce diesel use",
  "Local job potential: 8-15 direct jobs",
  "Grants and carbon finance may improve feasibility"
];

export const environmentalImpact = [
  { label: "GHG Reduction", value: "~420 tCO2e/year" },
  { label: "Waste Diverted", value: "~440 t/year" },
  { label: "Fertiliser Produced", value: "~300 t/year" }
];
