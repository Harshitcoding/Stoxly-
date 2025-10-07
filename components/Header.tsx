import Image from "next/image"
import Link from "next/link"
import Navitems from "./Navitems"
import UserDropdown from "./UserDropdown"
import { searchStocks } from "@/lib/actions/finnhub.actions"

const Header = async ({user}:{user:User}) => {
    const initialStocks = await searchStocks()
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
            <Image src="/assets/icons/logoo.svg" alt="logo" width={160} height={50} className="h-10 w-auto cursor-pointer"/>
            </Link>
            <nav className="hidden sm:block">
                {/*Navlinks */}
                <Navitems initialStocks={initialStocks}/>
            </nav>
            {/*UserDropdown */}
            <UserDropdown user={user} initialStocks={initialStocks}/>  
        </div>
    </header>
  )
}
export default Header