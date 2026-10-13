import React, { useState, useEffect } from 'react';
import { Camera, Check, Upload, RefreshCw } from 'lucide-react';

interface ExecutiveAvatarProps {
  className?: string;
  showUploadOption?: boolean;
}

export const ExecutiveAvatar: React.FC<ExecutiveAvatarProps> = ({ 
  className = "w-full h-full",
  showUploadOption = true 
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('ramakrishna_profile_photo');
    if (saved) {
      setCustomPhoto(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomPhoto(result);
        localStorage.setItem('ramakrishna_profile_photo', result);
        setIsModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setCustomPhoto(urlInput.trim());
      localStorage.setItem('ramakrishna_profile_photo', urlInput.trim());
      setIsModalOpen(false);
      setUrlInput('');
    }
  };

  const handleReset = () => {
    localStorage.removeItem('ramakrishna_profile_photo');
    setCustomPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className={`relative group ${className}`}>
      {customPhoto ? (
        <img
          src={customPhoto}
          alt="Mr. Ramakrishna - Principal Enterprise Architect"
          className="w-full h-full object-cover object-top rounded-2xl shadow-2xl border border-slate-700/60"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Executive Default High-Fidelity Portrait Representation */
        <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0A1128] border border-slate-700/60 shadow-2xl relative flex flex-col items-center justify-end">
          {/* Subtle architectural office lighting backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Executive Vector Illustration matching the provided headshot */}
          <svg
            viewBox="0 0 320 380"
            className="w-full h-full object-cover object-bottom"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Office Gradient */}
            <rect width="320" height="380" fill="url(#bgOffice)" />
            <defs>
              <linearGradient id="bgOffice" x1="0" y1="0" x2="320" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CBD5E1" stopOpacity="0.15" />
                <stop offset="0.5" stopColor="#94A3B8" stopOpacity="0.10" />
                <stop offset="1" stopColor="#0F172A" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="suitGrad" x1="160" y1="230" x2="160" y2="380" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E2A4A" />
                <stop offset="1" stopColor="#0B132B" />
              </linearGradient>
              <linearGradient id="tieGrad" x1="160" y1="240" x2="160" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60A5FA" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            {/* Suit Shoulders & Jacket */}
            <path
              d="M30 380 C40 310, 80 260, 115 250 L140 380 L20 380 Z"
              fill="url(#suitGrad)"
            />
            <path
              d="M290 380 C280 310, 240 260, 205 250 L180 380 L300 380 Z"
              fill="url(#suitGrad)"
            />
            <path
              d="M100 265 L160 380 L220 265 L195 245 L160 270 L125 245 Z"
              fill="#0F172A"
            />

            {/* White Dress Shirt Collar */}
            <polygon points="125,245 160,270 148,225" fill="#F8FAFC" />
            <polygon points="195,245 160,270 172,225" fill="#F8FAFC" />
            <polygon points="148,225 160,270 172,225" fill="#E2E8F0" />

            {/* Executive Blue Silk Tie */}
            {/* Knot */}
            <polygon points="152,242 168,242 164,258 156,258" fill="#60A5FA" />
            {/* Tie Body */}
            <polygon points="155,258 165,258 172,360 160,380 148,360" fill="url(#tieGrad)" />
            {/* Tie woven texture highlights */}
            <line x1="156" y1="270" x2="164" y2="270" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="155" y1="285" x2="165" y2="285" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="154" y1="300" x2="166" y2="300" stroke="#93C5FD" strokeWidth="1" strokeOpacity="0.4" />

            {/* Neck */}
            <path d="M142 195 L142 245 L178 245 L178 195 Z" fill="#9C6B4B" />
            <path d="M145 220 L160 238 L175 220 Z" fill="#845334" opacity="0.4" />

            {/* Head & Face */}
            <path
              d="M112 145 C112 100, 130 75, 160 75 C190 75, 208 100, 208 145 C208 192, 188 215, 160 215 C132 215, 112 192, 112 145 Z"
              fill="#A37150"
            />
            {/* Jaw and chin structure */}
            <path
              d="M125 170 C130 198, 145 212, 160 212 C175 212, 190 198, 195 170 C202 145, 202 135, 195 135 C195 175, 125 175, 125 135 Z"
              fill="#966343"
              opacity="0.35"
            />

            {/* Hair */}
            <path
              d="M112 130 C108 95, 120 62, 160 62 C200 62, 212 95, 208 130 C205 105, 195 82, 160 82 C125 82, 115 105, 112 130 Z"
              fill="#181514"
            />
            <path
              d="M110 135 C115 100, 135 70, 160 70 C185 70, 205 100, 210 135 C208 115, 195 85, 160 85 C125 85, 112 115, 110 135 Z"
              fill="#221D1B"
            />

            {/* Eyebrows */}
            <path d="M130 128 C135 125, 144 125, 148 128" stroke="#181514" strokeWidth="4" strokeLinecap="round" />
            <path d="M172 128 C176 125, 185 125, 190 128" stroke="#181514" strokeWidth="4" strokeLinecap="round" />

            {/* Eyes */}
            <ellipse cx="140" cy="138" rx="6" ry="4.5" fill="#291E15" />
            <circle cx="141" cy="137" r="1.5" fill="#FFFFFF" />
            <ellipse cx="180" cy="138" rx="6" ry="4.5" fill="#291E15" />
            <circle cx="181" cy="137" r="1.5" fill="#FFFFFF" />

            {/* Nose */}
            <path d="M160 135 L157 162 C154 165, 166 165, 163 162 Z" fill="#8C5838" />

            {/* Mustache & Beard Shading */}
            <path
              d="M145 174 C152 171, 168 171, 175 174 C170 178, 150 178, 145 174 Z"
              fill="#2D221D"
              opacity="0.65"
            />
            <path
              d="M138 185 C145 204, 175 204, 182 185 C178 198, 142 198, 138 185 Z"
              fill="#2D221D"
              opacity="0.45"
            />

            {/* Lips */}
            <path d="M148 178 C155 176, 165 176, 172 178" stroke="#7A4B30" strokeWidth="2.5" strokeLinecap="round" />

            {/* Ears */}
            <path d="M112 135 C107 140, 107 155, 113 160 Z" fill="#9C6B4B" />
            <path d="M208 135 C213 140, 213 155, 207 160 Z" fill="#9C6B4B" />
          </svg>

          {/* Fallback label indicator */}
          <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold text-white">Mr. Ramakrishna</span>
            <span className="text-blue-400 font-mono">Principal Architect</span>
          </div>
        </div>
      )}

      {/* Floating Photo Customizer Pill Button */}
      {showUploadOption && (
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-white rounded-lg border border-slate-700 backdrop-blur-sm transition-all shadow-md group-hover:scale-105"
          title="Upload or Change Photo"
          aria-label="Upload or Change Profile Photo"
        >
          <Camera className="w-4 h-4" />
        </button>
      )}

      {/* Photo Upload / Link Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-2">Executive Photo Settings</h3>
            <p className="text-xs text-slate-400 mb-5">
              Select your local headshot file (e.g. <span className="text-slate-200 font-mono">WhatsApp Image...jpeg</span>) or paste an image URL.
            </p>

            <div className="space-y-4">
              {/* File upload option */}
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-5 cursor-pointer bg-slate-800/40 hover:bg-slate-800/70 transition-all">
                <Upload className="w-6 h-6 text-blue-400 mb-2" />
                <span className="text-sm font-medium text-white">Choose photo from your device</span>
                <span className="text-xs text-slate-400 mt-1">JPEG, PNG, or WebP</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {/* URL Option */}
              <form onSubmit={handleUrlSubmit} className="space-y-2">
                <label className="text-xs text-slate-300 block">Or paste image URL:</label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              </form>

              {/* Reset to Default */}
              {customPhoto && (
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-400 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset to Default Portrait</span>
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
