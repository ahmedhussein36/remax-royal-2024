import Image from "next/image";
export default function Logo() {
    return (
        <div>
            <Image
                src="/assets/images/royal-logo.png"
                alt="remaxroyal_logo"
                width={100}
                height={100}
                // loading="lazy"
            ></Image>
        </div>
    );
}
