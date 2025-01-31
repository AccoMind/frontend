import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const LoginPage: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
    alert("Logged in successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md flex flex-col justify-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" required />
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Enter your password" required />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
