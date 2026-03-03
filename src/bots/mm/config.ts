// MarketMaker configuration

export interface MarketMakerConfig {
    readonly symbol: string; // e.g., "BTC" or "ETH"
    readonly spreadBps: number; // Spread from fair price (bps)
    readonly takeProfitBps: number; // Spread in close mode (bps)
    readonly orderSizeUsd: number; // Order size in USD
    readonly closeThresholdUsd: number; // Trigger close mode when position >= this
    readonly warmupSeconds: number; // Seconds to warm up before quoting
    readonly updateThrottleMs: number; // Min interval between quote updates
    readonly orderSyncIntervalMs: number; // Interval for syncing orders from API
    readonly statusIntervalMs: number; // Interval for status display
    readonly fairPriceWindowMs: number; // Window for fair price calculation
    readonly positionSyncIntervalMs: number; // Interval for position sync
}

// Default configuration values (symbol must be provided)
export const DEFAULT_CONFIG: Omit<MarketMakerConfig, "symbol"> = {
    spreadBps: 4,
    takeProfitBps: 4,
    orderSizeUsd: 1000,
    closeThresholdUsd: 10,
    warmupSeconds: 5,
    updateThrottleMs: 250,
    orderSyncIntervalMs: 2000,
    statusIntervalMs: 1000,
    fairPriceWindowMs: 60 * 1000, // 60 seconds
    positionSyncIntervalMs: 1000,
};
