export type ContraptionProps = {
    id: number;
    title: string;
    image: string;
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