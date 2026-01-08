import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { SigninForm } from "./signin-form";

export default async function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardHeader className="space-y-4 pb-8 text-center">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Bon retour</CardTitle>
            <p className="text-sm text-muted-foreground">
              Connectez-vous à votre compte
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <SigninForm />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Vous n&apos;avez pas de compte ?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-primary hover:underline"
              >
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
