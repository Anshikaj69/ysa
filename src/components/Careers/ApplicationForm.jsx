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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [role, setRole] = useState('');
    const [resume, setResume] = useState(null);
    const [idPassportImage, setIdPassportImage] = useState(null);
    const [languagesSpoken, setLanguagesSpoken] = useState('');
    const [introductionVideo, setIntroductionVideo] = useState(null);
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!agreed) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        const formData = new FormData();
        const fullName = `${firstName} ${lastName}`;

        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('country', country);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('zipcode', zipcode);
        formData.append('role', role);
        formData.append('resume', resume);
        formData.append('idPassportImage', idPassportImage);
        formData.append('languagesSpoken', languagesSpoken);
        formData.append('introductionVideo', introductionVideo);

        // Send formData to the backend (e.g., using fetch or axios)
        axios.post(`${import.meta.env.REACT_APP_BACKEND_URL}/api/apply`, formData)
            .then(response => {
                console.log('Success:', response.data);
                // Handle success
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error
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
                <form className="mt-8 mb-2 w-[30%]" onSubmit={handleSubmit}>
                    <div className="mb-1 flex flex-col gap-6">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <Typography variant="h6" color="blue-gray">
                                    First Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="John"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <Typography variant="h6" color="blue-gray">
                                    Last Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Doe"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                            </div>
                        </div>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            State
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            ID/Passport Image
                        </Typography>
                        <Input
                            type="file"
                            size="lg"
                            onChange={(e) => setIdPassportImage(e.target.files[0])}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Languages Spoken
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Languages Spoken"
                            value={languagesSpoken}
                            onChange={(e) => setLanguagesSpoken(e.target.value)}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Introduction Video
                        </Typography>
                        <Input
                            type="file"
                            size="lg"
                            onChange={(e) => setIntroductionVideo(e.target.files[0])}
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
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
