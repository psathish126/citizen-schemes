import { useState, useMemo } from 'react';

export interface Scheme {
  id: string;
  name: string;
  ministry: string;
  description: string;
  benefits: string[];
  eligibility: string[];
  deadline?: string;
  beneficiaries: string;
  state?: string;
  category: string;
  applicationLink: string;
  tags?: string[];
}

const allSchemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN Samman Nidhi Yojana",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    description: "Financial assistance of ₹6,000 per year to small and marginal farmer families having combined land holding/ownership of up to 2 hectares.",
    benefits: [
      "₹6,000 per year in three installments",
      "Direct benefit transfer to bank account",
      "No application fee required"
    ],
    eligibility: [
      "Small and marginal farmers",
      "Land holding up to 2 hectares",
      "Valid Aadhaar card required"
    ],
    beneficiaries: "14.8 Crore Farmers",
    category: "Agriculture",
    applicationLink: "https://pmkisan.gov.in",
    tags: ["farmer", "agriculture", "financial assistance", "rural"]
  },
  {
    id: "ayushman-bharat",
    name: "Ayushman Bharat - PM-JAY",
    ministry: "Ministry of Health and Family Welfare",
    description: "World's largest health insurance scheme providing coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    benefits: [
      "₹5 lakh health cover per family per year",
      "Cashless treatment at empaneled hospitals",
      "Coverage for 1,350+ medical packages"
    ],
    eligibility: [
      "Socio-Economic Caste Census (SECC) beneficiaries",
      "Rural and urban poor families",
      "Eligible as per PMJAY database"
    ],
    beneficiaries: "50 Crore Indians",
    category: "Healthcare",
    applicationLink: "https://pmjay.gov.in",
    tags: ["health", "insurance", "medical", "poor families"]
  },
  {
    id: "pradhan-mantri-awas",
    name: "Pradhan Mantri Awas Yojana",
    ministry: "Ministry of Housing and Urban Affairs",
    description: "Affordable housing scheme for urban and rural areas to provide pucca houses to all houseless families and those living in kutcha and dilapidated houses.",
    benefits: [
      "Interest subsidy on home loans",
      "Financial assistance up to ₹2.67 lakh",
      "Houses with basic amenities"
    ],
    eligibility: [
      "Economically Weaker Section (EWS)",
      "Low Income Group (LIG)",
      "Middle Income Group (MIG)"
    ],
    beneficiaries: "4 Crore Families",
    deadline: "31 Dec 2024",
    category: "Housing",
    applicationLink: "https://pmaymis.gov.in",
    tags: ["housing", "home loan", "subsidy", "affordable housing"]
  },
  {
    id: "national-scholarship",
    name: "National Scholarship Portal",
    ministry: "Ministry of Education",
    description: "Central government scholarships for students belonging to various categories including SC/ST, OBC, minorities, and differently abled.",
    benefits: [
      "Merit-based scholarships",
      "Need-based financial assistance",
      "Digital scholarship disbursement"
    ],
    eligibility: [
      "Students from recognized institutions",
      "Academic merit criteria",
      "Income certificate required"
    ],
    beneficiaries: "1.2 Crore Students",
    category: "Education",
    applicationLink: "https://scholarships.gov.in",
    tags: ["education", "scholarship", "students", "merit"]
  },
  {
    id: "mudra-yojana",
    name: "Pradhan Mantri MUDRA Yojana",
    ministry: "Ministry of Finance",
    description: "Provides loans up to ₹10 lakh to small and micro enterprises for income-generating activities.",
    benefits: [
      "Collateral-free loans",
      "Three categories: Shishu, Kishore, Tarun",
      "Lower interest rates"
    ],
    eligibility: [
      "Non-corporate small business entities",
      "Income generating activities",
      "Manufacturing, trading or service activities"
    ],
    beneficiaries: "28 Crore Entrepreneurs",
    category: "Employment",
    applicationLink: "https://mudra.org.in",
    tags: ["loan", "business", "entrepreneur", "micro finance"]
  }
];

export const useSchemes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredSchemes = useMemo(() => {
    let filtered = allSchemes;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(scheme => 
        scheme.name.toLowerCase().includes(query) ||
        scheme.description.toLowerCase().includes(query) ||
        scheme.ministry.toLowerCase().includes(query) ||
        scheme.category.toLowerCase().includes(query) ||
        scheme.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(scheme => scheme.category === selectedCategory);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "category":
          return a.category.localeCompare(b.category);
        case "beneficiaries":
          // Extract numbers for comparison
          const aNum = parseFloat(a.beneficiaries.replace(/[^\d.]/g, ""));
          const bNum = parseFloat(b.beneficiaries.replace(/[^\d.]/g, ""));
          return bNum - aNum;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return {
    schemes: filteredSchemes,
    allSchemes,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy
  };
};