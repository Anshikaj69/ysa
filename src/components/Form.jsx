import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
} from "@material-tailwind/react";
import { useSnapshot } from "valtio";
import state from "../store";

export function BookingForm() {
    const snap = useSnapshot(state)




    return (
        <>

            <section className="grid place-items-center h-screen">
                <Dialog className="p-4" size="md" open={snap.open} >
                    <DialogHeader className="justify-between">
                        {/* cancel button */}
                        <IconButton
                            color="gray"
                            size="sm"
                            variant="text"
                            onClick={() => { state.open = false }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </DialogHeader>

                    <DialogBody className="overflow-y-scroll">
                        <Card color="transparent" shadow={false}>
                            <Typography variant="h4" color="blue-gray">
                                Sign Up
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Your Name
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Your Email
                                    </Typography>
                                    <Input
                                        size="lg"
                                        placeholder="name@mail.com"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                                        Password
                                    </Typography>
                                    <Input
                                        type="password"
                                        size="lg"
                                        placeholder="********"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                        >
                                            I agree the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{ className: "-ml-2.5" }}
                                />
                                <Button className="mt-6" fullWidth>
                                    sign up
                                </Button>
                                <Typography color="gray" className="mt-4 text-center font-normal">
                                    Already have an account?{" "}
                                    <a href="#" className="font-medium text-gray-900">
                                        Sign In
                                    </a>
                                </Typography>
                            </form>
                        </Card>

                    </DialogBody>
                </Dialog>
            </section>




        </>
    )


}