/**
 * Credentials & Achievements Data
 * Strictly sorted by priority:
 * 1. DEPI (Digital Egypt Pioneers Initiative) - Ministry of CIT Scholarship (React & Business English)
 * 2. Kafr El-Sheikh Governorate General Diwan - 8-Month Intensive Fieldwork & Digital Transformation
 * 3. International Competitions & Awards (IC-SIT 2026 IEEE + INNOVENTURE 2026 BNU)
 * 4. Major Student Activities & Tech Communities (MLSA + IEEE Kafrelsheikh Student Branch)
 * 5. Academic AI Honors - Faculty of Artificial Intelligence, Kafr El-Sheikh University
 * 6. Teaching & Mentorship - Genius Academy (Frontend Instructor for Kids + Shield of Excellence)
 * 7. Professional Data Analytics Bootcamp - 60-Hour Summer Camp (Alaa Essam Academy)
 * 8. Global Tech Summits - Techne Summit 2025 (Bibliotheca Alexandrina)
 */

export const credentialsData = [
  // ==========================================
  // RANK 1: DEPI SCHOLARSHIP (MINISTRY OF CIT)
  // ==========================================
  {
    id: 'depi-scholarship',
    rank: 1,
    rankBadge: {
      ar: '#1 منحة معتمدة • وزارة الاتصالات وتكنولوجيا المعلومات',
      en: '#1 Official Scholarship • MCIT DEPI'
    },
    category: 'depi',
    categoryName: {
      ar: 'منحة رواد مصر (DEPI)',
      en: 'DEPI Scholarship'
    },
    isDepiCard: true,
    tag: {
      ar: 'مبادرة رواد مصر الرقمية (DEPI) • وزارة الاتصالات وتكنولوجيا المعلومات',
      en: 'Digital Egypt Pioneers Initiative (DEPI) • Ministry of CIT'
    },
    title: {
      ar: 'منحة رواد مصر الرقمية (Digital Egypt Pioneers Initiative)',
      en: 'Digital Egypt Pioneers Initiative (DEPI) Scholarship'
    },
    role: {
      ar: 'مسار تطوير واجهات React المتقدمة + مسار اللغة الإنجليزية للأعمال (Round 4)',
      en: 'React Frontend Developer Track + Business English Track'
    },
    issuer: {
      ar: 'وزارة الاتصالات وتكنولوجيا المعلومات بالتعاون مع elharefa و NEXT و CTO Courses و SYE',
      en: 'Ministry of CIT in partnership with elharefa, NEXT, CTO Courses & SYE'
    },
    period: {
      ar: 'منحة تقنية مكثفة معتمدة (نوفمبر 2025 – يوليو 2026)',
      en: 'Certified Intensive Tech Scholarship (Nov 2025 – July 2026)'
    },
    status: {
      ar: 'تم إتمام المسارين واعتماد الشهادات الرسمية',
      en: 'Dual Tracks Completed & Certified'
    },
    primaryImage: '/credentials/01-depi/depiReactCertificate.jpeg',
    description: {
      ar: 'إتمام منحة رواد مصر الرقمية المرموقة تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات في مسارين متكاملين: مسار تطوير الواجهات الأمامية التفاعلية بتقنية React الحديثة (بالشراكة مع elharefa و NEXT و CTO Courses)، ومسار اللغة الإنجليزية للأعمال والتواصل المؤسسي (Round 4) بالتعاون مع SYE English Community. البرنامج معتمد رسمياً بشهادات إنجاز موثقة وملفات PDF أصلية.',
      en: 'Graduated from the prestigious Digital Egypt Pioneers Initiative (DEPI) under the Egyptian Ministry of CIT across two complementary tracks: Modern React Frontend Web Development (partnered with elharefa, NEXT & CTO Courses) and Business English Professional Communication (Round 4) delivered with SYE English Community, backed by verified official PDF credentials.'
    },
    keyHighlights: [
      {
        ar: 'شهادة اعتماد رسمية لمسار React Frontend Web Developer مع الشركات التقنية الشريكة',
        en: 'Official Certificate of Achievement for React Frontend Track with partner tech firms'
      },
      {
        ar: 'شهادة إتمام رسمية لمسار اللغة الإنجليزية للأعمال (Business English Track - Round 4)',
        en: 'Official Certificate of Completion for Business English communication track with SYE'
      },
      {
        ar: 'إتقان معمارية React المتقدمة، إدارة الحالة، التحكم بالنسخ Git، ومعايير الكود النظيف',
        en: 'Mastered advanced React architecture, complex state management, and Git workflows'
      },
      {
        ar: 'شهادات معتمدة رسمياً بخاتم DEPI ووزارة الاتصالات متوفرة بصيغة PDF للتحميل والمعاينة',
        en: 'Officially verified credentials with DEPI seal and downloadable high-res PDF files'
      }
    ],
    skills: [
      'React.js',
      'JavaScript ES6+',
      'TypeScript',
      'State Management',
      'Agile / Scrum',
      'Git & GitHub',
      'Business English',
      'Clean Code'
    ],
    certificates: [
      {
        id: 'depi-react',
        title: {
          ar: 'شهادة مسار تطوير واجهات React (React Frontend Web Developer)',
          en: 'React Frontend Web Developer Certificate'
        },
        issuer: {
          ar: 'رواد مصر الرقمية • elharefa و NEXT و CTO Courses',
          en: 'DEPI • elharefa, NEXT & CTO Courses'
        },
        image: '/credentials/01-depi/depiReactCertificate.jpeg',
        pdfUrl: '/credentials/01-depi/Lobna Saad Salah IsmailDepiReactTrack.pdf'
      },
      {
        id: 'depi-english',
        title: {
          ar: 'شهادة مسار اللغة الإنجليزية للأعمال (Business English Track - Round 4)',
          en: 'Business English Track Certificate - Round 4 (SYE & MCIT)'
        },
        issuer: {
          ar: 'وزارة الاتصالات وتكنولوجيا المعلومات ومؤسسة SYE English Community',
          en: 'Ministry of CIT & SYE English Community'
        },
        image: '/credentials/01-depi/depiEnglishCertificate.jpeg',
        pdfUrl: '/credentials/01-depi/Lobna Saad SalahDEPIenglishCourse.pdf'
      }
    ]
  },

  // ==========================================
  // RANK 2: KAFR EL-SHEIKH GOVERNORATE FIELDWORK (8 MONTHS)
  // ==========================================
  {
    id: 'kfs-governorate',
    rank: 2,
    rankBadge: {
      ar: '#2 تدريب ميداني حكومي • ديوان عام محافظة كفر الشيخ',
      en: '#2 Field Training • Kafr El-Sheikh Governorate'
    },
    category: 'governorate',
    categoryName: {
      ar: 'ديوان عام المحافظة (8 أشهر)',
      en: 'Governorate Fieldwork'
    },
    isGovCard: true,
    tag: {
      ar: 'الإدارة العامة لنظم المعلومات والتحول الرقمي • ديوان عام محافظة كفر الشيخ',
      en: 'General Admin for Information Systems & Digital Transformation • Kafr El-Sheikh'
    },
    title: {
      ar: 'التدريب الميداني للتحول الرقمي بديوان عام محافظة كفر الشيخ (8 أشهر)',
      en: '8-Month Fieldwork at Kafr El-Sheikh Governorate General Diwan'
    },
    role: {
      ar: 'تطوير وتصميم واجهات الأنظمة الرقمية الحكومية (Frontend & UI Systems)',
      en: 'Government Digital Systems & Frontend Developer Trainee'
    },
    issuer: {
      ar: 'ديوان عام محافظة كفر الشيخ - برعاية معالي نائب المحافظ د. عمرو البشبيشي',
      en: 'Kafr El-Sheikh Governorate Diwan - Under Auspices of Deputy Governor Dr. Amr El-Beshbeshi'
    },
    period: {
      ar: '8 أشهر تدريب ميداني عملي مكثف',
      en: '8 Months Intensive On-Site Training'
    },
    status: {
      ar: 'إتمام التدريب والمساهمة في بناء 3 أنظمة حكومية حية',
      en: 'Completed & Contributed to 3 Live Government Systems'
    },
    primaryImage: '/credentials/01-depi/lobnaPhoto2Egypt.jpeg',
    description: {
      ar: 'تدريب عملي ميداني مكثف على مدار 8 أشهر داخل الإدارة العامة لنظم المعلومات والتحول الرقمي بديوان عام محافظة كفر الشيخ تحت رعاية نائب المحافظ د. عمرو البشبيشي. المساهمة الفاعلة في بناء وتطوير 3 أنظمة رقمية حية تخدم العمل الحكومي وتسهل الخدمات للمواطنين، والعمل بروح الفريق في قاعات الاجتماعات وصالات التحول الرقمي تحت شعار "Teamwork makes the dream work".',
      en: '8-month intensive on-site field training at the General Administration for Information Systems and Digital Transformation in Kafr El-Sheikh Governorate Diwan under the auspices of Deputy Governor Dr. Amr El-Beshbeshi. Contributed to designing and building 3 live digital government systems serving citizens, working closely with engineering leads and administrative directors.'
    },
    keyHighlights: [
      {
        ar: 'المساهمة المباشرة في تصميم وتطوير 3 أنظمة رقمية حية تخدم ديوان عام المحافظة',
        en: 'Direct contribution to designing and developing 3 live digital systems for the governorate'
      },
      {
        ar: 'التدريب العملي داخل صالات التحول الرقمي وقاعات الاجتماعات التنفيذية بالديوان',
        en: 'On-site fieldwork inside digital transformation labs and executive conference halls'
      },
      {
        ar: 'العمل تحت إشراف ورعاية نائب المحافظ د. عمرو البشبيشي وقيادات نظم المعلومات',
        en: 'Trained under the supervision of Deputy Governor Dr. Amr El-Beshbeshi and IT leadership'
      },
      {
        ar: 'توثيق وتغطية إعلامية رسمية متعددة على الصفحة الرسمية الموثقة لديوان المحافظة',
        en: 'Documented through multiple official media coverages on the verified Governorate page'
      }
    ],
    skills: [
      'Digital Transformation',
      'Government Portals',
      'React UI Systems',
      'Production Deployment',
      'Teamwork Leadership',
      'UI/UX Standards'
    ],
    gallery: [
      {
        url: '/credentials/01-depi/lobnaPhoto2Egypt.jpeg',
        title: {
          ar: 'قاعة المجلس التنفيذي بديوان عام المحافظة والعلم المصري',
          en: 'Executive Council Hall at the Governorate Diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs.jpeg',
        title: {
          ar: 'شعار ورؤية قاعة التدريب: Teamwork makes the dream work',
          en: 'Training Room Motto: Teamwork makes the dream work'
        }
      },
      {
        url: '/credentials/01-depi/kfs1.jpeg',
        title: {
          ar: 'جلسات العمل البرمجي مع فريق الإدارة العامة لنظم المعلومات',
          en: 'Coding and sprint review sessions with the digital transformation team'
        }
      },
      {
        url: '/credentials/01-depi/kfs2.jpeg',
        title: {
          ar: 'واجهة ديوان عام محافظة كفر الشيخ',
          en: 'Kafr El-Sheikh Governorate General Diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs3.jpeg',
        title: {
          ar: 'قاعة الاجتماعات الرئيسية والمناقشات التقنية',
          en: 'Main Conference Hall during technical sprint planning'
        }
      },
      {
        url: '/credentials/01-depi/kfs4.jpeg',
        title: {
          ar: 'مكتب العمل والأجهزة البرمجية بالديوان العام',
          en: 'Development workstation at the Governorate Diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs5.jpeg',
        title: {
          ar: 'شاشات المتابعة التفاعلية لمشاريع المحافظة الرقمية',
          en: 'Interactive monitoring screens for digital governorate projects'
        }
      },
      {
        url: '/credentials/01-depi/kfs6.jpeg',
        title: {
          ar: 'دروع التكريم والتميز لنائب المحافظ د. عمرو البشبيشي',
          en: 'Shields of honor & excellence with leadership'
        }
      },
      {
        url: '/credentials/01-depi/kfs7.jpeg',
        title: {
          ar: 'منصة التدريب وقاعة المحاضرات التفاعلية بالديوان',
          en: 'Interactive training lecture hall at the diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs8.jpeg',
        title: {
          ar: 'صورة تذكارية لفريق المتدربين داخل ديوان عام المحافظة',
          en: 'Commemorative photo of the training squad at the Diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs9.jpeg',
        title: {
          ar: 'ورش العمل التقنية للتحول الرقمي',
          en: 'Digital transformation technical workshops'
        }
      },
      {
        url: '/credentials/01-depi/kfs10.jpeg',
        title: {
          ar: 'النقاشات المشتركة وتبادل الخبرات مع الموجهين',
          en: 'Collaborative knowledge sharing with technical mentors'
        }
      },
      {
        url: '/credentials/01-depi/kfs11.jpeg',
        title: {
          ar: 'لقطة تجمع فريق العمل أثناء تطوير الأنظمة',
          en: 'Team gathering during digital systems implementation'
        }
      },
      {
        url: '/credentials/01-depi/kfs12.jpeg',
        title: {
          ar: 'استعراض النماذج الأولية لواجهات المستخدم بالديوان',
          en: 'Reviewing UI prototypes at the Governorate diwan'
        }
      },
      {
        url: '/credentials/01-depi/kfs13.jpeg',
        title: {
          ar: 'أجواء التعاون والعمل الجماعي المثمر',
          en: 'Productive teamwork atmosphere'
        }
      },
      {
        url: '/credentials/01-depi/kfs14.jpeg',
        title: {
          ar: 'التكريم والتقدير الرسمي لجهود المتدربين',
          en: 'Official recognition for trainees contributions'
        }
      }
    ],
    socialLinks: [
      {
        label: { ar: 'تغطية ديوان المحافظة 1', en: 'Governorate Coverage 1' },
        url: 'https://www.facebook.com/share/186dNP3wgB/'
      },
      {
        label: { ar: 'تغطية ديوان المحافظة 2', en: 'Governorate Coverage 2' },
        url: 'https://www.facebook.com/share/p/1JSD31K9LA/'
      },
      {
        label: { ar: 'تغطية ديوان المحافظة 3', en: 'Governorate Coverage 3' },
        url: 'https://www.facebook.com/share/p/1EH6P2z1hj/'
      },
      {
        label: { ar: 'تغطية ديوان المحافظة 4', en: 'Governorate Coverage 4' },
        url: 'https://www.facebook.com/share/p/1NY7griPuo/'
      }
    ]
  },

  // ==========================================
  // RANK 3: INTERNATIONAL COMPETITIONS & AWARDS
  // ==========================================
  {
    id: 'ic-sit-ieee',
    rank: 3,
    rankBadge: {
      ar: '#3 تكريم دولي • درع وشهادة IEEE',
      en: '#3 International Honor • IEEE Shield & Award'
    },
    category: 'competitions',
    categoryName: {
      ar: 'الجوائز الدولية',
      en: 'International Awards'
    },
    tag: {
      ar: 'مؤتمر IC-SIT\'2026 الدولي • IEEE Egypt AP-S / MTT-S Joint Chapter',
      en: 'IC-SIT\'2026 International Conference • IEEE Egypt Joint Chapter'
    },
    title: {
      ar: 'درع التميز وشهادة إنجاز لمشروع MobiFlow لأنظمة النقل الذكية بالذكاء الاصطناعي',
      en: 'Shield of Excellence & Achievement Award for MobiFlow AI Transportation'
    },
    issuer: {
      ar: 'IEEE Egypt Joint Chapter - Alexandria',
      en: 'IEEE Egypt Joint Chapter - Alexandria'
    },
    date: {
      ar: 'يوليو 2026 • الإسكندرية',
      en: 'July 2026 • Alexandria'
    },
    status: {
      ar: 'تكريم رسمي بدرع وميدالية تذكارية',
      en: 'Officially Awarded Trophy & Shield'
    },
    description: {
      ar: 'التتويج بدرع التميز التذكاري وشهادة التقدير الرسمية في المؤتمر الدولي IC-SIT\'2026 المنظم بالتعاون مع فرع IEEE Egypt Joint Chapter بالإسكندرية، وذلك عن مشروع MobiFlow وهو نظام متقدم يعتمد على الذكاء الاصطناعي لإدارة حركة النقل والمواصلات الحضرية والتخفيف من الاختناقات المرورية.',
      en: 'Honored with the official trophy shield and Certificate of Achievement at the IC-SIT\'2026 International Conference organized by IEEE Egypt Joint Chapter in Alexandria for project MobiFlow — an AI-powered smart urban transportation and traffic management platform.'
    },
    primaryImage: '/credentials/02-competitions/ic-sit.jpeg',
    gallery: [
      {
        url: '/credentials/02-competitions/ic-sit.jpeg',
        title: {
          ar: 'شهادة التقدير الرسمية لمشروع MobiFlow من IEEE IC-SIT\'2026',
          en: 'Official Certificate of Achievement for MobiFlow from IEEE IC-SIT\'2026'
        }
      },
      {
        url: '/credentials/02-competitions/ic-sit2.jpeg',
        title: {
          ar: 'درع التميز والتكريم التذكاري للمشروع',
          en: 'Close-up of the Commemorative Award Shield'
        }
      },
      {
        url: '/credentials/02-competitions/ic-sit3.jpeg',
        title: {
          ar: 'فريق العمل أثناء حفل التكريم ومنصة العرض',
          en: 'Team presentation and official award ceremony'
        }
      }
    ],
    skills: ['IEEE Egypt', 'MobiFlow System', 'AI Algorithms', 'Smart Mobility', 'Research & Innovation']
  },

  {
    id: 'innoventure-bnu',
    rank: 3,
    rankBadge: {
      ar: '#3 ابتكار جامعي • منتدى INNOVENTURE',
      en: '#3 University Innovation • INNOVENTURE Forum'
    },
    category: 'competitions',
    categoryName: {
      ar: 'الجوائز الدولية',
      en: 'International Awards'
    },
    tag: {
      ar: 'منتدى الابتكار INNOVENTURE\'2026 • جامعة بنها الأهلية (BNU)',
      en: 'INNOVENTURE\'2026 Innovation Forum • Benha National University'
    },
    title: {
      ar: 'شهادة تقدير وابتكار عن منصة "رُكْن (Rukn)" لبيئة المذاكرة والتركيز الذكي',
      en: 'Certificate of Appreciation for "Rukn" Smart Study & Focus Platform'
    },
    issuer: {
      ar: 'جامعة بنها الأهلية (BNU) - مركز الابتكار وريادة الأعمال',
      en: 'Benha National University (BNU) - Innovation & Entrepreneurship Center'
    },
    date: {
      ar: 'يناير 2026',
      en: 'January 2026'
    },
    status: {
      ar: 'تم التكريم والمشاركة بالمعرض',
      en: 'Awarded & Exhibited'
    },
    description: {
      ar: 'شهادة تقدير وتميز عن مشروع "رُكْن (Rukn)" تحت شعار "مذاكرة أذكى....... تركيز أطول"، وهي منصة مبتكرة لتهيئة بيئة دراسية تفاعلية مدعومة بالذكاء الاصطناعي وتقنيات تنظيم الوقت وزيادة الإنتاجية للطلاب والباحثين، مع المشاركة في جناح المعرض التكنولوجي بالمنتدى.',
      en: 'Awarded Certificate of Appreciation for project "Rukn" (Smarter Study, Longer Focus) — an innovative productivity and focus environment that integrates AI tools, Pomodoro timers, and adaptive soundscapes for students and researchers, showcased at the university innovation expo.'
    },
    primaryImage: '/credentials/02-competitions/rukn.jpeg',
    gallery: [
      {
        url: '/credentials/02-competitions/rukn.jpeg',
        title: {
          ar: 'شهادة التقدير الرسمية لمشروع رُكْن من جامعة بنها الأهلية',
          en: 'Official Certificate of Appreciation for Rukn from BNU'
        }
      },
      {
        url: '/credentials/02-competitions/events.jpeg',
        title: {
          ar: 'جناح عرض المشروع والمعرض التفاعلي بالمنتدى',
          en: 'Project exhibition booth at the INNOVENTURE Forum'
        }
      }
    ],
    skills: ['BNU Innoventure', 'Rukn Platform', 'EdTech & Productivity', 'UI/UX Design', 'Entrepreneurship']
  },

  // ==========================================
  // RANK 4: MAJOR STUDENT ACTIVITIES & COMMUNITIES
  // ==========================================
  {
    id: 'mlsa-kfs',
    rank: 4,
    rankBadge: {
      ar: '#4 جوائز مايكروسوفت • المركز الأول وأفضل عضو',
      en: '#4 Microsoft Awards • Best Project & Best Member'
    },
    category: 'communities',
    categoryName: {
      ar: 'الأنشطة والشركاء',
      en: 'Tech Communities'
    },
    tag: {
      ar: 'سفراء مايكروسوفت للطلاب • Microsoft Learn Student Ambassadors (MSC - KFS)',
      en: 'Microsoft Learn Student Ambassadors (MSC - KFS)'
    },
    title: {
      ar: 'جائزة أفضل مشروع + أفضل عضو بالنشاط + شهادة إتمام برنامج الإرشاد التقني (TMP)',
      en: 'Best Project Award + Best Member Award + TMP Completion in Databases'
    },
    issuer: {
      ar: 'Microsoft Student Chapter - Kafr El-Sheikh University',
      en: 'Microsoft Student Chapter - Kafr El-Sheikh University'
    },
    period: {
      ar: '2024 - 2025 (فبراير & مايو 2025)',
      en: '2024 - 2025 (Feb & May 2025)'
    },
    status: {
      ar: 'ثلاثية جوائز واعتمادات رسمية',
      en: 'Triple Award & Recognition'
    },
    facebookUrl: 'https://www.facebook.com/msc1kfs',
    description: {
      ar: 'مشاركة قيادية بارزة ضمن النشاط الطلابي الرسمي لمايكروسوفت بجامعة كفر الشيخ، تضمنت حصد جائزة أفضل مشروع (Best Project Award) في مسار قواعد البيانات بتاريخ 23 فبراير 2025، والتتويج بجائزة أفضل عضو بالدفعة الثالثة (Best Member Award - TMP Batch 3)، بالإضافة إلى الحصول على شهادة إتمام برنامج الإرشاد التقني المعتمد (TMP) في قواعد البيانات بتاريخ 17 مايو 2025 وبطاقة التكريم التذكارية.',
      en: 'Triple honors earned within the official Microsoft Learn Student Ambassadors chapter: won the Best Project Award in the Databases track (Feb 23, 2025), selected as Best Member of TMP Batch 3, and successfully completed the rigorous Tech Mentorship Program (TMP) in Databases (May 17, 2025).'
    },
    primaryImage: '/credentials/03-mlsa/bestProjectMLSA.jpeg',
    gallery: [
      {
        url: '/credentials/03-mlsa/bestProjectMLSA.jpeg',
        title: {
          ar: 'شهادة جائزة أفضل مشروع في مسار قواعد البيانات (23/02/2025)',
          en: 'Best Project Award Certificate - Databases Track (23/02/2025)'
        }
      },
      {
        url: '/credentials/03-mlsa/bestMemberMLSA.jpeg',
        title: {
          ar: 'شهادة التميز كأفضل عضو بالدفعة الثالثة (Best Member - TMP Batch 3)',
          en: 'Best Member Award Certificate (TMP Batch 3)'
        }
      },
      {
        url: '/credentials/03-mlsa/certificateMLSA.jpeg',
        title: {
          ar: 'شهادة إتمام برنامج الإرشاد التقني (TMP) في قواعد البيانات (17/05/2025)',
          en: 'Tech Mentorship Program (TMP) Certificate of Completion (17/05/2025)'
        }
      },
      {
        url: '/credentials/03-mlsa/quranMLSA.jpeg',
        title: {
          ar: 'بطاقة التقدير والتكريم التذكارية من مايكروسوفت',
          en: 'Commemorative Token Card of Honor from MSC'
        }
      }
    ],
    skills: ['Microsoft MLSA', 'SQL & Databases', 'Leadership', 'Best Project Award', 'Mentorship']
  },

  {
    id: 'ieee-kfs-sb',
    rank: 4,
    rankBadge: {
      ar: '#4 نشاط طلابي • فرع IEEE الطلابي',
      en: '#4 Tech Community • IEEE Student Branch'
    },
    category: 'communities',
    categoryName: {
      ar: 'الأنشطة والشركاء',
      en: 'Tech Communities'
    },
    tag: {
      ar: 'فرع IEEE الطلابي بجامعة كفر الشيخ • IEEE Kafrelsheikh Student Branch (IEEE KSB)',
      en: 'IEEE Kafrelsheikh Student Branch (IEEE KSB)'
    },
    title: {
      ar: 'شهادة إتمام وتكريم كعضو بلجنة تطوير الواجهات الأمامية (Member of Front End Committee)',
      en: 'Certificate of Completion: Member of Front End Committee'
    },
    issuer: {
      ar: 'IEEE Kafrelsheikh Student Branch (IEEE KSB)',
      en: 'IEEE Kafrelsheikh Student Branch (IEEE KSB)'
    },
    period: {
      ar: 'النشاط الطلابي للفرونت إند',
      en: 'Frontend Track Committee'
    },
    status: {
      ar: 'شهادة إتمام وتفانٍ معتمدة رسمياً',
      en: 'Officially Certified Completion'
    },
    description: {
      ar: 'شهادة إتمام وتقدير رسمية ممنوحة من إدارة فرع منظمة IEEE الطلابية بجامعة كفر الشيخ (IEEE Kafrelsheikh Student Branch) تقديراً للتفاني والعمل الجاد والالتزام المتميز كعضو فاعل بلجنة تطوير الواجهات الأمامية (Member of Front End Committee)، والمشاركة في ورش العمل البرمجية وتصميم الواجهات للمجتمع الطلابي.',
      en: 'Official Certificate of Completion awarded by IEEE Kafrelsheikh Student Branch in recognition of dedication, active engagement, and outstanding contribution throughout the track duration as a Member of the Front End Committee.'
    },
    primaryImage: '/credentials/03-communities/ieee-kfs-frontend.jpeg',
    gallery: [
      {
        url: '/credentials/03-communities/ieee-kfs-frontend.jpeg',
        title: {
          ar: 'شهادة إتمام مسار الواجهات الأمامية من فرع IEEE كفر الشيخ (Member of Front End Committee)',
          en: 'Certificate of Completion - Member of Front End Committee (IEEE KSB)'
        }
      }
    ],
    skills: ['IEEE KSB', 'Frontend Committee', 'HTML5 / CSS3 / JS', 'Team Collaboration', 'Community Leadership']
  },

  // ==========================================
  // RANK 5: ACADEMIC AI HONORS (KFS UNIVERSITY)
  // ==========================================
  {
    id: 'academic-ai',
    rank: 5,
    rankBadge: {
      ar: '#5 تقدير أكاديمي • كلية الذكاء الاصطناعي',
      en: '#5 Academic AI Honor • Faculty of AI'
    },
    category: 'academic',
    categoryName: {
      ar: 'كلية الذكاء الاصطناعي',
      en: 'Faculty of AI'
    },
    tag: {
      ar: 'جامعة كفر الشيخ • كلية الذكاء الاصطناعي (Faculty of Artificial Intelligence)',
      en: 'Kafr El-Sheikh University • Faculty of Artificial Intelligence'
    },
    title: {
      ar: 'شهادة تقدير رسمية لتطوير "منصة مشاريع كلية الذكاء الاصطناعي"',
      en: 'Official Certificate of Appreciation for Developing Faculty Projects Platform'
    },
    issuer: {
      ar: 'إدارة كلية الذكاء الاصطناعي - إشراف د. مروة الصديق وم. عبد الرؤوف حواش',
      en: 'Faculty Administration - Supervised by Dr. Marwa Elsadeek & Eng. Abdelraouf Hawash'
    },
    date: {
      ar: '10 مايو 2026',
      en: 'May 10, 2026'
    },
    status: {
      ar: 'شهادة تقدير وتفوق معتمدة رسمياً بالكلية',
      en: 'Officially Certified by Faculty'
    },
    description: {
      ar: 'شهادة شكر وتقدير رسمية ممنوحة من إدارة كلية الذكاء الاصطناعي بجامعة كفر الشيخ تقديراً للتميز والجهد الاستثنائي في بناء وتطوير "منصة مشاريع كلية الذكاء الاصطناعي"، لتكون المنصة الرقمية الموحدة لعرض وتوثيق وأرشفة مشاريع تخرج الطلاب وأبحاثهم التقنية، بإشراف الدكتورة مروة الصديق والمهندس عبد الرؤوف حواش.',
      en: 'Official Certificate of Appreciation awarded by the Faculty of Artificial Intelligence leadership at Kafr El-Sheikh University in recognition of outstanding technical contribution in designing and developing the "Faculty of AI Projects Platform", centralizing graduation projects and research archives.'
    },
    primaryImage: '/credentials/04-academic/lobnaCertificate2.jpeg',
    gallery: [
      {
        url: '/credentials/04-academic/lobnaCertificate2.jpeg',
        title: {
          ar: 'شهادة التقدير الرسمية لتطوير منصة مشاريع كلية الذكاء الاصطناعي (10 مايو 2026)',
          en: 'Official University Certificate of Appreciation for Faculty Projects Platform'
        }
      },
      {
        url: '/credentials/04-academic/lobnaCertificate.jpeg',
        title: {
          ar: 'لحظة استلام شهادة التكريم أمام الحرم الجامعي ومبنى الكلية',
          en: 'Receiving the Certificate on the university campus'
        }
      },
      {
        url: '/credentials/04-academic/ai.jpeg',
        title: {
          ar: 'الواجهة المعمارية لمبنى كلية الذكاء الاصطناعي الحديث - جامعة كفر الشيخ',
          en: 'Modern Faculty of AI Building Architecture'
        }
      },
      {
        url: '/credentials/04-academic/kfsuniversity.jpeg',
        title: {
          ar: 'بهو الكلية الداخلي وميدان منافسات الروبوتات والذكاء الاصطناعي',
          en: 'Faculty interior atrium & robotics competition arena'
        }
      },
      {
        url: '/credentials/04-academic/roboticsStudentActivityMansoura.jpeg',
        title: {
          ar: 'شهادة تقدير في نشاط الروبوتات والتكنولوجيا الطلابية',
          en: 'Appreciation Certificate in Robotics & Tech Student Activities'
        }
      }
    ],
    skills: ['Faculty of AI', 'Full-Stack Platform', 'Academic Archive', 'Robotics Arena', 'Web Engineering']
  },

  // ==========================================
  // RANK 6: TEACHING & MENTORSHIP (GENIUS ACADEMY)
  // ==========================================
  {
    id: 'genius-academy',
    rank: 6,
    rankBadge: {
      ar: '#6 تدريس وتكريم • درع التميز والعطاء',
      en: '#6 Teaching & Leadership • Shield of Excellence'
    },
    category: 'teaching',
    categoryName: {
      ar: 'التدريس والمجتمع',
      en: 'Teaching & Mentorship'
    },
    tag: {
      ar: 'أكاديمية جينيس للبرمجة • Geniuses Academy',
      en: 'Geniuses Academy • Frontend Instructor'
    },
    title: {
      ar: 'مدربة فرونت إند للأطفال لمدة 3 أشهر والتكريم بـ "درع التميز والعطاء"',
      en: 'Frontend Instructor for Kids (3 Months) & "Shield of Excellence & Giving"'
    },
    issuer: {
      ar: 'أكاديمية جينيس (Geniuses Academy)',
      en: 'Geniuses Academy'
    },
    period: {
      ar: '3 أشهر تدريس مكثف',
      en: '3 Months Intensive Teaching'
    },
    status: {
      ar: 'التكريم بالدرع الكريستالي وشهادة التقدير',
      en: 'Awarded Crystal Shield of Excellence'
    },
    description: {
      ar: 'العمل كمدربة ومحاضرة في تطوير الواجهات الأمامية (Frontend Web Development) للأطفال لمدة 3 أشهر، تبسيط مفاهيم البرمجة وأسس الويب (HTML, CSS, JS) للأجيال الناشئة وتمكينهم من بناء أولى مواقعهم الإلكترونية وتنمية مهارات التفكير المنطقي، مع التكريم الرسمي بـ "درع التميز والعطاء" تقديراً للأثر الإيجابي والتفاني.',
      en: 'Instructed young learners in Frontend Web Development for 3 months at Geniuses Academy, simplifying core web concepts and empowering kids to code responsive pages. Honored by the academy leadership with the prestigious Crystal Shield of Excellence & Giving for inspiring pedagogy.'
    },
    primaryImage: '/credentials/05-teaching/lobnaelsaeidDera1.jpeg',
    gallery: [
      {
        url: '/credentials/05-teaching/lobnaelsaeidDera1.jpeg',
        title: {
          ar: 'درع التميز والعطاء الكريستالي من أكاديمية جينيس',
          en: 'Crystal Shield of Excellence & Giving from Geniuses Academy'
        }
      },
      {
        url: '/credentials/05-teaching/geniusLobna.jpeg',
        title: {
          ar: 'أثناء شرح وتدريس البرمجة للأطفال داخل معمل الأكاديمية',
          en: 'Teaching coding to kids inside the academy computer lab'
        }
      },
      {
        url: '/credentials/05-teaching/lobnaGenius.jpeg',
        title: {
          ar: 'الاحتفال بتخرج الدفعة وتكريم المدربين',
          en: 'Instructors recognition & student graduation celebration'
        }
      },
      {
        url: '/credentials/05-teaching/meAyaNada.jpeg',
        title: {
          ar: 'فريق عمل ومدربات أكاديمية جينيس',
          en: 'Geniuses Academy instruction and mentoring team'
        }
      },
      {
        url: '/credentials/05-teaching/lobnaNada.jpeg',
        title: {
          ar: 'حفل تسليم الشهادات ومشاريع الأطفال البرمجية',
          en: 'Ceremony awarding certificates to proud young coders'
        }
      }
    ],
    skills: ['Frontend Instruction', 'Kids Coding', 'Shield of Excellence', 'Public Speaking', 'Mentorship']
  },

  // ==========================================
  // RANK 7: PROFESSIONAL DATA ANALYTICS BOOTCAMP
  // ==========================================
  {
    id: 'data-analytics-camp',
    rank: 7,
    rankBadge: {
      ar: '#7 معسكر تقني مكثف • 60 ساعة تدريبية',
      en: '#7 Intensive Bootcamp • 60 Training Hours'
    },
    category: 'bootcamps',
    categoryName: {
      ar: 'المخيمات التقنية',
      en: 'Bootcamps'
    },
    tag: {
      ar: 'أكاديمية بشمهندسة آلاء عصام • Alaa Essam Academy',
      en: 'Alaa Essam Academy • Data Analytics'
    },
    title: {
      ar: 'معسكر تحليل البيانات الصيفي المكثف 2025 (Data Summer Camp 2025)',
      en: 'Intensive Data Analysis Summer Camp 2025 (60 Hours)'
    },
    issuer: {
      ar: 'أكاديمية المهندسة آلاء عصام للبيانات والذكاء الاصطناعي',
      en: 'Eng. Alaa Essam Academy for Data & AI'
    },
    period: {
      ar: 'صيف 2025 • 60 ساعة تدريبية',
      en: 'Summer 2025 • 60 Training Hours'
    },
    status: {
      ar: 'تم إتمام المعسكر واعتماد الشهادة',
      en: 'Bootcamp Completed & Certified'
    },
    description: {
      ar: 'إتمام 60 ساعة تدريبية تطبيقية مكثفة في تحليل البيانات الاحترافي واستخراج الرؤى الذكية، شملت: لغة Python ومكتبات تحليل البيانات (Pandas & NumPy)، قواعد بيانات SQL Server وكتابة الاستعلامات المتقدمة، تصميم لوحات المعلومات التفاعلية بـ Power BI، تقنيات Microsoft Excel المتقدمة، ومقدمة تطبيقية في تعلم الآلة (Machine Learning).',
      en: 'Completed 60 comprehensive hands-on training hours in professional data analytics and business intelligence, covering Python for data processing (Pandas/NumPy), SQL Server query optimization, interactive Power BI dashboards, advanced Excel modeling, and foundational Machine Learning.'
    },
    primaryImage: '/credentials/06-bootcamps/DataAnalysisCertificate.jpeg',
    gallery: [
      {
        url: '/credentials/06-bootcamps/DataAnalysisCertificate.jpeg',
        title: {
          ar: 'شهادة إتمام معسكر تحليل البيانات الصيفي 2025 (60 ساعة)',
          en: 'Data Analysis Summer Camp Certificate of Completion (60 Hours)'
        }
      }
    ],
    skills: ['Data Analytics', 'Python', 'SQL Server', 'Power BI', 'Excel Modeling', 'Machine Learning']
  },

  // ==========================================
  // RANK 8: GLOBAL TECH SUMMITS (TECHNE SUMMIT)
  // ==========================================
  {
    id: 'techne-summit',
    rank: 8,
    rankBadge: {
      ar: '#8 مؤتمر عالمي • مكتبة الإسكندرية',
      en: '#8 Global Summit • Bibliotheca Alexandrina'
    },
    category: 'summits',
    categoryName: {
      ar: 'المؤتمرات العالمية',
      en: 'Global Summits'
    },
    tag: {
      ar: 'قمة تكني العالمية للتكنولوجيا 2025 • Techne Summit 2025',
      en: 'Techne Summit 2025 • Mediterranean Innovation, Global Reach'
    },
    title: {
      ar: 'حضور والمشاركة في فعاليات قمة تكني العالمية 2025 بمكتبة الإسكندرية',
      en: 'Techne Summit 2025 Participation at Bibliotheca Alexandrina'
    },
    issuer: {
      ar: 'Techne Summit International & مكتبة الإسكندرية',
      en: 'Techne Summit International & Bibliotheca Alexandrina'
    },
    date: {
      ar: '2025 • الإسكندرية',
      en: '2025 • Alexandria'
    },
    status: {
      ar: 'حضور فعال ومشاركة بالمعارض التقنية',
      en: 'Active Participant & Networking'
    },
    description: {
      ar: 'مشاركة فاعلة في فعاليات قمة تكني العالمية 2025 بمكتبة الإسكندرية، الحدث التكنولوجي الدولي الأبرز في منطقة حوض البحر الأبيض المتوسط للابتكار التكنولوجي والشركات الناشئة والاستثمار الرقمي، والتواصل مع رواد الأعمال ومؤسسي كبرى شركات التكنولوجيا وحضور الجلسات التقنية المتخصصة.',
      en: 'Active participation in Techne Summit 2025 held at the Bibliotheca Alexandrina — the flagship Mediterranean international gathering for technology innovation, venture capital, and startups, connecting with leading tech executives and discovering cutting-edge industry trends.'
    },
    primaryImage: '/credentials/07-summits/techni0.jpeg',
    gallery: [
      {
        url: '/credentials/07-summits/techni0.jpeg',
        title: {
          ar: 'قاعات وجلسات قمة تكني بمكتبة الإسكندرية',
          en: 'Techne Summit main stages at Bibliotheca Alexandrina'
        }
      },
      {
        url: '/credentials/07-summits/techni1.jpeg',
        title: {
          ar: 'معرض الشركات التكنولوجية الناشئة والابتكار',
          en: 'Tech startups innovation exhibition arena'
        }
      },
      {
        url: '/credentials/07-summits/techni2.jpeg',
        title: {
          ar: 'أجواء التفاعل والتواصل مع قادة التقنية',
          en: 'Networking with tech leaders and innovators'
        }
      },
      {
        url: '/credentials/07-summits/techni3.jpeg',
        title: {
          ar: 'العروض التقديمية وورش العمل المتخصصة',
          en: 'Keynote presentations and specialized technical panels'
        }
      },
      {
        url: '/credentials/07-summits/techni4.jpeg',
        title: {
          ar: 'المنصات التفاعلية داخل مكتبة الإسكندرية',
          en: 'Interactive demo platforms at the Bibliotheca'
        }
      },
      {
        url: '/credentials/07-summits/techni5.jpeg',
        title: {
          ar: 'صورة تذكارية لفعاليات ختام القمة',
          en: 'Commemorative moment at the summit closing sessions'
        }
      }
    ],
    skills: ['Techne Summit', 'Tech Innovation', 'Startups & VC', 'Networking', 'Global Exposure']
  }
];

export const credentialCategories = [
  { id: 'all', label: { ar: 'الكل (جميع الإنجازات)', en: 'All Credentials' }, count: 10 },
  { id: 'depi', label: { ar: 'منحة رواد مصر (DEPI)', en: 'DEPI Scholarship' }, count: 1 },
  { id: 'governorate', label: { ar: 'ديوان عام المحافظة (8 أشهر)', en: 'Governorate Fieldwork' }, count: 1 },
  { id: 'competitions', label: { ar: 'الجوائز والمسابقات الدولية', en: 'International Awards' }, count: 2 },
  { id: 'communities', label: { ar: 'الأنشطة والشركاء (IEEE & MLSA)', en: 'Tech Communities' }, count: 2 },
  { id: 'academic', label: { ar: 'كلية الذكاء الاصطناعي', en: 'Faculty of AI' }, count: 1 },
  { id: 'teaching', label: { ar: 'التدريس والقيادة', en: 'Teaching & Mentorship' }, count: 1 },
  { id: 'bootcamps', label: { ar: 'المخيمات والمؤتمرات', en: 'Bootcamps & Summits' }, count: 2 }
];
