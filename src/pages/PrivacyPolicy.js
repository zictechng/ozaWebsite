import React, { Fragment, useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import client from '../component/client';
import useAppInfo from '../component/useAppInfo';

const UserPrivacyPolicy = () => {
  const { appName } = useAppInfo();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Privacy Policy — ${appName}`;
    window.scrollTo(0, 0);
    fetchContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appName]);

  const fetchContent = async () => {
    try {
      const res = await client.get('/api/fetchAboutCompany');
      if (res.data) setContent(res.data.user_policy || '');
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <MenuBar />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1a2547 100%)',
        padding: '140px 0 60px', textAlign: 'center',
      }}>
        <div className="container">
          <div style={{
            display: 'inline-block', background: 'rgba(76,95,213,0.2)', color: '#818cf8',
            fontSize: '12px', fontWeight: 700, padding: '6px 16px',
            borderRadius: '100px', marginBottom: '16px',
          }}>LEGAL</div>
          <h1 style={{ color: '#fff', fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '15px' }}>
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0', background: '#F8FAFF' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              {/* Quick summary */}
              <div style={{
                background: '#EEF2FF', borderRadius: '16px', padding: '24px',
                border: '1px solid rgba(76,95,213,0.2)', marginBottom: '24px',
              }}>
                <h4 style={{ fontWeight: 700, color: '#4C5FD5', fontSize: '15px', marginBottom: '12px' }}>
                  🔒 The short version
                </h4>
                <p style={{ color: '#4C5FD5', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  We collect only what we need to operate the platform, we never sell your data,
                  and we protect everything with bank-grade encryption.
                </p>
              </div>

              <div style={{
                background: '#fff', borderRadius: '20px', padding: '48px',
                border: '1px solid #e8edf5', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              }}>
                {loading ? (
                  <div style={{ textAlign: 'center', padding: '60px 0', color: '#a0aec0' }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
                    Loading privacy policy...
                  </div>
                ) : content ? (
                  <div style={{ color: '#4A5568', lineHeight: 1.9, fontSize: '15px' }}>
                    {Parser(content)}
                  </div>
                ) : (
                  <div>
                    {[
                      { title: '1. Information We Collect', body: `We collect information you provide when creating an account (name, email, phone number, country), transaction data, and device/usage information to operate and improve ${appName}.` },
                      { title: '2. How We Use Your Information', body: 'We use your information to process transactions, verify your identity, provide customer support, send service notifications, and improve our platform. We do not use your data for advertising.' },
                      { title: '3. Information Sharing', body: 'We do not sell, trade, or rent your personal information to third parties. We may share data with service providers who assist in platform operations, subject to strict confidentiality agreements.' },
                      { title: '4. Data Security', body: 'All data is encrypted in transit and at rest. Your transaction PIN is stored using one-way encryption and is never visible to our staff. We use bank-grade security protocols to protect your information.' },
                      { title: '5. Transaction Data', body: 'All transaction records are stored securely and retained as required by Nigerian financial regulations. You can view your complete transaction history from your account dashboard at any time.' },
                      { title: '6. Your Rights', body: 'You have the right to access, correct, or delete your personal data. To exercise these rights, contact us through the platform. Note that some data must be retained for regulatory compliance.' },
                      { title: '7. Cookies', body: 'We use essential cookies to keep you logged in and remember your preferences. We do not use advertising or tracking cookies.' },
                      { title: '8. Changes to This Policy', body: 'We may update this policy from time to time. We will notify you of significant changes via email or in-app notification. Continued use of the platform constitutes acceptance.' },
                      { title: '9. Contact Us', body: 'If you have questions about this Privacy Policy or how we handle your data, please contact us through the Contact Us page or our WhatsApp support channel.' },
                    ].map((section, i) => (
                      <div key={i} style={{ marginBottom: '32px' }}>
                        <h3 style={{ fontWeight: 700, color: '#1A1F36', fontSize: '1rem', marginBottom: '12px' }}>
                          {section.title}
                        </h3>
                        <p style={{ color: '#718096', lineHeight: 1.9 }}>{section.body}</p>
                        {i < 8 && <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginTop: '24px' }} />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterNote />
    </Fragment>
  );
};

export default UserPrivacyPolicy;
