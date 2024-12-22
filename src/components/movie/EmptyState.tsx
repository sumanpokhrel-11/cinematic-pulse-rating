import { Film } from "lucide-react";

interface EmptyStateProps {
  type: string;
  customMessage?: string;
}

const EmptyState = ({ type, customMessage }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
      <Film className="mb-4 h-16 w-16 text-cinema-sage opacity-50" />
      <p className="text-lg mb-2">
        {customMessage || `No movies in your ${type} yet`}
      </p>
      <p className="text-sm text-cinema-text/70">
        Start adding movies to keep track of what you want to watch!
      </p>
    </div>
  );
};

export default EmptyState;