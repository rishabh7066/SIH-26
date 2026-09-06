import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Mail, 
  User, 
  X 
} from 'lucide-react';
import './AuthPage.css';

// Rotating context shown under the (static) meditation figure
const ILLUSTRATION_SLIDES = [
  {
    title: 'Business Roadmap',
    meta: '14 Task',
    percent: 92,
    tag: 'Business',
    headline: (
      <>Discover the right business opportunities in your village with <strong>GramVenture</strong></>
    ),
  },
  {
    title: 'Skill Training',
    meta: '8 Modules',
    percent: 76,
    tag: 'Learning',
    headline: (
      <>Learn practical skills and grow your income with expert <strong>guidance</strong></>
    ),
  },
  {
    title: 'Market Access',
    meta: '22 Buyers',
    percent: 68,
    tag: 'Trade',
    headline: (
      <>Sell your produce directly to buyers and earn <strong>fair prices</strong></>
    ),
  },
  {
    title: 'Micro Finance',
    meta: '5 Schemes',
    percent: 84,
    tag: 'Funding',
    headline: (
      <>Access loans and schemes to fund your next <strong>venture</strong></>
    ),
  },
];

const RING_CIRCUMFERENCE = 2 * Math.PI * 16;

// Hand-built SVG meditation figure (kept static across slide changes)
// Faithfully matches the reference: doodle-icon arc over the head, long
// flowing hair, green heart tee, and arms extended outward in a mudra pose.
function MeditationArt() {
  const line = '#2f9e6a';
  const doodle = '#4aa877';
  return (
    <svg
      className="meditation-svg"
      viewBox="0 0 400 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a person meditating surrounded by idea icons"
    >
      {/* ---- Doodle icon arc above the head ---- */}
      <g stroke={doodle} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Lightbulb (center top) */}
        <path d="M200 24 a13 13 0 0 1 8 23 q-1 3 -1 5 h-14 q0 -2 -1 -5 a13 13 0 0 1 8 -23 Z" />
        <path d="M194 57 h12 M196 61 h8" />
        <path d="M200 12 v6 M180 20 l4 4 M220 20 l-4 4" opacity="0.8" />

        {/* Left side icons */}
        {/* magnifying glass */}
        <circle cx="96" cy="112" r="9" />
        <path d="M103 119 l8 8" />
        {/* leaf */}
        <path d="M74 150 q14 -14 26 -4 q-2 16 -18 18 q-10 -4 -8 -14 Z" />
        <path d="M80 160 q10 -6 16 -12" />
        {/* spiral swirl */}
        <path d="M120 74 q10 -8 14 2 q3 8 -6 9 q-6 0 -5 -6 q1 -4 5 -2" />
        {/* small star */}
        <path d="M150 100 l0 10 M145 105 l10 0" />

        {/* Right side icons */}
        {/* gear / flower dot */}
        <circle cx="304" cy="112" r="9" />
        <path d="M304 99 v-5 M304 130 v-5 M291 112 h-5 M322 112 h-5" />
        {/* spiral swirl */}
        <path d="M280 74 q-10 -8 -14 2 q-3 8 6 9 q6 0 5 -6 q-1 -4 -5 -2" />
        {/* leaf right */}
        <path d="M326 150 q-14 -14 -26 -4 q2 16 18 18 q10 -4 8 -14 Z" />
        {/* small star */}
        <path d="M250 100 l0 10 M245 105 l10 0" />
      </g>

      {/* sparkle dots */}
      <g fill="#8ed3a6">
        <circle cx="132" cy="120" r="2.5" />
        <circle cx="170" cy="70" r="2.5" />
        <circle cx="230" cy="70" r="2.5" />
        <circle cx="268" cy="120" r="2.5" />
        <circle cx="112" cy="86" r="2" />
        <circle cx="288" cy="86" r="2" />
      </g>

      {/* ---- Mat ---- */}
      <ellipse cx="200" cy="338" rx="120" ry="15" fill="#c4dccf" />
      <path d="M96 336 Q200 356 304 336" stroke={line} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* ---- Crossed legs ---- */}
      <path
        d="M128 326 Q112 292 148 284 L252 284 Q288 292 272 326 Q236 340 200 340 Q164 340 128 326 Z"
        fill="#cbe8d7"
        stroke={line}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M150 302 Q200 290 250 302" stroke={line} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* feet tucked */}
      <path d="M182 292 q18 -8 36 0" stroke={line} strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ---- Arms extended out to the knees (drawn behind torso) ---- */}
      <path d="M170 244 Q116 250 118 300" stroke={line} strokeWidth="3" fill="#cbe8d7" strokeLinejoin="round" />
      <path d="M230 244 Q284 250 282 300" stroke={line} strokeWidth="3" fill="#cbe8d7" strokeLinejoin="round" />

      {/* ---- Torso / shirt ---- */}
      <path
        d="M164 304 Q160 232 200 220 Q240 232 236 304 Q200 314 164 304 Z"
        fill="#86d3a6"
        stroke={line}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* sleeves */}
      <path d="M170 244 q-14 6 -16 22 q14 6 24 -2 Z" fill="#86d3a6" stroke={line} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M230 244 q14 6 16 22 q-14 6 -24 -2 Z" fill="#86d3a6" stroke={line} strokeWidth="2.5" strokeLinejoin="round" />

      {/* Heart on the chest */}
      <path
        d="M200 266 c-4 -8 -17 -6 -17 4 c0 8 11 14 17 18 c6 -4 17 -10 17 -18 c0 -10 -13 -12 -17 -4 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* ---- Mudra hands on the knees ---- */}
      <g fill="#f3cbb0" stroke={line} strokeWidth="2.5" strokeLinejoin="round">
        <path d="M118 300 q-4 -12 8 -14 q12 0 12 10 q0 8 -8 9 q-8 1 -12 -5 Z" />
        <path d="M282 300 q4 -12 -8 -14 q-12 0 -12 10 q0 8 8 9 q8 1 12 -5 Z" />
      </g>
      <path d="M120 292 q4 -3 8 0 M280 292 q-4 -3 -8 0" stroke={line} strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ---- Neck ---- */}
      <path d="M191 200 h18 v14 q-9 7 -18 0 Z" fill="#f3cbb0" stroke={line} strokeWidth="2" strokeLinejoin="round" />

      {/* ---- Hair behind (long, flowing past shoulders) ---- */}
      <path
        d="M162 150 Q150 92 200 88 Q250 92 238 150 Q248 210 232 236 Q228 210 228 176 Q228 138 200 136 Q172 138 172 176 Q172 210 168 236 Q152 210 162 150 Z"
        fill="#5c4433"
      />

      {/* ---- Head ---- */}
      <circle cx="200" cy="146" r="30" fill="#f3cbb0" stroke={line} strokeWidth="2" />

      {/* ---- Hair top / fringe (center part) ---- */}
      <path
        d="M170 140 Q168 104 200 102 Q232 104 230 140 Q224 122 200 122 Q176 122 170 140 Z"
        fill="#5c4433"
      />
      <path d="M200 102 q0 12 0 20" stroke="#4a3628" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Closed eyes + gentle smile */}
      <path
        d="M184 146 q5 5 10 0 M206 146 q5 5 10 0"
        stroke={line}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M193 158 q7 6 14 0" stroke={line} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <circle cx="180" cy="154" r="3.5" fill="#f3b6a0" opacity="0.6" />
      <circle cx="220" cy="154" r="3.5" fill="#f3b6a0" opacity="0.6" />
    </svg>
  );
}

export default function AuthPage({ 
  initialMode = 'login', 
  onBack, 
  onSuccess 
}) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // Rotating illustration context (girl stays static, card + headline change)
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSlideFading, setIsSlideFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSlideFading(true);
      setTimeout(() => {
        setSlideIndex(prev => (prev + 1) % ILLUSTRATION_SLIDES.length);
        setIsSlideFading(false);
      }, 320);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const slide = ILLUSTRATION_SLIDES[slideIndex];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };



  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username) {
      setToastMessage({ type: 'error', text: 'Please enter your username or email' });
      return;
    }
    if (!formData.password) {
      setToastMessage({ type: 'error', text: 'Please enter your password' });
      return;
    }
    if (mode === 'register' && formData.password !== formData.confirmPassword) {
      setToastMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    setIsLoading(true);

    // Simulate backend auth response
    setTimeout(() => {
      setIsLoading(false);
      const user = {
        name: formData.name || formData.username,
        username: formData.username,
        mode: mode
      };
      setToastMessage({
        type: 'success',
        text: mode === 'login' ? `Welcome back, ${user.username}!` : 'Account created successfully!'
      });

      if (onSuccess) {
        setTimeout(() => {
          onSuccess(user);
        }, 1000);
      }
    }, 800);
  };

  // Social Login handler
  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToastMessage({
        type: 'success',
        text: `Connected with ${provider}!`
      });
      if (onSuccess) {
        setTimeout(() => {
          onSuccess({ name: `${provider} User`, username: `${provider.toLowerCase()}_user` });
        }, 800);
      }
    }, 700);
  };

  // Handle forgot password
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) return;
    setForgotSent(true);
    setTimeout(() => {
      setIsForgotModalOpen(false);
      setForgotSent(false);
      setToastMessage({ type: 'success', text: 'Reset link sent to your email!' });
      setTimeout(() => setToastMessage(null), 3500);
    }, 1200);
  };

  return (
    <div className="auth-page-root">
      
      {/* Top Minimal Navigation Bar */}
      <header className="auth-top-bar">
        <div 
          className="auth-brand-logo"
          style={{ cursor: onBack ? 'pointer' : 'default' }}
          onClick={onBack ? onBack : undefined}
          title={onBack ? 'Back to App' : "GramVenture"}
        >
          <div className="auth-brand-icon">
            🌾
          </div>
          <div className="auth-brand-name">
            Gram<span>Venture</span>
          </div>
        </div>

        {onBack && (
          <button onClick={onBack} className="auth-exit-btn">
            <ArrowLeft size={16} />
            <span>Back to Dashboard</span>
          </button>
        )}
      </header>

      {/* Main Two-Column Content Grid */}
      <main className="auth-main-layout">
        
        {/* Left Column: Form Controls */}
        <section className="auth-form-column">
          <div className="auth-form-inner">
            
            {/* Mode Switcher Tabs */}
            <div className="auth-mode-switch-wrapper">
              <div className="auth-mode-switch">
                <button
                  type="button"
                  className={`auth-mode-tab ${mode === 'login' ? 'active' : ''}`}
                  onClick={() => setMode('login')}
                >
                  Log In
                </button>
                <button
                  type="button"
                  className={`auth-mode-tab ${mode === 'register' ? 'active' : ''}`}
                  onClick={() => setMode('register')}
                >
                  Sign Up
                </button>
              </div>
            </div>

            {/* Notification Toast */}
            {toastMessage && (
              <div className={`auth-alert-toast ${toastMessage.type}`}>
                <CheckCircle2 size={16} />
                <span>{toastMessage.text}</span>
              </div>
            )}

            {/* Header Title & Subtitle */}
            <div className="auth-header-block">
              <h1 className="auth-title">
                {mode === 'login' ? 'Welcome back!' : 'Create an account'}
              </h1>
              <p className="auth-subtitle">
                Simplify your workflow and boost your productivity with <strong>GramVenture</strong>. Get started for free.
              </p>
            </div>

            {/* Auth Form */}
            <form onSubmit={handleSubmit} className="auth-form">
              
              {/* Extra Full Name field in Register mode */}
              {mode === 'register' && (
                <div className="auth-input-field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="auth-pill-input no-icon"
                    required
                  />
                </div>
              )}

              {/* Username field */}
              <div className="auth-input-field">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={mode === 'login' ? 'Username' : 'Username or Email'}
                  className="auth-pill-input no-icon"
                  autoComplete="username"
                  required
                />
              </div>

              {/* Password field with Show/Hide Toggle */}
              <div className="auth-input-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="auth-pill-input"
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle-btn"
                  title={showPassword ? 'Hide password' : 'Show password'}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <Eye size={19} /> : <EyeOff size={19} />}
                </button>
              </div>

              {/* Confirm Password in Register mode */}
              {mode === 'register' && (
                <div className="auth-input-field">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="auth-pill-input"
                    autoComplete="new-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="password-toggle-btn"
                    title={showConfirmPassword ? 'Hide password' : 'Show password'}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? <Eye size={19} /> : <EyeOff size={19} />}
                  </button>
                </div>
              )}

              {/* Forgot Password Link (in Login mode) */}
              {mode === 'login' ? (
                <div className="auth-extra-row">
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(true)}
                    className="forgot-password-link"
                  >
                    Forgot Password?
                  </button>
                </div>
              ) : (
                <div className="auth-terms-row">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="agreeTerms" 
                    checked={formData.agreeTerms} 
                    onChange={handleChange} 
                    required 
                  />
                  <label htmlFor="terms">
                    I agree to GramVenture's <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                  </label>
                </div>
              )}

              {/* Black Solid Pill Submit Button */}
              <button 
                type="submit" 
                className="auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span>Processing...</span>
                ) : (
                  <span>{mode === 'login' ? 'Login' : 'Create Account'}</span>
                )}
              </button>
            </form>

            {/* "or continue with" Divider */}
            <div className="auth-divider-line">
              <span>or continue with</span>
            </div>

            {/* Social Authentication Row */}
            <div className="auth-social-row">
              {/* Google Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="auth-social-btn"
                title="Continue with Google"
                aria-label="Continue with Google"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#ffffff" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#ffffff" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#ffffff" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#ffffff" />
                </svg>
              </button>

              {/* Apple Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="auth-social-btn"
                title="Continue with Apple"
                aria-label="Continue with Apple"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 1.01-2.84-.96.04-2.13.64-2.79 1.4-.58.67-1.1 1.74-1.01 2.78 1.08.08 2.17-.59 2.79-1.34z" fill="#ffffff" />
                </svg>
              </button>

              {/* Facebook Button */}
              <button
                type="button"
                onClick={() => handleSocialLogin('Facebook')}
                className="auth-social-btn"
                title="Continue with Facebook"
                aria-label="Continue with Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#ffffff" />
                </svg>
              </button>
            </div>

            {/* Bottom Toggle Text */}
            <div className="auth-bottom-switch">
              {mode === 'login' ? (
                <p>
                  Don't have an account?{' '}
                  <button type="button" onClick={() => setMode('register')}>
                    Sign up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <button type="button" onClick={() => setMode('login')}>
                    Log in
                  </button>
                </p>
              )}
            </div>


          </div>
        </section>

        {/* Right Column: Illustration Art matching screenshot */}
        <section className="auth-illustration-column">
          <div className="auth-illustration-card">
            <div className="auth-illustration-art-wrap">
              <div className="central-meditation-art">
                <MeditationArt />
              </div>

              {/* Floating progress card - content rotates */}
              <div className={`floating-task-card ${isSlideFading ? 'sliding-transparent' : ''}`}>
                <div className="task-card-header">
                  <div className="task-text-group">
                    <p className="task-title">{slide.title}</p>
                    <span className="task-subtitle">{slide.meta}</span>
                  </div>
                  <div className="task-progress-ring">
                    <svg className="ring-svg" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="16" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                      <circle
                        className="progress-arc"
                        cx="20"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#15803d"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={RING_CIRCUMFERENCE * (1 - slide.percent / 100)}
                        transform="rotate(-90 20 20)"
                      />
                    </svg>
                    <span className="ring-percentage">{slide.percent}%</span>
                  </div>
                </div>
                <div className="task-card-footer">
                  <span className="task-tag-badge">{slide.tag}</span>
                </div>
              </div>
            </div>

            {/* Carousel dots */}
            <div className="carousel-dots-row">
              {ILLUSTRATION_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot ${i === slideIndex ? 'active' : ''}`}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Rotating headline */}
            <div className={`auth-illustration-footer ${isSlideFading ? 'sliding-transparent' : ''}`}>
              <p className="auth-footer-headline">{slide.headline}</p>
            </div>
          </div>
        </section>

      </main>

      {/* Forgot Password Dialog Modal */}
      {isForgotModalOpen && (
        <div className="forgot-modal-backdrop" onClick={() => setIsForgotModalOpen(false)}>
          <div className="forgot-modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Reset Password</h3>
              <button 
                onClick={() => setIsForgotModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '20px', textAlign: 'left' }}>
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <form onSubmit={handleForgotSubmit}>
              <div className="auth-input-field" style={{ marginBottom: '16px' }}>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="auth-pill-input no-icon"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="auth-submit-btn" 
                disabled={forgotSent}
              >
                {forgotSent ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
