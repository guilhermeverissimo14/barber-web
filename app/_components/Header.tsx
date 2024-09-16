import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { SidebarButton } from "./Sidebar-button";

const Header = () => {
    return (
        <Card>
            <CardContent className=" flex flex-grow p-5 justify-between items-center">
                <Image src="/logo.png" alt="logo barber" width={120} height={18} />

                <SidebarButton />
            </CardContent>
        </Card>
    )
}

export default Header;