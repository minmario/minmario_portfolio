export function Footer() {
  return (
    <footer className="border-t py-8 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 민재홍. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
