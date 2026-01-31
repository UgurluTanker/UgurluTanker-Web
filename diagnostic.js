const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'yqtlvz9c',
    dataset: 'production',
    apiVersion: '2024-01-31',
    useCdn: false,
});

async function diagnostic() {
    const datasets = ['production', 'development'];
    for (const ds of datasets) {
        const dsClient = createClient({
            projectId: 'yqtlvz9c',
            dataset: ds,
            apiVersion: '2024-01-31',
            useCdn: false,
        });
        try {
            const types = await dsClient.fetch('*[]._type');
            const counts = {};
            types.forEach(t => {
                counts[t] = (counts[t] || 0) + 1;
            });
            console.log(`Dataset: ${ds}`);
            console.log(JSON.stringify(counts, null, 2));
        } catch (err) {
            console.log(`Dataset ${ds} not found or error: ${err.message}`);
        }
    }
}

diagnostic();
