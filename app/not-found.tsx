import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-[#B80000] uppercase tracking-[0.3em] text-sm mb-6">
          Error 404
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] leading-none mb-6">
          Page Not Found
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-full
            bg-[#B80000]
            text-white
            hover:opacity-90
            transition
          "
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
