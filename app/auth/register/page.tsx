import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { SignupForm } from "./signup-form";

export default async function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0 ">
        <CardHeader className="space-y-4 pb-8 text-center">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">
              Créez votre compte
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <SignupForm />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Vous avez déjà un compte ?{" "}
              <Link
                href="/auth/signin"
                className="font-medium text-primary hover:underline"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
