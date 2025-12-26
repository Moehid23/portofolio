import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tighter">Get in Touch</h2>
      <p className="text-muted-foreground">
        Feel free to reach out for collaborations, freelance work, or just to say hi!
      </p>

      <div className="space-y-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Email</p>
              <a href="mailto:hello@example.com" className="text-sm text-muted-foreground hover:text-foreground">
                hello@example.com
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Phone</p>
              <a href="tel:+6281234567890" className="text-sm text-muted-foreground hover:text-foreground">
                +62 812 3456 7890
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
