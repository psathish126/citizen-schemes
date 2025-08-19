import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Users, MapPin } from "lucide-react";

import { Scheme } from "@/hooks/useSchemes";

interface SchemeCardProps {
  scheme: Scheme;
  onViewDetails?: (scheme: Scheme) => void;
}

export const SchemeCard = ({ scheme, onViewDetails }: SchemeCardProps) => {
  const handleApplyNow = () => {
    window.open(scheme.applicationLink, '_blank');
  };

  const handleViewDetails = () => {
    onViewDetails?.(scheme);
  };
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight mb-2">
              {scheme.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {scheme.ministry}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-xs">
            {scheme.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-foreground mb-4 line-clamp-3">
          {scheme.description}
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {scheme.benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="line-clamp-1">{benefit}</li>
              ))}
              {scheme.benefits.length > 2 && (
                <li className="text-primary text-xs">+{scheme.benefits.length - 2} more benefits</li>
              )}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {scheme.beneficiaries}
            </span>
            {scheme.state && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {scheme.state}
              </span>
            )}
            {scheme.deadline && (
              <span className="flex items-center gap-1 text-destructive">
                <Clock className="h-3 w-3" />
                Deadline: {scheme.deadline}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="w-full space-y-2">
          <Button 
            className="w-full" 
            size="sm"
            onClick={handleApplyNow}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Apply Now
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};