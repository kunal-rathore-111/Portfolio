
// server/readsController.js
export const getReadsData = async (req, res) => {
    try {
        const BACKEND_URL = "https://2nd-mind-backend.vercel.app/app/v2";
        const SHARE_HASH = "837601c51b76284a22c91d086a5252a2d42f56df5b40f80e6fcae86e42cf4717";

        const response = await fetch(`${BACKEND_URL}/user/public/${SHARE_HASH}`);

        if (!response.ok) {
            throw new Error(`External API responded with ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('[Reads Error]', error.message);
        res.status(500).json({ error: 'Failed to fetch Reads data' });
    }
};
