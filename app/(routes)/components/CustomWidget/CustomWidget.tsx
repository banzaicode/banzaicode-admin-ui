import CustomIcon from "@/components/CustomIcon";
import { Building } from "lucide-react";


export default function CustomWidget() {
    return (
        <div className="shadow-sm bg-background rounded-lg p-5">
            <div className="flex gap-x-2 items-center">
                <CustomIcon icon={Building} />
                <p className="text-xl">Last News Market</p>
            </div>
            <div>
                
            </div>
        </div>
    )
}