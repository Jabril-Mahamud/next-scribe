import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Sale {
    date: string;
    time: string;
    message: string;
    avatarSrc: string;
    initials: string;
    numbers: number;
}

interface Props {
    salesData: Sale[];
}

export default function MiniHistory({ salesData }: Props) {
    return (
        <Card>
            <CardContent className="space-y-4 pt-2 pb-4">
                {salesData.map((sale, index) => (
                    <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-9 w-9 sm:hidden">
                                <AvatarImage src={sale.avatarSrc} alt="Avatar" />
                                <AvatarFallback>{sale.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                                <b className="text-sm text-muted-foreground">{sale.date}</b>
                                <b className="text-sm text-muted-foreground">{sale.time}</b>
                            </div>
                            <div className="grid gap-1">
                                <p className="text-sm text-muted-foreground">{sale.message}</p>
                            </div>
                            <div className="ml-auto font-medium">{sale.numbers}</div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}