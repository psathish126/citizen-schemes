import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  resultsCount: number;
}

const categories = [
  "Agriculture",
  "Healthcare", 
  "Housing",
  "Education",
  "Employment",
  "Social Security",
  "Women & Child",
  "Senior Citizens",
  "Disability Welfare",
  "Environment",
  "Financial Services",
  "Startup & Innovation"
];

export const SearchAndFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  resultsCount
}: SearchAndFilterProps) => {
  const clearFilters = () => {
    onSearchChange("");
    onCategoryChange("");
    onSortChange("name");
  };

  const hasActiveFilters = searchQuery || selectedCategory;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search schemes by name, category, benefits, or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>

          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name (A-Z)</SelectItem>
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="beneficiaries">Most Beneficiaries</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          )}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1">
                Search: "{searchQuery}"
                <button
                  onClick={() => onSearchChange("")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {selectedCategory && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <button
                  onClick={() => onCategoryChange("")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          {resultsCount} scheme{resultsCount !== 1 ? 's' : ''} found
        </div>
      </div>
    </div>
  );
};