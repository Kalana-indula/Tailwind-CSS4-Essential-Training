import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="font-bold text-2xl">This is a header</h1>
            <ul>
                <li>
                    <Link href="/utility-first-approach">Utility First Approach</Link>
                </li>
                <li>
                    <Link href="/typography-colors">Typography Colors</Link>
                </li>
                <li>
                    <Link href="/using-colors">Using colors</Link>
                </li>
                <li>
                    <Link href="/background-colors-and-gradients">Background colors and gradients</Link>
                </li>
                <li>
                    <Link href="/borders-and-shadows">Borders and shadows</Link>
                </li>
                <li>
                    <Link href="/challenge-01">Challenge 01</Link>
                </li>
            </ul>
        </>
    );
}
