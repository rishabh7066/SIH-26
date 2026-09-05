import React, { useState } from 'react';
import { 
  MapPin, 
  Store, 
  AlertTriangle, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  CheckCircle2, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';
import { VILLAGE_GAP_MAP_DATA } from '../data/mockData';

export default function VillageGapMap({ lang, onStartAssessment }) {
  const isHi = lang === 'hi';
  const data = VILLAGE_GAP_MAP_DATA;
  const [selectedPin, setSelectedPin] = useState(null);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'existing' | 'gaps'

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(24px, 4vw, 40px) clamp(16px, 3vw, 24px) 70px' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 36px auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(239, 246, 255, 0.9)',
          color: '#1d4ed8',
          padding: '6px 16px',
          borderRadius: '999px',
          fontSize: '0.84rem',
          fontWeight: 700,
          marginBottom: '12px'
        }}>
          <Compass size={16} />
          <span>{isHi ? 'फीचर 2 व 10: ग्राम बिजनेस गैप मैप व प्रतिस्पर्धी विश्लेषण' : 'Features 2 & 10: Village Business Gap Map & Competitor Intelligence'}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.25 }}>
          {isHi ? 'गाँव में किस दुकान की सबसे ज़्यादा कमी है?' : 'Identify Underserved Business Gaps in Your Village'}
        </h1>
        <p style={{ color: '#64748b', fontSize: 'clamp(0.92rem, 1.8vw, 1.08rem)', marginTop: '10px' }}>
          {isHi 
            ? 'केवल सामान्य दुकानें न खोलें। नक्शे पर देखें कि किन क्षेत्रों में पहले से बहुत दुकानें हैं और कौन से नए काम में कोई प्रतियोगी नहीं है।'
            : 'Explore what the village actually needs instead of opening another generic shop. See live competitor density and untapped opportunities.'}
        </p>
      </div>

      {/* Map + Sidebar Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: '28px', alignItems: 'start' }}>
        
        {/* Left: Interactive Visual SVG Village Gap Map */}
        <div className="spacy-card" style={{ padding: 'clamp(16px, 3vw, 28px)', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                📍 {data.village}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '2px 0 0 0' }}>
                {isHi ? `कुल आबादी: ${data.population} • कुल दुकानें: ${data.totalShops}` : `Population: ${data.population} • Existing Shops: ${data.totalShops}`}
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => setFilterType('all')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filterType === 'all' ? '1px solid #15803d' : '1px solid #cbd5e1',
                  background: filterType === 'all' ? '#dcfce7' : '#ffffff',
                  color: filterType === 'all' ? '#15803d' : '#475569'
                }}
              >
                {isHi ? 'सभी' : 'All'}
              </button>
              <button
                onClick={() => setFilterType('existing')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filterType === 'existing' ? '1px solid #ef4444' : '1px solid #cbd5e1',
                  background: filterType === 'existing' ? '#fee2e2' : '#ffffff',
                  color: filterType === 'existing' ? '#b91c1c' : '#475569'
                }}
              >
                {isHi ? 'दुकानें' : 'Shops'}
              </button>
              <button
                onClick={() => setFilterType('gaps')}
                style={{
                  padding: '5px 10px',
                  borderRadius: '8px',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: filterType === 'gaps' ? '1px solid #16a34a' : '1px solid #cbd5e1',
                  background: filterType === 'gaps' ? '#dcfce7' : '#ffffff',
                  color: filterType === 'gaps' ? '#15803d' : '#475569'
                }}
              >
                {isHi ? 'नए मौके (Gaps)' : 'Gaps'}
              </button>
            </div>
          </div>

          {/* SVG Map Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
            borderRadius: '16px',
            border: '2px solid #cbd5e1',
            overflow: 'hidden'
          }}>
            {/* SVG Roads and Village Land Parcels */}
            <svg width="100%" height="100%" viewBox="0 0 500 380" style={{ display: 'block' }}>
              {/* Village Agricultural Plots */}
              <rect x="20" y="20" width="130" height="110" fill="#dcfce7" stroke="#86efac" strokeWidth="1" rx="8" />
              <text x="35" y="75" fill="#15803d" fontSize="10" fontWeight="bold">कृषि क्षेत्र (Agri Land)</text>

              <rect x="340" y="30" width="140" height="120" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" rx="8" />
              <text x="360" y="90" fill="#047857" fontSize="10" fontWeight="bold">दुग्ध फार्म क्षेत्र</text>

              <rect x="30" y="230" width="140" height="120" fill="#fef3c7" stroke="#fde68a" strokeWidth="1" rx="8" />
              <text x="50" y="290" fill="#b45309" fontSize="10" fontWeight="bold">आवासीय बस्ती (Ward 1-2)</text>

              <rect x="320" y="220" width="150" height="130" fill="#e0f2fe" stroke="#bae6fd" strokeWidth="1" rx="8" />
              <text x="340" y="285" fill="#0369a1" fontSize="10" fontWeight="bold">पंचायत व स्कूल प्रांगण</text>

              {/* Village Main Road Crossings */}
              <path d="M 0 190 Q 250 180 500 190" stroke="#94a3b8" strokeWidth="18" fill="none" />
              <path d="M 0 190 Q 250 180 500 190" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" fill="none" />

              <path d="M 250 0 L 250 380" stroke="#94a3b8" strokeWidth="14" fill="none" />
              <path d="M 250 0 L 250 380" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" fill="none" />

              {/* Village Center Chowk */}
              <circle cx="250" cy="185" r="26" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
              <text x="228" y="189" fill="#1e293b" fontSize="11" fontWeight="bold">चौपाल</text>

              {/* Existing Shops (Red / Amber dots) */}
              {(filterType === 'all' || filterType === 'existing') && (
                <g>
                  {/* Grocery Cluster */}
                  <circle cx="210" cy="165" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="225" cy="150" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="195" cy="180" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="230" cy="210" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="270" cy="160" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                  
                  {/* Milk vendors */}
                  <circle cx="360" cy="180" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="380" cy="170" r="7" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />

                  {/* Repairs */}
                  <circle cx="280" cy="210" r="7" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                </g>
              )}

              {/* Underserved Opportunity Pins (Glowing Green Pins) */}
              {(filterType === 'all' || filterType === 'gaps') && (
                <g>
                  {/* Gap 1: Dairy Chilling & Paneer Hub */}
                  <g 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPin({
                      title: isHi ? 'पनीर व दूध चिलिंग हब' : 'Paneer & Milk Chilling Hub',
                      gapScore: 94,
                      desc: isHi ? '12 किराना दुकानें हैं पर कोई पनीर व कोल्ड चेन यूनिट नहीं है। 480 परिवारों में जबरदस्त मांग।' : 'Zero cold storage / paneer units exist despite high demand.'
                    })}
                  >
                    <circle cx="330" cy="120" r="14" fill="#22c55e" opacity="0.3" className="animate-pulse" />
                    <circle cx="330" cy="120" r="8" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
                    <text x="310" y="145" fill="#14532d" fontSize="9" fontWeight="bold">★ मौका 1 (पनीर हब)</text>
                  </g>

                  {/* Gap 2: Cattle Feed Depot */}
                  <g 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPin({
                      title: isHi ? 'पशु आहार व मिनरल डिपो' : 'Cattle Feed Depot',
                      gapScore: 89,
                      desc: isHi ? 'गाँव में 620 पशु हैं, उच्च गुणवत्ता आहार के लिए 8 किमी दूर जाना पड़ता है।' : '620 cattle exist, nearest feed center is 8 km away.'
                    })}
                  >
                    <circle cx="120" cy="160" r="14" fill="#22c55e" opacity="0.3" className="animate-pulse" />
                    <circle cx="120" cy="160" r="8" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
                    <text x="80" y="185" fill="#14532d" fontSize="9" fontWeight="bold">★ मौका 2 (पशु आहार)</text>
                  </g>

                  {/* Gap 3: Solar & Agri Repair */}
                  <g 
                    style={{ cursor: 'pointer' }}
                    onClick={() => setSelectedPin({
                      title: isHi ? 'सोलर व मोटर सर्विस सेंटर' : 'Solar & Farm Tech Center',
                      gapScore: 85,
                      desc: isHi ? '34 सोलर पंप लगे हैं पर स्थानीय मैकेनिक न होने से काम रुक जाता है।' : '34 solar pumps, zero local technician.'
                    })}
                  >
                    <circle cx="280" cy="270" r="14" fill="#22c55e" opacity="0.3" className="animate-pulse" />
                    <circle cx="280" cy="270" r="8" fill="#15803d" stroke="#ffffff" strokeWidth="2" />
                    <text x="240" y="295" fill="#14532d" fontSize="9" fontWeight="bold">★ मौका 3 (सोलर सेंटर)</text>
                  </g>
                </g>
              )}
            </svg>

            {/* Map Legend Floating Tag */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: '6px 12px',
              borderRadius: '10px',
              fontSize: '0.72rem',
              display: 'flex',
              gap: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#b91c1c', fontWeight: 600 }}>
                ● {isHi ? 'पारंपरिक किराना (अति-प्रतिस्पर्धा)' : 'Kirana (Saturated)'}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#15803d', fontWeight: 700 }}>
                ★ {isHi ? 'शून्य-प्रतिस्पर्धा गैप (AI रिकमेंडेशन)' : 'Untapped Trade Gap'}
              </span>
            </div>
          </div>

          {/* Selected Pin Popup Alert */}
          {selectedPin && (
            <div style={{ marginTop: '16px', background: '#f0fdf4', border: '1px solid #86efac', padding: '14px', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, color: '#14532d', fontSize: '1rem', fontWeight: 800 }}>
                  🎯 {selectedPin.title}
                </h4>
                <span style={{ background: '#15803d', color: '#ffffff', fontSize: '0.74rem', fontWeight: 800, padding: '2px 8px', borderRadius: '6px' }}>
                  {isHi ? 'गैप स्कोर:' : 'Gap Score:'} {selectedPin.gapScore}/100
                </span>
              </div>
              <p style={{ margin: '6px 0 0 0', fontSize: '0.84rem', color: '#334155' }}>
                {selectedPin.desc}
              </p>
            </div>
          )}
        </div>

        {/* Right: Gap Opportunities Breakdown & Neighbor Comparison */}
        <div>
          <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 800, marginBottom: '16px' }}>
            {isHi ? 'गाँव में गैर-मौजूद व्यापार (Missing Trades)' : 'Top Missing Business Categories'}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            {data.missingCategories.map((gap, i) => (
              <div key={i} className="spacy-card" style={{ padding: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {isHi ? gap.nameHi : gap.nameEn}
                  </h4>
                  <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.74rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                    {isHi ? 'मांग स्कोर:' : 'Demand:'} {gap.gapScore}/100
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: '4px 0 10px 0' }}>
                  {gap.demandReasonHi}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px', fontSize: '0.8rem' }}>
                  <span style={{ color: '#64748b' }}>{isHi ? 'मासिक बाज़ार आकार:' : 'Est. Monthly Market:'}</span>
                  <span style={{ fontWeight: 800, color: '#15803d' }}>{gap.estimatedMarketMonthly}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Neighboring Village Comparison */}
          <div className="spacy-card" style={{ padding: '20px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
              🏘️ {isHi ? 'आस-पास के गाँवों से तुलना' : 'Nearby Village Comparison'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {data.nearbyComparison.map((v, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: i === 0 ? '#f0fdf4' : '#f8fafc', borderRadius: '8px', fontSize: '0.84rem' }}>
                  <div>
                    <span style={{ fontWeight: 700, color: i === 0 ? '#15803d' : '#0f172a' }}>{v.village}</span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', marginLeft: '6px' }}>({v.pop} pop)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ color: '#64748b' }}>{v.shopCount} {isHi ? 'दुकानें' : 'shops'}</span>
                    <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontWeight: 700, fontSize: '0.76rem' }}>
                      {v.missingGaps} {isHi ? 'खाली अवसर' : 'gaps'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
