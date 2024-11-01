import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Lista de rutas públicas que no requieren autenticación
const publicRoutes = ["/sign-in", "/sign-up"];

export default authMiddleware({
  afterAuth(auth, req) {
    // Si el usuario no está autenticado y no es una ruta pública
    if (!auth.userId && !publicRoutes.includes(req.nextUrl.pathname)) {
      // Redirigir a la página de inicio de sesión
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Si el usuario está autenticado y trata de acceder a páginas de auth
    if (auth.userId && publicRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Permitir la solicitud para todas las demás rutas
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
