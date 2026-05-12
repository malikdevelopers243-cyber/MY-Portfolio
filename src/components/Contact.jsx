import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

emailjs.init("NtCkgFkbTRgSpUDco")

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.')
      return
    }

    const templateParams = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message
    }

    emailjs.send('service_u1hzadt', 'template_vuhs8v9', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setError('')
        setSuccess(true)
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch((err) => {
        console.log('FAILED...', err)
        setError('Failed to send message. Please try again.')
      })
  }

  const inputClass = "w-full bg-[#0d1117] border border-[#1f2937] text-white placeholder-[#8b949e] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00c896] transition-colors font-[Inter]"

  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div>
          <div className="text-center mb-12">
            <span className="text-[#00c896] uppercase tracking-widest text-xs font-semibold font-[Poppins]">Please feel free to Contact</span>
            <h2 className="text-4xl font-bold font-[Poppins] text-white mt-3 mb-2">Get In Touch</h2>
            <div className="w-12 h-1 bg-[#00c896] mx-auto mt-2 mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: faEnvelope, label: 'Email', value: 'malikdevelopers243@gmail.com' },
                { icon: faMapMarkerAlt, label: 'Location', value: 'Pakistan' },
                { icon: faPhone, label: 'Phone', value: '+92-3014166594' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00c896]/10 border border-[#00c896]/30 rounded-lg flex items-center justify-center text-[#00c896]">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div>
                    <div className="text-[#8b949e] text-sm font-[Inter]">{item.label}</div>
                    <div className="text-white font-medium font-[Poppins]">{item.value}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/malikdevelopers243-cyber" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#1f2937] rounded-lg flex items-center justify-center text-[#8b949e] hover:border-[#00c896] hover:text-[#00c896] transition-all">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/malik-developers21" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#1f2937] rounded-lg flex items-center justify-center text-[#8b949e] hover:border-[#00c896] hover:text-[#00c896] transition-all">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com/asad_malik054?igsh=aXFpM2gxbXlsMWt2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#1f2937] rounded-lg flex items-center justify-center text-[#8b949e] hover:border-[#00c896] hover:text-[#00c896] transition-all">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/share/1ByP8zbPFS/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-[#1f2937] rounded-lg flex items-center justify-center text-[#8b949e] hover:border-[#00c896] hover:text-[#00c896] transition-all">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
            </div>

            <div className="bg-[#161b22] border border-[#1f2937] rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className={inputClass}
                ></textarea>

                {error && <div className="text-red-500 text-sm">{error}</div>}
                {success && <div className="text-green-500 text-sm">Message sent successfully!</div>}

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#00c896] text-[#0d1117] font-bold rounded-lg hover:bg-[#00c896]/90 transition-colors font-[Poppins]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
