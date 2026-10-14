import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';
import {
  Sparkles,
  Smartphone,
  CheckCircle2,
  Gauge,
  Terminal,
  Database,
  Layers,
  Flame,
  Cpu,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  ReactLogo,
  JavaScriptLogo,
  Html5Logo,
  Css3Logo,
  GitLogo,
  BootstrapLogo,
  TailwindLogo,
  Figma,
  TypeScriptLogo,
  NextLogo,
  NodeLogo
} from './Icons';

export default function Skills() {
  const { t, isRtl, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const isArabic = language === 'ar';

  const tabs = [
    { id: 'all', label: isArabic ? 'جميع التقنيات' : 'All Technologies' },
    { id: 'core', label: isArabic ? 'الواجهات الأساسية' : 'Core Frontend' },
    { id: 'ui', label: isArabic ? 'التصميم والأنظمة' : 'UI & Layouts' },
    { id: 'tools', label: isArabic ? 'أدوات التطوير' : 'Tools & Workflow' }
  ];

  const allSkills = [
    // ----------------------------------------------------
    // Core Frontend
    // ----------------------------------------------------
    {
      id: 'react',
      name: 'React.js',
      category: 'core',
      categoryName: isArabic ? 'إطار العمل الرئيسي' : 'Core Framework',
      level: isArabic ? 'متقدم' : 'Advanced',
      Icon: ReactLogo,
      accent: '#00d8ff',
      glow: 'rgba(0, 216, 255, 0.22)',
      description: isArabic
        ? 'بناء تطبيقات أحادية الصفحة (SPA) معمارية مكونات نظيفة، إدارة الحالة، واستخدام متقدم للـ Hooks.'
        : 'Engineering reactive single-page applications, modular component architectures, hooks, and clean state workflows.',
      features: ['Hooks & Context', 'SPA Architecture', 'Reusable Components']
    },
    {
      id: 'js',
      name: 'JavaScript (ES6+)',
      category: 'core',
      categoryName: isArabic ? 'محرك البرمجة' : 'Core Engine',
      level: isArabic ? 'متقدم' : 'Advanced',
      Icon: JavaScriptLogo,
      accent: '#f7df1e',
      glow: 'rgba(247, 223, 30, 0.22)',
      description: isArabic
        ? 'إتقان معايير ECMAScript الحديثة، البرمجة غير المتزامنة (Async/Await)، والتعامل المباشر عالي الكفاءة مع الـ DOM.'
        : 'Writing clean modular ES6+ logic, asynchronous workflows, API integrations, and robust client-side algorithms.',
      features: ['Async / Await', 'ES6+ Modules', 'DOM Operations']
    },
    {
      id: 'html',
      name: 'HTML5 Semantic Web',
      category: 'core',
      categoryName: isArabic ? 'هيكلة الويب' : 'Structure & SEO',
      level: isArabic ? 'تخصصي' : 'Specialized',
      Icon: Html5Logo,
      accent: '#e34f26',
      glow: 'rgba(227, 79, 38, 0.22)',
      description: isArabic
        ? 'بناء هياكل دلالية دقيقة تدعم معايير السيو (SEO)، سهولة الوصول للجميع (A11y)، وتكامل الوسائط الحديثة.'
        : 'Crafting accessible semantic page structures, SEO-optimized markup, and rich HTML5 multimedia elements.',
      features: ['Semantic Markup', 'Accessibility (A11y)', 'SEO Foundation']
    },
    {
      id: 'css',
      name: 'CSS3 & Modern Layouts',
      category: 'core',
      categoryName: isArabic ? 'تنسيق متقدم' : 'Styling & Animation',
      level: isArabic ? 'تخصصي' : 'Specialized',
      Icon: Css3Logo,
      accent: '#264de4',
      glow: 'rgba(38, 77, 228, 0.22)',
      description: isArabic
        ? 'إتقان شبكات CSS Grid و Flexbox، أنيميشن ومؤثرات حركية فائقة النعومة، واستخدام متغيرات الـ CSS لتصميم ديناميكي.'
        : 'Mastery over Flexbox, multi-column CSS Grid, fluid keyframe micro-animations, and themeable custom properties.',
      features: ['CSS Grid & Flexbox', 'Custom Keyframes', 'Design Variables']
    },

    // ----------------------------------------------------
    // UI & Layouts
    // ----------------------------------------------------
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'ui',
      categoryName: isArabic ? 'تصميم عصري' : 'Utility Framework',
      level: isArabic ? 'متقدم' : 'Advanced',
      Icon: TailwindLogo,
      accent: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.22)',
      description: isArabic
        ? 'بناء واجهات سريعة وأنيقة بنظام Utility-First مع تخصيص الـ Tokens، وإعداد الثيمات الداكنة والفاتحة بسلاسة.'
        : 'Rapid modern UI construction utilizing utility-first design systems, responsive utilities, and custom themes.',
      features: ['Utility-First', 'Custom Tokens', 'Dark/Light Theme']
    },
    {
      id: 'responsive',
      name: isArabic ? 'تصميم متجاوب لجميع الشاشات' : 'Responsive & Adaptive UI',
      category: 'ui',
      categoryName: isArabic ? 'تجربة المستخدم' : 'Viewport Ergonomics',
      level: isArabic ? 'أساسي' : 'Essential',
      Icon: Smartphone,
      accent: '#ff7700',
      glow: 'rgba(255, 119, 0, 0.22)',
      description: isArabic
        ? 'تصميم تجارب مستخدم تتكيف بمرونة مع كافة أحجام الشاشات من الهواتف الذكية وحتى شاشات الحواسيب العملاقة.'
        : 'Mobile-first architectural paradigm ensuring zero layout breakage, fluid touch targets, and cross-device polish.',
      features: ['Mobile-First', 'Fluid Breakpoints', 'Touch-Optimized']
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap 5',
      category: 'ui',
      categoryName: isArabic ? 'مكتبة الواجهات' : 'Layout Toolkit',
      level: isArabic ? 'كفاءة عالية' : 'Proficient',
      Icon: BootstrapLogo,
      accent: '#7952b3',
      glow: 'rgba(121, 82, 179, 0.22)',
      description: isArabic
        ? 'بناء الهياكل الشبكية السريعة (12-Column Grid) واستخدام المكونات الجاهزة وتكييفها بما يناسب الهوية البصرية.'
        : 'Fast wireframe translation using the 12-column grid, responsive navigation patterns, and utility classes.',
      features: ['12-Column Grid', 'UI Components', 'Rapid Prototyping']
    },
    {
      id: 'figma',
      name: isArabic ? 'تحويل تصاميم Figma إلى كود' : 'Figma to Code (Pixel-Perfect)',
      category: 'ui',
      categoryName: isArabic ? 'دقة التصميم' : 'Design Fidelity',
      level: isArabic ? 'دقة متناهية' : 'Pixel-Perfect',
      Icon: Figma,
      accent: '#f24e1e',
      glow: 'rgba(242, 78, 30, 0.22)',
      description: isArabic
        ? 'تحويل التصاميم والنماذج الأولية في Figma إلى كود برمجي حي ومطابق بنسبة 100% مع الاهتمام بأدق التفاصيل والمسافات.'
        : 'Translating Figma prototypes into living interactive web interfaces with pixel-perfect precision and typography fidelity.',
      features: ['100% Pixel Match', 'Design Systems', 'Micro-Interactions']
    },

    // ----------------------------------------------------
    // Tools & Workflow
    // ----------------------------------------------------
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'tools',
      categoryName: isArabic ? 'إدارة الإصدارات' : 'Version Control',
      level: isArabic ? 'احترافي' : 'Professional',
      Icon: GitLogo,
      accent: '#f05032',
      glow: 'rgba(240, 80, 50, 0.22)',
      description: isArabic
        ? 'إدارة فروع المشروع (Branches)، توثيق التغييرات باحترافية، وإدارة ومشاركة المستودعات البرمجية ونشرها.'
        : 'Version control discipline, atomic commits, branch workflows, pull requests, and collaborative repository hosting.',
      features: ['Branching Strategy', 'Commit Hygiene', 'Repository Hosting']
    },
    {
      id: 'testing',
      name: isArabic ? 'توافق المتصفحات الحديثة' : 'Cross-Browser Compatibility',
      category: 'tools',
      categoryName: isArabic ? 'ضمان الجودة' : 'Quality Assurance',
      level: isArabic ? 'معتمد' : 'Verified',
      Icon: CheckCircle2,
      accent: '#10b981',
      glow: 'rgba(16, 185, 129, 0.22)',
      description: isArabic
        ? 'فحص شامل للتأكد من أن الموقع يعمل بنفس المظهر والأداء السلس على Chrome و Safari و Firefox و Microsoft Edge.'
        : 'Rigorous cross-platform validation verifying rendering fidelity and UX uniformity across modern browsing engines.',
      features: ['Chrome & Safari', 'Firefox & Edge', 'Zero Visual Defects']
    },
    {
      id: 'perf',
      name: isArabic ? 'تحسين الأداء ومحركات البحث (SEO)' : 'Performance & SEO',
      category: 'tools',
      categoryName: isArabic ? 'تحسين السرعة' : 'Speed & Vitals',
      level: isArabic ? 'عالي الأداء' : 'High Performance',
      Icon: Gauge,
      accent: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.22)',
      description: isArabic
        ? 'تحسين سرعة تحميل الصفحات، فحص Core Web Vitals عبر Lighthouse، وضبط الـ Meta Tags لتعزيز ظهور الموقع في محركات البحث.'
        : 'Audit-driven optimization targeting Google Core Web Vitals, asset compression, lazy loading, and meta indexing.',
      features: ['Core Web Vitals', 'Lighthouse 95+', 'Asset Minification']
    },
    {
      id: 'devtools',
      name: 'Browser DevTools',
      category: 'tools',
      categoryName: isArabic ? 'أدوات التشخيص' : 'Inspection & Profiling',
      level: isArabic ? 'متقدم' : 'Advanced',
      Icon: Terminal,
      accent: '#06b6d4',
      glow: 'rgba(6, 182, 212, 0.22)',
      description: isArabic
        ? 'فحص مسارات الشبكة (Network)، تحليل استهلاك الذاكرة وسرعة المعالجة، وتصحيح أخطاء الـ JavaScript و CSS باحترافية.'
        : 'Deep runtime debugging, performance profiling, network payload analysis, and interactive responsive testing.',
      features: ['Network Profiling', 'Console Debugging', 'Memory Inspection']
    }
  ];

  const filteredSkills = activeTab === 'all'
    ? allSkills
    : allSkills.filter((s) => s.category === activeTab);

  // Show only 3 cards initially, expand to all when showAll is true
  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 3);

  // Future Horizons / Leveling Up
  const horizonsList = [
    {
      name: 'TypeScript',
      role: isArabic ? 'أمان الكود والأنظمة البرمجية الضخمة' : 'Strict Type Safety & Scalable Architecture',
      Icon: TypeScriptLogo,
      color: '#3178c6'
    },
    {
      name: 'Next.js 15',
      role: isArabic ? 'الرندرة من السيرفر والـ App Router' : 'Server Components, SSR & App Router',
      Icon: NextLogo,
      color: '#ffffff'
    },
    {
      name: 'Node.js & Express',
      role: isArabic ? 'بناء الـ RESTful APIs ومعمارية الباك إند' : 'RESTful API Engineering & Server Logic',
      Icon: NodeLogo,
      color: '#68a063'
    },
    {
      name: isArabic ? 'قواعد البيانات والـ REST APIs' : 'Databases & Fullstack APIs',
      role: isArabic ? 'تكامل الواجهات مع قواعد البيانات' : 'Data Modeling, SQL/NoSQL & Fullstack Integration',
      Icon: Database,
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '1180px' }}>
        
        {/* Section Header */}
        <div className="section-header reveal-on-scroll reveal-slide-up" style={{ marginBottom: '2.5rem' }}>
          <div className="section-badge">
            <Sparkles size={16} />
            <span>{t('skills_badge')}</span>
          </div>
          <h2 className="section-title">
            {t('skills_title')}
          </h2>
          <p className="section-subtitle">
            {t('skills_subtitle')}
          </p>
        </div>

        {/* Unified Floating Filter Dock */}
        <div className="skills-controls-bar reveal-on-scroll reveal-slide-up delay-100">
          <div className="skills-filter-group">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const count = tab.id === 'all'
                ? allSkills.length
                : allSkills.filter((s) => s.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAll(false);
                  }}
                  className={`skills-filter-btn ${isActive ? 'is-active' : ''}`}
                >
                  <span>{tab.label}</span>
                  <span className="skills-filter-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Interactive Tech Cards Grid (Shows 3 initially or all on click) */}
        <div className="skills-grid">
          {visibleSkills.map((skill, index) => {
            const IconComponent = skill.Icon;
            const slideClass = index % 2 === 0 ? 'reveal-slide-left' : 'reveal-slide-right';
            const delayClass = index % 3 === 0 ? 'delay-100' : index % 3 === 1 ? 'delay-200' : 'delay-300';
            return (
              <article
                key={skill.id}
                className={`skill-card reveal-on-scroll ${slideClass} ${delayClass} card-hover-fx`}
                style={{
                  '--skill-accent': skill.accent,
                  '--skill-glow': skill.glow
                }}
              >
                <div>
                  {/* Card Header: Icon + Category + Level Pill */}
                  <div className="skill-card-header">
                    <div className="skill-icon-box">
                      <IconComponent size={24} />
                    </div>

                    <div className="skill-header-meta">
                      <span className="skill-level-pill">
                        {skill.level}
                      </span>
                      <span className="skill-category-label">
                        {skill.categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Title + Rich Description */}
                  <div className="skill-card-body">
                    <h3 className="skill-title">
                      {skill.name}
                    </h3>
                    <p className="skill-desc">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Sub-feature Chips */}
                <div className="skill-feature-chips">
                  {skill.features.map((feat, fIdx) => (
                    <span key={fIdx} className="skill-chip">
                      {feat}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* See All / Show Less Toggle Button */}
        {filteredSkills.length > 3 && (
          <div className="skills-see-all-wrapper">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="skills-see-all-btn"
            >
              <span>
                {showAll
                  ? (isArabic ? 'عرض أقل' : 'Show Less')
                  : (isArabic ? `عرض جميع التقنيات (${filteredSkills.length})` : `See All Technologies (${filteredSkills.length})`)}
              </span>
              {showAll ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
            </button>
          </div>
        )}

        {/* Expanding Horizons & Continuous Leveling-Up Banner */}
        <div className="skills-horizon-card reveal-on-scroll reveal-slide-up delay-150">
          <div className="skills-horizon-header">
            <div className="skills-horizon-title-box">
              <span className="skills-horizon-pulse" />
              <h3 className="skills-horizon-heading">
                {isArabic ? 'آفاق قادمة وأحدث المهارات قيد التعلّم المستمر' : 'Active Exploration & Expanding Horizons'}
              </h3>
            </div>

            <div className="skills-horizon-badge">
              <Flame size={14} />
              <span>{isArabic ? 'تطوير مستمر' : 'Continuous Evolution'}</span>
            </div>
          </div>

          <div className="skills-horizon-grid">
            {horizonsList.map((item, idx) => {
              const IconItem = item.Icon;
              return (
                <div
                  key={idx}
                  className="skills-horizon-item"
                  style={{ '--horizon-color': item.color }}
                >
                  <div className="skills-horizon-icon-box">
                    <IconItem size={20} />
                  </div>
                  <div className="skills-horizon-meta">
                    <span className="skills-horizon-name">{item.name}</span>
                    <span className="skills-horizon-sub">{item.role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

