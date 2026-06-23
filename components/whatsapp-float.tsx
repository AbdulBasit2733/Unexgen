import Image from 'next/image'

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/918275582562"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-card p-2 shadow-lg ring-1 ring-border transition-all duration-200 hover:scale-105 hover:shadow-xl hover:ring-primary/40 sm:bottom-6 sm:right-6"
    >
      <Image
        src="/images/whatsapp-bg-removed.png"
        alt="WhatsApp"
        width={32}
        height={32}
      />
    </a>
  )
}
