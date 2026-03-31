export interface project {
    id: number;
    title: string;
    description: string;
    url_github: string;
    url_demo: string;
    list_stack: string[];
    scopes: string[];
    category: string;
    fiturs: string[];
    images: {
        label: string;
        url: string;
    }[];
    year: number;
    show: boolean;
}