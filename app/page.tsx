import { Button } from "@/components/ui/button"
import { auth, SignInButton, SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Scrap News Admin</h1>
      
      {userId ? (
        <div>
          <p className="mb-2">Bienvenido, usuario autenticado!</p>
          <Button asChild>
            <SignOutButton />
          </Button>
        </div>
      ) : (
        <div>
          <p className="mb-2">Por favor, inicia sesión para acceder al panel de administración.</p>
          <Button asChild>
            <SignInButton />
          </Button>
        </div>
      )}
    </div>
  );
}
