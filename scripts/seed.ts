import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'yqtlvz9c',
    dataset: 'production',
    apiVersion: '2024-01-31',
    token: process.env.SANITY_WRITE_TOKEN || process.argv[2], // Use env var or CLI arg
    useCdn: false,
});

const data = [
    // SERVICES
    { _type: 'service', title: 'ADR / T9 Taşıt Uygunluk', slug: { current: 'adr-t9' }, description: 'Tehlikeli madde taşıyan araçların yıllık T9 uygunluk kontrolleri.', iconName: 'Shield' },
    { _type: 'service', title: 'Tanker Ara Muayenesi', slug: { current: 'ara-muayene' }, description: '3. yılda yapılan korozyon ve gövde kontrolü.', iconName: 'Truck' },
    { _type: 'service', title: 'Periyodik Muayene', slug: { current: 'periyodik-muayene' }, description: '5. yılda yapılan basınç ve sızdırmazlık testleri.', iconName: 'Activity' },
    { _type: 'service', title: 'Sızdırmazlık Testi', slug: { current: 'sizdirmazlik' }, description: 'Tank ve tesisat kaçak kontrolü.', iconName: 'Droplet' },
    // PRICES
    { _type: 'priceItem', serviceName: 'T9 Yıllık Muayene', category: 'ADR Tanker', price: '5.000 TL' },
    { _type: 'priceItem', serviceName: 'Ara Muayene (3. Yıl)', category: 'Akaryakıt', price: '7.500 TL' },
    { _type: 'priceItem', serviceName: 'Sızdırmazlık Testi', category: 'Genel', price: '3.000 TL' }
];

async function seed() {
    const token = process.env.SANITY_WRITE_TOKEN || process.argv[2];
    if (!token) {
        console.error('Error: Please provide a Sanity API Token with write access (env SANITY_WRITE_TOKEN or as arg).');
        process.exit(1);
    }

    try {
        console.log('Fetching existing documents to avoid duplicates...');
        const existingServices = await client.fetch<any[]>('*[_type == "service"].title');
        const existingPrices = await client.fetch<any[]>('*[_type == "priceItem"].serviceName');

        console.log('Starting seed process...');

        for (const doc of data as any[]) {
            if (doc._type === 'service') {
                if (existingServices.includes(doc.title)) {
                    console.log(`Skipping existing service: ${doc.title}`);
                    continue;
                }
                await client.create(doc);
                console.log(`✓ Service created: ${doc.title}`);
            } else if (doc._type === 'priceItem') {
                if (existingPrices.includes(doc.serviceName)) {
                    console.log(`Skipping existing price item: ${doc.serviceName}`);
                    continue;
                }
                await client.create(doc);
                console.log(`✓ Price item created: ${doc.serviceName}`);
            }
        }

        console.log('\nSeed process completed successfully!');
    } catch (err: any) {
        console.error('Seed failed:', err.message);
    }
}

seed();
