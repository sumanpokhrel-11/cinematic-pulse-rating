import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthCard({ title, description, children, className, ...props }: AuthCardProps) {
  return (
    <Card className={cn("w-full max-w-md", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-2xl text-center bg-gradient-to-r from-cinema-text to-cinema-accent bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}