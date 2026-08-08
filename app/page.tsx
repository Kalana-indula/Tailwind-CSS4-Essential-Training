import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>This is a header</h1>
            <ul>
                <li>
                    <Link href="/utility-first-approach">Utility First Approach</Link>
                </li>
                <li>

                    <Link href="/typography-colors">Typography Colors</Link>
                </li>
            </ul>
        </>
    );
}
