import Image from "next/image"
import { ModeToggle } from "./modeToogle"
import Link from "next/link"
import WalletButtons from "./walletButtons"

const Navbar = () => {

    return (
        <div className="flex justify-between items-center px-7 py-6">

            <Image
                src="/logo.png" 
                alt="logo" 
                width={100}
                height={10}
                className="w-100 h-8 object-cover"
            />

            <div className="flex items-center gap-8">

                <nav>
                    <ul className="flex items-center gap-8">
                        <Link href="/"><li className="size-16px font-semibold">Home</li></Link>
                        <Link href="/#"><li className="size-16px font-semibold">Explore</li></Link>
                        <Link href="/#"><li className="size-16px font-semibold">Stats</li></Link>
                        <Link href="/#"><li className="size-16px font-semibold">My NFTs</li></Link>
                    </ul>
                </nav>

                <WalletButtons />
                
                <ModeToggle />

            </div>
        </div>
    )
}

export default Navbar;