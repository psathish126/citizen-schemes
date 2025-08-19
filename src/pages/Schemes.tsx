import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SchemeCard } from "@/components/SchemeCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { SchemeDetailModal } from "@/components/SchemeDetailModal";
import { useSchemes, Scheme } from "@/hooks/useSchemes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Schemes = () => {
  const navigate = useNavigate();
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    schemes,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy
  } = useSchemes();

  const handleViewDetails = (scheme: Scheme) => {
    setSelectedScheme(scheme);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScheme(null);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold mb-2">All Government Schemes</h1>
          <p className="text-lg text-muted-foreground">
            Discover and apply for government schemes across all categories
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <SearchAndFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultsCount={schemes.length}
          />
        </div>

        {/* Results */}
        {schemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-2">No schemes found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}

        {/* Scheme Detail Modal */}
        <SchemeDetailModal
          scheme={selectedScheme}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </Layout>
  );
};

export default Schemes;