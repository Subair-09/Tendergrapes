import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const whatsappUrl = 'https://wa.me/2348123456789?text=Hello%20Tender%20Grapes%20Schools%2C%20I%20am%20inquiring%20about%20admissions%20for%20my%20child.';

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-sm font-extrabold text-brand-red uppercase tracking-widest font-sans">
            Connect With Us
          </span>
          <h2 className="font-serif font-extrabold text-brand-blue-dark text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Reach Our Admissions Council
          </h2>
          <div className="h-1 w-20 bg-brand-red rounded mx-auto" />
          <p className="text-gray-500 font-sans text-sm leading-relaxed">
            Have questions regarding tuition guidelines, bus routes, or general queries? 
            Visit us in person or reach out through our dedicated rapid response systems below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-brand-gray rounded-2xl p-6.5 sm:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif font-extrabold text-brand-blue-dark text-2xl">
                Tender Grapes Locations & Coordinates
              </h3>
              <p className="text-xs text-gray-500 font-sans leading-relaxed">
                Our main administrative headquarters is situated in Maryland, Ikeja, Lagos—a highly accessible, 
                secure residential precinct suited for peaceful academy studies.
              </p>

              {/* Direct Info list */}
              <div className="space-y-5.5">
                {/* School Address */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-red shadow-sm shrink-0 h-fit">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">Our Campus Address</h4>
                    <p className="text-sm text-brand-blue-dark font-extrabold font-sans mt-0.5 leading-normal">
                      12, Shonny Highway, Shonibare Estate, Maryland, Ikeja, Lagos State, Nigeria.
                    </p>
                  </div>
                </div>

                {/* Telephone Lines */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-blue-dark shadow-sm shrink-0 h-fit">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">Admissions Helpline</h4>
                    <p className="text-sm text-brand-blue-dark font-extrabold font-sans mt-0.5 leading-normal">
                      +234 812 345 6789 <br />
                      <span className="text-xs font-semibold text-gray-400">+234 802 987 6543</span>
                    </p>
                  </div>
                </div>

                {/* Email Channels */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-blue-dark shadow-sm shrink-0 h-fit">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">Electronic Mail</h4>
                    <p className="text-sm text-brand-blue-dark font-extrabold font-sans mt-0.5 leading-normal">
                      admissions@tendergrapesschools.com <br />
                      <span className="text-xs font-semibold text-gray-400">info@tendergrapesschools.com</span>
                    </p>
                  </div>
                </div>

                {/* Work Hours */}
                <div className="flex gap-4">
                  <div className="p-3 bg-white rounded-xl text-brand-blue-dark shadow-sm shrink-0 h-fit">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">Working Office Hours</h4>
                    <p className="text-sm text-brand-blue-dark font-extrabold font-sans mt-0.5 leading-normal">
                      Monday – Friday: 7:30 AM – 4:30 PM <br />
                      <span className="text-xs font-extrabold text-brand-red">Office closed on public and local holidays</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire on WhatsApp box */}
            <div className="pt-4 border-t border-gray-200">
              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <MessageSquare size={16} />
                <span>Chat Instantly with Admissions Desk</span>
              </a>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 w-full">
            <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 shadow-xl h-[300px] sm:h-[350px] lg:h-auto min-h-[280px] sm:min-h-[380px] relative bg-brand-gray w-full">
              {/* Google Maps embed customized for Maryland, Ikeja, Lagos */}
              <iframe
                title="Tender Grapes Schools Lagos Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.376882293466!2d3.366472274474797!3d6.599981893393699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9264da3e30e1%3s0x103b92c4cd71f00b%3A0xe100ad50e206ab62!2sMaryland%20Mall!5e0!3m2!1sen!2sng!4v1717282000000!5content"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Driving Directions Helper */}
            <div className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-3 text-xs text-brand-blue-dark">
              <span>Looking for driving directions from Surulere, Victoria Island, or Lekki?</span>
              <a
                id="maps-directions-link"
                href="https://maps.google.com/?q=Maryland+Mall+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline flex items-center justify-center gap-1 hover:text-brand-red shrink-0"
              >
                Open in Apple/Google Maps
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
