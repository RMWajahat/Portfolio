"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { useFormik } from "formik"
import * as Yup from "yup"

export default function Contact() {
    const useSubmit = () => {
        const [isLoading, setIsLoading] = useState(false)

        const submit = async (data: any) => {
            setIsLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 2000))
            setIsLoading(false)
            return { success: true }
        }

        return { submit, isLoading }
    }

    const useAlertContext = () => {
        const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)

        const onOpen = (type: "success" | "error", message: string) => {
            setAlert({ type, message })
            setTimeout(() => setAlert(null), 5000)
        }

        return { alert, onOpen }
    }


    const { alert, onOpen } = useAlertContext()
    const { submit, isLoading } = useSubmit();

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        type: Yup.string().required("Please select an enquiry type"),
        comment: Yup.string().required("Message is required"),
    })





    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const result = await submit(values)
                if (result.success) {
                    onOpen("success", "Message sent successfully!")
                    resetForm()
                }
            } catch (error) {
                onOpen("error", "Failed to send message. Please try again.")
            }
        },
    })



    return (
        <section id="contactme-section" className="py-20 px-4 bg-gray-900">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Let's Work Together</h2>

                {alert && (
                    <Alert className={`mb-6 ${alert.type === "success" ? "border-green-500" : "border-red-500"}`}>
                        <AlertDescription className={alert.type === "success" ? "text-green-400" : "text-red-400"}>
                            {alert.message}
                        </AlertDescription>
                    </Alert>
                )}

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="firstName" className="text-white">
                            Full Name
                        </Label>
                        <Input
                            id="firstName"
                            {...formik.getFieldProps("firstName")}
                            className="mt-1 bg-gray-800 border-gray-700 text-white"
                            placeholder="Enter your full name"
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="email" className="text-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...formik.getFieldProps("email")}
                            className="mt-1 bg-gray-800 border-gray-700 text-white"
                            placeholder="Enter your email"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.email}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="type" className="text-white">
                            Type of Enquiry
                        </Label>
                        <Select onValueChange={(value) => formik.setFieldValue("type", value)}>
                            <SelectTrigger className="mt-1 bg-gray-800 border-gray-700 text-white">
                                <SelectValue placeholder="Select enquiry type" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-700">
                                <SelectItem value="freelance">Freelance Project</SelectItem>
                                <SelectItem value="fulltime">Full-time Opportunity</SelectItem>
                                <SelectItem value="datascience">Data Science Project</SelectItem>
                                <SelectItem value="consultation">Consultation</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {formik.touched.type && formik.errors.type && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.type}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="comment" className="text-white">
                            Message
                        </Label>
                        <Textarea
                            id="comment"
                            {...formik.getFieldProps("comment")}
                            className="mt-1 bg-gray-800 border-gray-700 text-white min-h-[120px]"
                            placeholder="Tell me about your project..."
                        />
                        {formik.touched.comment && formik.errors.comment && (
                            <p className="text-red-400 text-sm mt-1">{formik.errors.comment}</p>
                        )}
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full bg-white text-black hover:bg-gray-200">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </form>
            </div>
        </section>
    )
}