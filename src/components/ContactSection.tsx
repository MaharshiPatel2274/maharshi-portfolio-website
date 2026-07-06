import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Check, X, Loader2 } from "lucide-react";
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
import { SectionHeading } from "./SectionHeading";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type EmailValidationStatus = "idle" | "validating" | "valid" | "invalid" | null;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [emailValidation, setEmailValidation] = useState<EmailValidationStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const validateEmail = async (email: string) => {
    if (!email) {
      setEmailValidation("idle");
      return;
    }
    
    // Simple regex pre-check to avoid unnecessary API calls
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailValidation("invalid");
      return;
    }
    
    setEmailValidation("validating");
    
    try {
      const apiUrl = `https://api.zerobounce.net/v2/validate?api_key=2b07c18792b6445d89832e2cac7bfd19&email=${encodeURIComponent(email)}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        // API call failed, fallback to regex validation
        setEmailValidation(emailRegex.test(email) ? "valid" : "invalid");
        return;
      }
      
      const data = await response.json();
      
      // Check ZeroBounce status
      if (data.status === "valid") {
        setEmailValidation("valid");
      } else if (["invalid", "abuse", "do_not_mail"].includes(data.status)) {
        setEmailValidation("invalid");
      } else {
        // For unknown statuses, fallback to regex
        setEmailValidation(emailRegex.test(email) ? "valid" : "invalid");
      }
    } catch (error) {
      // API error - fallback to regex validation
      console.error("Email validation API error:", error);
      setEmailValidation(emailRegex.test(email) ? "valid" : "invalid");
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Use EmailJS to send the email with the real credentials
      await emailjs.send(
        "service_b6afzjq",  // Service ID
        "template_wtfmq4n",  // Template ID
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to_email: "maharshipatel2274@gmail.com",
        },
        "Jr5jAGpXu65yYHZfE"  // Public Key
      );
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
      setEmailValidation("idle");
    } catch (error) {
      console.error("Error sending email:", error);
      setShowErrorDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="I'm actively looking for new-grad software engineering roles and open to collaboration. Whether you have a question or just want to say hello, my inbox is open."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:mpate125@asu.edu" 
                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent transition-colors hover:border-border hover:bg-secondary/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">mpate125@asu.edu</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/maharshi-patel1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent transition-colors hover:border-border hover:bg-secondary/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/maharshi-patel1</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/MaharshiPatel2274" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-transparent transition-colors hover:border-border hover:bg-secondary/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/60">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">github.com/MaharshiPatel2274</p>
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
                              className="w-full bg-background"
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
                          <div className="relative">
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="w-full bg-background pr-10"
                                placeholder="your.email@example.com"
                                required
                                onBlur={(e) => {
                                  field.onBlur();
                                  validateEmail(e.target.value);
                                }}
                                onChange={(e) => {
                                  field.onChange(e);
                                  if (emailValidation !== "idle" && emailValidation !== "validating") {
                                    setEmailValidation("idle");
                                  }
                                }}
                              />
                            </FormControl>
                            {emailValidation !== "idle" && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                {emailValidation === "validating" && (
                                  <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />
                                )}
                                {emailValidation === "valid" && (
                                  <Check className="h-4 w-4 text-success" />
                                )}
                                {emailValidation === "invalid" && (
                                  <X className="h-4 w-4 text-destructive" />
                                )}
                              </div>
                            )}
                          </div>
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
                              className="w-full bg-background"
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
