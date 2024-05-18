export type ContraptionProps = {
    id: number;
    title: string;
    image: string;
    description: string;
    creator: string;
    slug: string;
    views: number;
    commentsAmount: number;
};
    
export type ContraptionPropsArray={
    contraptions: ContraptionProps[];
}