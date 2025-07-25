export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium"
    >
      Skip to main content
    </a>
  );
}