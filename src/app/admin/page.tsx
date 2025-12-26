"use client";

import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // await signInWithEmailAndPassword(auth, email, password);
      
      // MOCK LOGIN
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError("Failed to login. Please check your credentials.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-white p-10 shadow-xl border border-neutral-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Sign in to manage your portfolio
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-500 text-center font-medium bg-red-50 p-2 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-black text-white hover:bg-neutral-800"
            isLoading={loading}
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
