/* =============================================================
   0. I18N - Shared Language System (English / Arabic)
   ============================================================= */
const LANG_KEY = "shieldnet_lang";

const TRANSLATIONS = {
    en: {
        langToggle: "العربية",
        navHome: "Home",
        navCompanies: "Security Companies",
        navServices: "Services",
        navAbout: "About Platform",
        navRequests: "My Requests",
        navTerms: "Terms and Conditions",
        navContact: "Contact Us",
        navSignIn: "Sign In",
        navLogOut: "Log Out",
        navSignUp: "Create Account",
        navProfile: "Check Your Profile",
        heroTitle: "Elite Security Guards <br />For Corporate & Estates",
        heroDesc:
            "The professional networking and hiring platform connecting trusted corporate facilities, commercial compounds, and luxury private properties with verified, top-tier security guards. Like LinkedIn for experienced security professionals—discover certified guards with verified backgrounds tailored to your property.",
        heroExplore: 'Explore Security Companies <span class="arrow-icon">→</span>',
        heroCreate: "Create Account",
        statGuards: "Verified Guards",
        statEstates: "Hiring Estates",
        statTrust: "Vetting Trust",
        badgeGuards: "100% Vetted Guards",
        subtextNetwork: "Guard Staffing Network",
        drawerLabel: "Platform Directory",
        footerTagline:
            "The premier professional networking & staffing platform connecting prestigious corporate estates, gated compounds, and luxury private properties with certified, vetted security guards and protection forces.",
        footerBadge: "100% Vetted & Background-Checked Guards",
        footerColLegal: "Guard Network & Legal",
        footerBrowse: "Browse Guard Directory",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerVerify: "Guard Credential Verification",
        footerColSocial: "Connect With Us",
        footerSocialText: "Follow guard staffing announcements, placement updates, and estate security insights.",
        footerCopyright: "© 2026 ShieldNet. All rights reserved.",
        toastLogin: "Signed in (Demo Mode): all features unlocked",
        toastLogout: "Logged out: demo mode ended",
        toastLang: "Language changed to English",
        // Discover Security Companies translations
        discoverTitle: "Discover Security Companies",
        discoverDesc:
            "Compare security providers, explore their coverage areas, and find the right security partner for your property.",
        searchBtn: "Search & Filter Companies",
        searchBtnActive: "Filters Active",
        filterKeyword: "Keyword Search",
        filterKeywordPlaceholder: "e.g. CCTV, VIP, Patrol, Armed, Estate...",
        filterCoverage: "Location & Coverage",
        filterCoverageAll: "All Coverage Areas",
        filterCoverageCairo: "New Cairo & Commercial (Greater Cairo)",
        filterCoverageGiza: "Sheikh Zayed & 6th of October",
        filterCoverageSmart: "Smart Village & Financial Centers",
        filterCoverageIndustrial: "Ain Sokhna & Logistics Hubs",
        filterCoverageCoastal: "Alexandria & Coastal Resorts",
        filterCompany: "Company Name",
        filterCompanyPlaceholder: "e.g. Aegis, Vanguard...",
        filterWage: "Min. Employee Wage",
        filterWageAll: "Any Wage Tier",
        filterWage8000: "EGP 8,000+ / mo",
        filterWage9000: "EGP 9,000+ / mo",
        filterWage11000: "EGP 11,000+ / mo",
        filterWage13000: "EGP 13,000+ / mo",
        btnApply: "Apply Filters",
        btnClear: "Clear All",
        badgeRecommended: "Recommended for You",
        hireNow: "Hire Now",
        showMore: "Show More",
        showLess: "Show Less",
        cardWorkforce: "Workforce",
        cardMinWage: "Min. Wage",
        cardCoverage: "Coverage",
        cardServices: "Specialties",
        noResultsTitle: "No Security Companies Found",
        noResultsDesc: "Try clearing your filters or searching with different keywords.",
        btnResetSearch: "Reset All Filters",
        recentSearches: "Recent Searches:",
        clearRecentSearches: "Clear History",
        serviceUnavailableTitle: "Notice: No Services Available Currently",
        serviceUnavailableSubtitle: "Operational Capacity & Dispatch Update",
        serviceUnavailableMsg: "No services are available at the moment. Please check back soon.",
        serviceUnavailableDesc: "All security personnel, guard details, and dispatch units are fully booked for current contracted properties. Operational capacity is currently being updated with our certified partners. Please check back soon.",
        serviceUnavailableBtn: "Understood, Check Back Later",
        selectedCompanyLabel: "Selected Security Provider:",
        hireModalTitle: "Request Security Guarding Proposal",
        hireModalSubtitle: "Submit your requirements for direct dispatch and verified staffing.",
        hireFieldProperty: "Property / Facility Type",
        hireFieldGuards: "Required Guard Count",
        hireFieldDate: "Deployment Start Date",
        hireFieldNotes: "Specific Requirements / Instructions",
        hireSubmit: "Submit Hire Request",
        hireToastSuccess: "Contract inquiry submitted to {company}. Our dispatch officer will contact you within 2 business hours.",
        hireToastAuthReq: "Please sign in or create an account to submit a hire request.",
        detailsBtn: "View Reviews",
        detailsAndReviews: "Details & Reviews",
        reviewsHeading: "Client Ratings & Verified Reviews",
        leaveReviewBtn: "Leave a Review",
        writeReviewTitle: "Submit a Client Review",
        rateExperienceLabel: "Select Your Rating:",
        reviewNameLabel: "Your Name / Organization",
        reviewRoleLabel: "Property / Facility Type",
        reviewCommentLabel: "Your Review & Experience",
        submitReviewBtn: "Publish Review",
        cancelReviewBtn: "Cancel",
        reviewSuccessToast: "Thank you! Your verified review for {company} has been published.",
        basedOnReviews: "Based on {count} verified client reviews",
        reviewsEmptyState: "No reviews submitted yet for this provider. Be the first to leave a review!",
        closeModalBtn: "Close"
    },
    ar: {
        langToggle: "English",
        navHome: "الرئيسية",
        navCompanies: "شركات الأمن",
        navServices: "الخدمات",
        navAbout: "عن المنصة",
        navRequests: "طلباتي",
        navTerms: "الشروط والأحكام",
        navContact: "تواصل معنا",
        navSignIn: "تسجيل الدخول",
        navLogOut: "تسجيل الخروج",
        navSignUp: "إنشاء حساب",
        navProfile: "الملف الشخصي",
        heroTitle: "نخبة حراس الأمن <br />للشركات والمنشآت الراقية",
        heroDesc:
            "المنصة المهنية الرائدة للتوظيف والربط الأمني، تجمع كبرى المنشآت والشركات والمجمعات الراقية مع نخبة حراس الأمن المعتمدين والموثقين جنائياً ومهنياً. شبكة احترافية متكاملة لاختيار الكفاءات الأمنية الأنسب لمنشأتك.",
        heroExplore: 'استكشف شركات الأمن <span class="arrow-icon">←</span>',
        heroCreate: "إنشاء حساب",
        statGuards: "حراس موثقون",
        statEstates: "منشآت متعاقدة",
        statTrust: "نسبة التدقيق",
        badgeGuards: "حراس معتمدون ومفحوصون 100%",
        subtextNetwork: "شبكة التوظيف الأمني",
        drawerLabel: "دليل المنصة",
        footerTagline:
            "المنصة المهنية المعتمدة لتوظيف الكفاءات الأمنية والربط بين المنشآت الحيوية والمجمعات الخاصة وحراس الأمن المعتمدين وفِرق الحماية.",
        footerBadge: "حراس معتمدون ومفحوصون أمنياً بنسبة 100%",
        footerColLegal: "الشبكة الأمنية والشروط",
        footerBrowse: "تصفح دليل الحراس",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerVerify: "التحقق من المؤهلات الأمنية",
        footerColSocial: "تواصل معنا",
        footerSocialText: "تابع مستجدات التوظيف الأمني وإعلانات التعاقدات وتحديثات حماية المنشآت.",
        footerCopyright: "© 2026 ShieldNet. جميع الحقوق محفوظة.",
        toastLogin: "تم تسجيل الدخول (وضع تجريبي): تم تفعيل المزايا",
        toastLogout: "تم تسجيل الخروج بنجاح",
        toastLang: "تم تحويل لغة الموقع إلى العربية",
        // Discover Security Companies Arabic translations
        discoverTitle: "استكشف شركات الأمن",
        discoverDesc:
            "قارن بين مزودي الخدمات الأمنية، واستكشف نطاق تغطيتهم الجغرافية، واعثر على الشريك الأمني المناسب لمنشأتك.",
        searchBtn: "بحث وفلترة الشركات",
        searchBtnActive: "فلاتر نشطة",
        filterKeyword: "بحث بالكلمات المفتاحية",
        filterKeywordPlaceholder: "مثال: مراقبة، حراسة مسلحة، دوريات، قصور...",
        filterCoverage: "المنطقة ونطاق التغطية",
        filterCoverageAll: "جميع نطاقات التغطية",
        filterCoverageCairo: "القاهرة الجديدة والتجمع الخامس",
        filterCoverageGiza: "الشيخ زايد ومدينة 6 أكتوبر",
        filterCoverageSmart: "القرية الذكية والمراكز المالية",
        filterCoverageIndustrial: "العين السخنة والموانئ اللوجستية",
        filterCoverageCoastal: "الإسكندرية والساحل الشمالي",
        filterCompany: "اسم الشركة",
        filterCompanyPlaceholder: "مثال: إيجيس، فانجارد...",
        filterWage: "الحد الأدنى لرواتب الحراس",
        filterWageAll: "أي فئة رواتب",
        filterWage8000: "8,000+ ج.م / شهر",
        filterWage9000: "9,000+ ج.م / شهر",
        filterWage11000: "11,000+ ج.م / شهر",
        filterWage13000: "13,000+ ج.م / شهر",
        btnApply: "تطبيق الفلاتر",
        btnClear: "إعادة ضبط",
        badgeRecommended: "موصى به لك",
        hireNow: "وظف الآن",
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
        cardWorkforce: "فريق العمل",
        cardMinWage: "الحد الأدنى للأجر",
        cardCoverage: "نطاق التغطية",
        cardServices: "التخصصات",
        noResultsTitle: "لم يتم العثور على شركات أمنية مطابقة",
        noResultsDesc: "جرّب مسح بعض الفلاتر أو البحث بكلمات مفتاحية أخرى.",
        btnResetSearch: "إعادة تعيين كافة الفلاتر",
        recentSearches: "عمليات البحث الأخيرة:",
        clearRecentSearches: "مسح السجل",
        serviceUnavailableTitle: "تنبيه: لا توجد خدمات متاحة حالياً",
        serviceUnavailableSubtitle: "إشعار الجدولة والطاقة الاستيعابية",
        serviceUnavailableMsg: "لا يوجد خدمات متاحة الآن، عُد قريباً.",
        serviceUnavailableDesc: "نعتذر عن عدم إمكانية تقديم الخدمة في الوقت الراهن نظراً لاكتمال حجز الكوادر الأمنية ووحدات الحراسة الميدانية لجميع المواقع المتعاقد عليها. يجري حالياً تحديث الجداول الاستيعابية والتعاقدات مع الشركات المعتمدة. يرجى التحقق مرة أخرى قريباً.",
        serviceUnavailableBtn: "حسناً، عُد قريباً",
        selectedCompanyLabel: "الشركة الأمنية المختارة:",
        hireModalTitle: "طلب عرض أسعار وتعاقد أمني",
        hireModalSubtitle: "أرسل متطلباتك للتعاقد الأمني المباشر وتعيين الحراس المعتمدين.",
        hireFieldProperty: "نوع المنشأة / العقار",
        hireFieldGuards: "عدد أفراد الحراسة المطلوب",
        hireFieldDate: "تاريخ بدء الخدمة",
        hireFieldNotes: "متطلبات خاصة أو تعليمات للخدمة",
        hireSubmit: "إرسال طلب التعاقد",
        hireToastSuccess: "تم إرسال طلب التعاقد لشركة {company} بنجاح. سيتواصل معك مسؤول العمليات خلال ساعتين.",
        hireToastAuthReq: "يرجى تسجيل الدخول أو إنشاء حساب لطلب التعاقد الأمني.",
        detailsBtn: "عرض التقييمات",
        detailsAndReviews: "التفاصيل والتقييمات",
        reviewsHeading: "تقييمات وآراء العملاء المعتمدة",
        leaveReviewBtn: "أضف تقييمك",
        writeReviewTitle: "كتابة تقييم جديد للشركة",
        rateExperienceLabel: "اختر تقييمك بالنجوم:",
        reviewNameLabel: "اسمك / الجهة المقيمة",
        reviewRoleLabel: "نوع المنشأة / العقار",
        reviewCommentLabel: "نص التقييم والملاحظات الميدانية",
        submitReviewBtn: "نشر التقييم",
        cancelReviewBtn: "إلغاء",
        reviewSuccessToast: "شكراً لك! تم نشر تقييمك لشركة {company} بنجاح.",
        basedOnReviews: "بناءً على {count} تقييم معتمد من العملاء",
        reviewsEmptyState: "لا توجد تقييمات منشورة حتى الآن لهذه الشركة. كن أول من يضيف تقييماً!",
        closeModalBtn: "إغلاق"
    }
};

/* =============================================================
   0.1 SECURITY COMPANIES DATA (Six Companies, 2 Recommended)
   ============================================================= */
const SECURITY_COMPANIES = [
    {
        id: "aegis",
        name: "Aegis Shield Operations",
        nameAr: "إيجيس شيلد لإدارة العمليات والحراسة",
        image: "/img/company_aegis.jpg",
        recommended: true,
        desc: "Specialized in 24/7 command center operations, integrated perimeter defense, and rapid deployment forces for corporate facilities and luxury gated compounds.",
        descAr: "متخصصة في تشغيل مراكز العمليات والسيطرة 24/7، وتأمين الأسوار والمحيطات الأمنية، وفرق التدخل السريع للمجمعات التجارية والسكنية الفاخرة.",
        location: "New Cairo & Commercial Districts (Greater Cairo)",
        locationAr: "القاهرة الجديدة والتجمع الخامس (القاهرة الكبرى)",
        coverageKey: "cairo",
        workforce: "1,450+ Certified Guards",
        workforceAr: "1,450+ حارس أمن معتمد",
        wageNumeric: 9500,
        wageText: "EGP 9,500 / mo",
        wageTextAr: "9,500 ج.م / شهر",
        services: ["CCTV Command", "Perimeter Defense", "Rapid Response", "Armed Guarding"],
        servicesAr: ["غرف المراقبة CCTV", "تأمين الأسوار", "التدخل السريع", "الحراسة المسلحة"],
        rating: "4.9 · 180+ Enterprise Contracts"
    },
    {
        id: "vanguard",
        name: "Vanguard Executive Protection",
        nameAr: "فانجارد للحراسة التنفيذية والشخصية",
        image: "/img/company_vanguard.jpg",
        recommended: true,
        desc: "Elite executive security officers and diplomatic close protection details trained in threat assessment, VIP protocol, and armored motorcade logistics.",
        descAr: "نخبة ضباط الحراسة التنفيذية والمرافقة الدبلوماسية والشخصية، مدربون على تقييم المخاطر وتأمين المواكب وتأمين المؤتمرات والوفود الرسمية.",
        location: "Downtown, Zamalek & Diplomatic Enclaves (Cairo & Giza)",
        locationAr: "وسط البلد والزمالك والأحياء الدبلوماسية (القاهرة والجيزة)",
        coverageKey: "cairo",
        workforce: "680+ Elite Officers",
        workforceAr: "680+ ضابط حراسة نخبوي",
        wageNumeric: 13000,
        wageText: "EGP 13,000 / mo",
        wageTextAr: "13,000 ج.م / شهر",
        services: ["VIP Close Protection", "Motorcade Logistics", "Threat Auditing", "Event Shield"],
        servicesAr: ["الحماية اللصيقة VIP", "لوجستيات المواكب", "تدقيق المخاطر", "تأمين الفعاليات"],
        rating: "5.0 · 95+ VIP Details"
    },
    {
        id: "apex",
        name: "Apex Estate Security",
        nameAr: "أبكس لحراسة المجمعات والقصور الخاصة",
        image: "/img/company_apex.jpg",
        recommended: false,
        desc: "Dedicated residential security and access patrol for prestigious gated communities, private estates, and luxury suburban villas.",
        descAr: "حراسة مخصصة للمجمعات السكنية المغلقة والقصور الخاصة، مع دوريات متنقلة وتدقيق صارم للدخول والخروج للمقيمين والزوار وفِرق الخدمة.",
        location: "Sheikh Zayed & 6th of October",
        locationAr: "الشيخ زايد ومدينة 6 أكتوبر",
        coverageKey: "giza",
        workforce: "920+ Vetted Guards",
        workforceAr: "920+ حارس مفحوص أمنياً",
        wageNumeric: 8200,
        wageText: "EGP 8,200 / mo",
        wageTextAr: "8,200 ج.م / شهر",
        services: ["Gatehouse Access", "K-9 Patrols", "Mobile Patrols", "Visitor Screening"],
        servicesAr: ["إدارة البوابات", "دوريات K-9", "دوريات أمنية متنقلة", "فحص الزوار"],
        rating: "4.8 · 120+ Gated Communities"
    },
    {
        id: "sentinel",
        name: "Sentinel Commercial Defense",
        nameAr: "سنتينل لتأمين الأبراج والمقرات الإدارية",
        image: "/img/company_sentinel.jpg",
        recommended: false,
        desc: "Turnstile badge access management, corporate lobby concierge security, and visitor identity verification for corporate towers and banks.",
        descAr: "إدارة بوابات المرور الإلكترونية (Turnstiles)، أمن الاستقبال والكونسيرج للمقرات الإدارية، والتحقق من هويات الزوار للبنوك والشركات الكبرى.",
        location: "Smart Village & Financial Centers",
        locationAr: "القرية الذكية والمراكز المالية والتجارية",
        coverageKey: "smart",
        workforce: "1,100+ Guards",
        workforceAr: "1,100+ حارس مدرب",
        wageNumeric: 7800,
        wageText: "EGP 7,800 / mo",
        wageTextAr: "7,800 ج.م / شهر",
        services: ["Turnstile Control", "Lobby Concierge", "Identity Verification", "Asset Protection"],
        servicesAr: ["بوابات المرور الإلكترونية", "كونسيرج المداخل", "التحقق من الهويات", "حماية الأصول"],
        rating: "4.7 · 210+ Corporate Towers"
    },
    {
        id: "ironclad",
        name: "Ironclad Logistics & Perimeter Security",
        nameAr: "أيرون كلاد للحراسة الصناعية واللوجستية",
        image: "/img/company_ironclad.jpg",
        recommended: false,
        desc: "Heavy perimeter fencing oversight, cargo inspection checkpoints, and industrial warehouse monitoring across regional logistics hubs.",
        descAr: "حراسة المحيطات الصناعية الواسعة، نقاط تفتيش الشاحنات والبضائع، ومراقبة المستودعات والموانئ الجافة والمراكز اللوجستية الإقليمية.",
        location: "Ain Sokhna, 10th of Ramadan & Port Hubs",
        locationAr: "العين السخنة، العاشر من رمضان والموانئ اللوجستية",
        coverageKey: "industrial",
        workforce: "1,350+ Guards",
        workforceAr: "1,350+ حارس مؤهل",
        wageNumeric: 8500,
        wageText: "EGP 8,500 / mo",
        wageTextAr: "8,500 ج.م / شهر",
        services: ["Cargo Inspection", "Night Perimeter Patrol", "Weighbridge Control", "Surveillance"],
        servicesAr: ["تفتيش الشحنات", "دوريات ليلية للأسوار", "موازين الشاحنات", "كاميرات المراقبة"],
        rating: "4.9 · 140+ Warehouses & Plants"
    },
    {
        id: "falcon",
        name: "Falcon VIP Close Protection",
        nameAr: "فالكون للحماية الراقية والمنتجعات السياحية",
        image: "/img/company_falcon.jpg",
        recommended: false,
        desc: "Discreet personal security details for high-profile business summits, private events, and luxury property hospitality defense.",
        descAr: "حماية شخصية متقدمة للمؤتمرات الدولية والفعاليات الراقية، وتأمين الضيافة الفندقية الفاخرة والمنتجعات الساحلية الراقية.",
        location: "Alexandria, North Coast & Red Sea Resorts",
        locationAr: "الإسكندرية والساحل الشمالي ومنتجعات البحر الأحمر",
        coverageKey: "coastal",
        workforce: "540+ Officers",
        workforceAr: "540+ ضابط حراسة متخصص",
        wageNumeric: 11000,
        wageText: "EGP 11,000 / mo",
        wageTextAr: "11,000 ج.م / شهر",
        services: ["Hospitality Security", "Summit Marshals", "Private Event Shield", "Coastal Patrol"],
        servicesAr: ["أمن الضيافة الفندقية", "تنظيم القمم والمؤتمرات", "حماية المناسبات الخاصة", "حراسة ساحلية"],
        rating: "4.9 · 85+ Luxury Resorts & Summits"
    }
];

/* =============================================================
   0.2 COMPANY STAR-RATING & REVIEW SYSTEM
   ============================================================= */
const REVIEWS_STORAGE_KEY = "shieldnet_company_reviews";

const DEFAULT_REVIEWS = {
    aegis: [
        {
            id: "rev_a1",
            author: "Eng. Amr El-Sayed",
            authorRole: "Facilities Director, Katameya Heights",
            rating: 5,
            date: "2026-09-15",
            comment: "Outstanding 24/7 CCTV monitoring and rapid response unit. Our perimeter defense incidents dropped to zero within the first month.",
            commentAr: "مراقبة متواصلة 24/7 واستجابة سريعة استثنائية. انخفضت التجاوزات عند الأسوار إلى الصفر منذ الشهر الأول."
        },
        {
            id: "rev_a2",
            author: "Sherif Mansour",
            authorRole: "Operations Manager, New Cairo Plaza",
            rating: 5,
            date: "2026-08-20",
            comment: "Extremely disciplined guard force. Prompt gatehouse management and courteous visitor screening.",
            commentAr: "انضباط مهني رفيع جداً من أفراد الحراسة، وإدارة ممتازة للبوابات وتدقيق لبق للزوار."
        },
        {
            id: "rev_a3",
            author: "Hossam Zaki",
            authorRole: "Compound Board Chairman",
            rating: 4,
            date: "2026-07-10",
            comment: "Professional communication from dispatch officers. Reliable shifts and quick backup dispatch.",
            commentAr: "تواصل محترف من ضباط العمليات وتناوب منتظم واستجابة سريعة للدعم الميداني."
        }
    ],
    vanguard: [
        {
            id: "rev_v1",
            author: "Karim Fahmy",
            authorRole: "Head of Protocol, Multinational Diplomatic Delegation",
            rating: 5,
            date: "2026-09-28",
            comment: "Pinnacle of executive protection in Egypt. Flawless armored motorcade coordination and situational awareness.",
            commentAr: "قمة الاحترافية في الحراسة الدبلوماسية والشخصية، وتنسيق دقيق للمواكب وملاحظة أمنية فائقة."
        },
        {
            id: "rev_v2",
            author: "Nadine El-Attar",
            authorRole: "Summit Executive Producer",
            rating: 5,
            date: "2026-08-14",
            comment: "Handled VIP close protection for international speakers without a single hitch. Highly recommended.",
            commentAr: "أداروا حماية كبار الضيوف والشخصيات في القمة الدولية بأعلى درجات السلاسة والاحترافية."
        }
    ],
    apex: [
        {
            id: "rev_ap1",
            author: "Dr. Tamer Mostafa",
            authorRole: "Palm Hills Resident Council",
            rating: 5,
            date: "2026-09-02",
            comment: "The K-9 night patrols provide immense peace of mind. Very respectful and vigilant guard staff.",
            commentAr: "دوريات K-9 الليلية توفر طمأنينة فائقة للعائلات، وطاقم حراسة محترم ويقظ على مدار الساعة."
        },
        {
            id: "rev_ap2",
            author: "Mona Radwan",
            authorRole: "Beverly Hills Estate Owner",
            rating: 4,
            date: "2026-07-22",
            comment: "Prompt visitor tag verification at the gates. Very good coordination with residents.",
            commentAr: "تدقيق سريع ومحترم لهويات الزوار عند البوابات وتنسيق ممتاز مع الملاك."
        }
    ],
    sentinel: [
        {
            id: "rev_s1",
            author: "Wael Abdel-Rahman",
            authorRole: "Corporate Real Estate VP, Financial Center",
            rating: 5,
            date: "2026-09-18",
            comment: "Flawless turnstile badge management and smart lobby reception security. Perfect for financial corporate headquarters.",
            commentAr: "إدارة إلكترونية ممتازة لبوابات الدخول وأمن استقبال احترافي يليق بالمقرات المصرفية."
        },
        {
            id: "rev_s2",
            author: "Laila Youssef",
            authorRole: "Smart Village Building Admin",
            rating: 4,
            date: "2026-08-05",
            comment: "Great identity screening process and courteous front-desk personnel.",
            commentAr: "إجراءات تدقيق هوية دقيقة وحراس استقبال بقمة اللباقة والالتزام."
        }
    ],
    ironclad: [
        {
            id: "rev_i1",
            author: "Mohamed El-Gharib",
            authorRole: "Logistics Terminal Director, Ain Sokhna",
            rating: 5,
            date: "2026-09-11",
            comment: "Tough perimeter surveillance, zero cargo discrepancies recorded at weighbridges. Dependable night shifts.",
            commentAr: "تأمين صارم للأسوار ونقاط الشاحنات مع انعدام أي فروقات في البضائع. حراسة ليلية يعتمد عليها."
        },
        {
            id: "rev_i2",
            author: "Khaled El-Banna",
            authorRole: "Industrial Plant Safety Manager",
            rating: 5,
            date: "2026-07-30",
            comment: "Excellent fire watch integration with standard physical guarding.",
            commentAr: "دمج احترافي بين إجراءات السلامة والحراسة الميدانية للمستودعات."
        }
    ],
    falcon: [
        {
            id: "rev_f1",
            author: "Yasser Nour",
            authorRole: "General Manager, North Coast Luxury Resort",
            rating: 5,
            date: "2026-08-25",
            comment: "Discreet luxury hospitality guarding. Excellent crowd management during peak summer gala nights.",
            commentAr: "حراسة راقية وغير مزعجة للنزلاء مع قدرة فائقة على إدارة الحشود في الحفلات الصيفية."
        },
        {
            id: "rev_f2",
            author: "Dina Qandil",
            authorRole: "International Film Gala Director",
            rating: 5,
            date: "2026-07-15",
            comment: "Provided flawless red carpet perimeter defense and private marshals.",
            commentAr: "تأمين مثالي للسجادة الحمراء وفعاليات المهرجان دون أي ارتباك."
        }
    ]
};

function getStoredReviews() {
    try {
        const raw = localStorage.getItem(REVIEWS_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function getCompanyReviews(companyId) {
    const stored = getStoredReviews();
    const customList = Array.isArray(stored[companyId]) ? stored[companyId] : [];
    const defaults = Array.isArray(DEFAULT_REVIEWS[companyId]) ? DEFAULT_REVIEWS[companyId] : [];
    return [...customList, ...defaults];
}

function getCompanyRatingStats(companyId) {
    const reviews = getCompanyReviews(companyId);
    if (!reviews || reviews.length === 0) {
        return { average: 5.0, count: 0 };
    }
    const sum = reviews.reduce((acc, r) => acc + (Number(r.rating) || 5), 0);
    const avg = Math.round((sum / reviews.length) * 10) / 10;
    return { average: avg, count: reviews.length };
}

function addCompanyReview(companyId, review) {
    const stored = getStoredReviews();
    if (!Array.isArray(stored[companyId])) {
        stored[companyId] = [];
    }
    stored[companyId].unshift(review);
    try {
        localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(stored));
    } catch (e) {
        // ignore
    }
}

function renderStarsHtml(rating, maxStars = 5) {
    const rounded = Math.round(rating * 2) / 2;
    let html = "";
    for (let i = 1; i <= maxStars; i++) {
        if (i <= rounded) {
            html += `<svg class="star-icon is-filled" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`;
        } else {
            html += `<svg class="star-icon is-empty" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`;
        }
    }
    return html;
}

function getLanguage() {
    try {
        const saved = localStorage.getItem(LANG_KEY);
        if (saved === "ar" || saved === "en") return saved;
    } catch (e) {
        // ignore
    }
    return "en";
}

function setLanguage(lang) {
    const validLang = lang === "ar" ? "ar" : "en";
    try {
        localStorage.setItem(LANG_KEY, validLang);
    } catch (e) {
        // ignore
    }

    document.documentElement.lang = validLang;
    document.body.classList.toggle("lang-ar", validLang === "ar");

    const dict = TRANSLATIONS[validLang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict && dict[key]) {
            if (el.hasAttribute("data-i18n-html")) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict && dict[key]) {
            el.setAttribute("placeholder", dict[key]);
        }
    });

    document.querySelectorAll(".lang-label").forEach((el) => {
        el.textContent = dict.langToggle;
    });

    applyAuthUI();

    if (typeof window.ShieldNetRenderCompanies === "function") {
        window.ShieldNetRenderCompanies();
    }

    if (typeof window.ShieldNetRenderRecentSearches === "function") {
        window.ShieldNetRenderRecentSearches();
    }
}

function toggleLanguage() {
    const next = getLanguage() === "ar" ? "en" : "ar";
    setLanguage(next);
}

/* =============================================================
   1. AUTH - Shared demo mode (runs on every page)
   ============================================================= */
const SESSION_KEY = "shieldnet_demo_session";
const LOGIN_URL = "/login.html";
const HOME_URL = "/";

function getSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (err) {
        return null;
    }
}

function isLoggedIn() {
    return !!getSession();
}

function startSession(data = {}) {
    const session = { demo: true, name: "Demo User", startedAt: Date.now(), ...data };
    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } catch (err) {
        console.warn("[ShieldNet] Could not persist demo session:", err);
    }
    return session;
}

function endSession() {
    try {
        localStorage.removeItem(SESSION_KEY);
    } catch (err) {
        console.warn("[ShieldNet] Could not clear demo session:", err);
    }
}

// Updates every auth-aware element on the current page
function applyAuthUI() {
    const on = isLoggedIn();
    const lang = getLanguage();
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.body.classList.toggle("demo-on", on);

    document.querySelectorAll('[data-auth="locked"]').forEach((el) => {
        el.classList.toggle("is-locked", !on);
    });
    document.querySelectorAll('[data-auth="signin"]').forEach((el) => {
        el.textContent = on ? dict.navLogOut : dict.navSignIn;
    });
    document.querySelectorAll('[data-auth="signup"]').forEach((el) => {
        el.textContent = on ? dict.navProfile : dict.navSignUp;
    });
}

// Lets page sections (e.g. HOME) react: show a toast, close menus, ...
function emitAuthEvent(type) {
    document.dispatchEvent(new CustomEvent("shieldnet:auth", { detail: { type } }));
}

// Capture phase: runs before any other click handler on the page
document.addEventListener(
    "click",
    (e) => {
        const el = e.target.closest("[data-auth]");
        if (!el) return;

        const kind = el.dataset.auth;
        if (kind !== "signin" && kind !== "signup" && kind !== "locked") return;

        e.preventDefault();
        e.stopPropagation();

        if (kind === "signin") {
            if (isLoggedIn()) {
                endSession();
                applyAuthUI();
                emitAuthEvent("logout");
            } else {
                startSession();
                applyAuthUI();
                emitAuthEvent("login");
            }
            return;
        }

        // signup + locked
        if (isLoggedIn()) {
            window.location.hash = "#"; // temporary destination
            emitAuthEvent("navigate");
        } else {
            window.location.href = LOGIN_URL;
        }
    },
    true
);

// Keep tabs in sync and handle back/forward cache restores
window.addEventListener("storage", (e) => {
    if (e.key === SESSION_KEY || e.key === null) applyAuthUI();
    if (e.key === LANG_KEY) setLanguage(getLanguage());
});
window.addEventListener("pageshow", () => {
    applyAuthUI();
    setLanguage(getLanguage());
});

applyAuthUI();
setLanguage(getLanguage());

/* =============================================================
   2. HOME & DISCOVER - index.html
   ============================================================= */
(function initHomePage() {
    function start() {
        // Only run on pages containing hero-container or discover-view
        const heroContainer = document.getElementById("hero-container");
        const discoverView = document.getElementById("discover-view");
        if (!heroContainer && !discoverView) return;

        /* ----- DOM references ----- */
        const policyModal = document.getElementById("policy-modal");
        const policyTitle = document.getElementById("policy-modal-title");
        const policyContent = document.getElementById("policy-modal-content");

        const hireModal = document.getElementById("hire-request-modal");
        const hireForm = document.getElementById("hire-request-form");

        const mobileDrawer = document.getElementById("mobile-nav-drawer");
        const drawerBackdrop = document.getElementById("mobile-drawer-backdrop");
        const mobileMenuBtn = document.getElementById("mobile-menu-btn");

        const toastEl = document.getElementById("action-toast");
        const toastMessage = document.getElementById("toast-message");
        let toastTimeout = null;
        let lastFocusedElement = null;
        let lastModalActionTime = 0;

        // Search & Filter DOM
        const searchToggleBtn = document.getElementById("discover-search-toggle");
        const searchPanel = document.getElementById("discover-search-panel");
        const searchActiveBadge = document.getElementById("search-active-badge");
        const filterKeywordInput = document.getElementById("filter-keyword");
        const filterCoverageSelect = document.getElementById("filter-coverage");
        const filterNameInput = document.getElementById("filter-name");
        const filterWageSelect = document.getElementById("filter-wage");
        const btnApplyFilters = document.getElementById("btn-apply-filters");
        const btnClearFilters = document.getElementById("btn-clear-filters");
        const resultsCountText = document.getElementById("results-count-text");
        const activeFilterChips = document.getElementById("active-filter-chips");
        const companiesGrid = document.getElementById("companies-grid");
        const recentSearchesContainer = document.getElementById("recent-searches-container");
        const unavailableModal = document.getElementById("service-unavailable-modal");

        const RECENT_SEARCHES_KEY = "shieldnet_recent_searches";

        let currentPage = "home";
        let isNavigating = false;

        // Filter state
        let currentFilters = {
            keyword: "",
            coverage: "all",
            companyName: "",
            minWage: 0
        };

        /* =============================================================
           Recent Searches via localStorage (Max 3 items)
           ============================================================= */
        function getRecentSearches() {
            try {
                const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
                if (!raw) return [];
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed)) return [];
                return parsed
                    .filter((item) => typeof item === "string" && item.trim().length > 0)
                    .map((item) => item.trim())
                    .slice(0, 3);
            } catch (e) {
                return [];
            }
        }

        function saveRecentSearch(keyword) {
            const trimmed = (keyword || "").trim();
            if (!trimmed) return;
            try {
                let list = getRecentSearches();
                list = list.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
                list.unshift(trimmed);
                list = list.slice(0, 3);
                localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(list));
                renderRecentSearches();
            } catch (e) {
                // ignore
            }
        }

        function clearRecentSearches() {
            try {
                localStorage.removeItem(RECENT_SEARCHES_KEY);
            } catch (e) {
                // ignore
            }
            renderRecentSearches();
        }

        function renderRecentSearches() {
            const container = document.getElementById("recent-searches-container");
            if (!container) return;

            const searches = getRecentSearches();
            if (searches.length === 0) {
                container.style.display = "none";
                container.innerHTML = "";
                return;
            }

            const lang = getLanguage();
            const isAr = lang === "ar";
            const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
            const labelText = dict.recentSearches || (isAr ? "عمليات البحث الأخيرة:" : "Recent Searches:");
            const clearText = dict.clearRecentSearches || (isAr ? "مسح السجل" : "Clear History");

            container.style.display = "flex";
            container.innerHTML = `
                <div class="recent-searches-header">
                    <span class="recent-searches-label">
                        <svg class="recent-clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${escapeHtml(labelText)}</span>
                    </span>
                    <button type="button" class="btn-clear-recent-searches" id="btn-clear-recent-history" title="${escapeHtml(clearText)}" aria-label="${escapeHtml(clearText)}">
                        ${escapeHtml(clearText)}
                    </button>
                </div>
                <div class="recent-searches-tags" role="group" aria-label="${escapeHtml(labelText)}">
                    ${searches
                        .map(
                            (term) => `
                        <button type="button" class="recent-search-pill" data-search-term="${escapeHtml(term)}" title="${escapeHtml(term)}">
                            <svg class="pill-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span class="pill-text">${escapeHtml(term)}</span>
                        </button>
                    `
                        )
                        .join("")}
                </div>
            `;
        }

        window.ShieldNetRenderRecentSearches = renderRecentSearches;

        const policyTexts = {
            en: {
                privacy: {
                    title: "Privacy & Guard Vetting Policy",
                    html: "<p>At ShieldNet, candidate confidentiality and client property security are paramount. Guard background checks, identification records, and hiring estate discussions remain strictly protected and confidential.</p>"
                },
                terms: {
                    title: "Security Guard Staffing Terms",
                    html: "<p>ShieldNet operates as a premier professional network connecting verified physical security guards and protection officers with commercial estates and private properties. All candidates undergo credential auditing before deployment.</p>"
                }
            },
            ar: {
                privacy: {
                    title: "سياسة الخصوصية والتدقيق الأمني",
                    html: "<p>في ShieldNet، خصوصية المرشحين وأمن منشآت العملاء في مقدمة أولوياتنا. تظل سجلات الفحص الأمني والتحقق من الهوية ومفاوضات التعاقد سرية ومحمية بالكامل.</p>"
                },
                terms: {
                    title: "شروط التوظيف والتعاقد الأمني",
                    html: "<p>تعمل ShieldNet كمنصة مهنية رائدة تربط بين حراس الأمن المعتمدين وفِرق الحماية المؤهلة مع المنشآت التجارية والمجمعات السكنية. يخضع جميع الحراس لتدقيق مهني صارم قبل الاعتماد.</p>"
                }
            }
        };

        /* ----- Helpers: toast, modal, drawer ----- */
        function showToast(message, duration = 3400) {
            if (!toastEl || !toastMessage) return;
            toastMessage.textContent = message;
            toastEl.classList.add("is-visible");
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => toastEl.classList.remove("is-visible"), duration);
        }

        window.ShieldNetShowToast = showToast;

        function openModal(modalEl) {
            if (!modalEl) return;
            lastFocusedElement = document.activeElement;
            lastModalActionTime = Date.now();
            modalEl.classList.add("is-active");
            modalEl.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
            const closeBtn = modalEl.querySelector(".modal-close-btn");
            if (closeBtn) closeBtn.focus();
        }

        function closeModal(modalEl) {
            if (!modalEl) return;
            if (Date.now() - lastModalActionTime < 180) return;
            modalEl.classList.remove("is-active");
            modalEl.setAttribute("aria-hidden", "true");
            if (!document.querySelector(".custom-modal.is-active")) {
                document.body.classList.remove("modal-open");
            }
            if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
                lastFocusedElement.focus();
            }
        }

        function closeAllModals() {
            document.querySelectorAll(".custom-modal.is-active").forEach(closeModal);
        }

        function isDrawerOpen() {
            return !!mobileDrawer && mobileDrawer.classList.contains("is-open");
        }

        function updateActiveNavigation(page) {
            const isCompanies = page === "companies";
            const isHome = !isCompanies;

            // Update mobile sidebar drawer links
            document.querySelectorAll(".drawer-link").forEach((link) => {
                const action = link.getAttribute("data-action");
                const href = (link.getAttribute("href") || "").trim().toLowerCase();

                const isHomeLink =
                    action === "nav:home" ||
                    href === "/" ||
                    href === "/index.html" ||
                    href === "#home" ||
                    href.endsWith("/index.html") ||
                    (href === "#" && action !== "nav:companies");

                const isCompaniesLink =
                    action === "nav:companies" ||
                    href === "/companies.html" ||
                    href === "#companies" ||
                    href.includes("companies");

                if (isCompaniesLink) {
                    link.classList.toggle("active", isCompanies);
                } else if (isHomeLink) {
                    link.classList.toggle("active", isHome);
                }
            });

            // Update desktop navbar links in all top headers
            document.querySelectorAll(".modern-nav-link").forEach((link) => {
                const action = link.getAttribute("data-action");
                const href = (link.getAttribute("href") || "").trim().toLowerCase();

                const isHomeLink =
                    action === "nav:home" ||
                    href === "/" ||
                    href === "/index.html" ||
                    href === "#home" ||
                    href.endsWith("/index.html") ||
                    (href === "#" && action !== "nav:companies");

                const isCompaniesLink =
                    action === "nav:companies" ||
                    href === "/companies.html" ||
                    href === "#companies" ||
                    href.includes("companies");

                if (isCompaniesLink) {
                    link.classList.toggle("active", isCompanies);
                } else if (isHomeLink) {
                    link.classList.toggle("active", isHome);
                }
            });
        }
        window.ShieldNetUpdateActiveNav = updateActiveNavigation;

        function openMobileDrawer() {
            if (!mobileDrawer || !drawerBackdrop || isDrawerOpen()) return;
            updateActiveNavigation(currentPage);
            mobileDrawer.classList.add("is-open");
            drawerBackdrop.classList.add("is-active");
            mobileDrawer.setAttribute("aria-hidden", "false");
            if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
        }

        function closeMobileDrawer() {
            if (!mobileDrawer || !drawerBackdrop || !isDrawerOpen()) return;
            mobileDrawer.classList.remove("is-open");
            drawerBackdrop.classList.remove("is-active");
            mobileDrawer.setAttribute("aria-hidden", "true");
            if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
        }

        /* =============================================================
           Navigation: Home <-> Discover Security Companies
           Smooth Horizontal Retraction of Left Triangle
           ============================================================= */
        function navigateToCompanies(skipAnimation = false) {
            if (currentPage === "companies" || isNavigating) return;
            if (!discoverView) {
                window.location.href = "/#companies";
                return;
            }

            isNavigating = true;
            closeMobileDrawer();

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches || skipAnimation;

            if (reduceMotion || !heroContainer) {
                if (heroContainer) heroContainer.style.display = "none";
                discoverView.style.display = "block";
                discoverView.style.opacity = "1";
                discoverView.style.transform = "none";
                currentPage = "companies";
                isNavigating = false;
                window.scrollTo({ top: 0, behavior: "instant" });
                if (window.location.hash !== "#companies") {
                    history.pushState({ page: "companies" }, "", "#companies");
                }
                const isAr = getLanguage() === "ar";
                document.title = isAr
                    ? "استكشف شركات الأمن | ShieldNet"
                    : "Discover Security Companies | ShieldNet";
                renderCompanies();
                renderRecentSearches();
                return;
            }

            // Animate left triangular hero section retracting horizontally toward left edge
            heroContainer.classList.add("is-retracting");

            setTimeout(() => {
                heroContainer.style.display = "none";
                heroContainer.classList.remove("is-retracting");

                discoverView.style.display = "block";
                discoverView.style.opacity = "0";
                discoverView.style.transform = "translateY(12px)";
                // Force reflow
                discoverView.offsetHeight;
                discoverView.style.transition =
                    "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
                discoverView.style.opacity = "1";
                discoverView.style.transform = "translateY(0)";

                currentPage = "companies";
                isNavigating = false;
                window.scrollTo({ top: 0, behavior: "instant" });
                if (window.location.hash !== "#companies") {
                    history.pushState({ page: "companies" }, "", "#companies");
                }
                const isAr = getLanguage() === "ar";
                document.title = isAr
                    ? "استكشف شركات الأمن | ShieldNet"
                    : "Discover Security Companies | ShieldNet";
                renderCompanies();
                renderRecentSearches();
            }, 580);
        }

        function navigateToHome(skipAnimation = false) {
            if (currentPage === "home" || isNavigating) return;
            if (!heroContainer) {
                window.location.href = "/";
                return;
            }

            isNavigating = true;
            closeMobileDrawer();

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches || skipAnimation;

            if (reduceMotion || !discoverView) {
                if (discoverView) discoverView.style.display = "none";
                heroContainer.style.display = "flex";
                currentPage = "home";
                isNavigating = false;
                window.scrollTo({ top: 0, behavior: "instant" });
                if (window.location.hash === "#companies") {
                    history.pushState({ page: "home" }, "", "#");
                }
                const isAr = getLanguage() === "ar";
                document.title = isAr
                    ? "ShieldNet | شبكة توظيف حراس الأمن المعتمدين"
                    : "ShieldNet | The Professional Network for Vetted Security Guards";
                return;
            }

            discoverView.style.transition = "opacity 0.24s ease, transform 0.24s ease";
            discoverView.style.opacity = "0";
            discoverView.style.transform = "translateY(10px)";

            setTimeout(() => {
                discoverView.style.display = "none";
                discoverView.style.opacity = "1";
                discoverView.style.transform = "none";

                heroContainer.style.display = "flex";
                heroContainer.classList.add("is-entering");
                
                requestAnimationFrame(() => {
                    heroContainer.offsetHeight; // Force reflow
                    requestAnimationFrame(() => {
                        heroContainer.classList.remove("is-entering");
                        currentPage = "home";
                        isNavigating = false;
                        window.scrollTo({ top: 0, behavior: "instant" });
                        if (window.location.hash === "#companies") {
                            history.pushState({ page: "home" }, "", "#");
                        }
                        const isAr = getLanguage() === "ar";
                        document.title = isAr
                            ? "ShieldNet | شبكة توظيف حراس الأمن المعتمدين"
                            : "ShieldNet | The Professional Network for Vetted Security Guards";
                    });
                });
            }, 240);
        }

        /* =============================================================
           Filtering & Company Cards Rendering
           ============================================================= */
        function getFilteredCompanies() {
            return SECURITY_COMPANIES.filter((c) => {
                // 1. Keyword search (name, description, location, services)
                if (currentFilters.keyword) {
                    const kw = currentFilters.keyword.toLowerCase().trim();
                    const textMatch =
                        c.name.toLowerCase().includes(kw) ||
                        c.nameAr.toLowerCase().includes(kw) ||
                        c.desc.toLowerCase().includes(kw) ||
                        c.descAr.toLowerCase().includes(kw) ||
                        c.location.toLowerCase().includes(kw) ||
                        c.locationAr.toLowerCase().includes(kw) ||
                        c.services.some((s) => s.toLowerCase().includes(kw)) ||
                        c.servicesAr.some((s) => s.toLowerCase().includes(kw));
                    if (!textMatch) return false;
                }

                // 2. Location / Coverage filter
                if (currentFilters.coverage && currentFilters.coverage !== "all") {
                    if (c.coverageKey !== currentFilters.coverage) return false;
                }

                // 3. Company Name filter
                if (currentFilters.companyName) {
                    const nameQuery = currentFilters.companyName.toLowerCase().trim();
                    const nameMatch =
                        c.name.toLowerCase().includes(nameQuery) || c.nameAr.toLowerCase().includes(nameQuery);
                    if (!nameMatch) return false;
                }

                // 4. Minimum Employee Wage filter
                if (currentFilters.minWage > 0) {
                    if (c.wageNumeric < currentFilters.minWage) return false;
                }

                return true;
            });
        }

        function renderCompanies() {
            if (!companiesGrid) return;
            const lang = getLanguage();
            const isAr = lang === "ar";
            const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
            const filtered = getFilteredCompanies();

            // Update result counter
            if (resultsCountText) {
                const total = SECURITY_COMPANIES.length;
                resultsCountText.textContent = isAr
                    ? `عرض ${filtered.length} من أصل ${total} شركة أمنية`
                    : `Showing ${filtered.length} of ${total} security companies`;
            }

            // Update active filters badge & chips
            let activeCount = 0;
            if (activeFilterChips) {
                activeFilterChips.innerHTML = "";

                if (currentFilters.keyword) {
                    activeCount++;
                    const chip = document.createElement("span");
                    chip.className = "filter-chip";
                    chip.innerHTML = `"${escapeHtml(currentFilters.keyword)}" <button type="button" class="filter-chip-remove" data-clear="keyword" aria-label="Remove keyword filter">&times;</button>`;
                    activeFilterChips.appendChild(chip);
                }

                if (currentFilters.coverage && currentFilters.coverage !== "all") {
                    activeCount++;
                    const covName = filterCoverageSelect
                        ? filterCoverageSelect.options[filterCoverageSelect.selectedIndex].text
                        : currentFilters.coverage;
                    const chip = document.createElement("span");
                    chip.className = "filter-chip";
                    chip.innerHTML = `${escapeHtml(covName)} <button type="button" class="filter-chip-remove" data-clear="coverage" aria-label="Remove coverage filter">&times;</button>`;
                    activeFilterChips.appendChild(chip);
                }

                if (currentFilters.companyName) {
                    activeCount++;
                    const chip = document.createElement("span");
                    chip.className = "filter-chip";
                    chip.innerHTML = `${escapeHtml(currentFilters.companyName)} <button type="button" class="filter-chip-remove" data-clear="companyName" aria-label="Remove company name filter">&times;</button>`;
                    activeFilterChips.appendChild(chip);
                }

                if (currentFilters.minWage > 0) {
                    activeCount++;
                    const chip = document.createElement("span");
                    chip.className = "filter-chip";
                    chip.innerHTML = `≥ EGP ${currentFilters.minWage.toLocaleString()} <button type="button" class="filter-chip-remove" data-clear="minWage" aria-label="Remove wage filter">&times;</button>`;
                    activeFilterChips.appendChild(chip);
                }
            }

            if (searchActiveBadge) {
                if (activeCount > 0) {
                    searchActiveBadge.textContent = activeCount;
                    searchActiveBadge.style.display = "inline-flex";
                } else {
                    searchActiveBadge.style.display = "none";
                }
            }

            // Render 0 matching state
            if (filtered.length === 0) {
                companiesGrid.innerHTML = `
                    <div class="empty-companies-state" role="status">
                        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                        </svg>
                        <h3 class="empty-state-title">${dict.noResultsTitle || "No Security Companies Found"}</h3>
                        <p class="empty-state-desc">${dict.noResultsDesc || "Try clearing your filters or searching with different keywords."}</p>
                        <button type="button" class="btn btn-explore" id="btn-reset-empty-search" style="margin-top: 10px; flex: 0 0 auto;">
                            ${dict.btnResetSearch || "Reset All Filters"}
                        </button>
                    </div>
                `;
                return;
            }

            // Render Company Cards
            companiesGrid.innerHTML = filtered
                .map((comp) => {
                    const compName = isAr ? comp.nameAr : comp.name;
                    const compDesc = isAr ? comp.descAr : comp.desc;
                    const compLoc = isAr ? comp.locationAr : comp.location;
                    const compWage = isAr ? comp.wageTextAr : comp.wageText;
                    const compWorkforce = isAr ? comp.workforceAr : comp.workforce;
                    const compServices = isAr ? comp.servicesAr : comp.services;

                    const ratingStats = getCompanyRatingStats(comp.id);
                    const reviewsCountLabel = isAr
                        ? `${ratingStats.count} تقييم`
                        : `${ratingStats.count} reviews`;

                    const recommendedHtml = comp.recommended
                        ? `
                        <div class="recommended-badge" aria-label="${dict.badgeRecommended || "Recommended for You"}">
                            <svg class="star-icon" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span>${dict.badgeRecommended || "Recommended for You"}</span>
                        </div>
                    `
                        : "";

                    const servicesTagsHtml = compServices
                        .map((s) => `<span class="card-service-tag">${escapeHtml(s)}</span>`)
                        .join("");

                    return `
                    <article class="company-card ${comp.recommended ? "is-recommended" : ""}" data-id="${comp.id}" role="listitem">
                        ${recommendedHtml}
                        <div class="card-media-wrapper">
                            <img src="${comp.image}" alt="${escapeHtml(compName)}" class="card-company-img" loading="lazy" />
                            <div class="card-media-overlay"></div>
                        </div>
                        <div class="card-body">
                            <div class="card-header-row">
                                <h3 class="card-company-name">${escapeHtml(compName)}</h3>
                                <div class="card-location-row">
                                    <svg class="pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    <span>${escapeHtml(compLoc)}</span>
                                </div>
                            </div>

                            <!-- Visual Star-Rating Component -->
                            <div class="card-rating-row" data-action="company:details" data-company-id="${comp.id}" role="button" tabindex="0" title="${dict.detailsAndReviews || "View details & reviews"}">
                                <div class="card-stars-visual" aria-hidden="true">
                                    ${renderStarsHtml(ratingStats.average)}
                                </div>
                                <span class="card-rating-score">${ratingStats.average.toFixed(1)}</span>
                                <span class="card-rating-count">(${reviewsCountLabel})</span>
                                <span class="card-rating-more-hint" aria-hidden="true">${isAr ? "التقييمات" : "Reviews"} ›</span>
                            </div>

                            <p class="card-description">${escapeHtml(compDesc)}</p>

                            <div class="card-metrics-grid">
                                <div class="metric-item">
                                    <span class="metric-label">${dict.cardWorkforce || "Workforce"}</span>
                                    <span class="metric-value">${escapeHtml(compWorkforce)}</span>
                                </div>
                                <div class="metric-item">
                                    <span class="metric-label">${dict.cardMinWage || "Min. Wage"}</span>
                                    <span class="metric-value wage-highlight">${escapeHtml(compWage)}</span>
                                </div>
                            </div>

                            <div class="card-services-list" aria-label="${dict.cardServices || "Specialties"}">
                                ${servicesTagsHtml}
                            </div>

                            <div class="card-footer">
                                <button
                                    type="button"
                                    class="btn-hire-card"
                                    data-action="company:hire"
                                    data-company-id="${comp.id}"
                                    aria-label="${dict.hireNow || "Hire Now"} ${escapeHtml(compName)}">
                                    <span>${dict.hireNow || "Hire Now"}</span>
                                    <span aria-hidden="true">→</span>
                                </button>
                                <button
                                    type="button"
                                    class="btn-details-card"
                                    data-action="company:details"
                                    data-company-id="${comp.id}"
                                    aria-label="${dict.detailsBtn || "Reviews & Info"} ${escapeHtml(compName)}">
                                    <svg class="star-mini-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span>${dict.detailsBtn || "Reviews"}</span>
                                </button>
                                <button
                                    type="button"
                                    class="btn-expand-mobile"
                                    data-action="card:toggle-expand"
                                    aria-expanded="false"
                                    aria-label="Expand details for ${escapeHtml(compName)}">
                                    ${dict.showMore || "Show More"}
                                </button>
                            </div>
                        </div>
                    </article>
                `;
                })
                .join("");
        }

        window.ShieldNetRenderCompanies = renderCompanies;

        function escapeHtml(str) {
            if (!str) return "";
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        /* =============================================================
           Hire Flow & Authentication Integration
           ============================================================= */
        function handleHireCompany(companyId) {
            const company = SECURITY_COMPANIES.find((c) => c.id === companyId);
            if (!company) return;

            // Authentication Check
            if (!isLoggedIn()) {
                try {
                    localStorage.setItem("shieldnet_pending_hire", JSON.stringify({ id: company.id, name: company.name }));
                } catch (e) {
                    // ignore
                }
                window.location.href = `${LOGIN_URL}?company=${encodeURIComponent(company.id)}&action=hire`;
                return;
            }

            // User is signed in: Open modal notifying that no services are available currently ("لا يوجد خدمات متاحة الآن، عُد قريباً")
            const lang = getLanguage();
            const isAr = lang === "ar";
            const unavailModal = document.getElementById("service-unavailable-modal");
            const previewImg = document.getElementById("unavailable-preview-img");
            const previewName = document.getElementById("unavailable-preview-name");
            const previewLoc = document.getElementById("unavailable-preview-location");

            if (previewImg) previewImg.src = company.image;
            if (previewName) previewName.textContent = isAr ? company.nameAr : company.name;
            if (previewLoc) previewLoc.textContent = isAr ? company.locationAr : company.location;

            try {
                localStorage.removeItem("shieldnet_pending_hire");
            } catch (e) {
                // ignore
            }

            if (unavailModal) {
                openModal(unavailModal);
            } else if (hireModal) {
                openModal(hireModal);
            }
        }

        if (hireForm) {
            hireForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const companyId = document.getElementById("hire-form-company-id")?.value;
                const company = SECURITY_COMPANIES.find((c) => c.id === companyId) || {
                    name: "Security Provider",
                    nameAr: "مزود الحراسة"
                };
                const lang = getLanguage();
                const isAr = lang === "ar";
                const companyName = isAr ? company.nameAr || company.name : company.name;
                const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

                const propertyType = document.getElementById("hire-property-type")?.value;
                const guardsCount = document.getElementById("hire-guards-count")?.value;
                const startDate = document.getElementById("hire-start-date")?.value;
                const notes = document.getElementById("hire-notes")?.value;

                // Save request locally
                try {
                    const requests = JSON.parse(localStorage.getItem("shieldnet_hiring_requests") || "[]");
                    requests.push({
                        id: "req_" + Date.now(),
                        companyId,
                        companyName,
                        propertyType,
                        guardsCount,
                        startDate,
                        notes,
                        submittedAt: new Date().toISOString()
                    });
                    localStorage.setItem("shieldnet_hiring_requests", JSON.stringify(requests));
                    localStorage.removeItem("shieldnet_pending_hire");
                } catch (err) {
                    // ignore
                }

                closeModal(hireModal);
                const toastMsg = dict.hireToastSuccess
                    ? dict.hireToastSuccess.replace("{company}", companyName)
                    : `Contract inquiry submitted to ${companyName}. Our dispatch officer will contact you within 2 business hours.`;
                showToast(toastMsg, 4000);
            });
        }

        /* =============================================================
           Company Details & Reviews Modal Handler
           ============================================================= */
        function openCompanyDetailsModal(companyId) {
            const company = SECURITY_COMPANIES.find((c) => c.id === companyId);
            if (!company) return;

            const modal = document.getElementById("company-details-modal");
            if (!modal) return;

            const lang = getLanguage();
            const isAr = lang === "ar";
            const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
            const compName = isAr ? company.nameAr : company.name;
            const compDesc = isAr ? company.descAr : company.desc;
            const compLoc = isAr ? company.locationAr : company.location;
            const compWage = isAr ? company.wageTextAr : company.wageText;
            const compWorkforce = isAr ? company.workforceAr : company.workforce;
            const compServices = isAr ? company.servicesAr : company.services;

            const imgEl = document.getElementById("details-company-img");
            const nameEl = document.getElementById("details-company-name");
            const recBadge = document.getElementById("details-recommended-badge");
            const locEl = document.getElementById("details-company-location");
            const descEl = document.getElementById("details-company-desc");
            const workforceEl = document.getElementById("details-company-workforce");
            const wageEl = document.getElementById("details-company-wage");
            const servicesEl = document.getElementById("details-company-services");
            const btnHire = document.getElementById("details-btn-hire");
            const reviewCompIdInput = document.getElementById("review-company-id");

            if (imgEl) imgEl.src = company.image;
            if (nameEl) nameEl.textContent = compName;
            if (recBadge) recBadge.style.display = company.recommended ? "inline-flex" : "none";
            if (locEl) locEl.textContent = compLoc;
            if (descEl) descEl.textContent = compDesc;
            if (workforceEl) workforceEl.textContent = compWorkforce;
            if (wageEl) wageEl.textContent = compWage;
            if (btnHire) btnHire.setAttribute("data-company-id", company.id);
            if (reviewCompIdInput) reviewCompIdInput.value = company.id;

            if (servicesEl) {
                servicesEl.innerHTML = compServices
                    .map((s) => `<span class="card-service-tag">${escapeHtml(s)}</span>`)
                    .join("");
            }

            renderDetailsModalReviews(company.id);

            // Hide review form by default when modal opens
            const formWrapper = document.getElementById("review-form-wrapper");
            if (formWrapper) formWrapper.style.display = "none";
            const reviewForm = document.getElementById("company-review-form");
            if (reviewForm) reviewForm.reset();

            // Set default 5 stars in picker
            updateStarPickerVisual(5);

            // Pre-fill reviewer name if logged in
            const authorInput = document.getElementById("review-author-name");
            const session = getSession();
            if (authorInput && session && session.name) {
                authorInput.value = session.name;
            }

            openModal(modal);
        }

        function renderDetailsModalReviews(companyId) {
            const stats = getCompanyRatingStats(companyId);
            const reviews = getCompanyReviews(companyId);
            const lang = getLanguage();
            const isAr = lang === "ar";
            const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

            const avgScoreEl = document.getElementById("details-average-score");
            const starsVisualEl = document.getElementById("details-stars-visual");
            const totalReviewsEl = document.getElementById("details-total-reviews");
            const reviewsListEl = document.getElementById("reviews-list-container");

            if (avgScoreEl) avgScoreEl.textContent = stats.average.toFixed(1);
            if (starsVisualEl) starsVisualEl.innerHTML = renderStarsHtml(stats.average);
            if (totalReviewsEl) {
                totalReviewsEl.textContent = dict.basedOnReviews
                    ? dict.basedOnReviews.replace("{count}", stats.count)
                    : `Based on ${stats.count} verified client reviews`;
            }

            if (reviewsListEl) {
                if (reviews.length === 0) {
                    reviewsListEl.innerHTML = `
                        <div class="empty-reviews-state" style="text-align: center; padding: 24px 12px; color: #64748b; font-size: 0.9rem;">
                            <p>${dict.reviewsEmptyState || "No reviews submitted yet for this provider."}</p>
                        </div>
                    `;
                } else {
                    reviewsListEl.innerHTML = reviews
                        .map((rev) => {
                            const commentText = isAr && rev.commentAr ? rev.commentAr : rev.comment;
                            return `
                            <div class="review-card">
                                <div class="review-card-top">
                                    <div class="review-author-meta">
                                        <span class="review-author-name">${escapeHtml(rev.author)}</span>
                                        ${rev.authorRole ? `<span class="review-author-role">${escapeHtml(rev.authorRole)}</span>` : ""}
                                    </div>
                                    <div class="review-card-stars-date">
                                        <div class="card-stars-visual" aria-label="${rev.rating} stars">
                                            ${renderStarsHtml(rev.rating)}
                                        </div>
                                        <span class="review-date">${escapeHtml(rev.date || "Recent")}</span>
                                    </div>
                                </div>
                                <p class="review-comment-text">${escapeHtml(commentText)}</p>
                            </div>
                        `;
                        })
                        .join("");
                }
            }
        }

        function updateStarPickerVisual(score) {
            const picker = document.getElementById("star-rating-picker");
            if (!picker) return;
            const buttons = picker.querySelectorAll(".star-btn");
            buttons.forEach((btn) => {
                const s = parseInt(btn.getAttribute("data-star"), 10);
                btn.classList.toggle("is-active", s <= score);
                btn.setAttribute("aria-checked", String(s === score));
            });
            const input = document.getElementById("review-score-input");
            if (input) input.value = score;
            const label = document.getElementById("selected-star-label");
            if (label) label.textContent = `${score}.0 / 5.0`;
        }

        // Review Form Submit Handler
        const companyReviewForm = document.getElementById("company-review-form");
        if (companyReviewForm) {
            companyReviewForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const compId = document.getElementById("review-company-id")?.value;
                if (!compId) return;

                const rating = parseInt(document.getElementById("review-score-input")?.value, 10) || 5;
                const author = document.getElementById("review-author-name")?.value.trim();
                const authorRole = document.getElementById("review-author-role")?.value.trim();
                const comment = document.getElementById("review-comment")?.value.trim();

                if (!author || !comment) {
                    showToast(getLanguage() === "ar" ? "يرجى إدخال الاسم ونص التقييم" : "Please enter your name and review text");
                    return;
                }

                const company = SECURITY_COMPANIES.find((c) => c.id === compId);
                const compName = company ? (getLanguage() === "ar" ? company.nameAr : company.name) : "Provider";

                const newRev = {
                    id: "rev_" + Date.now(),
                    author,
                    authorRole,
                    rating,
                    date: new Date().toISOString().split("T")[0],
                    comment,
                    commentAr: comment
                };

                addCompanyReview(compId, newRev);

                // Update reviews inside details modal
                renderDetailsModalReviews(compId);
                // Update cards rating display in grid
                renderCompanies();

                // Reset and hide review form
                companyReviewForm.reset();
                const formWrapper = document.getElementById("review-form-wrapper");
                if (formWrapper) formWrapper.style.display = "none";

                const lang = getLanguage();
                const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
                const toastMsg = dict.reviewSuccessToast
                    ? dict.reviewSuccessToast.replace("{company}", compName)
                    : `Thank you! Your verified review for ${compName} has been published.`;
                showToast(toastMsg, 3600);
            });
        }

        /* =============================================================
           ButtonActionManager Handlers
           ============================================================= */
        const ButtonActionManager = {
            handlers: {
                "modal:open-policy": (target) => {
                    const policyKey = target.getAttribute("data-policy") || "privacy";
                    const currentLang = getLanguage();
                    const langPack = policyTexts[currentLang] || policyTexts.en;
                    if (langPack[policyKey]) {
                        if (policyTitle) policyTitle.textContent = langPack[policyKey].title;
                        if (policyContent) policyContent.innerHTML = langPack[policyKey].html;
                    }
                    closeMobileDrawer();
                    openModal(policyModal);
                },
                "modal:close-policy": () => closeModal(policyModal),
                "modal:close-hire": () => closeModal(hireModal),
                "modal:close-unavailable": () => closeModal(document.getElementById("service-unavailable-modal")),
                "modal:close-details": () => closeModal(document.getElementById("company-details-modal")),
                "modal:close-all": () => closeAllModals(),

                "company:details": (target) => {
                    const compId = target.getAttribute("data-company-id") || target.closest("[data-company-id]")?.getAttribute("data-company-id");
                    if (compId) openCompanyDetailsModal(compId);
                },
                "review:toggle-form": () => {
                    const w = document.getElementById("review-form-wrapper");
                    if (!w) return;
                    const isClosed = w.style.display === "none";
                    w.style.display = isClosed ? "block" : "none";
                    if (isClosed) {
                        const input = document.getElementById("review-author-name");
                        if (input) setTimeout(() => input.focus(), 80);
                    }
                },
                "review:cancel": () => {
                    const w = document.getElementById("review-form-wrapper");
                    if (w) w.style.display = "none";
                },
                "company:hire-from-details": (target) => {
                    const compId = target.getAttribute("data-company-id") || document.getElementById("review-company-id")?.value;
                    closeModal(document.getElementById("company-details-modal"));
                    if (compId) handleHireCompany(compId);
                },

                "nav:toggle-drawer": () => (isDrawerOpen() ? closeMobileDrawer() : openMobileDrawer()),
                "nav:open-drawer": () => openMobileDrawer(),
                "nav:close-drawer": () => closeMobileDrawer(),

                "nav:home": () => {
                    closeMobileDrawer();
                    navigateToHome();
                },
                "nav:companies": () => {
                    closeMobileDrawer();
                    navigateToCompanies();
                },
                "action:explore-guards": () => {
                    closeMobileDrawer();
                    navigateToCompanies();
                },

                "action:toggle-lang": () => {
                    toggleLanguage();
                },

                "company:hire": (target) => {
                    const companyId = target.getAttribute("data-company-id") || target.closest("[data-company-id]")?.getAttribute("data-company-id");
                    if (companyId) handleHireCompany(companyId);
                },

                "card:toggle-expand": (target) => {
                    const card = target.closest(".company-card");
                    if (!card) return;
                    const isExpanded = card.classList.toggle("is-expanded");
                    target.setAttribute("aria-expanded", String(isExpanded));
                    const lang = getLanguage();
                    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
                    target.textContent = isExpanded
                        ? dict.showLess || "Show Less"
                        : dict.showMore || "Show More";
                }
            },

            registerAction(actionKey, handler) {
                if (typeof handler === "function") this.handlers[actionKey] = handler;
            },

            dispatch(actionKey, element, event) {
                if (!actionKey) return false;
                if (typeof this.handlers[actionKey] === "function") {
                    try {
                        this.handlers[actionKey](element, event);
                        return true;
                    } catch (error) {
                        console.error(`[ButtonActionManager] Error executing '${actionKey}':`, error);
                        return false;
                    }
                }
                return false;
            },

            resolveAction(element) {
                if (!element) return null;

                const explicitAction = element.getAttribute("data-action");
                if (explicitAction) return explicitAction;

                if (element.hasAttribute("data-close-policy")) return "modal:close-policy";
                if (element.hasAttribute("data-open-policy")) return "modal:open-policy";

                if (element.classList.contains("nav-lang-btn") || element.classList.contains("drawer-lang-btn"))
                    return "action:toggle-lang";
                if (element.classList.contains("mobile-menu-btn")) return "nav:toggle-drawer";
                if (element.classList.contains("drawer-close-btn")) return "nav:close-drawer";
                if (element.classList.contains("mobile-drawer-backdrop")) return "nav:close-drawer";
                if (element.classList.contains("btn-explore")) return "action:explore-guards";
                if (element.classList.contains("btn-hire-card")) return "company:hire";
                if (element.classList.contains("btn-details-card")) return "company:details";
                if (element.classList.contains("card-rating-row")) return "company:details";
                if (element.classList.contains("btn-expand-mobile")) return "card:toggle-expand";

                return null;
            }
        };

        window.ButtonActionManager = ButtonActionManager;
        window.ShieldNetDispatch = (actionKey, el) => ButtonActionManager.dispatch(actionKey, el);

        /* ----- Search & Filter Panel Events ----- */
        if (searchToggleBtn && searchPanel) {
            searchToggleBtn.addEventListener("click", () => {
                const isOpen = searchPanel.classList.toggle("is-open");
                searchToggleBtn.setAttribute("aria-expanded", String(isOpen));
                if (isOpen && filterKeywordInput) {
                    setTimeout(() => filterKeywordInput.focus(), 150);
                }
            });
        }

        if (btnApplyFilters) {
            btnApplyFilters.addEventListener("click", () => {
                const kw = filterKeywordInput ? filterKeywordInput.value.trim() : "";
                currentFilters.keyword = kw;
                currentFilters.coverage = filterCoverageSelect ? filterCoverageSelect.value : "all";
                currentFilters.companyName = filterNameInput ? filterNameInput.value.trim() : "";
                currentFilters.minWage = filterWageSelect ? parseInt(filterWageSelect.value, 10) || 0 : 0;
                if (kw) {
                    saveRecentSearch(kw);
                }
                renderCompanies();
            });
        }

        if (btnClearFilters) {
            btnClearFilters.addEventListener("click", () => {
                currentFilters.keyword = "";
                currentFilters.coverage = "all";
                currentFilters.companyName = "";
                currentFilters.minWage = 0;

                if (filterKeywordInput) filterKeywordInput.value = "";
                if (filterCoverageSelect) filterCoverageSelect.value = "all";
                if (filterNameInput) filterNameInput.value = "";
                if (filterWageSelect) filterWageSelect.value = "0";

                renderCompanies();
            });
        }

        // Delegate chips remove, recent search pills, clear history, & reset button in empty state
        document.addEventListener("click", (e) => {
            const recentPill = e.target.closest(".recent-search-pill");
            if (recentPill) {
                const term = recentPill.getAttribute("data-search-term");
                if (term) {
                    if (filterKeywordInput) filterKeywordInput.value = term;
                    currentFilters.keyword = term;
                    saveRecentSearch(term);
                    renderCompanies();
                }
                return;
            }

            if (e.target.closest("#btn-clear-recent-history")) {
                clearRecentSearches();
                return;
            }

            const clearChip = e.target.closest("[data-clear]");
            if (clearChip) {
                const field = clearChip.getAttribute("data-clear");
                if (field === "keyword") {
                    currentFilters.keyword = "";
                    if (filterKeywordInput) filterKeywordInput.value = "";
                } else if (field === "coverage") {
                    currentFilters.coverage = "all";
                    if (filterCoverageSelect) filterCoverageSelect.value = "all";
                } else if (field === "companyName") {
                    currentFilters.companyName = "";
                    if (filterNameInput) filterNameInput.value = "";
                } else if (field === "minWage") {
                    currentFilters.minWage = 0;
                    if (filterWageSelect) filterWageSelect.value = "0";
                }
                renderCompanies();
                return;
            }

            const starBtn = e.target.closest(".star-btn");
            if (starBtn) {
                const s = parseInt(starBtn.getAttribute("data-star"), 10);
                if (s >= 1 && s <= 5) updateStarPickerVisual(s);
                return;
            }

            if (e.target.id === "btn-reset-empty-search") {
                if (btnClearFilters) btnClearFilters.click();
            }
        });

        // Hover effect on star rating picker buttons
        document.addEventListener("mouseover", (e) => {
            const starBtn = e.target.closest(".star-btn");
            if (starBtn) {
                const hoverStar = parseInt(starBtn.getAttribute("data-star"), 10);
                const picker = starBtn.closest("#star-rating-picker");
                if (picker) {
                    picker.querySelectorAll(".star-btn").forEach((btn) => {
                        const s = parseInt(btn.getAttribute("data-star"), 10);
                        btn.style.color = s <= hoverStar ? "var(--color-gold)" : "#cbd5e1";
                    });
                }
            }
        });

        document.addEventListener("mouseout", (e) => {
            const picker = e.target.closest("#star-rating-picker");
            if (picker && !picker.contains(e.relatedTarget)) {
                const curScore = parseInt(document.getElementById("review-score-input")?.value, 10) || 5;
                picker.querySelectorAll(".star-btn").forEach((btn) => {
                    const s = parseInt(btn.getAttribute("data-star"), 10);
                    btn.style.color = s <= curScore ? "var(--color-gold)" : "#cbd5e1";
                });
            }
        });

        // Enter key in filter input triggers search
        [filterKeywordInput, filterNameInput].forEach((input) => {
            if (input) {
                input.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        if (btnApplyFilters) btnApplyFilters.click();
                    }
                });
            }
        });

        /* ----- Global Click Dispatcher ----- */
        document.addEventListener(
            "click",
            (e) => {
                const clickable = e.target.closest(
                    "[data-action], button, .btn, .nav-link, .drawer-link, .mobile-menu-btn, [data-open-policy], [data-close-policy]"
                );
                if (!clickable) return;

                const actionKey = ButtonActionManager.resolveAction(clickable);
                if (actionKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    ButtonActionManager.dispatch(actionKey, clickable, e);
                }
            },
            { passive: false }
        );

        /* ----- Browser Back & Forward Navigation ----- */
        window.addEventListener("popstate", (e) => {
            if (window.location.hash === "#companies" || (e.state && e.state.page === "companies")) {
                navigateToCompanies(false);
            } else {
                navigateToHome(false);
            }
        });

        // Feedback from the AUTH section (sign in / log out / navigate)
        document.addEventListener("shieldnet:auth", (e) => {
            closeMobileDrawer();
            const type = e.detail && e.detail.type;
            if (type === "login") showToast("Signed in (Demo Mode): all features unlocked");
            if (type === "logout") showToast("Logged out: demo mode ended");
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                ButtonActionManager.dispatch("modal:close-all");
                ButtonActionManager.dispatch("nav:close-drawer");
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 992 && isDrawerOpen()) closeMobileDrawer();
        });

        /* ----- Smooth number counters on homepage ----- */
        const statValues = document.querySelectorAll(".stat-value[data-target]");
        if (statValues.length > 0) {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const duration = 1600;
            const startTime = performance.now();

            const render = (progress) => {
                const easeOut = 1 - (1 - progress) * (1 - progress);
                statValues.forEach((el) => {
                    const target = parseInt(el.getAttribute("data-target"), 10);
                    const isPercent = target < 100;
                    const current = isPercent
                        ? (easeOut * 99.4).toFixed(1)
                        : Math.floor(easeOut * target).toLocaleString();
                    const node = el.firstChild;
                    if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = current;
                });
            };

            const updateCounters = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                render(progress);
                if (progress < 1) requestAnimationFrame(updateCounters);
            };

            if (reduceMotion) render(1);
            else requestAnimationFrame(updateCounters);
        }

        renderRecentSearches();

        // Check if page loaded directly with #companies
        if (window.location.hash && window.location.hash.startsWith("#companies")) {
            navigateToCompanies(true);
        }

        // Check if returning from login with pending hire request
        const urlParams = new URLSearchParams(window.location.search);
        let hireParam = urlParams.get("hire");
        if (!hireParam && window.location.hash.includes("hire=")) {
            const hashParts = window.location.hash.split("?");
            if (hashParts[1]) {
                hireParam = new URLSearchParams(hashParts[1]).get("hire");
            }
        }

        if (hireParam && isLoggedIn()) {
            navigateToCompanies(true);
            setTimeout(() => handleHireCompany(hireParam), 400);
        } else {
            try {
                const pending = localStorage.getItem("shieldnet_pending_hire");
                if (pending && isLoggedIn() && window.location.hash && window.location.hash.startsWith("#companies")) {
                    const parsed = JSON.parse(pending);
                    if (parsed && parsed.id) {
                        setTimeout(() => handleHireCompany(parsed.id), 400);
                    }
                }
            } catch (err) {
                // ignore
            }
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();

/* =============================================================
   3. LOGIN - login.html (create account / sign in)
   ============================================================= */
(function initLoginPage() {
    function start() {
        const form = document.getElementById("auth-form");
        // Only run on the login page
        if (!form) return;

        // Already in demo mode -> nothing to do here
        if (isLoggedIn()) {
            window.location.replace(HOME_URL);
            return;
        }

        const title = document.getElementById("auth-title");
        const subtitle = document.getElementById("auth-subtitle");
        const submitBtn = document.getElementById("auth-submit");
        const errorEl = document.getElementById("auth-error");
        const tabs = document.querySelectorAll(".auth-tab");
        const signupOnly = document.querySelectorAll('[data-only="signup"]');
        const nameInput = document.getElementById("auth-name");
        const emailInput = document.getElementById("auth-email");
        const passInput = document.getElementById("auth-password");
        const roleInput = document.getElementById("auth-role");

        const copy = {
            signup: {
                title: "Create Your Account",
                subtitle: "Join Egypt's verified security network. This is a demo: no real data is sent anywhere.",
                button: "Confirm & Continue",
                autocomplete: "new-password",
                page: "Create Account"
            },
            signin: {
                title: "Welcome Back",
                subtitle: "Sign in to continue. This is a demo: any valid email and password will work.",
                button: "Sign In",
                autocomplete: "current-password",
                page: "Sign In"
            }
        };

        let mode = "signup";
        let submitting = false;

        function setMode(next) {
            mode = next;
            const c = copy[mode];
            title.textContent = c.title;
            subtitle.textContent = c.subtitle;
            submitBtn.textContent = c.button;
            passInput.setAttribute("autocomplete", c.autocomplete);
            signupOnly.forEach((el) => el.classList.toggle("is-hidden", mode !== "signup"));
            tabs.forEach((tab) => {
                const active = tab.dataset.mode === mode;
                tab.classList.toggle("is-active", active);
                tab.setAttribute("aria-selected", String(active));
            });
            document.title = `${c.page} | ShieldNet`;
            errorEl.textContent = "";
        }

        function validate() {
            if (mode === "signup" && nameInput.value.trim().length < 2) {
                nameInput.focus();
                return "Please enter your full name.";
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
                emailInput.focus();
                return "Please enter a valid email address.";
            }
            if (passInput.value.length < 6) {
                passInput.focus();
                return "Password must be at least 6 characters.";
            }
            return "";
        }

        tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (submitting) return;

            const problem = validate();
            if (problem) {
                errorEl.textContent = problem;
                return;
            }
            errorEl.textContent = "";

            const email = emailInput.value.trim();
            const name = mode === "signup" ? nameInput.value.trim() : email.split("@")[0];

            // Same demo session the Sign In button creates -> everything unlocks on the home page
            startSession({ name, email, role: mode === "signup" ? roleInput.value : "client" });

            submitting = true;
            submitBtn.disabled = true;
            submitBtn.textContent = "✓ Confirmed, redirecting…";
            setTimeout(() => {
                const params = new URLSearchParams(window.location.search);
                const company = params.get("company");
                const action = params.get("action");
                if (action === "hire" && company) {
                    window.location.assign(`/#companies?hire=${encodeURIComponent(company)}`);
                } else {
                    window.location.assign(HOME_URL);
                }
            }, 700);
        });

        if (new URLSearchParams(window.location.search).get("mode") === "signin") {
            setMode("signin");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
