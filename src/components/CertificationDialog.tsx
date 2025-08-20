import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface CertificationDialogProps {
  badge: React.ReactNode;
  title: string;
  issuer: string;
  description?: string;
  skills?: string[];
  issuedDate?: string;
}

const CertificationDialog = ({ badge, title, issuer, description, skills, issuedDate }: CertificationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer transform hover:scale-105 transition-transform duration-200">
          {badge}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] sm:max-h-[600px] overflow-y-auto">
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="w-24 h-24">
            {badge}
          </div>
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground">{issuer}</p>
            {issuedDate && (
              <p className="text-sm text-muted-foreground">Issued: {issuedDate}</p>
            )}
          </div>

          {description && (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}

          {skills && skills.length > 0 && (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-3">Skills Covered</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationDialog;