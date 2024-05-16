import Image from "next/legacy/image";
import Link from "next/link";
export default function Logo() {
    return (
        <div>
            <Link href={"/"}>
                <Image
                    src="/assets/images/royal-logo.png"
                    alt="remaxroyal_logo"
                    width={80} height={30} priority={true}
                    loading="eager"
                    className=" aspect-auto"
                />
            </Link>
        </div>
    );
}
