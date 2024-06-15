import Link from "next/link";

export default function footer() {
  const calculateCopyright = new Date().getFullYear();
  return (
    <>
      <div className="min-h-48"></div>
      <footer className="mt-300 border-x-8from-[#100a18] fixed inset-x-0 bottom-0 bg-gradient-to-b from-[#100a18] to-[#131431] p-6">
        <div className="flex items-center justify-center gap-5">
          <p className="text-l space-x-0">&copy; {calculateCopyright} </p>
          <Link href="https://github.com/TokiLoshi" target="_blank">
            <p className="text-xl">Coding with curiosity</p>
          </Link>
        </div>
      </footer>
    </>
  );
}
