'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Web3Forms integration - using a public API key for demonstration.
    // The user should replace this with their own Access Key.
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Provide your Web3Forms Access Key here! Get it at https://web3forms.com
          access_key: 'e5ac95bb-228c-4fea-9a0e-5d3e2ff3b7aa',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="mb-0 mt-16 pt-0 pb-0">
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
                    placeholder="Alex"
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
                    placeholder="Carter"
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
                  placeholder="hello@awesomebrand.com"
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
                  placeholder="UI/UX Redesign, App Development, etc."
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
                  placeholder="Tell me about your amazing project, specific requirements, or just say hi!"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#111] border border-border/40 text-foreground px-4 py-4 font-mono text-sm rounded-sm focus:outline-none focus:border-foreground/50 transition-colors resize-y placeholder:text-muted-foreground/50 min-h-[120px]"
                />
              </div>

              {/* Submit Button & Status */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-foreground text-background font-mono text-sm font-bold px-6 py-3 hover:bg-foreground/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send message'}
                </button>

                {status === 'success' && (
                  <span className="text-sm font-mono text-green-500 animate-pulse">Message sent successfully!</span>
                )}
                {status === 'error' && (
                  <span className="text-sm font-mono text-red-500">Failed to send! Please check your API key.</span>
                )}
              </div>

            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
