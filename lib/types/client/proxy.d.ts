export declare function registerClient({ logMessages, logWarnings }: {
    logMessages?: boolean;
    logWarnings?: boolean;
}): void;
export declare function call<RESULT>(method: string, ...params: any[]): Promise<RESULT>;
