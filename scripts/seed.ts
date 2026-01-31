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
        versionNote: 'ANA YEDEK - TERTEMİZ KURULUM - V4',
        address: 'Sanayi Mh. İzmit San. Sit.13. Cadde 318. Blok No: 116 İZMİT / KOCAELİ',
        phone1: '(0262) 335 04 15',
        phone2: '(0262) 335 06 85',
        mobile: '+90 538 774 57 41',
        fax: '(0262) 335 06 85',
        email: 'ugurlutanker@hotmail.com.tr',
        taxInfo: 'Tepecik V.D: 886 025 6288',
        mission: "Uluslararası standartlara ve TSE ADR standartlarına uygun ekipman ve yönetim sistemlerini kullanarak müşteri memnuniyetini ön planda tutmak.",
        vision: "Nitelikli insan kaynaklarımızla sektörde öncü kuruluş olma rolünü devam ettirmek.",
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
            { _key: key(), label: 'Yıllık Muayene', value: '1500+' },
            { _key: key(), label: 'Müşteri Memnuniyeti', value: '%100' },
            { _key: key(), label: 'Deneyim', value: '45+ Yıl' },
        ],
        quickActions: [
            { _key: key(), title: 'Muayene Randevusu', link: '/iletisim', icon: 'Calendar' },
            { _key: key(), title: 'Fiyat Listesi', link: '/fiyat-listesi', icon: 'FileText' },
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

async function sync() {
    const token = process.env.SANITY_WRITE_TOKEN || process.argv[2];
    if (!token) {
        console.error('Error: Please provide a Sanity API Token.');
        process.exit(1);
    }

    try {
        console.log('--- STARTING ATOMIC SYNC V4 (CLEANING DRAFTS) ---\n');

        for (const doc of singletons) {
            console.log(`Syncing singleton: ${doc._id}...`);

            // Overwrite published version
            await client.createOrReplace(doc as any);

            // Atomic overwrite of draft version to ensure Studio UI updates immediately
            const draftDoc = { ...doc, _id: `drafts.${doc._id}` };
            await client.createOrReplace(draftDoc as any);

            console.log(`✓ ${doc._id} (Published & Draft) synced.`);
        }

        console.log('\n--- ATOMIC SYNC V4 COMPLETED ---');
    } catch (err: any) {
        console.error('\nSync failed:', err.message);
    }
}

sync();
