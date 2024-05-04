import Link from "next/link";

export default function Nav() {
    return (
        <>
            <div className="flex justify-center gap-12 py-4">
                <Link href="/"><h1 className="text-3xl font-bold">Home</h1></Link>
                <Link href="/Projects"><h1 className="text-3xl font-bold">Projects</h1></Link>
                <Link href="/Blog"><h1 className="text-3xl font-bold">Blog</h1></Link>
                <Link href="/About"><h1 className="text-3xl font-bold">About</h1></Link>
            </div>
        </>
    );
}