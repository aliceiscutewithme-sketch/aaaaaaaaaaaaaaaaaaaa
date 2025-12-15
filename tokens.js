// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1446774779150340119",
        serverId: "1446602120441757930",
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
        selfMute: true,
    },
];
