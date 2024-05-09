export default interface gameMetaData {
    id: number;
    displayId?: number;
    iconLargeUrl?: string;
    iconUrl?: string;
    name?: string;
    path?: string;
    docs?: string;
    electron?: string;
    compliance?: string;
    launcher?: number;
    games?: number[];
    mainVariant?: number;
    subVariants?: number[];
    mainMode?: string;
    extraModes?: {
        [key: string]: string;
    };
    variant?: string;
    endOfLife?: string;
}