import { useI18n } from "@/i18n/LanguageContext";
import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import {
  COMPANY_NAME,
  CORPORATE_EMAIL,
  REGISTERED_ADDRESS,
  REGULATORY_BODY,
  LICENSE_NUMBER,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_CHANNEL_URL,
  TELEGRAM_CHANNEL_URL,
} from "@/lib/config";

export function Footer() {
  const { t } = useI18n();

  const socials = [
    { url: FACEBOOK_URL, Icon: Facebook, label: "Facebook" },
    { url: INSTAGRAM_URL, Icon: Instagram, label: "Instagram" },
    { url: WHATSAPP_CHANNEL_URL, Icon: MessageCircle, label: "WhatsApp" },
    { url: TELEGRAM_CHANNEL_URL, Icon: Send, label: "Telegram" },
  ].filter((s) => !!s.url);

  return (
    <footer className="bg-ink text-parchment">
      <div className="mx-auto grid max-w-content gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <div className="font-display text-base font-bold">{COMPANY_NAME}</div>
          <p className="mt-2 text-sm opacity-80">
            {t.footer.address} {REGISTERED_ADDRESS}
          </p>
          <p className="mt-1 text-sm opacity-80">
            {t.footer.email} <a href={`mailto:${CORPORATE_EMAIL}`} className="underline">{CORPORATE_EMAIL}</a>
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">{t.trust.license}</div>
          <p className="mt-1 text-sm opacity-80">{REGULATORY_BODY}</p>
          <p className="mt-1 text-xs leading-relaxed opacity-60">{LICENSE_NUMBER}</p>
        </div>
        <div>
          <div className="text-sm font-semibold">{t.footer.channel}</div>
          <div className="mt-3 flex gap-3">
            {socials.map(({ url, Icon, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-parchment/30 hover:border-parchment"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-parchment/20">
        <div className="mx-auto max-w-content px-4 py-4 text-xs opacity-70 sm:px-6">
          {t.footer.rights} {new Date().getFullYear()} {COMPANY_NAME}
        </div>
      </div>
    </footer>
  );
}

