// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1439550396908437645",
        serverId: "224308865427046402",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 25, // ثواني
            maxRetries: 10,
        },
        presence: {
            status: "idle",
        },
        selfMute: false,
    },
];
