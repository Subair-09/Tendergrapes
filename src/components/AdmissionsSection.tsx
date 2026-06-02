import React, { useState } from 'react';
import { Mail, Phone, MapPin, FileText, Send, CheckCircle, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryFormInput } from '../types';

export default function AdmissionsSection() {
  const [formData, setFormData] = useState<InquiryFormInput>({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    desiredLevel: 'primary',
    inquiryMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Fields Validation
    if (!formData.parentName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.childName.trim()) {
      setSubmitError('Please fill out all required fields (Parent Name, Email, Phone, and Child Name).');
      return;
    }

    setIsSubmitting(true);

    // Simulate 1.5s network lag
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleDownloadProspectus = () => {
    setDownloadSuccess(true);
    // Auto-reset downlader alert after 4 seconds
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section id="admissions" className="py-20 bg-brand-gray relative overflow-hidden">
      
      {/* Visual background accents mimicking school shield colors */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl -translate-y-1/2 z-0 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Secure a Seat
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Admissions for September 2026 Academic Session are Now Open
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Follow our straightforward, digitally optimized admissions pathway to join the Tender Grapes family. 
            Fill out the rapid evaluation inquiry below, and an admissions officer will respond shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Quick Info & Action Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif font-extrabold text-brand-blue-dark text-2xl">
                Ready to Join Our Community?
              </h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                We accept admission inquiries year-round. Our formal enrollment window closes mid-August, 
                after which candidates undergo short, friendly cognitive evaluations.
              </p>

              {/* Three Admissions Pillars */}
              <div className="space-y-4.5 pt-2">
                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-red shadow-sm shrink-0 h-fit">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-blue-dark">1. Read the Prospectus</h4>
                    <p className="text-xs text-gray-500 leading-normal">
                      Gain complete insight into the subjects, tuition schedules, uniform guidelines, and academic calendars.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-blue-dark shadow-sm shrink-0 h-fit">
                    <Send size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-blue-dark">2. Lodge Inquiry Form</h4>
                    <p className="text-xs text-gray-500 leading-normal">
                      Use our rapid online form. No application fee is charged for early-stage inquiry submissions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-emerald-500 shadow-sm shrink-0 h-fit">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-brand-blue-dark">3. Cognitive Evaluation</h4>
                    <p className="text-xs text-gray-500 leading-normal">
                      A cheerful, pressure-free evaluation lets our team assess placement levels correctly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Admissions Actions Card */}
            <div className="bg-brand-blue-dark rounded-2xl p-6 text-white space-y-6 shadow-xl">
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-brand-blue" size={20} />
                <h4 className="font-sans font-bold text-sm uppercase tracking-wider leading-none">Admission Desk Downloads</h4>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-300">
                  Instantly obtain our detailed 2026/2027 Information Brochure & Fees Breakdown Guide.
                </p>

                <button
                  id="prospectus-download-btn"
                  onClick={handleDownloadProspectus}
                  className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Download Admission Guide & Syllabus (PDF)</span>
                </button>

                <AnimatePresence>
                  {downloadSuccess && (
                    <motion.div
                      id="prospectus-download-alert"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 bg-indigo-900/60 border border-indigo-500/30 rounded-lg flex items-center gap-2 text-[11px] text-brand-blue"
                    >
                      <CheckCircle size={14} className="text-brand-blue shrink-0" />
                      <span>Syllabus and Admission guide download initialized successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Admissions Helpline */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-brand-blue uppercase">Enrollment Hotlines</p>
                  <p className="font-semibold text-white">+234 812 345 6789</p>
                </div>
                <a
                  id="admissions-mail-link"
                  href="mailto:admissions@tendergrapesschools.com"
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-colors"
                >
                  Email admissions
                </a>
              </div>
            </div>
          </div>

          {/* Form Interactive Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="inquiry-form"
                  id="admissions-inquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-1">
                    <h3 className="font-sans font-extrabold text-brand-blue-dark text-xl tracking-tight">
                      Enrollment Inquiry Form
                    </h3>
                    <p className="text-xs text-gray-400">
                      Required fields are marked with <span className="text-brand-red">*</span>
                    </p>
                  </div>

                  {submitError && (
                    <div id="form-error-alert" className="p-3 bg-red-50 border border-red-100 text-brand-red rounded-lg flex items-start gap-2 text-xs">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Parent Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="parentName" className="text-xs font-bold text-gray-600 block">
                        Parent / Guardian Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="e.g. Mrs. Funmi Balogun"
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-gray-600 block">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. funmi@example.com"
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Child's Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-gray-600 block">
                        Phone Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +234 803 123 4567"
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="childName" className="text-xs font-bold text-gray-600 block">
                        Child's Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="e.g. Tunde Balogun"
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20"
                        required
                      />
                    </div>
                  </div>

                  {/* Child's Age & Desired Entrance Level */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="childAge" className="text-xs font-bold text-gray-600 block">
                        Child's Age (Years / Months)
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleInputChange}
                        placeholder="e.g. 5 Years"
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="desiredLevel" className="text-xs font-bold text-gray-600 block">
                        Desired School Level
                      </label>
                      <select
                        id="desiredLevel"
                        name="desiredLevel"
                        value={formData.desiredLevel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all border border-transparent focus:border-brand-blue-dark/20"
                      >
                        <option value="creche">Creche & Toddler Lab (3mo - 2yrs)</option>
                        <option value="nursery">Early Years / Nursery (2 - 5yrs)</option>
                        <option value="primary">Basic School / Primary (5 - 11yrs)</option>
                        <option value="secondary">College / Secondary School (11 - 17yrs)</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiryMessage" className="text-xs font-bold text-gray-600 block">
                      Specific Questions or Support Notes
                    </label>
                    <textarea
                      id="inquiryMessage"
                      name="inquiryMessage"
                      value={formData.inquiryMessage}
                      onChange={handleInputChange}
                      placeholder="e.g. Please share details regarding school bus routes around Surulere or Maryland, boarding opportunities, etc."
                      rows={3}
                      className="w-full px-4 py-2.5 bg-brand-gray text-gray-800 text-sm rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue-dark/20 focus:outline-none transition-all placeholder:text-gray-400 border border-transparent focus:border-brand-blue-dark/20 resize-none"
                    />
                  </div>

                  {/* Submit Nudge */}
                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-brand-red hover:bg-brand-red-hover shadow-lg shadow-brand-red/10'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Filing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Admission Inquiry</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="submit-success-card"
                  id="form-success-wrapper"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-6"
                >
                  <div className="relative mx-auto flex items-center justify-center w-18 h-18 bg-emerald-100 text-emerald-600 rounded-full">
                    <span className="absolute inset-0 rounded-full bg-emerald-100/40 animate-ping"></span>
                    <CheckCircle size={36} className="relative z-10" />
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="font-serif font-extrabold text-2xl text-brand-blue-dark">
                      Inquiry Filed Successfully!
                    </h3>
                    <p className="text-gray-500 font-sans text-sm max-w-md mx-auto">
                      Thank you, <strong>{formData.parentName}</strong>. We have securely registered your inquiry for <strong>{formData.childName}</strong>.
                    </p>
                  </div>

                  <div className="p-5.5 bg-brand-gray rounded-2xl max-w-md mx-auto text-left space-y-3 border border-gray-100 text-xs text-gray-600">
                    <p className="font-bold text-brand-blue-dark uppercase tracking-wider text-[10px]">What happens next?</p>
                    <ol className="list-decimal pl-4 space-y-1.5 leading-normal">
                      <li>An SMS verification link is triggered to <strong>{formData.phone}</strong>.</li>
                      <li>Our placement officer will reach out within 24 hours to schedule a diagnostic session.</li>
                      <li>You can download the full catalog brochure instantly.</li>
                    </ol>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <button
                      id="reset-form-btn"
                      onClick={() => {
                        setFormData({
                          parentName: '',
                          email: '',
                          phone: '',
                          childName: '',
                          childAge: '',
                          desiredLevel: 'primary',
                          inquiryMessage: '',
                        });
                        setSubmitSuccess(false);
                      }}
                      className="text-xs font-bold text-gray-500 hover:text-brand-blue-dark py-2 px-4 rounded-lg transition-colors"
                    >
                      Fill Another Inquiry
                    </button>

                    <a
                      id="success-whatsapp-followup"
                      href={`https://wa.me/2348123456789?text=Hello%2C%20I%20just%20filed%20my%20inquiry%20form%20for%20my%2520child%20${encodeURIComponent(formData.childName)}.%20Please%20verify%20receipt.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-md flex items-center gap-1.5 transition-all text-center"
                    >
                      <span>Follow up on WhatsApp</span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded uppercase">Instant</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
