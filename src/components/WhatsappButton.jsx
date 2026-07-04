import '../styles/WhatsappButton.css'

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Dayane!%20Quero%20estruturar%20o%20meu%20processo%20comercial."
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Falar com a Dayane Gaffo no WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.5 1.8 6.4L4 29l7.8-1.8c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-2 0-3.9-.6-5.5-1.6l-.4-.2-4.4 1 1-4.3-.3-.4C5.5 17.8 5 16.4 5 15c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 11-11 11zm6-8.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1s-.8 1-1 1.2c-.2.2-.4.2-.7.1-1-.5-1.7-1-2.4-1.9-.5-.6-.1-.9.2-1.2.3-.3.5-.5.7-.8.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.7c.2.2 1.7 2.6 4.1 3.5 2 .8 2.4.6 2.8.6.5 0 1.5-.6 1.7-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4z"
        />
      </svg>
    </a>
  )
}