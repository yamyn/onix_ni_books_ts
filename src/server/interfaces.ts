export interface IEvents {
    onError: (
        error: NodeJS.ErrnoException,
        port: number | string | boolean,
    ) => void;
    onListening: () => void;
}
