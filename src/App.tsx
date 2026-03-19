/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Hammer, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MapPin, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const services = [
  {
    title: "Sửa Chữa Điện",
    description: "Xử lý chập cháy, lắp đặt thiết bị điện, bảo trì hệ thống điện gia đình.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    price: "Từ 150.000đ"
  },
  {
    title: "Sửa Chữa Nước",
    description: "Thông tắc bồn cầu, sửa rò rỉ ống nước, lắp đặt thiết bị vệ sinh.",
    icon: <Droplets className="w-8 h-8 text-blue-500" />,
    price: "Từ 100.000đ"
  },
  {
    title: "Sửa Điện Lạnh",
    description: "Bảo dưỡng điều hòa, sửa tủ lạnh, máy giặt, bình nóng lạnh.",
    icon: <Wrench className="w-8 h-8 text-cyan-500" />,
    price: "Từ 200.000đ"
  },
  {
    title: "Sửa Chữa Nhà",
    description: "Sơn bả, chống thấm, sửa chữa nội thất, cải tạo không gian sống.",
    icon: <Hammer className="w-8 h-8 text-orange-500" />,
    price: "Khảo sát báo giá"
  }
];

const reviews = [
  {
    name: "Chị Lan",
    area: "Quận 7",
    avatar:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#fb923c"/>
              <stop offset="1" stop-color="#f97316"/>
            </linearGradient>
          </defs>
          <rect width="160" height="160" rx="80" fill="url(#g)"/>
          <circle cx="80" cy="64" r="28" fill="rgba(255,255,255,0.95)"/>
          <path d="M32 136c10-26 30-40 48-40s38 14 48 40" fill="rgba(255,255,255,0.95)"/>
          <text x="80" y="96" text-anchor="middle" font-size="44" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-weight="800" fill="#9a3412">CL</text>
        </svg>`
      ),
    content: "Kỹ thuật đến nhanh, báo giá rõ ràng trước khi làm. Sửa xong có dán tem bảo hành nên rất yên tâm.",
    rating: 5
  },
  {
    name: "Anh Minh",
    area: "Thủ Đức",
    avatar:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#38bdf8"/>
              <stop offset="1" stop-color="#06b6d4"/>
            </linearGradient>
          </defs>
          <rect width="160" height="160" rx="80" fill="url(#g)"/>
          <circle cx="80" cy="64" r="28" fill="rgba(255,255,255,0.95)"/>
          <path d="M32 136c10-26 30-40 48-40s38 14 48 40" fill="rgba(255,255,255,0.95)"/>
          <text x="80" y="96" text-anchor="middle" font-size="44" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-weight="800" fill="#0e7490">AM</text>
        </svg>`
      ),
    content: "Làm gọn gàng, tư vấn đúng bệnh, không chèo kéo thay linh kiện. Sẽ giới thiệu cho bạn bè.",
    rating: 5
  },
  {
    name: "Cô Hạnh",
    area: "Bình Thạnh",
    avatar:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#a78bfa"/>
              <stop offset="1" stop-color="#f472b6"/>
            </linearGradient>
          </defs>
          <rect width="160" height="160" rx="80" fill="url(#g)"/>
          <circle cx="80" cy="64" r="28" fill="rgba(255,255,255,0.95)"/>
          <path d="M32 136c10-26 30-40 48-40s38 14 48 40" fill="rgba(255,255,255,0.95)"/>
          <text x="80" y="96" text-anchor="middle" font-size="44" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-weight="800" fill="#7c3aed">CH</text>
        </svg>`
      ),
    content: "Gọi buổi tối vẫn hỗ trợ, thái độ lịch sự. Giá hợp lý, xử lý triệt để rò nước.",
    rating: 5
  }
];

const processSteps = [
  {
    title: "Gửi thông tin",
    desc: "Để lại SĐT + mô tả ngắn vấn đề (30 giây)."
  },
  {
    title: "Xác nhận & báo giá",
    desc: "Chúng tôi gọi lại trong 5 phút để tư vấn và báo giá trước."
  },
  {
    title: "Đến sửa & bảo hành",
    desc: "Kỹ thuật đến đúng hẹn, nghiệm thu rõ ràng, bảo hành minh bạch."
  }
];

const faqs = [
  {
    q: "Có phát sinh chi phí không?",
    a: "Chúng tôi báo giá trước khi làm. Chỉ tiến hành khi bạn đồng ý; không phát sinh ngoài thỏa thuận."
  },
  {
    q: "Thời gian có mặt bao lâu?",
    a: "Thông thường 30–60 phút (tùy khu vực và khung giờ). Trường hợp xa sẽ được báo thời gian cụ thể."
  },
  {
    q: "Bảo hành như thế nào?",
    a: "Bảo hành 6–12 tháng tùy hạng mục. Có ghi nhận thông tin bảo hành để hỗ trợ nhanh."
  },
  {
    q: "Không sửa được thì sao?",
    a: "Chúng tôi sẽ tư vấn phương án phù hợp. Nếu không thể xử lý, bạn không mất phí dịch vụ."
  }
];

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Điện'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const hotline = '0123456789';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', address: '', service: 'Điện' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ProFix</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Dịch vụ</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Bảng giá</a>
              <a href="#process" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Quy trình</a>
              <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">FAQ</a>
              <a
                href={`tel:${hotline}`}
                className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
              >
                Hotline:{' '}
                <span className="font-black">
                  {hotline.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3')}
                </span>
              </a>
              <button 
                onClick={scrollToForm}
                className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Đặt lịch ngay
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4"
          >
            <a href="#services" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Dịch vụ</a>
            <a href="#pricing" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Bảng giá</a>
            <a href="#process" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Quy trình</a>
            <a href="#faq" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href={`tel:${hotline}`} className="block text-slate-900 font-bold">
              Gọi: {hotline.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3')}
            </a>
            <button 
              onClick={scrollToForm}
              className="w-full bg-orange-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
            >
              Đặt lịch ngay
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
              Dịch vụ sửa chữa tại nhà 24/7
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Sửa Chữa Mọi Thứ <br />
              <span className="text-orange-600">Nhanh Chóng & Uy Tín</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Đội ngũ kỹ thuật viên chuyên nghiệp, có mặt sau 30 phút. Cam kết chất lượng, bảo hành dài hạn cho mọi dịch vụ.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToForm}
                className="px-8 py-4 bg-orange-600 text-white rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2 group"
              >
                Đặt Lịch Hẹn
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={`tel:${hotline}`}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-orange-600" />
                {hotline.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3')}
              </a>
            </div>
          </motion.div>

          {/* Trust Bar */}
          <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Báo giá trước", desc: "Minh bạch, không phát sinh", icon: <ShieldCheck className="w-5 h-5 text-orange-600" /> },
              { title: "Có mặt nhanh", desc: "Thông thường 30–60 phút", icon: <Clock className="w-5 h-5 text-orange-600" /> },
              { title: "Bảo hành rõ ràng", desc: "6–12 tháng tùy hạng mục", icon: <CheckCircle2 className="w-5 h-5 text-orange-600" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-5 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-slate-200 pt-10">
            {[
              { label: "Khách hàng", value: "5000+" },
              { label: "Kỹ thuật viên", value: "50+" },
              { label: "Năm kinh nghiệm", value: "10+" },
              { label: "Tỷ lệ hài lòng", value: "99%" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Khách Hàng Nói Gì</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Một vài phản hồi gần đây để bạn yên tâm trước khi đặt lịch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-12 h-12 rounded-2xl border border-slate-200 object-cover bg-white"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-extrabold text-slate-900">{r.name}</p>
                      <p className="text-sm text-slate-500 font-medium">{r.area}</p>
                    </div>
                  </div>
                  <div className="text-orange-600 font-black">
                    {"★".repeat(r.rating)}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{r.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-10 md:p-14 shadow-xl shadow-slate-200">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full" />
            <div className="relative grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div className="text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-xs font-black tracking-widest uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  Miễn phí tư vấn & báo giá
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
                  Để lại số điện thoại, <span className="text-orange-600">chúng tôi gọi lại trong 5 phút</span>
                </h3>
                <p className="text-slate-600 mt-4 max-w-xl leading-relaxed">
                  Báo giá trước khi làm, không phát sinh. Nếu không xử lý được, bạn không mất phí dịch vụ.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={scrollToForm}
                  className="w-full px-8 py-4 bg-orange-600 text-white rounded-2xl font-black text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2"
                >
                  Nhận báo giá ngay
                  <ChevronRight className="w-6 h-6" />
                </button>
                <a
                  href={`tel:${hotline}`}
                  className="w-full px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-extrabold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  Gọi {hotline.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Chúng tôi cung cấp giải pháp toàn diện cho mọi vấn đề trong ngôi nhà của bạn.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-bold">{service.price}</span>
                  <button onClick={scrollToForm} className="text-slate-400 hover:text-orange-600 transition-colors">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Tại Sao Nên Chọn <br /><span className="text-orange-500">ProFix?</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Kỹ thuật viên tay nghề cao", desc: "Đều có trên 5 năm kinh nghiệm thực chiến." },
                  { title: "Giá cả minh bạch", desc: "Báo giá trước khi làm, không phát sinh chi phí." },
                  { title: "Bảo hành tận tâm", desc: "Bảo hành từ 6-12 tháng cho mọi hạng mục." },
                  { title: "Phục vụ siêu tốc", desc: "Có mặt ngay sau 30 phút gọi điện." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-orange-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Clock className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Thời gian làm việc</p>
                  <p className="text-xl font-bold">Thứ 2 - Chủ Nhật (07:00 - 22:00)</p>
                </div>
              </div>
              <div className="p-6 bg-orange-600 rounded-2xl">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Hotline khẩn cấp 24/7</p>
                <p className="text-3xl font-black">{hotline.replace(/(\d{4})(\d{3})(\d{3})/, '$1.$2.$3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Quy Trình 3 Bước</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Nhanh gọn, rõ ràng — để bạn an tâm trước khi đặt lịch.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-lg">
                    {i + 1}
                  </div>
                  <ChevronRight className="text-slate-300 w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bảng Giá Tham Khảo</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Giá có thể thay đổi theo tình trạng thực tế. Bạn sẽ được báo giá trước khi làm.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-orange-600 font-black">{service.price}</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                <button
                  onClick={scrollToForm}
                  className="mt-8 w-full py-3 rounded-2xl font-extrabold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
                >
                  Nhận báo giá
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Câu Hỏi Thường Gặp</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Giải đáp nhanh những băn khoăn phổ biến trước khi bạn để lại thông tin.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-lg font-extrabold text-slate-900">{item.q}</span>
                  <span className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-open:text-orange-600 transition-colors">
                    <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" ref={formRef} className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Đặt Lịch / Nhận Báo Giá</h2>
              <p className="text-slate-600">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại sau 5 phút.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Nguyễn Văn A"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="09xx xxx xxx"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Địa chỉ</label>
                <div className="relative">
                  <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input 
                    required
                    type="text" 
                    placeholder="Số nhà, tên đường, quận/huyện..."
                    className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Dịch vụ cần sửa chữa</label>
                <select 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Điện">Sửa chữa Điện</option>
                  <option value="Nước">Sửa chữa Nước</option>
                  <option value="Điều hòa">Sửa chữa Điều hòa / Tủ lạnh</option>
                  <option value="Nhà cửa">Sửa chữa Nhà cửa</option>
                  <option value="Khác">Dịch vụ khác</option>
                </select>
              </div>

              <button 
                disabled={status === 'loading'}
                type="submit"
                className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 ${
                  status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 text-white active:scale-[0.98]'
                }`}
              >
                {status === 'loading' ? 'Đang gửi...' : 'Nhận Báo Giá / Đặt Lịch'}
                {status !== 'loading' && <ChevronRight className="w-6 h-6" />}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl text-center font-bold"
                >
                  Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ gọi lại ngay.
                </motion.div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-center font-bold">
                  Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Sticky CTA (Mobile) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl p-3 shadow-2xl shadow-slate-300">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${hotline}`}
              className="py-3 rounded-2xl font-black bg-white border border-slate-200 text-slate-900 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-orange-600" />
              Gọi ngay
            </a>
            <button
              onClick={scrollToForm}
              className="py-3 rounded-2xl font-black bg-orange-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
            >
              Nhận báo giá
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <Wrench className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">ProFix</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">© 2026 ProFix Service. Tất cả quyền được bảo lưu.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">Facebook</a>
            <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">Zalo</a>
            <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
