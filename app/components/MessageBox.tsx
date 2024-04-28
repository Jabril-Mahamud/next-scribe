/*
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
}

interface Props {
    salesData: Sale[];
}

export default function Component({ salesData }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                {salesData.map((sale, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <Avatar className="hidden h-9 w-9 sm:flex">
                            <AvatarImage src={sale.avatarSrc} alt="Avatar" />
                            <AvatarFallback>{sale.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm text-muted-foreground">{sale.date}</p>
                            <p className="text-sm text-muted-foreground">{sale.time}</p>
                        </div>
                        <div className="grid gap-1">
                            <p className="text-sm text-muted-foreground">{sale.message}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
*/