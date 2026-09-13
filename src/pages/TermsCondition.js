import React, { Fragment, useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import MenuBar from '../component/Menu';
import FooterNote from '../component/Footer';
import client from '../component/client';
import useAppInfo from '../component/useAppInfo';

const TermsCondition = () => {
  const { appName } = useAppInfo();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `Terms & Conditions — ${appName}`;
    window.scrollTo(0, 0);
    fetchContent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appName]);

  const fetchContent = async () => {
    try {
      const res = await client.get('/api/fetchAboutCompany');
      if (res.data) setContent(res.data.term_condition || '');
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
            Terms & Conditions
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
              <div style={{
                background: '#fff', borderRadius: '20px', padding: '48px',
                border: '1px solid #e8edf5', boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              }}>
                {loading ? (
                  <div style={{ textAlign: 'center', padding: '60px 0', color: '#a0aec0' }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
                    Loading terms...
                  </div>
                ) : content ? (
                  <div style={{
                    color: '#4A5568', lineHeight: 1.9, fontSize: '15px',
                  }}>
                    {Parser(content)}
                  </div>
                ) : (
                  <div>
                    {[
                      { title: '1. Acceptance of Terms', body: `By accessing and using ${appName}, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our platform.` },
                      { title: '2. Account Registration', body: 'You must provide accurate and complete information when creating your account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.' },
                      { title: '3. Services', body: `${appName} provides virtual funds exchange services including buying and selling PayPal, Payoneer, and Bitcoin, as well as utility bill payments and mobile top-ups. All transactions are subject to admin verification and approval.` },
                      { title: '4. Transaction PIN', body: 'You are required to set a 4-digit transaction PIN that is separate from your login password. This PIN authorises every transaction. Keep it confidential and do not share it with anyone.' },
                      { title: '5. Prohibited Activities', body: 'You may not use our platform for any unlawful purpose, to commit fraud, to launder money, or to engage in any activity that violates applicable Nigerian laws and regulations.' },
                      { title: '6. Refund Policy', body: 'Failed orders are automatically refunded to your wallet. Manual refund requests for virtual fund sales are subject to review and may take 24-72 hours to process.' },
                      { title: '7. Limitation of Liability', body: `${appName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our platform. Our liability is limited to the amount of the transaction in question.` },
                      { title: '8. Changes to Terms', body: 'We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.' },
                      { title: '9. Contact', body: 'For any questions regarding these Terms and Conditions, please contact us through the Contact Us page or reach us on WhatsApp.' },
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

export default TermsCondition;
