import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={async() => {
            'use server'
            await signIn('github')
          }}>Login with Github</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
