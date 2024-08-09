import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarberShopPageProps {
    params: {
        id: string
    }
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })

    if (!barbershop) {
        return notFound();
    }

    return (
        <div>
            <div className="relative w-full h-[250px]">

                <Image
                    alt={barbershop?.name}
                    src={barbershop?.imageUrl}
                    fill
                    className="object-cover"
                />

                <Button asChild size="icon" variant="secondary" className="absolute top-4 left-4">
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Button asChild size="icon" variant="secondary" className="absolute top-4 right-4">
                    <MenuIcon />
                </Button>

            </div>

            <div className="p-5 border-b border-solid">
                <h1 className="text-xl font-bold mb-3">{barbershop?.name}</h1>
                <div className="mb-2 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop?.address}</p>
                </div>

                <div className="flex items-center gap-2">
                    <StarIcon className=" fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 499 avaliações</p>
                </div>
            </div>

            <div className="p-5 border-b border-solid space-y-3">
                <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
                <p className="text-sm text-justify">{barbershop?.description}</p>
            </div>

        </div>
    );
}

export default BarberShopPage;