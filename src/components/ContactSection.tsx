import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    lawReference: '',
    message: '',
    acceptedTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'vladticu100@gmail.com'; // Adresa oficială de contact JAC

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Vă rugăm să introduceți numele dumneavoastră.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Vă rugăm să introduceți o adresă de e-mail validă.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMsg('Mesajul trebuie să conțină cel puțin 10 caractere.');
      return;
    }
    if (!formData.acceptedTerms) {
      setErrorMsg('Vă rugăm să confirmați că ați luat la cunoștință Politica de Confidențialitate.');
      return;
    }

    setErrorMsg('');
    const subject = encodeURIComponent('Feedback JAC');
    const body = encodeURIComponent(
      'Nume: ' + formData.name + '\n' +
      'E-mail: ' + formData.email + '\n' +
      'Categorie: ' + formData.category + '\n' +
      'Referință legislativă: ' + (formData.lawReference || '-') + '\n\n' +
      formData.message
    );
    window.location.href = 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      category: 'general',
      lawReference: '',
      message: '',
      acceptedTerms: false,
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1424] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Asistență & Comunicare
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight [text-wrap:balance]">
            Asistență JAC
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
            Aveți o sugestie, doriți să sesizați o neconcordanță legislativă sau aveți o întrebare despre aplicație? Trimiteți-ne un mesaj.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0E1830] border border-white/10 shadow-xs">
              <h3 className="text-lg font-bold text-slate-100 tracking-tight mb-4">
                Canale de comunicare
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">E-mail de asistență:</span>
                  <div className="flex items-center justify-between gap-2 mt-1 p-2.5 bg-[#0B1424] border border-white/10 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <span className="font-mono text-xs font-semibold text-slate-200">{contactEmail}</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.14] rounded transition-colors flex items-center gap-1"
                      title="Copiază adresa de e-mail"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-300 font-semibold">Copiat</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiază</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-100 block text-xs">Timp de răspuns</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Nu este garantat un termen fix de răspuns; solicitările sunt analizate în funcție de disponibilitate și de posibilitatea verificării informației în sursele oficiale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reporting law updates */}
            <div className="p-6 rounded-2xl bg-amber-400/10 border border-amber-400/25 text-xs text-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-amber-200">
                <AlertCircle className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Raportarea erorilor legislative</span>
              </div>
              <p className="leading-relaxed text-amber-200/90">
                Dacă ați identificat un articol modificat recent printr-o ordonanță sau lege nouă, vă rugăm să specificați numărul actului normativ și numărul articolului pentru o remediere promptă în următoarea actualizare.
              </p>
            </div>
          </div>

          {/* Right: Functional Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1830] border border-white/10 shadow-xs">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-400/15 text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">
                    Aplicația de e-mail a fost deschisă
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Mesajul se trimite prin aplicația dumneavoastră de e-mail, la adresa oficială de contact JAC. Nu este garantat un termen fix de răspuns.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-300 bg-white/[0.06] hover:bg-white/[0.14] rounded-lg transition-colors"
                  >
                    Trimite un alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {errorMsg && (
                    <div className="p-3 bg-red-400/10 border border-red-400/25 text-red-300 rounded-lg text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nume și prenume <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ex. Ion Popescu"
                        className="w-full px-3 py-2 text-sm border border-white/15 rounded-lg outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Adresă de e-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="adresa@exemplu.ro"
                        className="w-full px-3 py-2 text-sm border border-white/15 rounded-lg outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Tipul solicitării
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-white/15 rounded-lg outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 bg-[#0E1830] transition-colors"
                      >
                        <option value="general">Întrebare generală</option>
                        <option value="law_error">Sesizare eroare text legislativ</option>
                        <option value="feature">Sugestie de funcționalitate</option>
                        <option value="pre_launch">Întrebare privind lansarea pe Google Play</option>
                        <option value="gdpr">Solicitare date personale / GDPR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Act normativ vizat (opțional)
                      </label>
                      <input
                        type="text"
                        value={formData.lawReference}
                        onChange={(e) => setFormData({ ...formData, lawReference: e.target.value })}
                        placeholder="ex. Legea 61/1991, Art. 2"
                        className="w-full px-3 py-2 text-sm border border-white/15 rounded-lg outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Mesajul dumneavoastră <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrieți pe scurt situația sau sugestia dumneavoastră..."
                      className="w-full px-3 py-2 text-sm border border-white/15 rounded-lg outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="termsCheckbox"
                      checked={formData.acceptedTerms}
                      onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                      className="mt-1 w-4 h-4 text-slate-100 rounded border-white/15 focus:ring-slate-900"
                    />
                    <label htmlFor="termsCheckbox" className="text-xs text-slate-300 leading-normal">
                      Sunt de acord ca datele mele transmise prin acest formular să fie utilizate exclusiv pentru a primi un răspuns la solicitarea formulată, conform Politicii de Confidențialitate.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Trimite solicitarea</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
