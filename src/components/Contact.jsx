import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Send,
  Sparkles
} from 'lucide-react';
import { Whatsapp } from './Icons';

export default function Contact() {
  const { t, isRtl, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const telegramNumber = '+201559751298';
  const whatsappNumber = '201559751298';

  const handleTelegramSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const hasName = formData.name.trim();
    const hasMsg = formData.message.trim();

    let text = '';
    if (hasName || hasMsg) {
      const details = [];
      details.push(language === 'ar' ? 'مرحباً أ/ لبنى،' : 'Hello Lobna,');
      details.push('');
      if (hasName) details.push(`*Name:* ${formData.name.trim()}`);
      if (formData.email.trim()) details.push(`*Email:* ${formData.email.trim()}`);
      if (formData.subject.trim()) details.push(`*Subject:* ${formData.subject.trim()}`);
      if (hasMsg) details.push(`*Message:* ${formData.message.trim()}`);
      text = details.join('\n');
    } else {
      text = language === 'ar'
        ? 'مرحباً أ/ لبنى، أود التواصل معكِ بخصوص مشروع جديد.'
        : 'Hello Lobna, I visited your portfolio and would like to connect!';
    }

    const url = `https://t.me/${telegramNumber}?text=${encodeURIComponent(text)}`;

    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = url;
    }

    setStatus('sent');
    setTimeout(() => setStatus(null), 3000);
    if (hasName && hasMsg) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleWhatsAppSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const hasName = formData.name.trim();
    const hasMsg = formData.message.trim();

    let text = '';
    if (hasName || hasMsg) {
      const details = [];
      details.push(language === 'ar' ? 'مرحباً أ/ لبنى،' : 'Hello Lobna,');
      details.push('');
      if (hasName) details.push(language === 'ar' ? `الاسم: ${formData.name.trim()}` : `Name: ${formData.name.trim()}`);
      if (formData.email.trim()) details.push(language === 'ar' ? `البريد: ${formData.email.trim()}` : `Email: ${formData.email.trim()}`);
      if (formData.subject.trim()) details.push(language === 'ar' ? `الموضوع: ${formData.subject.trim()}` : `Subject: ${formData.subject.trim()}`);
      if (hasMsg) details.push(language === 'ar' ? `الرسالة: ${formData.message.trim()}` : `Message: ${formData.message.trim()}`);
      text = details.join('\n');
    } else {
      text = language === 'ar'
        ? 'مرحباً أ/ لبنى، أود التواصل معكِ بخصوص مشروع جديد.'
        : 'Hello Lobna, I visited your portfolio and would like to connect!';
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open immediately to bypass browser popup blockers
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = url;
    }

    setStatus('sent');
    setTimeout(() => setStatus(null), 3000);
    if (hasName && hasMsg) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        
        <div className="section-header reveal-on-scroll reveal-slide-up">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t('contact_badge')}</span>
          </div>
          <h2 className="section-title">
            {t('contact_title')}
          </h2>
          <p className="section-subtitle">
            {t('contact_subtitle')}
          </p>
        </div>

        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >

          <div className="glass-card reveal-on-scroll reveal-slide-up delay-150 card-hover-fx" style={{ padding: '2.5rem' }}>
            <form onSubmit={handleTelegramSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-name"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {t('contact_label_name')} *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe / أحمد علي"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.96rem',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--brand-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-email"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {t('contact_label_email')}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@domain.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.96rem',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--brand-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label
                  htmlFor="contact-subject"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {t('contact_label_subject')}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="React Project / Freelance Job / Inquiry"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.96rem',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--brand-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    display: 'block',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {t('contact_label_msg')} *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your project details or questions here..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.96rem',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--brand-orange)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem' }}
                  disabled={status === 'sending'}
                >
                  <Send size={18} />
                  <span>
                    {status === 'sending'
                      ? t('contact_status_sending')
                      : status === 'sent'
                      ? t('contact_status_sent')
                      : t('contact_btn_send_telegram')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    background: '#25d366',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Whatsapp size={19} />
                  <span>{t('contact_btn_send_whatsapp')}</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
