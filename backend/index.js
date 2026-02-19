const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────────────────────────────────────────
// RAPIDAUTH BACKEND (SIMULATED)
// In a full production deployment, this layer would:
// 1. Generate and verify OTPs via Twilio/AWS SES.
// 2. Fetch on-chain claim data from the Algorand Indexer for the Registry.
// 3. Store non-sensitive metadata (e.g. university logs, student profiles).
// ─────────────────────────────────────────────────────────────────────────────

app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        network: 'Algorand Testnet',
        timestamp: new Date().toISOString()
    });
});

// Endpoint for the Identity Hub to fetch verified claims
app.get('/api/claims/:studentId', (req, res) => {
    // Simulated lookup logic
    res.json({ message: "Lookup redirected to Algorand Testnet AVM" });
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`🚀 RapidAuth Backend running on port ${PORT}`);
});
