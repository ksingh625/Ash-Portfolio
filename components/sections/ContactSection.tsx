'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IDEWrapper } from '@/components/portfolio/IDEWrapper';
import { useLineCounter } from '@/components/portfolio/ContinuousLineCounter';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const { registerSection } = useLineCounter();
  const startLine = registerSection('contact', 35);

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
    <section id="contact" className="mb-0 pt-0 pb-20">
      <IDEWrapper startLine={startLine} lineCount={35}>
        {`<!-- Contact me -->\n\n`}
        <h2 className="text-3xl font-bold text-foreground">Contact Me</h2>

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />

          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          />

          <Button
            type="submit"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          >
            Send Message
          </Button>
        </form>
      </IDEWrapper>
    </section>
  );
}
