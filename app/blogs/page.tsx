import Link from 'next/link';

export default function Blogs() {
  return ( 
    <div className="container mx-auto px-6 py-12 md:px-8 md:py-16">
      
      <h1 className="text-3xl font-bold mb-6">Welcome to Blogs</h1>
      <p className="text-muted-foreground">
        You can open{' '}
        <Link href="/docs" className="font-medium underline text-primary">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>

    </div>
  );
}