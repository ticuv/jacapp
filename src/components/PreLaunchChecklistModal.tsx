import React from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

interface PreLaunchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreLaunchChecklistModal: React.FC<PreLaunchChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const checklistItems = [
    {
      category: 'Date de identificare (GDPR)',
      items: [
        {
          label: 'Identificarea operatorului (de publicat înainte de lansare)',
          location: 'Politica de Confidențialitate (Secțiunea 1) & Termeni (Secțiunea 1)',
          why: 'GDPR impune ca utilizatorii să cunoască identitatea persoanei fizice sau a societății (PFA/SRL) care pune la dispoziție aplicația.',
          suggested: 'Textul neutru actual va fi completat cu identitatea operatorului înainte de lansare, conform cerințelor de transparență.',
        },
        {
          label: 'Adresă de e-mail oficială de contact & asistență',
          location: 'Politica de Confidențialitate (Secțiunea 1, 6) & Pagina de Contact',
          why: 'Trebuie să aveți o căsuță de e-mail activă pentru cererile GDPR și pentru rapoartele de erori legislative.',
          suggested: 'Confirmați adresa de contact afișată pe pagina de Asistență.',
        },
      ],
    },
    {
      category: 'Publicitate & Rețele terțe',
      items: [
        {
          label: 'Configurare cont Google AdMob și formular Google UMP',
          location: 'Politica de Confidențialitate (Secțiunea 4)',
          why: 'În Uniunea Europeană, Google Mobile Ads impune colectarea consimțământului prin UMP (User Messaging Platform).',
          suggested: 'Creați mesajul de consimțământ GDPR în Consola Google AdMob („Privacy & messaging”).',
        },
        {
          label: 'Identificare instrumente de telemetrie / crash reporting',
          location: 'Politica de Confidențialitate (Secțiunea 3)',
          why: 'Dacă includeți Firebase Crashlytics sau Sentry în aplicația Android, acestea trebuie menționate în politica de confidențialitate.',
          suggested: 'Dacă nu le folosiți la lansare, formularea actuală este adecvată.',
        },
      ],
    },
    {
      category: 'Termeni & Disponibilitate comercială',
      items: [
        {
          label: 'Verificare status versiune Premium',
          location: 'Termeni (Secțiunea 5) & Pagina principală',
          why: 'Site-ul precizează explicit că abonamentele Premium nu sunt implementate. Nu trebuie activate butoane de plată false.',
          suggested: 'Confirmat: site-ul respectă această regulă cu strictețe.',
        },
        {
          label: 'Link-ul oficial Google Play Store',
          location: 'Pagina principală (Header & Hero)',
          why: 'Nu trebuie menționat că aplicația este deja disponibilă pentru descărcare până când Google nu a aprobat lansarea.',
          suggested: 'Statusul este setat pe „În pregătire pentru publicare pe Google Play”. Linkul va fi adăugat după aprobare.',
        },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-amber-50/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Ghid de confirmare pre-publicare JAC
              </h3>
              <p className="text-xs text-slate-500">
                Lista informațiilor ce trebuie confirmate înainte de lansarea pe Google Play
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              Pentru ca site-ul și aplicația JAC să fie complet conforme cu cerințele magazinului Google Play și legislația europeană GDPR, vă recomandăm să parcurgeți următoarea listă înainte de a introduce linkurile publice.
            </span>
          </div>

          {checklistItems.map((group) => (
            <div key={group.category} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b pb-1">
                {group.category}
              </h4>
              <div className="space-y-3">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900 text-xs">{item.label}</span>
                      <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-semibold">
                        De confirmat
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      <strong>Unde se află:</strong> {item.location}
                    </p>
                    <p className="text-xs text-slate-600">
                      <strong>De ce este necesar:</strong> {item.why}
                    </p>
                    <p className="text-xs text-amber-950 bg-amber-50 p-2 rounded border border-amber-200/60">
                      <strong>Acțiune recomandată:</strong> {item.suggested}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500">Aceste marcaje sunt evidențiate în textele legale.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
};
