
import { ContactForm } from "../../home/Contact-form/ContactForm";

export default function ContactHero() {
  return (
    <header
      role="banner"
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#f8f8f8]
        to-[#f0f0f0]
        mb-0
        lg:mb-[600px]
      "
    >
      {/* Left Rounded Colors Bubble */}
      <div className="absolute left-0 top-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0" />
      <div className="absolute left-0 bottom-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#EFA6C1] to-[#F4BDFF] z-0 hidden md:block" />

      {/* Right Rounded Colors Bubble */}
      <div className="absolute right-[-20px] top-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0 hidden md:block" />
      <div className="absolute right-0 bottom-10 w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[380px] lg:h-[380px] rounded-full blur-[100px] bg-gradient-to-b from-[#1EB9A280] to-[#617BFC80] z-0" />

      {/* Left Side Shades */}
      {[0, 80, 160, 240, 320, 400].map((left, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[40px] md:w-[60px] lg:w-[80px] border border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"
          style={{ left }}
        />
      ))}

      {/* Right Side Shades */}
      {[0, 80, 160, 240, 320, 400].map((right, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[40px] md:w-[60px] lg:w-[80px] border border-[#FFFFFF40] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF00] z-10"
          style={{ right }}
        />
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[800px] px-4">
        <p className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          CONTACT
        </p>

        <h1 className="mb-24 text-center text-5xl font-medium leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
          Have something in <br />
          mind? <span className="font-playfair italic">Let’s talk.</span>
        </h1>
      </div>

      {/* Contact Form
          - Mobile/Tablet: normal flow (below navbar)
          - Desktop: floating overlap
      */}
      <div
        className="
        hidden lg:block

          relative
          lg:absolute
          lg:left-1/2
          lg:top-full
          lg:-translate-x-1/2
          lg:-translate-y-1/3
          z-50
          w-full
          max-w-6xl
          px-4
        "
      >
        <ContactForm />
      </div>
    </header>
  );
}
