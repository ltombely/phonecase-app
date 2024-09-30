import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200 pt-2" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items:center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Termos de Serviço
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Política de Cookies
              </Link>
              <div>
                <span className="text-sm text-muted-foreground">
                  Inspirado em{" "}
                </span>
                <Link
                  href="https://www.youtube.com/@joshtriedcoding"
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  @joshtriedcoding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
