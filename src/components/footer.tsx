import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t py-8 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between md:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gouri Biswas. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/GouriBiswas" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/gouri-biswas-5b0503298/" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
