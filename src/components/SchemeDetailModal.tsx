import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Clock, Users, MapPin, CheckCircle, FileText } from "lucide-react";
import { Scheme } from "@/hooks/useSchemes";

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SchemeDetailModal = ({ scheme, isOpen, onClose }: SchemeDetailModalProps) => {
  if (!scheme) return null;

  const handleApplyNow = () => {
    window.open(scheme.applicationLink, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl leading-tight mb-2">
                {scheme.name}
              </DialogTitle>
              <DialogDescription className="text-base">
                {scheme.ministry}
              </DialogDescription>
            </div>
            <Badge variant="secondary" className="text-sm">
              {scheme.category}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Info */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {scheme.beneficiaries}
            </span>
            {scheme.state && (
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {scheme.state}
              </span>
            )}
            {scheme.deadline && (
              <span className="flex items-center gap-2 text-destructive">
                <Clock className="h-4 w-4" />
                Deadline: {scheme.deadline}
              </span>
            )}
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              About This Scheme
            </h3>
            <p className="text-foreground leading-relaxed">
              {scheme.description}
            </p>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Key Benefits
            </h3>
            <ul className="space-y-2">
              {scheme.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Eligibility */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Eligibility Criteria
            </h3>
            <ul className="space-y-2">
              {scheme.eligibility.map((criteria, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleApplyNow} size="lg" className="flex-1">
              <ExternalLink className="h-5 w-5 mr-2" />
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Save for Later
            </Button>
            <Button variant="secondary" size="lg" className="flex-1">
              Share Scheme
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
            <p className="font-medium mb-1">Important Note:</p>
            <p>
              Please verify all information and eligibility criteria on the official government website before applying. 
              Terms and conditions may apply.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};