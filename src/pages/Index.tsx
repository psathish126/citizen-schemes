import { Search, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { CategoryGrid } from "@/components/CategoryGrid";
import { SchemeCard } from "@/components/SchemeCard";

const featuredSchemes = [
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
    applicationLink: "https://pmkisan.gov.in"
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
    applicationLink: "https://pmjay.gov.in"
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
    applicationLink: "https://pmaymis.gov.in"
  }
];

const stats = [
  {
    icon: Award,
    label: "Active Schemes",
    value: "300+",
    description: "Government schemes available"
  },
  {
    icon: Users,
    label: "Beneficiaries",
    value: "75 Crore+",
    description: "Citizens benefited nationwide"
  },
  {
    icon: TrendingUp,
    label: "Success Rate",
    value: "92%",
    description: "Application approval rate"
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Government Schemes
              <br />
              <span className="text-primary-foreground/90">Made for You</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discover and apply for government schemes that you're eligible for. 
              Simple, fast, and secure access to 300+ schemes across all categories.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 max-w-2xl mx-auto mb-8 shadow-lg">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input 
                    placeholder="Search schemes by name, category, or benefits..."
                    className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button size="lg" className="px-8">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                Check My Eligibility
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Browse All Schemes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-medium text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Schemes */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Schemes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Popular government schemes with high impact and wide reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline">
              View All Schemes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find schemes organized by sector and beneficiary type
            </p>
          </div>
          
          <CategoryGrid />
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Scheme?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Answer a few questions about yourself and get personalized scheme recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Eligibility Check
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
