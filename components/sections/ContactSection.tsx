'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/animations/FadeIn';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="mb-0 mt-16 pt-0 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

        {/* Left Side: Header */}
        <div className="md:col-span-2">
          <FadeIn delay={0.1}>
            <p className="font-mono text-sm text-muted-foreground mb-4">
              {`<!-- Get in Touch -->`}
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Let&apos;s Work<br />
              <span className="text-muted-foreground">Together</span>
            </h2>
          </FadeIn>
        </div>

        {/* Right Side: Form */}
        <div className="md:col-span-3">
          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-sm tracking-wide text-foreground/80 mb-2">First name*</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Mazakine"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-3 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block font-mono text-sm tracking-wide text-foreground/80 mb-2">Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Reed"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-3 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-sm tracking-wide text-foreground/80 mb-2">Email address*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-3 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-mono text-sm tracking-wide text-foreground/80 mb-2">Subject*</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Tell us the purpose"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-3 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-sm tracking-wide text-foreground/80 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-4 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors resize-y placeholder:text-muted-foreground/50 min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-foreground text-background font-mono text-sm font-bold px-6 py-3 hover:bg-foreground/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  Send message
                </button>
              </div>

            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
