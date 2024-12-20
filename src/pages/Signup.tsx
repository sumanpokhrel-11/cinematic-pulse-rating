import { AuthCard } from "@/components/auth/AuthCard";
import { SignupForm } from "@/components/auth/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-cinema-primary to-background">
      <div className="w-full max-w-md animate-in slide-in-from-bottom duration-500">
        <AuthCard
          title="Create Account"
          description="Sign up to start your cinematic journey"
        >
          <SignupForm />
        </AuthCard>
      </div>
    </div>
  );
};

export default Signup;