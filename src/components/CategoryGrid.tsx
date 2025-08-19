import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Wheat, 
  Home, 
  Baby, 
  Users, 
  Accessibility,
  Lightbulb,
  Shield,
  TreePine,
  Coins
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  schemeCount: number;
  color: string;
}

const categories: Category[] = [
  {
    id: "education",
    name: "Education",
    description: "Scholarships, skill development, and educational support",
    icon: GraduationCap,
    schemeCount: 45,
    color: "text-blue-600"
  },
  {
    id: "healthcare", 
    name: "Healthcare",
    description: "Medical insurance, health programs, and wellness schemes",
    icon: Heart,
    schemeCount: 32,
    color: "text-red-500"
  },
  {
    id: "employment",
    name: "Employment",
    description: "Job creation, unemployment benefits, and skill training",
    icon: Briefcase,
    schemeCount: 28,
    color: "text-green-600"
  },
  {
    id: "agriculture",
    name: "Agriculture",
    description: "Farmer support, crop insurance, and rural development",
    icon: Wheat,
    schemeCount: 38,
    color: "text-yellow-600"
  },
  {
    id: "housing",
    name: "Housing",
    description: "Home loans, housing for all, and shelter schemes",
    icon: Home,
    schemeCount: 15,
    color: "text-purple-600"
  },
  {
    id: "women-child",
    name: "Women & Child",
    description: "Maternal care, child welfare, and women empowerment",
    icon: Baby,
    schemeCount: 25,
    color: "text-pink-600"
  },
  {
    id: "senior-citizen",
    name: "Senior Citizens",
    description: "Pension schemes, elderly care, and senior benefits",
    icon: Users,
    schemeCount: 12,
    color: "text-gray-600"
  },
  {
    id: "disability",
    name: "Disability Welfare",
    description: "Support for persons with disabilities",
    icon: Accessibility,
    schemeCount: 18,
    color: "text-indigo-600"
  },
  {
    id: "startup",
    name: "Startup & Innovation",
    description: "Business support, startup funding, and innovation schemes",
    icon: Lightbulb,
    schemeCount: 22,
    color: "text-orange-600"
  },
  {
    id: "social-security",
    name: "Social Security",
    description: "Insurance, safety nets, and social protection",
    icon: Shield,
    schemeCount: 19,
    color: "text-teal-600"
  },
  {
    id: "environment",
    name: "Environment",
    description: "Clean energy, conservation, and environmental schemes",
    icon: TreePine,
    schemeCount: 14,
    color: "text-emerald-600"
  },
  {
    id: "finance",
    name: "Financial Services",
    description: "Banking, loans, and financial inclusion schemes",
    icon: Coins,
    schemeCount: 26,
    color: "text-amber-600"
  }
];

interface CategoryGridProps {
  onCategorySelect?: (categoryId: string) => void;
}

export const CategoryGrid = ({ onCategorySelect }: CategoryGridProps = {}) => {
  const handleCategoryClick = (categoryId: string) => {
    onCategorySelect?.(categoryId);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <Card 
            key={category.id} 
            className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
            onClick={() => handleCategoryClick(category.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <IconComponent className={`h-6 w-6 ${category.color}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    {category.schemeCount} schemes
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {category.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};