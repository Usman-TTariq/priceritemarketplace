import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <Navbar />

      <div className="bg-[#00081e] py-16 !pt-[200px] text-white md:py-20">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-[#00081e] md:text-3xl">Send us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-[#00081e]">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#00081e]">Our Office</h3>
                    <p className="text-slate-600">
                      325 Valley St
                      <br />
                      Providence, RI 02908
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#00081e]">Email Us</h3>
                    <a
                      href="mailto:info@priceritemarketplace.com"
                      className="font-medium text-[#5080ff] hover:underline"
                    >
                      info@priceritemarketplace.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5080ff]/10 text-[#5080ff]">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#00081e]">Call Us</h3>
                    <a
                      href="tel:+17101523005"
                      className="font-medium text-[#5080ff] hover:underline"
                    >
                      (710) 152-3005
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
          <div className="aspect-video w-full">
            <iframe
              title="priceritemarketplace - 325 Valley St, Providence, RI 02908"
              src="https://maps.google.com/maps?q=325+Valley+St,+Providence,+RI+02908&z=15&output=embed"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="border-t border-slate-100 p-4 text-center">
            <p className="font-medium text-slate-600">
              325 Valley St, Providence, RI 02908
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
