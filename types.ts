export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Mapping to Lucide icons
  features: string[];
  image?: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  companyName: string;
  role: 'admin' | 'client' | 'staff';
  email: string;
}

export interface InspectionCertificate {
  id: string;
  equipmentName: string;
  serialNumber: string;
  inspectionDate: string;
  expiryDate: string;
  status: 'valid' | 'expiring' | 'expired';
  pdfUrl: string;
}

export interface ProjectUpdate {
  id: string;
  title: string;
  progress: number;
  status: string;
  lastUpdated: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}