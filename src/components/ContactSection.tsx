
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast";
import { useRef, useState } from "react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Use EmailJS to send the email
      await emailjs.send(
        "service_b6afzjq",  // Service ID
        "template_contact",  // Template ID - using a generic name, replace with your actual template ID
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to_email: "maharshipatel2274@gmail.com",
        },
        "YOUR_PUBLIC_KEY"  // Replace with your actual public key
      );
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setShowErrorDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contact Me</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out for collaboration opportunities, questions about my projects,
            or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:mpate125@asu.edu" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground/70">mpate125@asu.edu</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+17148727865" 
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-foreground/70">+1 (714) 872-7865</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/maharshi-patel1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-foreground/70">linkedin.com/in/maharshi-patel1</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/MaharshiPatel2274" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-background/50 transition-colors"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-foreground/70">github.com/MaharshiPatel2274</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="w-full p-2 rounded-md border border-border bg-background/50"
                              placeholder="Your Name"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="w-full p-2 rounded-md border border-border bg-background/50"
                              placeholder="your.email@example.com"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              className="w-full p-2 rounded-md border border-border bg-background/50"
                              placeholder="Your message..."
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">Error sending message</AlertDialogTitle>
            <AlertDialogDescription>
              Please try again later or contact me directly via email.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowErrorDialog(false)}>
              Close
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
