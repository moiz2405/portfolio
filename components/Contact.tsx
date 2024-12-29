import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// all good just checkin
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Contact</h2>
      <form className="space-y-4">
        <div>
          <Input type="text" placeholder="Your Name" className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400" />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400" />
        </div>
        <div>
          <Textarea placeholder="Your Message" className="bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-400" rows={4} />
        </div>
        <Button type="submit" className="bg-blue-400 text-gray-900 hover:bg-blue-500 transition-colors">
          Send Message
        </Button>
      </form>
    </section>
  )
}

