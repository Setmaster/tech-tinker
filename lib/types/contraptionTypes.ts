export type ContraptionProps = {
    id: number;
    title: string;
    image: File | string;
    summary: string;
    instructions: string;
    creator: string;
    slug: string;
    views: number;
    commentsAmount: number;
};
    
export type ContraptionPropsArray={
    contraptions: ContraptionProps[];
}

export type ContraptionFormProps = {
    title: string;
    summary: string;
    instructions: string;
    name: string;
    email: string;
    image: File | null;
};

export type ContraptionFormSerializableProps = {
    title: string;
    summary: string;
    instructions: string;
    name: string;
    email: string;
    image: null;
};