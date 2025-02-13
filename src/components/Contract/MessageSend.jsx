import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReuseSubHeader from "../../section/Shared/ReuseSubHeader";

export default function MessageSend() {
    const { register, handleSubmit, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await axios.post("YOUR_API_ENDPOINT_HERE", data);
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            alert("Failed to send message");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <div>
            {/* Contract */}
            <ReuseSubHeader title="Contract Us" subtitle="Home /Contract Us" />
            <div className="flex items-center justify-center min-h-screen  ">

                <Card className="w-[1006px] h-[831px]  p-8">
                    <CardContent>
                        <h2 className="text-4xl font-semibold mb-6 text-center leading-tight tracking-tight">Send Your Message</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3>First Name</h3>
                                    <Input
                                        {...register("firstName", { required: true })}
                                        placeholder="First Name"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <h3>Last Name</h3>
                                    <Input
                                        {...register("lastName", { required: true })}
                                        placeholder="Last Name"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h3>Last Name</h3>
                                    <Input
                                        {...register("email", { required: true })}
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <h3>Last Name</h3>

                                    <Input
                                        {...register("phone", { required: true })}
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>


                            <div>
                                <h3>Your Message</h3>
                                <Textarea
                                    {...register("message", { required: true })}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full h-[350px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>


    );
}

