import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quikSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";


const Header = () => {
    return (
        <Card>
            <CardContent className=" flex flex-grow p-5 justify-between items-center">
                <Image src="/logo.png" alt="logo barber" width={120} height={18} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        <div className=" flex itemns-center py-5 gap-3 border-b border-solid">
                            <Avatar>
                                <AvatarImage src="https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-tecnologia-computador-pc-moderno.jpeg?auto=compress&cs=tinysrgb&w=400" />
                            </Avatar>

                            <div>
                                <p className="font-bold">Guilherme Verissimo</p>
                                <p className="text-xs">guilhermeverissimo14@gmail.com</p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-2  py-5 border b border-solid">
                            <SheetClose asChild>
                                <Button className="justify-start gap-2" variant="ghost">
                                    <Link className="flex items-center gap-2" href="/">
                                        <HomeIcon size={18} />
                                        Início
                                    </Link>
                                </Button>
                            </SheetClose>
                            <Button className="justify-start gap-2" variant="ghost">
                                <CalendarIcon size={18} />
                                Agendamento
                            </Button>
                        </div>
                        <div className=" flex flex-col gap-1  py-5 border b border-solid">

                            {quikSearchOptions.map(option => (

                                <Button
                                    key={option.title}
                                    className="justify-start gap-2"
                                    variant="ghost"
                                >
                                    <Image
                                        alt={option.title}
                                        src={option.imageUrl}
                                        height={18}
                                        width={18}
                                    />

                                    {option.title}

                                </Button>

                            ))}
                        </div>

                        <div className=" flex flex-col gap-2  py-5">

                            <Button variant="ghost" className="justify-start gap-2">
                                <LogOutIcon size={18} />
                                Sair da conta
                            </Button>

                        </div>
                    </SheetContent>
                </Sheet>

            </CardContent>
        </Card>
    )
}

export default Header;