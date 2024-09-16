import Image from "next/image";
import Link from "next/link"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Avatar, AvatarImage } from "./ui/avatar"
import { quikSearchOptions } from "../_constants/search"
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog";
import { DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";

export const SidebarButton = () => {
    return (
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



                <div className=" flex justify-between items-center py-5 gap-3 border-b border-solid">

                    <h2 className="font-bold">Olá, faça seu login!</h2>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="icon">
                                <LogInIcon />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[90%]">
                            <DialogHeader>
                                <DialogTitle>Faça seu login na plataforma</DialogTitle>
                                <DialogDescription>
                                    Conecte-se usando sua conta do Google.
                                </DialogDescription>
                            </DialogHeader>

                            <Button className="flex gap-2 font-bold" variant="outline">
                                <Image alt="Fazer login com a Google" src="/google.svg" width={18} height={18} />
                                Google
                            </Button>
                        </DialogContent>
                    </Dialog>

                    {/* <Avatar>
                        <AvatarImage src="https://images.pexels.com/photos/28114092/pexels-photo-28114092/free-photo-of-tecnologia-computador-pc-moderno.jpeg?auto=compress&cs=tinysrgb&w=400" />
                    </Avatar>

                    <div>
                        <p className="font-bold">Guilherme Verissimo</p>
                        <p className="text-xs">guilhermeverissimo14@gmail.com</p>
                    </div> */}
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
    )
}