// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "547892148809498634",
        serverId: "224308865427046402",
        token: process.env.token1,
        selfDeaf: true,
        autoReconnect: {
            enabled: true,
            delay: 25, // ثواني
            maxRetries: 10,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
