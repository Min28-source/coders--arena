"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export default function AddPlayersDialog() {
    const params = useParams()
    return (
        
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 px-5 py-2.5 text-base"
                    >
                        <Plus/>
                            Add Player
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Share link</DialogTitle>
                        <DialogDescription>
                            Anyone who has this link will be able to enter the contest.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center gap-2">
                        <div className="grid flex-1 gap-2">
                            <Label htmlFor="link" className="sr-only">
                                Link
                            </Label>
                            <Input
                                id="link"
                                 defaultValue={`${window.location.origin}/room/${params.roomId}`}
                                readOnly
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="button">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        
    )
}
