import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return (
        <>
            <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400 text-xs">Agendamentos</h2>

            <Card>
                <CardContent className="flex justify-between md:justify-around p-0">
                    <div className="flex flex-col gap-2 py-5 pl-5">
                        <Badge className="w-fit">Confirmado</Badge>
                        <h3 className="font-semibold">Corte de cabelo</h3>
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            </Avatar>
                            <p>Barbearia</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                        <p className="text-sm">Agosto</p>
                        <p className="text-2xl">05</p>
                        <p className="text-sm">20:00</p>
                    </div>
                </CardContent>
            </Card>

        </>
    );
}

export default BookingItem;