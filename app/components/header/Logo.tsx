import Image from "next/image";
import Link from "next/link";
export default function Logo() {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src="/assets/images/royal-logo.png"
                    alt="remaxroyal_logo"
                    width={100}
                    height={100}
                    loading="eager"
                />
            </Link>
        </div>
    );
}
