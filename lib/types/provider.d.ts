import { DApi } from './api';
export declare function registerContentProxy({ logMessages, logWarnings }: {
    logMessages?: boolean;
    logWarnings?: boolean;
}): void;
export declare function registerProvider({ provider, logMessages }: {
    provider: DApi;
    logMessages: boolean;
}): void;
