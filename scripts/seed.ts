import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yqtlvz9c',
    dataset: 'production',
    apiVersion: '2024-01-31',
    token: process.env.SANITY_WRITE_TOKEN || process.argv[2],
    useCdn: false,
});

const key = () => Math.random().toString(36).substring(2, 11);

const singletons = [
    {
        _id: 'siteSettings',
        _type: 'siteSettings',
        companyName: 'UĞURLU TANKER SINAİ GAZLAR İNŞ.TUR.TİC.SAN.LTD.ŞTİ',
        versionNote: 'ANA YEDEK - FINAL POLISH - V5',
        address: 'Sanayi Mh. İzmit San. Sit.13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ',
        phone1: '(0262) 335 04 15',
        phone2: '(0262) 335 06 85',
        mobile: '+90 538 774 57 41',
        fax: '(0262) 335 06 85',
        email: 'ugurlutanker@hotmail.com.tr',
        taxInfo: 'Tepecik V.D: 886 025 6288',
        facebookUrl: 'https://facebook.com/ugurlutanker',
        instagramUrl: 'https://instagram.com/ugurlutanker',
        aboutUs: [
            {
                _key: key(),
                _type: 'block',
                children: [
                    {
                        _key: key(),
                        _type: 'span',
                        text: "Kurulduğu 1977 yılından 2015 yılına kadar tanker üretimini aralıksız sürdüren şirketimiz, 2015 yılında yeniden yapılanarak güvenirliliğinden, işi zamanında teslim etme prensibinden, kalitesinden taviz vermeden tanker üretimini sürdürmüştür.",
                        marks: []
                    }
                ],
                markDefs: [],
                style: 'normal',
            },
        ],
        history: [],
        socialLinks: [],
    },
    {
        _id: 'homepage',
        _type: 'homepage',
        heroTitle: 'Güvenle Taşıyın, Standartlara Uyun.',
        heroSubtitle: "Kocaeli'nin öncü tanker muayene ve sertifikalandırma merkezi olarak, ADR standartlarında uzman kadromuzla yanınızdayız.",
        heroSlides: [
            {
                _key: key(),
                title: 'Güvenle Taşıyın, Standartlara Uyun.',
                subtitle: "Uğurlu Tanker, ADR muayene ve sertifikalandırmada güvenilir çözüm ortağınız.",
            }
        ],
        stats: [
            { _key: key(), label: 'Düzenlenen Belge', value: '10.000+' },
            { _key: key(), label: 'Müşteri Memnuniyeti', value: '%100' },
            { _key: key(), label: 'Deneyim', value: '45+ Yıl' },
            { _key: key(), label: 'Uzman Personel', value: '10+' },
        ],
        quickActions: [
            { _key: key(), title: 'Muayene Randevusu', link: '/iletisim', icon: 'Calendar' },
            { _key: key(), title: 'Fiyat Listesi', link: '/fiyat-listesi', icon: 'FileText' },
        ],
        featuredServices: [
            { _type: 'reference', _ref: 'service-adr-t9', _key: key() },
            { _type: 'reference', _ref: 'service-periyodik-muayene', _key: key() },
            { _type: 'reference', _ref: 'service-sizdirmazlik', _key: key() },
            { _type: 'reference', _ref: 'service-basinc-testi', _key: key() },
        ]
    },
    {
        _id: 'inspectionPage',
        _type: 'inspectionPage',
        heroBadge: 'TEKNİK MÜKEMMELİYET',
        heroTitle: 'Muayene & Servis',
        heroSubtitle: 'Güvenli taşımacılık için uluslararası standartlarda denetim ve teknik destek sağlıyoruz.',
        whyChooseUs: {
            title: 'Neden Muayene ve Servis Almalısınız?',
            description: 'Tehlikeli madde taşıyan tankerlerin hem yasal mevzuatlara uyumu hem de can/mal güvenliği için düzenli muayene ve teknik servis hizmeti alması zorunludur.',
            points: [
                'ADR Standartlarına %100 Uyum',
                'Modern Test Ekipmanları',
                'Uzman Mühendis Kadrosu',
                'Hızlı Raporlama ve Belgelendirme'
            ]
        },
        requiredDocsSection: {
            badge: 'BELGELER',
            title: 'Muayene İçin Gerekli Belgeler ve Evraklar',
            content: [
                {
                    _key: key(),
                    _type: 'block',
                    children: [
                        {
                            _key: key(),
                            _type: 'span',
                            text: "1. Araç Tescil Belgesi (Ruhsat)\n2. Önceki Muayene Raporları\n3. Tanker Üretici Sertifikası\n4. ADR Uygunluk Belgesi (Varsa)\n5. Şirket Bilgileri ve Vergi Levhası",
                            marks: []
                        }
                    ],
                    markDefs: [],
                    style: 'normal',
                },
            ]
        },
        features: [
            { _key: key(), icon: 'Shield', title: 'TSE Onaylı', description: 'TSE tarafından yetkilendirilmiş muayene merkezi.', color: 'text-primary' }
        ],
        operations: {
            badge: 'İŞLEMLER',
            title: 'Neler Yapıyoruz?',
            items: []
        }
    },
    {
        _id: 'priceListPage',
        _type: 'priceListPage',
        badge: '2026 YILI MUAYENE ÜCRETLERİ',
        headerTitle: 'Fiyat Listesi',
        description: '01/01/2026 – 31/12/2026 tarihleri arasında uygulanacak araç ve tank muayene ücretleri, T.C. Ulaştırma ve Altyapı Bakanlığı genelgesine uygun olarak belirlenmiştir.',
    },
    {
        _id: 'corporatePage',
        _type: 'corporatePage',
        heroTitle: 'Hakkımızda',
        heroSubtitle: '1977den günümüze, tanker sektöründe güvenin adı.',
        mainHistoryTitle: 'Tarihçemiz',
        missionTitle: 'MİSYONUMUZ',
        missionContent: "Uluslararası standartlara ve TSE ADR standartlarına uygun ekipman ve yönetim sistemlerini kullanarak müşteri memnuniyetini ön planda tutmak.",
        visionTitle: 'VİZYONUMUZ',
        visionContent: "Nitelikli insan kaynaklarımızla sektörde öncü kuruluş olma rolünü devam ettirmek.",
        coreValues: [],
        mainHistoryContent: [],
    }
];

const services = [
    {
        _id: 'service-periyodik-muayene',
        _type: 'service',
        title: 'Periyodik Muayene',
        slug: { _type: 'slug', current: 'periyodik-muayene' },
        iconName: 'Shield',
        shortDescription: 'Tehlikeli madde taşıyan araçların periyodik teknik denetimleri.',
        description: [
            {
                _key: key(),
                _type: 'block',
                children: [{ _key: key(), _type: 'span', text: 'Uluslararası standartlarda tanker muayene hizmeti.', marks: [] }],
                markDefs: [],
                style: 'normal',
            }
        ],
        features: ['TSE Standartları', 'Hızlı Onay', 'Uzman Kadro'],
        requiredDocuments: ['Ruhsat', 'Eski Raporlar'],
    },
    {
        _id: 'service-sizdirmazlik',
        _type: 'service',
        title: 'Sızdırmazlık Testi',
        slug: { _type: 'slug', current: 'sizdirmazlik-testi' },
        iconName: 'Droplets',
        shortDescription: 'Tank ve tesisat sızdırmazlığının yüksek basınçlı test ekipmanları ile kontrolü.',
        description: [
            {
                _key: key(),
                _type: 'block',
                children: [{ _key: key(), _type: 'span', text: 'Basınçlı ve vakumlu sızdırmazlık kontrolleri.', marks: [] }],
                markDefs: [],
                style: 'normal',
            }
        ],
        features: ['Yüksek Basınç Testi', 'Sertifikalı Raporlama'],
        requiredDocuments: ['Tank Sertifikası'],
    },
    {
        _id: 'service-adr-t9',
        _type: 'service',
        title: 'ADR / T9 Taşıt Uygunluk',
        slug: { _type: 'slug', current: 'adr-t9-uygunluk' },
        iconName: 'Shield',
        shortDescription: 'Tehlikeli madde taşıyan araçların ADR standartlarına uygunluk belgelendirmesi.',
        description: [
            {
                _key: key(),
                _type: 'block',
                children: [{ _key: key(), _type: 'span', text: 'T9 belgesi ve ADR taşıt uygunluk kontrolleri.', marks: [] }],
                markDefs: [],
                style: 'normal',
            }
        ],
        features: ['TSE Yetkili', 'Uluslararası Geçerlilik'],
        requiredDocuments: ['Ruhsat', 'Teknik Çizimler'],
    },
    {
        _id: 'service-basinc-testi',
        _type: 'service',
        title: 'Basınç Testi',
        slug: { _type: 'slug', current: 'basinc-testi' },
        iconName: 'Activity',
        shortDescription: 'Tankların mukavemet ve sızdırmazlığının yüksek basınç altında testi.',
        description: [
            {
                _key: key(),
                _type: 'block',
                children: [{ _key: key(), _type: 'span', text: 'Hidrolik basınç testleri ve raporlama.', marks: [] }],
                markDefs: [],
                style: 'normal',
            }
        ],
        features: ['Güvenli Test Ortamı', 'Hassas Ölçüm'],
        requiredDocuments: ['Önceki Test Raporları'],
    }
];

async function sync() {
    const token = process.env.SANITY_WRITE_TOKEN || process.argv[2];
    if (!token) {
        console.error('Error: Please provide a Sanity API Token.');
        process.exit(1);
    }

    try {
        console.log('--- STARTING CLEAN SYNC V5 ---\n');

        // Sync Services FIRST (so references from singletons work)
        for (const service of services) {
            console.log(`Syncing service: ${service.title}...`);
            await client.createOrReplace(service as any);
            await client.createOrReplace({ ...service, _id: `drafts.${service._id}` } as any);
            console.log(`✓ ${service.title} synced.`);
        }

        // Sync Singletons SECOND
        for (const doc of singletons) {
            console.log(`Syncing singleton: ${doc._id}...`);
            await client.createOrReplace(doc as any);
            await client.createOrReplace({ ...doc, _id: `drafts.${doc._id}` } as any);
            console.log(`✓ ${doc._id} synced.`);
        }

        console.log('\n--- MASTER SYNC V5 COMPLETED ---');
    } catch (err: any) {
        console.error('\nSync failed:', err.message);
    }
}

sync();
