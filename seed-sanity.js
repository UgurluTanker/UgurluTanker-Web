const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'yqtlvz9c',
    dataset: 'production',
    apiVersion: '2024-01-31',
    token: process.argv[2], // Pass token as first argument
    useCdn: false,
});

const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    companyName: 'Uğurlu Tanker',
    phone1: '(0262) 335 04 15',
    mobile: '+90 538 774 57 41',
    email: 'ugurlutanker@hotmail.com.tr',
    fax: '(0262) 335 06 85',
    address: 'Sanayi Mh. İzmit San. Sit. 13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ',
};

const homepage = {
    _id: 'homepage',
    _type: 'homepage',
    heroTitle: 'Güvenle Taşıyın, Standartlara Uyun.',
    heroSubtitle: "Kocaeli'nin öncü tanker muayene ve sertifikalandırma merkezi olarak, ADR standartlarında uzman kadromuzla yanınızdayız.",
    stats: [
        { label: 'Yıllık Tecrübe', value: '25+' },
        { label: 'Düzenlenen Belge', value: '5000+' },
        { label: 'Yetkili Personel', value: '10+' },
        { label: 'Müşteri Memnuniyeti', value: '%100' },
    ],
};

const corporatePage = {
    _id: 'corporatePage',
    _type: 'corporatePage',
    heroTitle: 'Hakkımızda',
    heroSubtitle: 'Uğurlu Tanker, tehlikeli madde taşımacılığı sektöründe güvenliğin ve uluslararası standartların Kocaeli\'deki sarsılmaz kalesidir.',
    mainHistoryTitle: '1977\'den Bugüne Sektörün Öncüsü',
    mainHistoryContent: [
        {
            _type: 'block',
            children: [{ _type: 'span', text: 'Kurulduğu 1977 yılından bugüne kadar tanker üretimini aralıksız sürdüren şirketimiz, kalitesinden taviz vermeden hizmet vermeye devam etmektedir.' }],
            markDefs: [],
            style: 'normal',
        }
    ],
    visionTitle: 'VİZYONUMUZ',
    visionContent: 'Türkiye genelinde tanker muayene ve ADR belgelendirme süreçlerinde dijital dönüşümü öncüleyerek, sektörde standartları belirleyen çözüm ortağı olmayı hedefliyoruz.',
    missionTitle: 'MİSYONUMUZ',
    missionContent: 'Bağımsızlık, tarafsızlık ve dürüstlük ilkelerinden ödün vermeden; uzman kadromuz ve modern altyapımızla karayolu taşıma güvenliğini en üst seviyeye çıkarmak için çalışıyoruz.',
    coreValues: [
        { title: 'Güvenlik', description: 'Tüm süreçlerimizde emniyeti en üst seviyede tutuyoruz.', icon: 'ShieldCheck' },
        { title: 'Uzmanlık', description: 'Alanında yetkin mühendis ve teknik kadro ile çalışıyoruz.', icon: 'UserCheck' },
        { title: 'Standartlar', description: 'TSE ve ADR standartlarına tam uyum sağlıyoruz.', icon: 'ClipboardCheck' },
        { title: 'Dürüstlük', description: 'Tüm kontrollerimizde tarafsız ve şeffaf davranıyoruz.', icon: 'ShieldAlert' },
    ],
};

const inspectionPage = {
    _id: 'inspectionPage',
    _type: 'inspectionPage',
    heroBadge: 'TEKNİK MÜKEMMELİYET',
    heroTitle: 'Muayene & Servis',
    heroSubtitle: 'Güvenli taşımacılık için uluslararası standartlarda denetim ve teknik destek sağlıyoruz.',
    whyChooseUs: {
        title: 'Neden Muayene ve Servis Almalısınız?',
        description: 'Tehlikeli madde taşıyan tankerlerin hem yasal mevzuatlara uyumu hem de can/mal güvenliği için düzenli muayene ve teknik servis hizmeti alması zorunludur.',
        points: ['ADR Standartlarına %100 Uyum', 'Modern Test Ekipmanları', 'Uzman Mühendis Kadrosu', 'Hızlı Raporlama ve Belgelendirme'],
    },
    features: [
        { icon: 'ShieldCheck', title: 'TSE Yetkili Muayene', description: 'ADR Mevzuatına uygun, TSE tarafından yetkilendirilmiş resmi muayene merkezi.', color: 'text-primary' },
        { icon: 'Gauge', title: 'Periyodik Kontroller', description: 'Tanker ve basınçlı kapların periyodik sızdırmazlık ve basınç testleri.', color: 'text-blue-600' },
        { icon: 'Wrench', title: 'Teknik Servis', description: 'Muayene sonrası gerekli görülen teknik düzeltmeler ve standartlara uyum çalışmaları.', color: 'text-slate-900' },
        { icon: 'FileText', title: 'Belgelendirme', description: 'T9 Belgesi, Sızdırmazlık Belgesi ve diğer tüm gerekli sertifikalandırma işlemleri.', color: 'text-primary' },
    ],
    operations: {
        badge: 'HİZMET KAPSAMI',
        title: 'Muayene Merkezinde Yapılan İşlemler',
        items: [
            { number: '1', title: 'ADR Uygunluk / Taşıt Uygunluk İncelemeleri', description: 'Araçların ADR standartlarına uygunluk denetimleri ve belgelendirme süreçleri.' },
            { number: '2', title: 'Basınçsız Tankların Muayeneleri', subItems: ['2a - Akaryakıt Tankerleri', '2b - Kimyasal Tanklar'] },
            { number: '3', title: 'Basınçlı Tankların Muayeneleri', subItems: ['3a - Kimyasal Tanklar'], description: 'Basınçlı kapların periyodik teknik kontrolleri.' },
        ],
    },
    operationAlertText: '2a, 2b ve 3a Tankları ADR koşullarına uygun olarak üretilmiş araçların Periyodik Muayenesi, İstisnai Muayenesi ve Ara muayenesi tarafımızca konusunda uzman personelimiz tarafında TSE TMT Uzmanları eşliğinde yapılmaktadır.',
    adrGuide: { badge: 'ADR MEVZUAT REHBERİ', title: 'ADR\'li Tankerlerde Muayene Takvimi' },
    technicalSupport: {
        heading: 'Uzman Kadromuzla Yanınızdayız',
        description: 'Firmamız, tehlikeli madde taşıyan eski araç üst yapıların belgelendirmeleri hakkındaki yönergeler kapsamında tüm işlemleri uzman mühendis kadromuzla titizlikle yürütmektedir.',
        scopeLabel: 'Hizmet Kapsamı',
        scopeContent: 'ADR, T9, Taşıt Uygunluk ve Tank Muayeneleri'
    },
    requiredDocsBadge: 'EVRAK LİSTESİ',
    requiredDocsTitle: 'Muayene İçin Gerekli Belgeler ve Evraklar',
};

const services = [
    { _type: 'service', title: 'ADR Periyodik Muayene', shortDescription: 'Tankerlerin ADR standartlarında periyodik teknik kontrolleri.', icon: 'ShieldCheck', color: 'bg-primary', features: ['Sızdırmazlık Testi', 'Basınç Testi', 'Donanım Kontrolü'] },
    { _type: 'service', title: 'Hacimsel Kalibrasyon', shortDescription: 'Tank kapasitelerinin hassas ölçümü ve sertifikalandırılması.', icon: 'Gauge', color: 'bg-slate-900', features: ['Optik Kalibrasyon', 'Lazer Ölçüm', 'Hassas Tablolama'] },
    { _type: 'service', title: 'T9 Belgesi', shortDescription: 'Tehlikeli madde taşıyan araçlar için teknik uygunluk belgesi.', icon: 'FileText', color: 'bg-primary', features: ['TSE Onayı', 'Teknik Çizim Kontrolü', 'Donanım Uygunluğu'] },
    { _type: 'service', title: 'Sızdırmazlık Testi', shortDescription: 'Tank ve tesisatların sızdırmazlık kontrolleri.', icon: 'Droplets', color: 'bg-slate-900', features: ['Basınçlı Test', 'Vakum Testi', 'Sızıntı Tespiti'] },
    { _type: 'service', title: 'Ara Muayene', shortDescription: 'Periyodik muayeneler arasındaki teknik kontroller.', icon: 'ClipboardCheck', color: 'bg-primary', features: ['Görsel Kontrol', 'Sızıntı Kontrolü', 'Emniyet Valfi Testi'] },
    { _type: 'service', title: 'İstisnai Muayene', shortDescription: 'Kaza veya tadilat sonrası yapılan kapsamlı kontroller.', icon: 'ShieldAlert', color: 'bg-slate-900', features: ['Hasar Tespiti', 'Onarım Kontrolü', 'Yeniden Belgelendirme'] },
];

const regulations = [
    {
        _type: 'regulation',
        title: 'Genel Muayene Belgeleri',
        category: 'documents_general',
        order: 1,
        content: [
            { itemTitle: 'Trafik Tescil Belgesi (Ruhsat)', isCritical: true },
            { itemTitle: 'Önceki Muayene Raporları', isCritical: false },
            { itemTitle: 'Tank Üretim Belgesi / Sertifikası', isCritical: true },
            { itemTitle: 'Yetki Belgesi Fotokopisi', isCritical: false },
        ]
    },
    {
        _type: 'regulation',
        title: 'ADR Muayene Takvimi',
        category: 'adr_schedule',
        order: 2,
        content: [
            { itemTitle: 'Ara Muayene', itemDescription: 'Her 2.5 yılda bir (± 3 ay) yapılması zorunludur.' },
            { itemTitle: 'Periyodik Muayene', itemDescription: 'Her 5 yılda bir yapılması zorunludur.' },
            { itemTitle: 'İstisnai Muayene', itemDescription: 'Kaza, tadilat veya 1 yıldan fazla süreyle kullanım dışı kalma durumunda yapılır.' },
        ]
    }
];

async function seed() {
    const token = process.argv[2];
    if (!token) {
        console.error('Error: Please provide a Sanity API Token with write access as an argument.');
        process.exit(1);
    }

    try {
        console.log('Starting seed process...');

        // Create singletons
        await client.createOrReplace(siteSettings);
        console.log('✓ Site Settings created');

        await client.createOrReplace(homepage);
        console.log('✓ Homepage created');

        await client.createOrReplace(corporatePage);
        console.log('✓ Corporate Page created');

        await client.createOrReplace(inspectionPage);
        console.log('✓ Inspection Page created');

        // Create services
        for (const service of services) {
            await client.create(service);
            console.log(`✓ Service created: ${service.title}`);
        }

        // Create regulations
        for (const reg of regulations) {
            await client.create(reg);
            console.log(`✓ Regulation created: ${reg.title}`);
        }

        console.log('\nSeed process completed successfully! All hardcoded data is now in Sanity.');
    } catch (err) {
        console.error('Seed failed:', err.message);
    }
}

seed();
