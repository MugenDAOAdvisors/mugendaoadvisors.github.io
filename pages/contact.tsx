import Form from "@/components/Form"

export default function Contact (){
    return (
        <div className="mx-[130px]">
            <div className="flex">
                <div className="w-1/2">
                    <h1>LET’S CREATE SOMETHING <span className="text-[#EE6FA3]">AMAZING</span> TOGETHER!</h1>
                    <p className="w-2/3">Discussing a project or an idea with us is easy. Just fill in this form and we’ll contact you.</p>
                </div>
                <div className="w-1/2">
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}