
// server/readsController.js
export const getReadsData = async (req, res) => {
    try {
        const BACKEND_URL = "https://2nd-mind-backend.vercel.app/app/v2";
        const SHARE_HASH = "651fc01baab9917efc55573a00b5d0f94cdaf54a6c436f64c596d63b15f865d1";

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
