import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/BarberShop-item";
import { quikSearchOptions } from "./_constants/search";
import BookingItem from "./_components/Booking-item";


const Home = async () => {

  const barbershops = await db.barbershop.findMany({});

  const popularBarberShops = await db.barbershop.findMany({
    orderBy: { name: "desc" }
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João</h2>
        <p>Segunda feira, 05 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
          {quikSearchOptions.map((option) => (
            <Button key={option.title} className="gap-2" variant="secondary">
              <Image alt={option.title} src={option.imageUrl} width={16} height={16} />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 md:h-[350px] h-[150px] w-full ">
          <Image
            alt="Agende nos melhores com o barbeiros"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover" />
        </div>

        <BookingItem />

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400 text-xs">
          Recomendados
        </h2>

        <div className="flex gap-4  overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400 text-xs">
          Populares
        </h2>

        <div className="flex gap-4  overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {popularBarberShops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
