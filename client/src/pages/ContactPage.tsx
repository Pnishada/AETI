"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // TODO: Replace with actual API call
      console.log("Form Submitted:", form);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Contact Us
          </CardTitle>
          <p className="text-center text-gray-500">
            We’d love to hear from you! Fill out the form below.
          </p>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-8 p-6">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p className="text-gray-700">diraeti@naita.gov.lk </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-600" />
              <p className="text-gray-700">0112572977 / 0112531844 / 0112532182</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-red-600" />
              <p className="text-gray-700"> Automobile Engineering Training Institute <br />
                    69/A, Baseline Road, Orugodawatta</p>
            </div>

            {/* Google Map */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border">
              <iframe
                src="https://maps.google.com/maps?q=Automobile%20Engineering%20Training%20Institute%2069/A,%20Baseline%20Road,%20Orugodawatta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="h-32"
            />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {success && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
