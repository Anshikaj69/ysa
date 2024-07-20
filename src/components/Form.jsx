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
import { useState } from "react";
import axios from 'axios'
import envCompatible from 'vite-plugin-env-compatible'

export function BookingForm() {
    const snap = useSnapshot(state);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [industry, setIndustry] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [file, setFile] = useState(null);
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreed) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('companyName', companyName);
        formData.append('industry', industry);
        formData.append('companySize', companySize);
        formData.append('additionalInfo', additionalInfo);
        formData.append('file', file);
        formData.append('plan', state.plan);
        formData.append('agents', JSON.stringify(state.agents));
        formData.append('day', state.day);
        formData.append('date', state.date);

        // Send formData to the backend (e.g., using fetch or axios)
        axios.post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/email`, {
            formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                state.open = false;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <section className="grid place-items-center h-screen ">
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

                <DialogBody className=" h-[70vh] overflow-y-scroll">
                    <Card color="transparent" shadow={false} className="w-full flex items-center justify-center">
                        <Typography variant="h4" color="blue-gray">
                            Book a Consultation
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Please provide your details to schedule a call.
                        </Typography>
                        <form className="mt-8 mb-2 w-96 max-w-screen-xl sm:w-96" onSubmit={handleSubmit}>
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Phone Number
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="(123) 456-7890"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Company Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Company LLC"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Industry
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Industry Type"
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Size of the Company
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Number of employees"
                                    value={companySize}
                                    onChange={(e) => setCompanySize(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Other Additional Information (Optional)
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Any additional info"
                                    value={additionalInfo}
                                    onChange={(e) => setAdditionalInfo(e.target.value)}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Upload Files (Optional)
                                </Typography>
                                <Input
                                    type="file"
                                    size="lg"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <Checkbox
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                label={
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree to the
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
                            <Button type="submit" className="mt-6" fullWidth>
                                Submit
                            </Button>
                        </form>
                    </Card>
                </DialogBody>
            </Dialog>
        </section>
    );
}
