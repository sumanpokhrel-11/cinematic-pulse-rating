import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-cinema-primary to-background">
      <div className="w-full max-w-md animate-in slide-in-from-bottom duration-500">
        <AuthCard
          title="Welcome Back"
          description="Enter your credentials to access your account"
        >
          <LoginForm />
        </AuthCard>
      </div>
    </div>
  );
};

export default Login;