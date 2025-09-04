import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const SideSummeryCard = () => {
    const transferDetails = {
        transfer_amount: "USD " + 100,
        trnasfer_fees: "USD " + 10,
        discount: 0 + `% (USD ${0.0})`,
        you_spend: `USD ${110}`,
    };
    return (
        <Card className="w-full shadow-none rounded-sm sticky top-[3rem] border-none">
            <CardHeader>
                <CardTitle className="capitalize text-xl font-semibold pb-3">
                    Exchange Rate
                </CardTitle>
                <p className="text-end">1 USD = 592.2 XAF</p>
            </CardHeader>
            <CardContent>
                <h6 className="text-xl font-semibold pb-3">Transfer Details</h6>
                <div className="flex flex-col w-full">
                    {Object.entries(transferDetails).map(([key, value], i) => {
                        return (
                            <div
                                key={"transferDetails" + i}
                                className="py-3 flex items-center justify-between"
                            >
                                <p className="text-muted-foreground capitalize">
                                    {key.replaceAll("_", " ")}
                                </p>
                                <p className="font-semibold">{value}</p>
                            </div>
                        );
                    })}
                    {/* Temporary content to force scrolling */}
                </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
                <h6 className="text-xl font-semibold capitalize">
                    Beneficiary Gets
                </h6>
                <p className="font-semibold">XAF 59,000</p>
            </CardFooter>
        </Card>
    );
};

export default SideSummeryCard;
