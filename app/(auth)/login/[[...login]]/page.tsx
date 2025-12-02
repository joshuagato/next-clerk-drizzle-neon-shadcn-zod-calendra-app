import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="flex flex-col justify-center h-screen items-center p-5 gap-10 animate-fade-in">
            <Link href="/">
                <Image src="/assets/logo.svg" width={100} height={100} alt="Logo" />
            </Link>

            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    );
}