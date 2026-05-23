import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageWrapper from '../ui/PageWrapper';
import { WEDDING } from '../../utils/constants';

export default function RsvpForm() {
  const [form, setForm] = useState({
    fullName: '',
    presence: null,
    guestCount: '1',
  });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const isValid = form.fullName.trim() && form.presence;

  const buildMessage = () => {
    const lines = [
      `Bonjour, je réponds à l'invitation au mariage d'Ella & Manesh 💍`,
      ``,
      `👤 Nom : ${form.fullName}`,
      form.presence === 'yes'
        ? `✅ Présence : Sera présent(e)`
        : `❌ Présence : Ne pourra pas venir`,
    ];
    if (form.presence === 'yes') {
      lines.push(`👥 Nombre de personnes : ${form.guestCount}`);
    }
    return lines.join('\n');
  };

  const openWhatsApp = (e) => {
    e.preventDefault();
    if (!isValid) return;
    const phone = WEDDING.contact.whatsapp.replace(/\D/g, '');
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
  };

  return (
    <PageWrapper id="rsvp" tornTop tornBottom bg="sand">
      <div className="w-full max-w-md mx-auto text-center">
        <motion.h2
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-text/10 font-light tracking-wider mb-2 select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          RSVP
        </motion.h2>

        <motion.p
          className="font-script text-3xl sm:text-4xl text-text mb-3 -mt-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Confirmez votre présence
        </motion.p>

        <motion.p
          className="font-body text-[9px] tracking-ultra uppercase text-text-light mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Avant le {WEDDING.rsvpDeadline}
        </motion.p>

        <form onSubmit={openWhatsApp} className="space-y-6 text-left">
          {/* Full Name */}
          <div>
            <label className="block font-body text-[9px] tracking-ultra uppercase text-text-light mb-2">
              Nom complet
            </label>
            <input
              type="text"
              required
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="w-full bg-transparent border-b border-gold/25 py-2.5 text-text font-serif text-base focus:border-gold focus:outline-none transition-colors placeholder:text-text-light/30"
              placeholder="Votre nom et prénom"
            />
          </div>

          {/* Presence */}
          <div>
            <label className="block font-body text-[9px] tracking-ultra uppercase text-text-light mb-3">
              Présence
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              {[
                { value: 'yes', label: 'Sera présent(e)' },
                { value: 'no', label: 'Ne pourra pas venir' },
              ].map(option => (
                <label
                  key={option.value}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-sm border cursor-pointer transition-all duration-300 ${
                    form.presence === option.value
                      ? 'border-gold bg-gold/5 text-gold'
                      : 'border-gold/15 text-text-light hover:border-gold/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="presence"
                    value={option.value}
                    checked={form.presence === option.value}
                    onChange={(e) => handleChange('presence', e.target.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      form.presence === option.value ? 'border-gold' : 'border-gold/25'
                    }`}
                  >
                    {form.presence === option.value && (
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </span>
                  <span className="font-serif text-sm italic">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {form.presence === 'yes' && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block font-body text-[9px] tracking-ultra uppercase text-text-light mb-2">
                    Nombre de personnes
                  </label>
                  <select
                    value={form.guestCount}
                    onChange={(e) => handleChange('guestCount', e.target.value)}
                    className="w-full bg-transparent border-b border-gold/25 py-2.5 text-text font-serif text-base focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'personne' : 'personnes'}</option>
                    ))}
                  </select>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp submit */}
          <div className="pt-4 text-center">
            <motion.button
              type="submit"
              disabled={!isValid}
              className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-sm font-body text-[10px] tracking-ultra uppercase transition-all duration-300 ${
                isValid
                  ? 'bg-[#25D366] text-white shadow-md hover:bg-[#20bc5a] hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-gold/10 text-text-light/40 cursor-not-allowed'
              }`}
              whileTap={isValid ? { scale: 0.97 } : {}}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Envoyer via WhatsApp
            </motion.button>

            <p className="mt-4 font-serif text-xs text-text-light/50 italic">
              Votre réponse s'ouvrira dans WhatsApp, prête à envoyer.
            </p>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}
