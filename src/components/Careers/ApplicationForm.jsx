import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from 'axios';
import { agentsList } from "../marketplace/Step2";
import { MenuItem, MenuList, Select } from "@mui/material";
import Container from "../layout/Container";

export function ApplicationForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [verificationID, setVerificationID] = useState('');
    const [resume, setResume] = useState(null);
    const [introductionVideo, setIntroductionVideo] = useState(null);
    const [reasonToWork, setReasonToWork] = useState('');
    const [role, setRole] = useState('');
    const [relevantSkills, setRelevantSkills] = useState('');
    const [additionalSkills, setAdditionalSkills] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreed) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        const formData = new FormData();

        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('zipcode', zipcode);
        formData.append('verificationID', verificationID);
        formData.append('resume', resume);
        formData.append('introductionVideo', introductionVideo);
        formData.append('reasonToWork', reasonToWork);
        formData.append('role', role);
        formData.append('relevantSkills', relevantSkills);
        formData.append('additionalSkills', additionalSkills);
        formData.append('certificate', certificate);

         //Send formData to the backend 
         axios.post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/apply`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('Success:', response.data);
            state.open = false;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <section className="grid place-items-center pb-10 ">
            <Card color="transparent" shadow={false} className="w-full flex items-center justify-center">
                <Typography variant="h4" className="text-[#253359] playfair-display-font font-bold">
                    Apply Now
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Whether you're an experienced professional or looking to start a new career, we'd love to hear from you.
                </Typography>
                <form className="mt-8 mb-2 " onSubmit={handleSubmit}>
                    <div className="mb-1 gap-6 grid grid-cols-2">

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Full Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="John"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Phone Number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="(123) 456-7890"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Address
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="123 Main St"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Country
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                City
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Zipcode
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Zipcode"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Verification ID
                            </Typography>
                            <Input
                                type="file"
                                size="lg"
                                onChange={(e) => setVerificationID(e.target.files[0])}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Resume
                            </Typography>
                            <Input
                                type="file"
                                size="lg"
                                onChange={(e) => setResume(e.target.files[0])}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                {`Why should we hire you? (Upload 2 min video) `}
                            </Typography>
                            <Input
                                type="file"
                                size="lg"
                                onChange={(e) => setIntroductionVideo(e.target.files[0])}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Why would you want to work for a startup like us ? 
                         </Typography>
                            <Input
                                size="lg"
                                placeholder=""
                                value={reasonToWork}
                                onChange={(e) => setReasonToWork(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Role You Are Applying For
                            </Typography>
                            <Select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-10"
                                required
                            >
                                {agentsList.map((agent, index) => (
                                    <MenuItem key={index} value={agent} >
                                        {agent}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Rate Your Relevant Skills out of 5
                            </Typography>
                            <Input
                                size="lg"
                                value={relevantSkills}
                                onChange={(e) => setRelevantSkills(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Typography variant="h6" color="blue-gray" >
                                Additional Skills {`(Optional)`}
                            </Typography>
                            <Input
                                size="lg"
                                value={additionalSkills}
                                onChange={(e) => setAdditionalSkills(e.target.value)}
                                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4 justify-center self-center">
                        <Typography variant="h6" color="blue-gray" >
                            Certificates {`(Optional)`}
                        </Typography>
                        <Input
                            type="file"
                            size="lg"
                            onChange={(e) => setCertificate(e.target.files[0])}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            fullWidth
                        />
                    </div>

                    <div className="flex w-full justify-center items-center mt-2">
                        <Checkbox
                            label="I agree to the Terms and Conditions"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            required
                        />
                    </div>
                    <Button className="mt-6 bg-[#253359] rounded-[20px]" fullWidth type="submit">
                        Apply Now
                    </Button>
                </form>
            </Card>

            <Container>
                <div className="flex flex-col gap-2 p-10">
                    <h1 className="font-bold text-xl">Start Your Journey with Us </h1>
                    <p className="text-gray-800">At Your Support Agent, we believe in empowering our virtual assistants to do their best work. If you're driven, passionate, and ready to make a difference, we want you on our team. Let's work together to help businesses succeed while building a fulfilling career for yourself.</p>
                </div>
            </Container>
        </section>
    );
}
