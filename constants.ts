import { ServiceItem, InspectionCertificate, ProjectUpdate, Industry, WhyChooseUsItem } from './types';

export const COMPANY_INFO = {
  name: "OMEGA",
  fullName: "OMEGA for Petroleum & Construction Services",
  slogan: "Always deliver more than expected",
  established: 2019,
  location: "Cairo, Egypt",
  phone: "01121001152",
  email: "Info@omega-pc.com",
  website: "https://www.omega-pc.com",
  whatsapp: "https://wa.me/201121001152",
  address: "Shebin Hathout Tower, next to Al-Ghatmi Mall, in front of Shebin Al-Koum Preparatory School, Cairo, Egypt",
  mission: "We are committed to moving forward as a unified company with strong alliances and dedicated employees. Our mission is to build on our strengths and continuously enhance our competitive edge, aiming to maintain a leading position in our core sectors, create value in the short and long term, and serve the best interests of our customers.",
  vision: "We strive to deliver top-tier service with optimal cost efficiency through well-trained labor, value-added services, and innovations. We are expanding into specialized activities such as marine transportation and heavy equipment maintenance."
};

// Reliable Unsplash Images
export const SERVICES: ServiceItem[] = [
  {
    id: 'rope-access',
    title: "Rope Access Services",
    shortDescription: "Smart. Safe. Efficient. Access for hard-to-reach places.",
    fullDescription: "Maximum Safety: All operations follow strict safety protocols using dual-rope systems and certified technicians. Cost & Time Saving: Quick setup, minimal equipment, and faster execution compared to scaffolding. Ideal for industrial inspections, high-rise maintenance, and structural repairs.",
    iconName: "Anchor",
    features: ["IRATA & SPRAT Certified", "Structural Repairs & Welding", "Cable & System Installations", "Offshore & Confined Space"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'lifting-inspection',
    title: "Lifting Equipment Inspection",
    shortDescription: "Reliable. Compliant. Safe. Comprehensive gear inspection.",
    fullDescription: "We inspect Cranes (Overhead, Mobile, Tower), Chain blocks, Wire ropes, Shackles, and Hydraulic jacks. With OMEGA, you get safer lifting operations, certified & documented inspections, and fast response support.",
    iconName: "Construction", // Hook/Crane
    features: ["LOLER Compliance", "Load Testing & Certification", "Wire Ropes & Webbing Slings", "Defect Reporting"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ndt',
    title: "Non-Destructive Testing (NDT)",
    shortDescription: "Advanced diagnostics without damage.",
    fullDescription: "Accurate Insight: From welds to pipelines. Zero Damage: We inspect without interfering. Certified Expertise: Level II and Level III inspectors certified under ASNT, ISO codes. Methods include UT, MT, PT, RT, and VT.",
    iconName: "Scan",
    features: ["Ultrasonic Testing (UT)", "Magnetic Particle (MT)", "Radiographic Testing (RT)", "Dye Penetrant (PT)"],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'hull-gauging',
    title: "Hull Gauging",
    shortDescription: "Accurate. Certified. Compliant marine measurements.",
    fullDescription: "Precise Measurements using advanced ultrasonic tools. Class-Approved Procedures meeting ABS, DNV, BV requirements. We deliver clear reports with corrosion mapping and steel renewal advice.",
    iconName: "Ship",
    features: ["Class-Approved Reports", "Corrosion Mapping", "Steel Renewal Advice", "Dry-docking Support"],
    image: "https://images.unsplash.com/photo-1605218427368-35b81a3dd64c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'sandblasting-painting',
    title: "Sandblasting & Painting",
    shortDescription: "Industrial-grade surface preparation and coating.",
    fullDescription: "We use abrasive blasting to strip rust and contaminants. We apply high-performance coatings meeting IMO, NORSOK, and ISO standards. Services include Epoxy, Polyurethane, and Zinc-rich paint systems.",
    iconName: "Paintbrush",
    features: ["Surface Preparation", "High-Performance Coatings", "Dew Point Monitoring", "SSPC/NACE Compliance"],
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'scaffolding',
    title: "Scaffolding Solutions",
    shortDescription: "Secure platforms for safe efficient construction.",
    fullDescription: "Reliable scaffolding solutions essential for multi-story buildings and industrial structures. Our systems offer secure platforms for workers and support the movement of materials across the site.",
    iconName: "Trestle", 
    features: ["Secure Platforms", "Industrial Structures", "Safety Compliance", "Installation & Dismantling"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'gamma-xray',
    title: "Gamma Ray & X-Ray",
    shortDescription: "Radiographic Testing (RT) for hidden flaws.",
    fullDescription: "Using advanced gamma and X-ray technology to detect subsurface discontinuities. Ideal for inspecting welds, identifying cracks, measuring wall thickness, and assessing castings.",
    iconName: "Radiation",
    features: ["Weld Inspection", "Internal Flaw Detection", "Metallic & Non-metallic", "Porosity Assessment"],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'heat-treatment',
    title: "Heat Treatment Services",
    shortDescription: "Modifying metal properties for durability.",
    fullDescription: "Professional heat treatment to enhance hardness, strength, or ductility. Vital for improving component durability and structural integrity in various industrial applications.",
    iconName: "Flame",
    features: ["Stress Relieving", "Hardness Enhancement", "Pre/Post Weld Treatment", "Controlled Heating"],
    image: "https://images.unsplash.com/photo-1565153907400-7e01a9ab2509?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'pressure-testing',
    title: "Pressure Testing Services",
    shortDescription: "Ensuring safe operating ranges for sealed systems.",
    fullDescription: "We determine the safe operating range of pipelines and fuel tanks. This process ensures structural integrity and operational safety to prevent leaks and failures.",
    iconName: "Gauge",
    features: ["Hydrostatic Testing", "Pipeline Integrity", "Leak Detection", "Safety Certification"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'api-inspection',
    title: "API Inspection",
    shortDescription: "Drilling structures, tanks, and equipment monitoring.",
    fullDescription: "Monitoring equipment during operation to detect poor performance. Visual inspections cover cracks, loose fittings, elongation, and corrosion. Helps prevent failure and ensure API standard compliance.",
    iconName: "ClipboardCheck",
    features: ["Drill Pipe Inspection", "Tank Inspection", "Structural Checks", "API Standards"],
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'tubular-inspection',
    title: "Tubular & Piping Inspection",
    shortDescription: "Complete inspection for tubular equipment.",
    fullDescription: "Inspection for drill pipes and hardware, new or used. Carried out in line with client specifications to ensure safe and efficient drilling operations.",
    iconName: "Cylinder",
    features: ["Drill Pipes", "Casing & Tubing", "Hardware Check", "Operational Safety"],
    image: "https://images.unsplash.com/photo-1605557202138-097824c3f5c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'tank-solutions',
    title: "Tank Solutions",
    shortDescription: "Inspection, cleaning, and calibration.",
    fullDescription: "Spatial inspections to detect tank tilt, differential settlement, and deformation. We also offer manufacturing, installation, maintenance, and repair to prevent critical failures.",
    iconName: "Container",
    features: ["Calibration", "Sludge Cleaning", "Deformation Check", "Maintenance & Repair"],
    image: "https://images.unsplash.com/photo-1563292787-8c4423871404?auto=format&fit=crop&q=80&w=800"
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'oil-gas',
    title: "Oil & Gas Sector",
    description: "Specialized services ensuring safety, efficiency, and productivity from exploration to operations.",
    image: "https://images.unsplash.com/photo-1563503673-90d1952445cc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'construction',
    title: "Construction Sites",
    description: "Smart, safe, and sustainable solutions for mining, infrastructure, and urban development.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'power-plants',
    title: "Power Plants",
    description: "Supporting energy facilities with reliability focus, helping maintain uninterrupted energy flow.",
    image: "https://images.unsplash.com/photo-1585252654378-45f8f309a13f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'marine',
    title: "Marine Sector",
    description: "Strategic solutions enhancing safe operations and high standards in maritime activities.",
    image: "https://images.unsplash.com/photo-1559815617-3c588b39a489?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 'ports',
    title: "Sea Ports",
    description: "Maintenance and inspection for vital global trade hubs and freight handling equipment.",
    image: "https://images.unsplash.com/photo-1580665191062-875df5834891?auto=format&fit=crop&q=80&w=800"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Skilled Manpower",
    description: "Our people are our strength. A skilled, motivated workforce is the key to consistent success.",
    icon: "Users"
  },
  {
    title: "Standards Compliance",
    description: "We adhere to API, DS1, NS2, ASME, AWS, ASTM, NSL, BS, and more.",
    icon: "Award"
  },
  {
    title: "Records Tracking",
    description: "Secure online dashboard for clients to access reports and certifications anytime.",
    icon: "FileText"
  },
  {
    title: "Live Tracking",
    description: "SMS updates directly to your phone showing live progress throughout the project lifecycle.",
    icon: "Activity"
  },
  {
    title: "NDA Protection",
    description: "We sign Non-Disclosure Agreements ensuring full confidentiality and trust.",
    icon: "Shield"
  },
  {
    title: "Quality Assurance",
    description: "Premium materials, advanced equipment, and a professional team ensuring satisfaction.",
    icon: "CheckCircle"
  }
];

export const MOCK_CERTIFICATES: InspectionCertificate[] = [
  {
    id: 'C-001',
    equipmentName: 'Overhead Crane 50T',
    serialNumber: 'CR-2023-X99',
    inspectionDate: '2023-10-15',
    expiryDate: '2024-10-15',
    status: 'valid',
    pdfUrl: '#'
  },
  {
    id: 'C-002',
    equipmentName: 'Wire Rope Sling Set',
    serialNumber: 'WS-554-B',
    inspectionDate: '2023-05-20',
    expiryDate: '2024-05-20',
    status: 'expiring',
    pdfUrl: '#'
  },
  {
    id: 'C-003',
    equipmentName: 'Forklift 3T',
    serialNumber: 'FL-09-A',
    inspectionDate: '2022-12-01',
    expiryDate: '2023-12-01',
    status: 'expired',
    pdfUrl: '#'
  }
];

export const MOCK_PROJECTS: ProjectUpdate[] = [
  {
    id: 'P-101',
    title: 'Offshore Rig Z-4 Maintenance',
    progress: 75,
    status: 'In Progress',
    lastUpdated: '2 hours ago'
  },
  {
    id: 'P-102',
    title: 'Annual Lifting Gear Certification',
    progress: 100,
    status: 'Completed',
    lastUpdated: '1 day ago'
  },
  {
    id: 'P-103',
    title: 'Pipeline NDT Survey Phase 1',
    progress: 30,
    status: 'Active',
    lastUpdated: '5 mins ago'
  }
];