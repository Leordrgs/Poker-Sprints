import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "@/hooks/use-form";
import { LoginSchema, loginSchema } from "@/schemas/login";
import { useNavigate } from 'react-router-dom'

export function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const { register, handleSubmit } = useForm<LoginSchema>({
    schema: loginSchema,
  })
  const handleLogin = async (data: LoginSchema) => {
    await signIn(data.email, data.password)
    navigate('/rooms/test')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Faça login</CardTitle>
          <CardDescription>Entre com sua conta para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" onSubmit={handleSubmit(handleLogin)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="example@mail.com" {...register('email')} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="Digite sua senha..." {...register('password')} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" form="login-form">Entrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}